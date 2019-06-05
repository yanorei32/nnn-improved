// ==UserScript==
// @name        NIM Series 04 - Result Table - Deadline Mode
// @description 期日ベースの表に変更するもの。
// @author      sjcl
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   https://github.com/sjcl
// @website     https://github.com/sjcl
// @include     https://secure.nnn.ed.jp/mypage/result/pc/list/index?studentTermId=*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/04_ResultTable_DeadlineMode.user.js
// @version     1.3
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    const clearDeadLineMode = () => {
        $('#change_to_dead_line_mode, #change_to_default_mode, #result_table').toggle();
        $('.deadline_result_table').remove();
    };

    const deadLineMode = () => {
        $('#result_table')
            .clone()
            .addClass('deadline_result_table')
            .hide()
            .insertAfter('#result_table');

        const colSpan = {};
        const progressCount = [];

        $('.deadline_result_table .report_progress').each((i, e) => {
            const progress = (e = $(e)).text();

            if (!progress.match(/\d+%/)) return;

            e.append($(
                '<div>',
                {
                    style: `width: ${progress}; background-color: ${parseInt(progress) == 100 ? 'yellowgreen' : 'greenyellow'}; line-height: 75%;`,
                    html: '&nbsp;',
                },
            ));
        });

        $('.deadline_result_table .subject_1st_row').each((i, row) => {
            const rowSpan = {};
            progressCount[i] = [];

            $(row).children('.report_limit_date').each((j, date) => {
                const key = $.trim($(date).text());
                if (key !== "-")
                    if (rowSpan[key]) {
                        rowSpan[key] = rowSpan[key]+1;
                        $(date).remove();
                    } else
                        rowSpan[key] = 1;
            });
            for (const key in rowSpan) {
                if (!colSpan[key])
                    colSpan[key] = 0;

                colSpan[key] = Math.max(colSpan[key], rowSpan[key]);

                for (let k = 0; k < rowSpan[key]; k++)
                    progressCount[i].push(rowSpan[key]);
            }
        });

        let allSpan = 0;
        for (const key in colSpan)
            allSpan += colSpan[key];

        const getSpan = (start, end) => {
            let span = 0;
            let startSpan = 0;
            for (const key in colSpan) {
                span += colSpan[key];
                if (key == start)
                    startSpan = span;
                if (key == end)
                    return span - startSpan;
            }
        }

        $('.deadline_result_table .subject_1st_row').each((i, row1) => {
            let prev;
            let spans = [];
            $(row1).children('.report_limit_date').each((j, date) => {
                const text = $.trim($(date).text());
                const span = getSpan(prev, text);
                date.colSpan = span;
                prev = text;

                for (let k = 0; k < span; k++)
                    spans.push(span);
            });

            let j = 0;
            for (let k = 0; k < progressCount[i].length; k++) {
                const span = spans[j]/progressCount[i][k];
                $(`.deadline_result_table .subject_2st_row:eq(${i*2}) > .report_progress:eq(${k})`)[0].colSpan = span;
                $(`.deadline_result_table .subject_2st_row:eq(${i*2+1}) > .report_progress:eq(${k})`)[0].colSpan = span;
                j += span;
            }

            // trim
            if (progressCount[i].length != 0)
                for (let l = 0; l < 15-progressCount[i].length-(15-allSpan); l++) {
                    $(`.deadline_result_table .subject_1st_row:eq(${i}) > .report_limit_date`).last().remove();
                    $(`.deadline_result_table .subject_2st_row:eq(${i*2}) > .report_progress`).last().remove();
                    $(`.deadline_result_table .subject_2st_row:eq(${i*2+1}) > .report_progress`).last().remove();
                }
        });

        $('.deadline_result_table .report_limit_date:nth-child(even)').css({
            'background-color': 'rgb(219, 245, 254)',
        });
        $('.deadline_result_table .report_limit_date:nth-child(odd)').css({
            'background-color': 'rgb(219, 254, 240)',
        });
        $('.deadline_result_table .report_progress').css({
            'background-color': 'rgb(249, 255, 250)',
        });

        $('#change_to_dead_line_mode, #change_to_default_mode, #result_table').toggle();
        $('.deadline_result_table').show();
    }

        $('<button>', {
            text: 'dead line mode',
            id: 'change_to_dead_line_mode',
        }).on(
            'click', deadLineMode
        ).insertBefore('#result_table');

        $('<button>', {
            text: 'default mode',
            id: 'change_to_default_mode',
            style: 'display:none',
        }).on(
            'click', clearDeadLineMode
        ).insertBefore('#result_table');
})();


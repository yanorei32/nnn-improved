// ==UserScript==
// @name        NIM Series 04 - Result Table - Deadline Mode
// @description 期日が分かりやすい表を作ってみた！
// @author      yanorei32
// @supportURL  https://twitter.com/yanorei32
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://secure.nnn.ed.jp/mypage/result/pc/list/index?studentTermId=*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/04_ResultTable_DeadlineMode.user.js
// @version     0.1
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    let clearDeadLineMode = () => {
        // clear
        $('#change_to_dead_line_mode').prop('style', 'display:inline');
        $('#change_to_default_mode').prop('style', 'display:none');

        $('#result_table_deadline_mode_css').remove();
        $('.report_progress, .report_limit_date').each((i, e) => e.colSpan = 0);

    };

    let deadLineMode = () => {
        $('#change_to_dead_line_mode').prop('style', 'display:none');
        $('#change_to_default_mode').prop('style', 'display:inline');

        // write CSS
        $('<style>', {
            html:
                'tr.subject_1st_row > td.report_limit_date:nth-child(even) {' +
                    'background-color : rgb(219, 245, 254);' +
                '}' +
                'tr.subject_1st_row > td.report_limit_date:nth-child(odd) {' +
                    'background-color : rgb(219, 254, 240);' +
                '}' +
                'tr.subject_2st_row > td.report_progress {' +
                    'background-color : rgb(249, 255, 250);' +
                '}',
            id: 'result_table_deadline_mode_css',
        }).appendTo('body');

        let removeSpacesByDateString = (dateStr) => {
            return dateStr.replace(/[^0-9\/]/g, '');
        };

        let dateToUnixTime = (dateStr) => {
            return new Date('2000/' + removeSpacesByDateString(dateStr)).getTime()
        };


        let subjectCount = $('.subject_1st_row').length;
        let reportCount = $('.header_report_number').length;
        let subjectShiftCount = new Array(subjectCount).fill(0);

        for(let reportIndex = 0; reportIndex < reportCount; ++reportIndex){
            let tdlist = [];

            for(let subjectIndex = 0; subjectIndex < subjectCount; ++subjectIndex){
                tdlist.push(
                    $(`tr.subject_1st_row:nth-child(${(subjectIndex+1)*3}) > td.report_limit_date:nth-child(${4 + reportIndex - subjectShiftCount[subjectIndex]})`)[0]
                )
            }

            let minUnixTimeOfReportLimitDate = Math.min.apply(
                null,
                tdlist.map((td) => dateToUnixTime(td.innerHTML))
            );

            Object.keys(tdlist).map((v) => parseInt(v)).forEach((subjectIndex) => {
                let tdOfDeadline = tdlist[subjectIndex];
                if(minUnixTimeOfReportLimitDate == dateToUnixTime(tdOfDeadline.innerHTML)) return;

                tdOfDeadline.colSpan++;
                // progress
                $(`tr.subject_2st_row:nth-child(${(subjectIndex+1)*3+1}) > td.report_progress:nth-child(${2 + reportIndex - subjectShiftCount[subjectIndex]})`)[0].colSpan++;
                // point
                $(`tr.subject_2st_row:nth-child(${(subjectIndex+1)*3+2}) > td.report_progress:nth-child(${2 + reportIndex - subjectShiftCount[subjectIndex]})`)[0].colSpan++;

                subjectShiftCount[subjectIndex]++;

            });
        }
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


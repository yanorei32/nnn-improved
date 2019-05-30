// ==UserScript==
// @name        NIM Series 06 - Movie TotalTime Viewer
// @description 単元の動画再生時間を表示するもの。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/courses/*/chapters/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/06_MovieTotalTimeViewer.user.js
// @version     1.4
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    const progressLabel = $('.u-progress-labels > .secondary')[0];

    const strPadding = (str, len, paddingChar = '0') => {
        str += '';

        while(str.length < len)
            str = paddingChar + str;

        return str;
    };

    const txt2sec = (t) => {
        const splitedText = t.split(':');

        return parseInt(splitedText[0]) * 60 + parseInt(splitedText[1]);
    };

    const sec2txt = (s) => {
        return `${strPadding(Math.floor(s / 60), 2)}:${strPadding(s % 60, 2)}`;
    };

    let totalMovieTime = 0;
    $('.movie .movie-length').each((i, e) => {
        totalMovieTime += txt2sec(e.textContent);
    });

    const update = () => {
        if(progressLabel.innerHTML.indexOf(' - ') != -1) return;

        let playedMovieTime = 0;

        $('.movie.good .movie-length').each((i, e) => {
            playedMovieTime += txt2sec(e.textContent);
        });

        let autoPlayableTime = 0;

        $('.u-list li:not(.good)').each((i, e) => {
            if($(e).hasClass('movie'))
               autoPlayableTime += txt2sec(e.getElementsByClassName('movie-length')[0].textContent);
            else
                return false;
        });

        const timeText = `${sec2txt(playedMovieTime)} / ${sec2txt(totalMovieTime)} (${sec2txt(autoPlayableTime)} / ${sec2txt(totalMovieTime-playedMovieTime)})`;

        progressLabel.innerHTML = `${timeText} - ${progressLabel.innerHTML}`;

    };

    update();
    setInterval(update, 1000);

})();


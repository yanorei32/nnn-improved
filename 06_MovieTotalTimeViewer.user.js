// ==UserScript==
// @name        NIM Series 06 - Movie TotalTime Viewer
// @description 単元にかかる時間を推測可能にするやつ。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/courses/*/chapters/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/06_MovieTotalTimeViewer.user.js
// @version     0.2
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    let progressLabel = $('.u-progress-labels > .secondary')[0];

    let strPadding = (str, len, paddingChar = '0') => {
        str += '';

        while(str.length < len)
            str = paddingChar + str;

        return str;
    };

    let txt2sec = (t) => {
        let splitedText = t.split(':');

        return parseInt(splitedText[0]) * 60 + parseInt(splitedText[1]);
    };

    let sec2txt = (s) => {
        return `${strPadding(Math.floor(s / 60), 2)}:${strPadding(s % 60, 2)}`;
    };

    let totalMovieTime = 0;
    $('.movie > a > .movie-length').each((i, e) => {
        totalMovieTime += txt2sec(e.textContent);
    });

    let update = () => {
        if(progressLabel.innerHTML.indexOf(' - ') != -1) return;

        let playedMovieTime = 0;

        $('.movie.good > a > .movie-length').each((i, e) => {
            playedMovieTime += txt2sec(e.textContent);
        });

        let timeText = `${sec2txt(playedMovieTime)} / ${sec2txt(totalMovieTime)} (${sec2txt(totalMovieTime-playedMovieTime)})`;

        progressLabel.innerHTML = timeText + ' - ' + progressLabel.innerHTML;

    };

    update();
    setInterval(update, 1000);

})();


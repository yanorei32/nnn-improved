// ==UserScript==
// @name        NIM Series 05 - Auto MoviePlay
// @description 自動的に次の動画を再生し始めるもの。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/courses/*/chapters/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/05_AutoMoviePlay.user.js
// @version     2.2
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function(){
    'use strict';
    const WITH_REPORT_DETECTED_ALERT = false;

    let intervalId = undefined;
    let autoPlayButton, stopAutoPlayButton;

    const statusApplyToElementDisplay = (isAutoPlaying) => {
        stopAutoPlayButton.css('display', isAutoPlaying ? 'inline' : 'none');
        autoPlayButton.css('display', isAutoPlaying ? 'none' : 'inline');
    };

    autoPlayButton = $(
        '<button>',
        { text: 'Auto Play' }
    ).on(
        'click', () => {
            statusApplyToElementDisplay(true);

            intervalId = setInterval(() => {
                const element = $('.u-list > li:not(.good) > a:not(.is-gate-closed):not(.is-selected)');

                if(element.length !== 0){
                    element.find('.typo-list-item-title').eq(0).click();

                    if(!element.parent().hasClass('movie') && WITH_REPORT_DETECTED_ALERT)
                        alert('Report detected.');
                }

            }, 500);
        }
    ).insertBefore('.u-progress');

    stopAutoPlayButton = $(
        '<button>', {
            text: 'Stop Auto Play',
            css: { 'display': 'none', 'color': 'red' },
        }
    ).on(
        'click', () => {
            statusApplyToElementDisplay(false);
            clearInterval(intervalId);
        }
    ).insertBefore('.u-progress');

})();


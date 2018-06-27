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
// @version     1.3
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(() => {
    'use strict';
    let intervalId = undefined;
    let autoPlayButton, stopAutoPlayButton;

    let statusApplyToElementDisplay = (isAutoPlaying) => {
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
                let element = $('.u-list > li:not(.good) > a:not(.is-gate-closed):not(.is-selected)');

                if(element.length !== 0)
                    element.find('.typo-list-item-title').eq(0).click();

            }, 500);
        }, this
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
        }, this
    ).insertBefore('.u-progress');

})();


// ==UserScript==
// @name        NIM Series 02 - Jump to /home
// @description ログイン時に左上のロゴクリックしただけでホームページに飛ばされるのっておかしくないですか？  :thinking:
// @author      yanorei32
// @supportURL  https://twitter.com/yanorei32
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/*
// @exclude     https://www.nnn.ed.nico/contents/*
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/02_Jump2Home.user.js
// @version     0.1
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.ny-ci > a').href = '/home';
})();


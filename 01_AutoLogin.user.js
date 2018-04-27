// ==UserScript==
// @name        NIM Series 01 - Auto Login
// @description ホームページに飛んだ時にクリックが必要っておかしくないですか？  :thinking:
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/01_AutoLogin.user.js
// @version     0.2
// @grant       none
// @license     MIT License
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    location.href = '/oauth_login';
})();


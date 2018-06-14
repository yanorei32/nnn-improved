// ==UserScript==
// @name        NIM Series 01 - Auto Login
// @description 登録を促すホームページを表示しないもの。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/01_AutoLogin.user.js
// @version     1.0
// @grant       none
// @license     MIT License
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    location.href = '/oauth_login';
})();


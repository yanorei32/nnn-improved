// ==UserScript==
// @name        NIM Series 03 - Reverse Proxy Issue Fixer
// @description リバースプロキシおかしくない？ :thinking:
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://secure.nnn.ed.jp/mypage
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/03_ReverseProxyIssueFixer.user.js
// @version     0.2
// @grant       none
// @license     MIT License
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    location.href = '/mypage/';
})();


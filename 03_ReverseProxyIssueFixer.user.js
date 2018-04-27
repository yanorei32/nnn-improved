// ==UserScript==
// @name		NYIM Series 03 - Reverse Proxy Issue Fixer
// @description	リバースプロキシおかしくない？ :thinking:
// @author		yanorei32
// @supportURL  https://twitter.com/yanorei32
// @namespace	http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include		https://secure.nnn.ed.jp/mypage
// @version		0.1
// @grant		none
// @license		MIT License
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    location.href = '/mypage/';
})();


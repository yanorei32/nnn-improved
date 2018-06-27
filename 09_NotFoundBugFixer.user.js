// ==UserScript==
// @name        NIM Series 09 - Not found Bug Fixer
// @description NotFoundしたときのテンプレートのバグを修正するもの
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/*
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/09_NotFoundBugFixer.user.js
// @version     0.1
// @grant       none
// @license     MIT License
// @run-at      document-idle
// ==/UserScript==

(() => {
    'use strict';

    let loginButton = document.querySelector('.login > div.u-button-wrapper > a.u-button');

    if(loginButton === null)
        return;

    if(loginButton.href.match(/notfound/) === null)
        return;

    let encodedURI = encodeURIComponent(location.href);
    let loginBaseURI = 'https://www.nnn.ed.nico/oauth_login?next_url=';

    loginButton.href = loginBaseURI + encodedURI;

})();


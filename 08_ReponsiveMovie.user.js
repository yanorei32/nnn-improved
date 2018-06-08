// ==UserScript==
// @name        NIM Series 08 - Responsive Movie
// @description CSSにわか勢がレスポンシブデザイン（？）やってみた
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://ww3.tokyo-shoseki.co.jp/api/dwango/requestContents.php?*
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/08_ReponsiveMovie.user.js
// @version     0.1
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';

    let videoContents = document.getElementById("video01");

    if(videoContents !== null){
        videoContents.width = undefined;
        videoContents.height = undefined;
        videoContents.style.width = "100%";
        videoContents.style.height = "calc(100vh)";

        let bodyTag = document.getElementsByTagName("body")[0];
        bodyTag.style.overflow = "hidden";
        bodyTag.style.margin = "0";
    }

})();


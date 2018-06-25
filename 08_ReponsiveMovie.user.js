// ==UserScript==
// @name        NIM Series 08 - Responsive Movie
// @description Windowサイズ変更時に動画サイズがある程度追従するもの
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://ww3.tokyo-shoseki.co.jp/api/dwango/requestContents.php?*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/08_ReponsiveMovie.user.js
// @version     0.3
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(() => {
    'use strict';

    let videoContents = $('#video01');

    if(videoContents !== null){
        videoContents.height(undefined).width(undefined).css({
            'width':    '100%',
            'height':   '100vh',
        });

        $('<style>', {
            html: 'body { background-color: gray; overflow: hidden; margin: 0; }'
        }).appendTo('body');

    }
})();


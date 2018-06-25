// ==UserScript==
// @name        NIM Series 07 - Inline Numerical formula Image
// @description 数式の画像毎に1行消費されないようにするもの。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/contents/courses/*/chapters/*/*/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/07_InlineNumericalformula.user.js
// @version     1.1
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

(() => {
    'use strict';

    $('<style>', {
        html:   'img { display: inline-block; margin-left: 5px; margin-right:5px; }',
        id:     'inlineNumericalFormulaPlugin',
    }).appendTo('body');

})();


// ==UserScript==
// @name        NIM Series 02 - Jump to /home
// @description N予備校のアイコンクリック時に登録を促す画面に遷移しないもの。
// @author      yanorei32
// @supportURL  https://github.com/Yanorei32/nnn-improved/issues
// @namespace   http://tyan0.dip.jp/~rei/
// @website     http://tyan0.dip.jp/~rei/
// @include     https://www.nnn.ed.nico/*
// @exclude     https://www.nnn.ed.nico/contents/*
// @updateURL   https://github.com/Yanorei32/nnn-improved/raw/master/02_Jump2Home.user.js
// @version     1.2
// @grant       none
// @license     MIT License
// @run-at      document-end
// ==/UserScript==

document.querySelector('.ny-ci > a').href = '/home';


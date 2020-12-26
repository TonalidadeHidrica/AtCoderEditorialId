// ==UserScript==
// @name AtCoderEditorialId
// @namespace https://github.com/TonalidadeHidrica/
// @version 0.1
// @description Show Editorial ID on AtCoder
// @match https://atcoder.jp/contests/*/editorial/*
// ==/UserScript==

(() => {
	const [, id] = /\/contests\/[^/]+\/editorial\/([0-9]+)$/.exec(location.href);
	const e = document.querySelector("h2");
	e.textContent = `[${id}] ${e.textContent}`;
})();

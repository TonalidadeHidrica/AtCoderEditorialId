// ==UserScript==
// @name AtCoderEditorialId
// @namespace https://github.com/TonalidadeHidrica/
// @version 0.1
// @description Show Editorial ID on AtCoder
// @match https://atcoder.jp/contests/*/editorial
// @match https://atcoder.jp/contests/*/editorial/*
// ==/UserScript==

(() => {
	console.log("hoge");
	const getId = href => /\/contests\/[^/]+\/editorial\/([0-9]+)$/.exec(href)?.[1];
	const insert = (p, c, id) => p.insertBefore(document.createTextNode(`[${id}] `), c);
	const id = getId(location.href);
	if (id) {
		const e = document.querySelector("h2");
		insert(e, e.firstChild, id);
	} else {
		for (const li of document.querySelectorAll("h3 + ul > li")) {
			const a = li.getElementsByTagName("a")[0];
			const id = getId(a.href);
			if(id) insert(li, a, id);
		}
	}
})();

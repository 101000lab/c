function requireCss(css) {
    var link = document.createElement('link');
    with( link ) {
	href = css;
	type = 'text/css';
	rel = 'stylesheet';
    }
    var head = document.getElementsByTagName('head');
    head.item(0).appendChild(link);
}
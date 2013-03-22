(function(document) {

	// if viewing markdown files through viewvc 'diff' views, do not try to format !
	// it is not possible to detect the document's content-type, so make a guess via the url.
	// I know it's ugly, but unless Chromium folks add a "content-type" access via extension Api,
	// we have no better solution.
	if (document.location.href.match(/(viewvc|diff_format|pathrev)/) != null) {
		return;
	}
  // Onload, take the DOM of the page, get the markdown formatted text out and
	// apply the converter.
	var html = (new Showdown.converter()).makeHtml(document.body.innerText);
	document.body.innerHTML = html;

	// Also inject a reference to the default stylesheet to make things look nicer.
	var ss = document.createElement('link');
	ss.rel = 'stylesheet';
	ss.href = chrome.extension.getURL('markdown.css');
	document.head.appendChild(ss);

}(document));

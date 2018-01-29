chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		let videoRoot = document.querySelector('div.reddit-video-player-root');
		let url = videoRoot.getAttribute('data-seek-preview-url');

		videoRoot.parentElement.appendChild(createShareButton(url));
	}
	}, 10);
});

function createShareButton(url) {
	let image = document.createElement('img');
	image.src = iconURL = chrome.extension.getURL("/icons/icon16.png");

	let button = document.createElement('a');
	button.classList.add('reddit-smart-share-download-link');
	button.href=url;
	button.target='_blank';
	// button.innerText = 'Share';

	button.appendChild(image);

	return button;
}
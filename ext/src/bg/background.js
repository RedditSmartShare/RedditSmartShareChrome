// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    console.log('HELLLLLOOOO!!!!!');
    sendResponse();
  });



  /**

<div id="video-7tkrju" class="portrait reddit-video-player-root" data-seek-preview-url="https://v.redd.it/0wtzbmbprtc01/DASH_600_K"

   */
new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'add HTML %s', 'addHtml', '<div id="extensionPoint" style="position:fixed;top:128px;left:32px;font-size:32px"><span>Hey! This HTML was inserted by a Scratch Extension!</span></div>']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
  
	ext.addHtml = function(content) {
		document.body.innerHTML = document.body.innerHTML + content;
	}
	
	ScratchExtensions.register('JGames101 | HTML', descriptor, ext);
})();

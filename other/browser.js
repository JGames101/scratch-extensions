new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open window with URL %s', 'window', 'jgames101.github.io']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
  
	ext.window = function(url) {
		window.open(url);
	}
	
	ScratchExtensions.register('JGames101 | Browser', descriptor, ext);
})();

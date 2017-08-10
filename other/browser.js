new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open tab %s', 'window', 'https://jgames101.github.io'],
			[' ', 'refresh page', 'refresh'],
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
	};
	ext.refresh = function() {
		if (confirm('This Scratch Project is trying to refresh. Allow?'))
		location.reload();
	};
	
	ScratchExtensions.register('JGames101 | Browser', descriptor, ext);
})();

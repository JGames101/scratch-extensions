new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'console.log %s', 'logger', 'hello world']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
  
	ext.logger = function(logthing) {
		console.log(logthing);
	}
	
	ScratchExtensions.register('JGames101 | Debugging', descriptor, ext);
})();

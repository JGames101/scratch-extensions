new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'console.log %s', 'logger', 'hello world']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
  
	ext.logger = function(logthing) {
		console.log(logthing)
	};

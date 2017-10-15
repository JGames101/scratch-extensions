new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'set style %s to %s', 'setStyleSimple', 'width', '100%'],
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.setStyleSimple = function(styleType, value) {
		var element = localStorage.getItem('element');
		eval('element.style.' + styleType + ' = "' + value + '";');
		console.log('changed ' + styleType + ' to ' + value + ' for ' + element);
	};
	
	ScratchExtensions.register('DOM | CSS', descriptor, ext);
})();

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', 'Installed?', 'installed'],
			['', 'select element by id %s', 'selectId', 'scratch'],
			['', 'select %n th element by class %s', 'selectClass', '0', 'scratch'],
			[' ', 'set style %s to %s', 'setStyleSimple', 'width', '100%'],
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
  
	ext.installed = function() {
		return true;
	};
	
	ext.selectId = function(elementId) {
		var element = document.getElementById(elementId);
	};
	
	ext.selectClass = function(elementNumber, elementClass) {
		var element = document.getElementsByClassName(elementClass)[elementNumber-1];
	};
	
	ext.setStyleSimple = function(styleType, value) {
		var element = localStorage.getItem('element');
		eval('element.style.' + styleType + ' = "' + value + '";');
		console.log('changed ' + styleType + ' to ' + value + ' for ' + element);
	};
	
	ScratchExtensions.register('DOM | JGames101', descriptor, ext);
})();

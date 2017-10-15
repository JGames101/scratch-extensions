new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', 'Installed?', 'installed'],
			['', 'select element by id %s', 'selectId', 'scratch'],
			['', 'select %n th element by class %s', 'selectClass', '0', 'scratch'],
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
		localStorage.setItem('element', element);
	};
	
	ext.selectClass = function(elementNumber, elementClass) {
		var element = document.getElementsByClassName(elementClass)[elementNumber-1];
		localStorage.setItem('element', element);
	};
	
	ScratchExtensions.register('DOM | JGames101', descriptor, ext);
	install();
})();
function install() {
  ScratchExtensions.loadExternalJS('https://jgames101.github.io/scratch-extensions/DOM/css.js');
}

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', 'Installed?', 'installed']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
  
	ext.installed = function(logthing) {
		return true;
	}
	
	ScratchExtensions.register('DOM | JGames101', descriptor, ext);
	install();
})();
function install() {
  ScratchExtensions.loadExternalJS('');
}

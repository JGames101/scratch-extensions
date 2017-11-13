new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%s', 'readLocalStorage', 'highscore'],
			[' ', 'set %s to %s', 'setLocalStorage', 'highscore', '12'],
		],
		url : 'https://jgames101.github.io/scratch-extensions/localstorage.html'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
    if (window.localStorage) {
		  return {status:2, msg:'LocalStorage supported by your browser!'};
    } else {
      return {status:0, msg:'LocalStorage is not supported by your browser. Try recent versions of Chrome or Firefox.'};
    };
	};
  
	ext.readLocalStorage = function(name) {
		return localStorage.getItem(name);
	};
	
	ext.setLocalStorage = function(name, value) {
		return localStorage.setItem(name, value);
	};

	ScratchExtensions.register('LocalStorage Variables', descriptor, ext);
})();

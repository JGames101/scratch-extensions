new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', 'localStorage Supported?', 'lcheckLocalStoage'],
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
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
  
	ext.checkLocalStorage = function() {
		if (window.localStorage) {
		  return true;
    } else {
      return false;
    };
	};

	ScratchExtensions.register('LocalStorage Variables | James M', descriptor, ext);
})();

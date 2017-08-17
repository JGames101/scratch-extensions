new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open tab %s', 'window', 'https://jgames101.github.io'],
			[' ', 'refresh page', 'refresh'],
			[' ', 'history: pushstate %s url %s title %s', 'pushstate', 'home', '?page=home', 'Home'],
			['h', 'popstate %s' 'popstate', 'home'],
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
	ext.pushstate = function(name, location, ttl) {
		history.pushState(name, ttl, location);
	};
	ext.popstate = function(name) {
		window.addEventListener('popstate', e => {
			if (e.state.name = name)
				return true;
			else {
				return false;
			}:
		};
	};
	
	ScratchExtensions.register('JGames101 | Browser', descriptor, ext);
})();

new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', "%s 's follower count", 'followCount', 'JGames101']
		],
		url : 'https://jgames101.github.io/scratch-extensions/'
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
    loadAngular();
	};
  
	ext.followCount = function(username) {
		
	}
	
	ScratchExtensions.register('JGames101 | Scratch API', descriptor, ext);
})();
function loadJS(url) {
   var script = document.createElement('script');
   script.src = 'https://' + url;
   script.type = 'text/javascript';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
}
function loadAngular() {
   var script = document.createElement('script');
   script.src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js';
   script.type = 'text/javascript';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
}

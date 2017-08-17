new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'name', 'function']
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
	
  if (confirm("This Project is attempting to load JGames101's AngularJS extension. Allow?"))
	ScratchExtensions.register('JGames101 | AngularJS', descriptor, ext);
  	loadAngular();
})();
function loadAngular() {
   var script = document.createElement('script');
   script.src = 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js';
   script.type = 'text/javascript';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(script);
   document.body.innerHTML = '<div class="angContainer" style="position:absolute;width:100%;height:100%;">' + document.body.innerHTML + '</div>';
}

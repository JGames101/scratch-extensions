(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.ask_block = function(string) {
        return prompt(string);
    };
	
    ext.alert_block = function(string) {
        alert(string);
    };
    ext.confirm_block = function(string) {
        return confirm(string);
    };
    ext.installed = function(string) {
        return true;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
        	['r', 'ask %s', 'ask_block', "What's your name?"],
		[' ', 'alert %s', 'alert_block', "hello world!"],
		['b', 'confirm %s', 'confirm_block', ""],
		['b', 'installed?', 'installed', ""],
        ]
    };

    // Register the extension
    ScratchExtensions.register('JGames101 Extension Test 2', descriptor, ext);
})({});

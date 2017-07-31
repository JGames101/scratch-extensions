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

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['r', 'ask %s', 'ask_block', "What's your name?"],
			[' ', 'alert %s', 'alert_block', "hello world!"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('JGames101 Extension Test 2', descriptor, ext);
})({});

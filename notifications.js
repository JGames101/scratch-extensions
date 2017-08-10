(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.notify = function() {
        // Code that gets executed when the block is run
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'notify title %s content %s image %s', 'notify', 'Hello World!', "I'm a notification", 'https://jgames101.github.io/scratch-extensions/cat.png'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Desktop Notifications', descriptor, ext);
})({});

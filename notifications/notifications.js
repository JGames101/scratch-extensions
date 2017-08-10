(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
	Notification.requestPermission();
	if (Notification.permission !== "granted")
	return {status: 0, msg: 'Notifications Not Allowed'};
	else {
        return {status: 2, msg: 'Notification Permission Granted'};
    }};

    ext.notify = function(name, content, image) {
         if (Notification.permission !== "granted")
            Notification.requestPermission();
         else {
            var notification = new Notification(name, {
            icon: image,
            body: content,
	    title: name
    })}};
    ext.permission = function() {
	if (Notification.permission !== "granted")
		return false;
	else {
		return true;
    }}

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'notify title %s content %s image %s', 'notify', 'Hello World!', "I'm a notification", 'https://jgames101.github.io/scratch-extensions/cat.png'],
	    ['b', 'notifications permitted?', 'permission']
        ],
	url: 'https://jgames101.github.io/scratch-extensions/notifications.html'
    };

    // Register the extension
    ScratchExtensions.register('Desktop Notifications', descriptor, ext);
})({});

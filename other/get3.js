var GetExt = function () {
};

/**
 * @return {object} This extension's metadata.
 */
GetExt.prototype.getInfo = function () {
    return {
        id: 'someBlocks',

        name: 'notifications',

        blocks: [
            {
                opcode: 'notification-show',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'Notify title [TITLE] content [CONTENT] image [IMAGE]',
                func: 'showNotification',
                arguments: {
                    TITLE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello World!'
                    },
                    CONTENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'I\'m a notification.'
                    },
                    IMAGE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'https://jgames101.github.io/scratch-extensions/cat.png'
                    }
                }
            },
            {
                opcode: 'get-url',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'get [URL]',
                func: 'getURL',
                blockAllThreads: true,
                arguments: {
                    URL: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'https://jgames101.github.io/scratch-extensions/notifications/fetch.txt'
                    }
                }
            }
        ],
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */

GetExt.prototype.getURL = function (args) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                return xmlhttp.responseText;
            } else {
                return xmlhttp.status;
            }
        }
    };
    xmlhttp.open("GET", args.URL, true);
    xmlhttp.send();
};

Scratch.extensions.register(new GetExt());

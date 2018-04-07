var GetExt = function () {
};

/**
 * @return {object} This extension's metadata.
 */
GetExt.prototype.getInfo = function () {
    return {
        id: 'someBlocks',

        name: 'Get',

        blocks: [
            {
                opcode: 'get-url',
                blockType: Scratch.BlockType.REPORTER,
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

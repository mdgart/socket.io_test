var jam = {
    "packages": [
        {
            "name": "socket.io",
            "location": "jam/socket.io",
            "main": "socket.io.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "socket.io",
            "location": "jam/socket.io",
            "main": "socket.io.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "socket.io",
            "location": "jam/socket.io",
            "main": "socket.io.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}
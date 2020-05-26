var viewport = document.documentElement;
var width = viewport.clientWidth < 1024 ? 1024 : viewport.clientWidth;
var fontSize = width / 1920 * 16;
viewport.style.fontSize = fontSize + "px";

window.onresize = function() {
    var viewport = document.documentElement;
    var width = viewport.clientWidth < 1024 ? 1024 : viewport.clientWidth;
    var fontSize = width / 1920 * 16;
    viewport.style.fontSize = fontSize + "px";
}
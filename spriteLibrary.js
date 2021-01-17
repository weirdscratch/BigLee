function Sprite(elementType, relativeCoords, pxCoords, percentCoords, parent, style, inner, size) {
    let elem = document.createElement(elementType);
    elem.style = style;
    elem.style.width = size[0] + "px";
    elem.style.height = size[1] + "px";
    elem.style.position = "absolute";
    elem.style.transform = "translate(" + (relativeCoords[0] - 50) + "%," + (relativeCoords[1] + 50) + "%)";
    elem.style.left = "calc(" + pxCoords[0] + "px + " + (50 + percentCoords[0]) + "%)";
    elem.style.bottom = "calc(" + pxCoords[1] + "px + " + (50 + percentCoords[1]) + "%)";
    elem.innerHTML = inner;
    parent.append(elem);
    this.elem = elem;
    this.getPos = function () {
        return [relativeCoords, pxCoords, percentCoords];
    };
    this.setRelativeCoords = function (pos) {
        this.elem.style.transform = "translate(" + (pos[0] + 50) + "%," + (pos[1] + 50) + "%)"
    };
    this.setPxCoords = function (pos) {
        this.elem.style.left = "calc(" + pos[0] + "px + " + (50 + percentCoords[0]) + "%)";
        this.elem.style.bottom = "calc(" + pos[1] + "px + " + (50 + percentCoords[1]) + "%)";
    };
    this.setPercentCoords = function (pos) {
        this.elem.style.left = "calc(" + pxCoords[0] + "px + " + (50 + pos[0]) + "%)";
        this.elem.style.bottom = "calc(" + pxCoords[1] + "px + " + (50 + pos[1]) + "%)";
    };
    this.localVars = {};
}
//LI class constructor
function List(obj) {
    this.listObject = obj;
    this.parent = obj.parentNode;
}

//Li class methods
List.prototype.getListObject = function() {
        return this.listObject;
};

List.prototype.init = function () {
    var listObj = this.getListObject(),
        $self = this;

    listObj.setAttribute("draggable", "true");

    listObj.ondragstart = function (ev) {
        $self.drag(ev);
    };
};

List.prototype.drag = function(ev) {
    ev.dataTransfer.setData('object', this.getListObject().outerHTML);

    console.log("DRAG", this.getListObject().outerHTML); /////////////
};

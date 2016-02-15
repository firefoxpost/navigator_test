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
    this.getListObject().setAttribute("id", "drag_object");
    ev.dataTransfer.setData('object', this.getListObject().id);
};

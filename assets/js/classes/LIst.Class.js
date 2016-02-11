function List(obj) {
    this.listObject = obj;
    this.parent = obj.parentNode;
}

List.prototype = {
    constructor: List,

    getListObject: function() {
        return this.listObject;
    },

    getParent: function() {
        return this.parent;
    },

    init: function () {
        var listObj = this.getListObject(),
            $self = this;

        listObj.setAttribute("draggable", "true");

        listObj.ondragstart = function (ev) {
            $self.drag(ev);
        };
    },

    drag: function(ev) {
        ev.dataTransfer.setData("text", ev.target.classList);
    }
};
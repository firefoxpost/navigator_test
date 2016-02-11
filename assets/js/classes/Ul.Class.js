function Ul(obj) {
    this.ulObject = obj;
}

Ul.prototype = {
    constructor: Ul,

    getUlObject: function() {
        return this.ulObject;
    },

    allowDrop:  function (ev) {
        ev.preventDefault();
    },

    drop:   function(ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");

        ev.target.appendChild(document.getElementsByClassName(data)[0]);
    }
};
//UL class constructor
function Ul(obj) {
    this.ulObject = obj;
}

//UL class methods
Ul.prototype.getUlObject =  function() {
    return this.ulObject;
};

Ul.prototype.allowDrop =  function (ev) {
    ev.preventDefault();
};

Ul.prototype.drop = function(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData('object');

    console.log("DROP", data);  /////////////////////

    this.addLi(data);
};

Ul.prototype.addLi = function(data) {
    this.getUlObject().innerHTML += data;
};

Ul.prototype.init = function() {
    var obj = this.getUlObject(),
        $self = this;

    obj.ondragover = function(ev) {
        $self.allowDrop(ev);
    };

    obj.ondrop = function(ev) {
        $self.drop(ev);
    };
};

//UL class constructor
function UlBordered(obj) {
    this.ulObject = obj;
}

//UL inheritance
UlBordered.prototype = Object.create(Ul.prototype);

UlBordered.prototype.constructor = UlBordered;

//UL class methods
UlBordered.prototype.addLi = function (data) {
    var $self = this;

    $self.getUlObject().classList.add('b-list__bordered');

    setTimeout(function() {
        $self.getUlObject().classList.remove('b-list__bordered');
    }, 200);

    $self.getUlObject().innerHTML += data;
};

//UL class constructor
function UlBackgrounded(obj) {
    this.ulObject = obj;
}

//UL inheritance
UlBackgrounded.prototype = Object.create(Ul.prototype);

UlBackgrounded.prototype.constructor = UlBackgrounded;

//UL class methods
UlBackgrounded.prototype.addLi = function (data) {
    var $self = this;

    $self.getUlObject().classList.add('b-list__bordered_with-background');

    setTimeout(function() {
        $self.getUlObject().classList.remove('b-list__bordered_with-background');
    }, 200);

    $self.getUlObject().innerHTML += data;
};
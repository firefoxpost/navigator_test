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

    this.addLi(ev, data);
    this.showBehavior();
};

Ul.prototype.addLi = function(ev, data) {
    if(this.getUlObject().childElementCount === 0) {
        ev.target.appendChild(document.getElementById(data));
    }else {
        ev.target.parentElement.appendChild(document.getElementById(data));
    }

    document.getElementById(data).removeAttribute('id');
};

Ul.prototype.showBehavior = function() {
    return true;
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
UlBordered.prototype.showBehavior = function () {
    var $self = this;

    $self.getUlObject().classList.add('b-list__bordered');

    setTimeout(function() {
        $self.getUlObject().classList.remove('b-list__bordered');
    }, 200);
};

//UL class constructor
function UlBackgrounded(obj) {
    this.ulObject = obj;
}

//UL inheritance
UlBackgrounded.prototype = Object.create(Ul.prototype);

UlBackgrounded.prototype.constructor = UlBackgrounded;

//UL class methods
UlBackgrounded.prototype.showBehavior = function () {
    var $self = this;

    $self.getUlObject().classList.add('b-list__bordered_with-background');

    setTimeout(function() {
        $self.getUlObject().classList.remove('b-list__bordered_with-background');
    }, 200);
};

UlBackgrounded.prototype.addLi = function(ev, data) {
    var movedObj = document.getElementById(data),
        cloneObj = movedObj.cloneNode(true);

    cloneObj.removeAttribute('id');

    if(this.getUlObject().childElementCount === 0) {
        ev.target.appendChild(movedObj);
    }else {
        ev.target.parentElement.appendChild(movedObj);
    }

    document.getElementsByClassName('b-list')[0].appendChild(cloneObj);
    document.getElementById(data).removeAttribute('id');

    new List(cloneObj).init();
};
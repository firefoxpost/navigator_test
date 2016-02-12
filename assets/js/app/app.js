
var ulLen = document.getElementsByClassName('b-list').length,
    liLen = document.getElementsByClassName('b-list-item').length,
    liArr = [];

for(var i=ulLen; i--;) {
    var ulItem = document.getElementsByClassName('b-list')[i],
        ulObj;


    if (i===2) {
        ulObj = new UlBackgrounded(ulItem);
    }
    else if (i===1) {
        ulObj = new UlBordered(ulItem);
    }
    else {
        ulObj = new Ul(ulItem);
    }
    ulObj.init();
}

for(var j=liLen; j--;) {
    var liItem = document.getElementsByClassName('b-list-item')[j],
        liObj = new List(liItem);

    liObj.init();

    liArr.push(liObj);
}
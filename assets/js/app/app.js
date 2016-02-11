(function(){

    var ulLen = document.getElementsByClassName('b-list').length,
        liLen = document.getElementsByClassName('b-list-item').length,
        ulArr = [];

    for(var i=0; i<ulLen; i++) {
        var ulItem = document.getElementsByClassName('b-list')[i],
            ulObj = new Ul(ulItem);

        ulArr.push(ulObj);
    }

    for(var j=0; j<liLen; j++) {
        var liItem = document.getElementsByClassName('b-list-item')[j],
            liObj = new List(liItem);

        liObj.init();
    }

}());
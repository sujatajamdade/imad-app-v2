console.log('Loaded!');
var element = document.getElementById('main-text');
//element.innerHTML='new value';

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
     img.style.marginLeft=marginLeft+'px';
}
/*function moveLeft(){
    marginRight=marginRight+5;
    img.style.marginRight=marginRight+'px';
}*/
img.onclick=function(){
    //img.style.marginLeft='100px';
    //var interval=setInterval(moveRight,100);
   img.style.marginRight='100px';
    var interval=setInterval(moveLeft,50);
//};
};

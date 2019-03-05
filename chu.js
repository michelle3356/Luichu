var x = 1;

setInterval(function() {
  var swtichImgList = document.getElementsByClassName('switch-img');
  for (var i = 0; i < swtichImgList.length; i++) {
    swtichImgList[i].classList.remove('si-'+x);
  }

  x++;
  if(x === 4){
    x = 1;
  }
  for (var i = 0; i < swtichImgList.length; i++) {
    swtichImgList[i].classList.add('si-'+x);
  }

}, 2000);

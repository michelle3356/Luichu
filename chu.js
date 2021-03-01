var scroll = new SmoothScroll('a[href*="#"]');

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


function loadJSON(file) {

  // 抓資料 fetch(url) ← 通常是 json格式的資料
  // 一定會接兩個then，第一個代表接收資料的方式
  // 第二個是接收資料後的行為。(function(會回傳一個參數，可命名為response。){})
  fetch('./' + file + '.json').then(function(res) {
    return res.json();
  }).then(function(res) {

    var row = document.querySelector('#content .row');
    row.innerHTML = '';

    for (var i = 0; i < res.Items.length; i++) {
      // console.log(res.Items[i].ProductName);
      // console.log(res.Items[i].SellingPrice);
      // console.log('https://cdn.pazzo.com.tw' + res.Items[i].CoverImage[0]);

      // 利用JS產生出一個<div>標籤 (DOM:Document object model)
      var div = document.createElement("div");

      // <div>hahaha</div>
      div.setAttribute('class', 'col-md-3 col-sm-6');
      div.innerHTML = '<div class="product">' +
        '<img width="100%" src="' + res.Items[i].CoverImage[0] + '" alt="">' +
        '<div class="name">' + res.Items[i].ProductName + '</div>' +
        '<div class="price">' + res.Items[i].SellingPrice + '</div>' +
      '</div>';
      row.appendChild(div);

    }

  });

}

// 會抓取網址中問號後的內容，JS有內建URLSearchParams(會將網址搜尋的字串變成物件)
// 針對點擊的內容不同，改變網址，再透過網址去抓取JSON的資料
var params = new URLSearchParams(location.search);
var file = params.get('page');
loadJSON(file);

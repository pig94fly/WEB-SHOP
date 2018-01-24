$('#adminmenu').mouseover(function () {
  $('#adminmenudiv').css({'display':'block',});
});
$('#adminmenu').mouseleave(function () {
  $('#adminmenudiv').css({'display':'none',});
});
function showgoodsmanage() {
  $('#goodsmanage').css({'display':'block'});
  $('#usermanage').css({'display':'none'});
}
function showusermanage() {
  $('#goodsmanage').css({'display':'none'});
  $('#usermanage').css({'display':'block'});
}
function pageto(num) {
  page(num);
}
function page(num) {  if (num==1||num==null) {    pagecode = '<li class="disabled"><a href="#">&laquo;第一页</a></li>';    pagecode = pagecode+'<li class="disabled"><a href="#">1</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(2)" class="color-black">2</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(3)" class="color-black">3</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(4)" class="color-black">4</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(5)" class="color-black">5</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(last)">最后一页&raquo;</a></li>';  }
  if (num==2) {    pagecode = '<li><a href="javascript:pageto(1)" class="color-black">&laquo;第一页</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(1)" class="color-black">1</a></li>';    pagecode = pagecode+'<li class="disabled"><a href="javascript:pageto(2)" class="color-black">2</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(3)" class="color-black">3</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(4)" class="color-black">4</a></li>';   pagecode = pagecode+'<li><a href="javascript:pageto(5)" class="color-black">5</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(last)">最后一页&raquo;</a></li>';  }
  if (num==3) {    pagecode = '<li><a href="javascript:pageto(1)" class="color-black">&laquo;第一页</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(1)" class="color-black">1</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(2)" class="color-black">2</a></li>';    pagecode = pagecode+'<li class="disabled"><a href="javascript:pageto(3)" class="color-black">3</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(4)" class="color-black">4</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(5)" class="color-black">5</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(last)">最后一页&raquo;</a></li>';  }  if (num>3&&num<99) {    descnum2 = num-2;descnum1 = num-1;ascenum1 = num+1;ascenum2 = num+2;    pagecode = '<li><a href="javascript:pageto(1)" class="color-black">&laquo;第一页</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto('+descnum2+')" class="color-black">'+descnum2+'</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto('+descnum1+')" class="color-black">'+descnum1+'</a></li>';    pagecode = pagecode+'<li class="disabled"><a href="javascript:pageto('+num+')" class="color-black">'+num+'</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto('+ascenum1+')" class="color-black">'+ascenum1+'</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto('+ascenum2+')" class="color-black">'+ascenum2+'</a></li>';    pagecode = pagecode+'<li><a href="javascript:pageto(last)">最后一页&raquo;</a></li>';  }  $('.pagination').html(pagecode);}

function changeselectpx(width) {
  if (width<=980) {
    $('body').css({'font-size':'2em'});
    $('select').css({'max-width':'400px'});
    $('input').css({'max-width':'400px'});
  }
}

function changemanage(page) {
  switch (page) {
    case 'usermanage':
      $('#usermanage').addClass('active');$('#exchange').removeClass();$('#userrequest').removeClass();
      $('.pageusermanage').css({'display':'block',});$('.pageexchange').css({'display':'none'});$('.pageuserrequest').css({'display':'none'});
      pageinit('usermanage');
      break;
    case 'exchange':
      $('#exchange').addClass('active');$('#usermanage').removeClass();$('#userrequest').removeClass();
      $('.pageexchange').css({'display':'block',});$('.pageusermanage').css({'display':'none'});$('.pageuserrequest').css({'display':'none'});
      pageinit('pageexchange');
      break;
    case 'userrequest':
      $('#userrequest').addClass('active');$('#usermanage').removeClass();$('#exchange').removeClass();
      $('.pageuserrequest').css({'display':'block',});$('.pageusermanage').css({'display':'none'});$('.pageexchange').css({'display':'none'});
      pageinit('userrequest');
      break;
    default:
    break;
  }
}
function pageinit(pagename) {
  switch (pagename) {
    case 'usermanage':
      ajaxuserinfo('init');
      break;
    case 'exchange':

      break;
    case 'userrequest':

      break;
    default:

  }
}
function changegoodsnav(info) {
  switch (info) {
    case 'navcheckgoods':
      $('#navcheckgoods').addClass("active");$('#navaltergoods').removeClass();$('#navdropgoods').removeClass();$('#navgoodscomment').removeClass();$('#navgoodsclass').removeClass();
      break;
    case 'navaltergoods':
      $('#navaltergoods').addClass("active");$('#navcheckgoods').removeClass();$('#navdropgoods').removeClass();$('#navgoodscomment').removeClass();$('#navgoodsclass').removeClass();
      break;
    case "navdropgoods":
      $('#navdropgoods').addClass("active");$('#navaltergoods').removeClass();$('#navcheckgoods').removeClass();$('#navgoodscomment').removeClass();$('#navgoodsclass').removeClass();
      break;
    case 'navgoodscomment':
      $('#navgoodscomment').addClass("active");$('#navaltergoods').removeClass();$('#navcheckgoods').removeClass();$('#navdropgoods').removeClass();$('#navgoodsclass').removeClass();
      break;
    case "navgoodsclass":
      $('#navgoodsclass').addClass("active");$('#navcheckgoods').removeClass();$('#navaltergoods').removeClass();$('#navdropgoods').removeClass();$('#navgoodscomment').removeClass();
      break;
    default:
      break;
  }
}
// 分类信息拉取
function getclassinfo() {
  $.get('http://blog.com/ajax/get',{'get':'getclassinfo'},function (data) {
    $('#classselect').html('<option value=\'null\'>商品品类</option>');
    classinfocode = '';
    $.each(data,function (i,item) {
      if (item['pid']==0) {
        classinfocode = classinfocode+'<option value=\''+item['id']+'\'>'+item['name']+'</option>';
        classinfocode = classinfocode+getkid(data,item['id'],'——');
      }
    });
    $('#classselect').append(classinfocode);
  },'json');
}
function getkid(data,pid,precode) {
  pagecode = '';
  $.each(data,function (i,item) {
    if (item['pid']==pid) {
      pagecode = pagecode+'<option value=\''+item['id']+'\'>'+precode+item['name']+'</option>';
      pagecode = pagecode+getkid(data,item['id'],precode+'——');
    }
  });
  return pagecode;
}

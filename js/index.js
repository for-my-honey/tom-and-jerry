window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        speed:300,
        // width: 1300,
        grabCursor:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          type: 'custom',
          
          renderCustom: function(swiper,current, total){
          var paginationHtml = "";
          for(var i= 0; i< total; i++) {
         // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
         if (i === (current - 1)) {
          paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"><img src="./imgs/pagin_da51486.png" alt="#"></span>';
          }else{
          paginationHtml += '<span class="swiper-pagination-customs"><img src="./imgs/pagin-h_298f4cd.png" alt="#"></span>';
        }
     }
        return paginationHtml;
     }
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })        
}

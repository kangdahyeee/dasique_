$(function () {
    // ====================================== logo, btnTop 클릭시 최상단
    $(".logo, .btnTop").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

    // ====================================== 스크롤 500px 이상 내릴때 btnTop 나타남 
    $(window).scroll(() => {
        if ($(this).scrollTop() > 500) {
            $(".btnTop").fadeIn();
        } else {
            $(".btnTop").fadeOut();
        }
    });

    // ====================================== header menu 

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var headerHeight = 160; // 헤더 메뉴의 높이
        
        if (scroll >= headerHeight) {
            // 스크롤이 160px 이상인 경우 배경색을 추가
            $('.headerBar').addClass('scrolled');
        } else {
            // 스크롤이 160px 미만인 경우 배경색 제거
            $('.headerBar').removeClass('scrolled');
        }
    });

    // 풀메뉴
    $('nav>ul>li').mouseenter(function () {
        $('.submenu, .smenu_bar').stop().slideDown(100); // 부드럽게펼쳐줌
    });
    $('nav>ul>li, .smenu_bar').mouseleave(function () {
        $('.submenu,  .smenu_bar').stop().hide(); // 슬라이드되며숨겨짐
    });

    $('nav>ul>li').mouseenter(function () {
        if ($(window).scrollTop() <= 160) { // 스크롤이 160px 이하인 경우에만 실행
            $('.headerBar').addClass('scrolled');
        }
    });
    $('nav>ul>li, .smenu_bar').mouseleave(function () {
        if ($(window).scrollTop() <= 160) { // 스크롤이 160px 이하인 경우에만 실행
            $('.headerBar').removeClass('scrolled');
        }
    });

// ====================================== 신제품

$(".inner_new li").click(function () {
    let $this = $(this);
    let index = $this.index();
    $this.addClass("active");
    $this.siblings(".inner_new li.active").removeClass("active");

    let $wrap = $this.closest(".inner_new");
    let $current = $wrap.find("> .tabs > .tab.active");
    let $post = $wrap.find("> .tabs > .tab").eq(index);

    $current.removeClass("active");
    $post.addClass("active");

    $(".slider").slick("setPosition");
});


});

//toggle
function openNav(){
    document.getElementById("myNav").style.width = "50%";
}
// close
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}



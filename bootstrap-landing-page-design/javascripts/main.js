// 網頁的主程式寫在這裡
// .ad-toggle-btn click event
$(".ad-toggle-btn").click(function () {
    console.log('[.ad-toggle-btn被點擊了]');

});

// .navbar .nav-link click event
$(".navbar .nav-link").click(function () {
    console.log('[導覽列按鈕被點擊了]', this);
    //get the scrolling target for this anchor tag(this)
    var target = $(this).attr("href")
    console.log("[target]",target);
    //get the position of the target
    var position =$(target).offset().top
    console.log("[position]",position);
    //set animation time for scrolling
    var duration = 800;
    //run scrolling animation
    //.animate(JavaScriptObject{} , duration)
    $("html,body").animate({
        scrollTop: position
    },duration)
});


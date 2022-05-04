// 在這裡寫入你的JS邏輯
// comment on JavaScript
//alert("Hello")
//jQuery => $
jQuery("CSS_Selector")
jQuery(".title")
//jQuery("h1").text("我好醜")
//<h1></h1>

// Select class="navbar-toggler"
$(".navbar-toggler").click(function(){
    // change the class of navbar-list
    $(".navbar-list").toggleClass("active")
    $(".line").toggleClass("active")

})
/*
document.querySelector(".navbar-toggler").addEventListener("click",function()){
    document.querySelector(".navbar-list").classList.toggle("active")
    document.querySelector(".line").classList.toggle("active")
}*/
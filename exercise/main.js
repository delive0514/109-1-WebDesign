// TODO: Select #createTodoForm
$("#createTodoForm").submit(function (e) {
    // TODO: Prevent page reflash action when form is submitted
    e.preventDefault();
    // TODO: Get the value of #todoTitle
    var T ={
        title: $("#todoTitle").val(),
        text: $("#todoText").val()
    }
    // TODO: Get the value of #todoText

    // TODO: Append a new todo with title and text to #todoList
    // You could use $(TARGER).append()
    var a ='<li class="list-group-item">' +'<div><h1>'+ T.title + ":"  + T.text + '</h1></div>'+ '</li>'
    $(".list-group").append(a)
    // More info: https://api.jquery.com/append/

});
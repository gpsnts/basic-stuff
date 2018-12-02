$("#tasks").on("click", "li" ,function() {
    $(this).toggleClass("completed");
});

$("#tasks").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()});
    e.stopPropagation();
})

$("#new-task").keypress(function (e) { 
    if (e.which === 13) {
        $("#tasks").append(`<li><span><i class="fas fa-trash"></i></span> ${$("#new-task").val()}</li>`);
        $("#new-task").val("");
    };
});

$("#show-new-task").on("click", function () {
    $("#new-task").fadeToggle();
})


//Delete Completed ToDo
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    //alert("clicked");
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
});

//Check completed ToDo
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
}); 



//Add new ToDo
$("input[type='text']").keypress(function(event){
    if(event.which == 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").fadeIn(1000, function(){
            $(this).append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>"); 
        });
    }
});

//toggle add input
$('.fa-feather-alt').click(function(){
    $("input[type='text']").fadeToggle();
});

    
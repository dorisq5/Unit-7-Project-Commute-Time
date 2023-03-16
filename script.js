$("button").click(function(){
    let time=$(".minutes").val();
    let day=$(".days").val();
    let transport=$(".extra").val();
    let answer=(time*day)*1720.71;
    $(".main").hide();
    $(".fortune-display").show();
    $("h3").append("By 2055, you have commuted "+answer+" minutes!");
});
$(document).ready(function() {
    $("#content").load("contact.html");

    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            if($(this).find('a').attr("href")=="index.html"){
                open("index.html")
            } else {
                $("#content").load($(this).find('a').attr("href"));
            }
        })
    })
})
$(document).ready(function () {
    $(".product-Img").mouseover(function () {
        $(this).children(".addToCard").show("slide", {
            direction: "down"
        }, 500);
    })
    $(".product-Img").mouseout(function () {
        $(this).children(".addToCard").hide("slide", {
            direction: "down"
        }, 500);
    })

    var slide = 1;
    $("#next").click(function () {
        if (slide != 2) {
            slide++;
        } else {
            slide = 1;
        }
        $(".box-product").hide();
        $("#product" + slide).show();
        $("#product" + (slide + 1)).show();
        $("#product" + (slide + 2)).show();
    })

    $("#prev").click(function () {
        if (slide != 1) {
            slide--;
        } else {
            slide = 2;
        }
        $(".box-product").hide();
        $("#product" + slide).show();
        $("#product" + (slide + 1)).show();
        $("#product" + (slide + 2)).show();
    })
})

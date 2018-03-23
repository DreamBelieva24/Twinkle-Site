$(document).ready(function () {

    $("#purse-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
            }
        );
    });

    $("#credit-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
            }
        );
    });

    $("#lug-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
            }
        );
    });

});
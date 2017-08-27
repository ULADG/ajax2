"use strict";

$(function(){
    $.ajax({
        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/Akademia108.pl",
        dataType: 'json',
        succes: function (resultJSON) {
            console.log(resultJSON);
        },
        onerror: function (msg) {

        }

    });


$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userUrl/Akademia108.pl', function(daa){
    console.log(data);
});
    });


















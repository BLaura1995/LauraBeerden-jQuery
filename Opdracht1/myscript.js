$("document").ready(function() {
    var maxLength = 140;
    $('textarea').keyup(function() {
        var textlen = maxLength - $(this).val().length;
        $('#rchars').text(textlen);
    });



});
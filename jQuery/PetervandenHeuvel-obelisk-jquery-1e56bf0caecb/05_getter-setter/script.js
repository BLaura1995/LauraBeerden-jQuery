$(document).ready(function() {
    // your code goes here
    // 01 - get color-value from h1
    var color = $('h1').css('color');
    console.log('het kleur is  ' + color)
        // 02 - set color-value to h2
    $("h2").css('color', 'green');
    // end of your code
});
$('li').on('click', function() {
    $(this).css("text-decoration", 'line-through');
});
$('li').on('dblclick', function() {
    $(this).fadeOut();
})
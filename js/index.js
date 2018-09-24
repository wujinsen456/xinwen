$('nav ul li:first-child').click(function(){
    $('.news').css('display','block');
    $('nav ul li:last-child').css('borderBottom','none');
    $('nav ul li:first-child').css('borderBottom','0.08rem solid #f9cb08')
})
$('nav ul li:last-child').click(function(){
    $('.news').css('display','none');
    $('.labs').css('display','block');
    $('nav ul li:first-child').css('borderBottom','none');
    $('nav ul li:last-child').css('borderBottom','0.08rem solid #f9cb08')
})
console.log($('nav ul li:first-child'), $('.labs'));




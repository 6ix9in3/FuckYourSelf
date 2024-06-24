var $a= $.noConflict(true);
$a(window).scroll(function(){
    if ($a(window).scrollTop() >= 300) {
        $a('navbar').addClass('navbar');
    }
    else {
        $a('navbar').removeClass('navbar');
    }
});
/*global $*/

// event pada saat link di klik
$('.page-scroll').on('click', function(event) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    // Mencegah default behavior dari tautan
    event.preventDefault();

});
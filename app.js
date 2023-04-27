$(document).ready(function () {
  // slick - slick Js
  $('#works__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipe: false,

    prevArrow: $('#reviews__f__arr'),
    nextArrow: $('#reviews__s__arr'),
  });

  // slick 2
  $('#slick__container__works').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipe: false,

    prevArrow: $('#modal-arr-right'),
    nextArrow: $('#modal-arr-left'),
  });

  // ancher scroll
  // #8 lesson

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    );
  });

  // modal

  const modalCall = $('[data-modal]');
  const modalClose = $('[data-close]');

  modalCall.on('click', function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $('body').addClass('no-scroll');

    $('.slick__container__works').slick('setPosition');
  });

  modalClose.on('click', function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.removeClass('show');
    $('body').removeClass('no-scroll');
  });

  $('.modal').on('click', function (event) {
    $(this).removeClass('show');
    $('body').removeClass('no-scroll');
  });

  $('.modal__dialog').on('click', function (event) {
    event.stopPropagation();
  });

  // Toggle nav
  const navToggle = $('#navToggle');
  const nav = $('#nav');

  navToggle.on('click', function (event) {
    event.preventDefault();

    nav.toggleClass('show');
  });
});

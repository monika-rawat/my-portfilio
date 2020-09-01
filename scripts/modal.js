$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'FMHI',
      tag: 'Finetech Material Handling India.',
      detail:
        'Finetech is one of the most reputed and recognized material handling equipment service provider specially in Northern part of country.',
      // link: 'https://eat.chownow.com/'
    },
    ordering: {
      title: 'MoleculaHome',
      tag: 'Architecture site.',
      detail:
        'MoleculaHome takes over everything, from an idea and concept development to realization. They believe in traditions and incorporate them into our innovations.',
      // link: 'https://direct.chownow.com/direct/195/locations/260'
    },
    newrelic: {
      title: 'Faminie',
      tag: 'About the Faminie .',
      detail:
        'A female draws out various characteristics which is different from that of a male, varying from factors such as physical, mental. biological and reproductive..',
      // link: 'http://www.newrelic.com'
    },
    roambi: {
      title: 'Buy site',
      tag: 'shopping portal.',
      detail:
        'This is woocommerce shopping portal where MEN & WOMEN  Can get the stylish attair .',
      // link: 'http://www.roambi.com'
    },
    walker: {
      title: 'NCClick',
      tag: 'Photography site.',
      detail:
        'NcClick has a team of highly experienced and internationally acclaimed wedding photographers and cinematographers specialising in destination wedding photography in India.'
    },
    // powur: {
    //   title: 'WalkerTracker',
    //   tag: 'PERFORMANCE METRICS.',
    //   detail:
    //     'Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.'
    // },
    // powur: {
    //   title: 'NCClick',
    //   tag: 'Photography site.',
    //   detail:
    //     'NcClick has a team of highly experienced and internationally acclaimed wedding photographers and cinematographers specialising in destination wedding photography in India.',
    //   // link: 'http://www.powur.com/with/42'
    // },
    mystand: {
      title: 'MoleculaBlog',
      tag: 'About the Health and  Wellness.',
      detail:
        'Wellness blogs are great way to stay informed and be inspired when it comes to living a healthy lifestyle. From nutrition and fitness to spiritual and mental health, these websites are full of useful resources to help boost your well-being.'
    },
    never: {
      title: 'The Poseline',
      tag: 'ALS AWARENESS.',
      detail:
        'we wanted to create a comprehensive PoS solution for all scales of outlets. While our competitors were busy building enterprise products, we firmly believed in the power of individual outlets and small chains.'
    },
    themall: {
      title: 'Anandam Yoga School',
      tag: 'Here We Teach Yoga.',
      detail:
        'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});

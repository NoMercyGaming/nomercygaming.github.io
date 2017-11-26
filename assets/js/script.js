'use strict';

var lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 / 15;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  var translate = 'translate(' + x + 'px, ' + y + 'px)';

  $('body').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)), lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (10 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});

moveBackground();
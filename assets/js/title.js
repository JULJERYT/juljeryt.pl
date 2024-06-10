var animatedTitle = "juljeryt.pl";

function animateTitle() {

  var index = 0;
  var reverse = false;

  setInterval(function() {

    index = (index + (reverse ? -1 : 1)) % (animatedTitle.length + 1);

    if (index == 0 || index == animatedTitle.length) reverse = !reverse;

    document.title = animatedTitle.slice(0, (index ? index : 1));

  }, 300); 
}

window.onload = animateTitle;
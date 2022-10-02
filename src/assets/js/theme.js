// Bootstrap
import "bootstrap";

// Components
import "./components/swiper";

// theme misc
import "./misc";

//Parallax
import "parallax-js";

const Parallax = require("parallax-js");
var scene = document.getElementById("promotional-video-section-parallax");
if (scene) {
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.2, 0.2);
}

var scene = document.getElementById("news-slider-parallax");
if (scene) {
  var parallaxInstance = new Parallax(scene);
  parallaxInstance.friction(0.2, 0.2);
}

$(function () {
  $(".navbar-toggler").click(function () {
    $(".nav-icon").toggleClass("open");
  });
});

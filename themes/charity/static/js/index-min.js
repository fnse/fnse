$(document).ready(function(){var e=$("#menu"),t=$(".menu-link");if(t.click(function(){return t.toggleClass("open"),e.toggleClass("open"),!1}),$(".triggerMe").inViewport(function(e){e&&$(this).addClass("triggeredCSS3")}),$(".northshoreframed").delay(200).queue(function(){$(this).addClass("triggeredCSS3").dequeue()}),$(".question").click(function(e){return e.preventDefault(),$(this).toggleClass("arrow-right"),$(this).toggleClass("arrow-down"),$(this).parent().next().toggleClass("hide"),!1}),window.location.hash){var o=$(window.location.hash);o.toggleClass("arrow-right"),o.toggleClass("arrow-down"),o.parent().next().toggleClass("hide")}$(".sample-projects").slick({infinite:!1,speed:300,slidesToShow:3,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,centerMode:!0,variableWidth:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,dotsClass:"dotstyle",centerMode:!0,variableWidth:!0}}]})}),function($,e){$.fn.inViewport=function(t){return this.each(function(o,s){function i(){var e=$(this).height(),o=s.getBoundingClientRect(),i=o.top,n=o.bottom;return t.call(s,Math.max(0,i>0?e-i:n<e?n:e))}i(),$(e).on("resize scroll",i)})}}(jQuery,window);
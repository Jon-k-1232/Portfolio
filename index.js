function typeWriter() {
  $("#teleType").typewrite({
    actions: [
      { type: "Hello, and welcome." },
      { delay: 1500 },
      { remove: { num: 1, type: "stepped" } },
      { select: { from: 0, to: 20 } }, //17
      { delay: 2000 },
      { remove: { num: 20, type: "whole" } },
      { delay: 300 },
      { type: "I'm Jon, " },
      { type: "<br>" },
      { type: " and I'm a full stack developer." },
    ],
  });
}

function home() {
  $(".navBarObjects").on("click", "#nameNav", function () {
    $(".introBox").show();
    $(".aboutMeBox").hide();
    $(".contactBox").hide();
    $(".projectBox").hide();
    $(".toggleCls").removeClass("toggleCls");
  });
}

function aboutMeAppear() {
  $(".navBarObjects").on("click", "#aboutNav", function () {
    $(".aboutMeBox").show();
    $(".introBox").hide();
    $(".contactBox").hide();
    $(".projectBox").hide();
    $(".toggleCls").removeClass("toggleCls");
  });
}

function contactMeAppear() {
  $(".navBarObjects").on("click", "#contactNav", function () {
    $(".contactBox").show();
    $(".introBox").hide();
    $(".projectBox").hide();
    $(".aboutMeBox").hide();
    $(".toggleCls").removeClass("toggleCls");
  });
}

function projectsAppear() {
  $(".navBarObjects").on("click", "#projectsNav", function () {
    $(".projectBox").show();
    $(".introBox").hide();
    $(".contactBox").hide();
    $(".aboutMeBox").hide();
    $(".toggleCls").removeClass("toggleCls");
  });
}

function toggleClass() {
  $(".navBarObjects").on("click", "#hamIcon", function () {
    console.log("Hamburger toggle ran");
    $(".toggleCls").show();
    var menu = document.querySelector(".menuItems");
    menu.classList.toggle("toggleCls");
    console.log("Hamburger toggle ran");
  });
}

function initializeStart() {
  $(".aboutMeBox").hide();
  $(".projectBox").hide();
  $(".contactBox").hide();
  home();
  aboutMeAppear();
  contactMeAppear();
  toggleClass();
  projectsAppear();
  typeWriter();
}

initializeStart();

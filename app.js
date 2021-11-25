document.onload = function () {
  let img = new Image();
  img.src = "https://source.unsplash.com/1920x1080/?cat";
  img.onload = function (e) {
    console.log("image loaded");
    console.log(e);
  };
};

window.addEventListener("load", () => {
  let img = new Image();
  img.src = "https://source.unsplash.com/1920x1080/?cat";
  img.onload = function (e) {
    console.log("image loaded");
    // console.log(e);
  };

  fetch("https://source.unsplash.com/1920x1080/?cat").then((res) => {
    console.log(res);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let btn_heart = document.querySelector(".tab__icon--heart");
  let btn_shuffle = document.querySelector(".tab__icon--shuffle");
  let btn_menu = document.querySelector(".tab__icon--menu");

  btn_heart.addEventListener("click", () => {
    console.log("heart clicked");
    // todo
  });

  btn_shuffle.addEventListener("click", () => {
    console.log("shuffle clicked");
    // todo
  });

  btn_menu.addEventListener("click", () => {
    console.log("menu clicked");
    // todo
  });
});

var imgDetails;

window.addEventListener("load", () => {
  // console.log("img", img);

  fetch("https://source.unsplash.com/1920x1080/?cat").then((res) => {
    console.log(res);

    let img = new Image();
    img.src = res.url;
    imgDetails = res;
    img.onload = function (e) {
      console.log("image loaded");
      console.log(e);
    };
    img.setAttribute("class", "tab__img");
    let img_placeholder = document.querySelector(".tab__pic");
    img_placeholder.appendChild(img);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let btn_heart = document.querySelector(".tab__icon--heart");
  let btn_shuffle = document.querySelector(".tab__icon--shuffle");
  let btn_menu = document.querySelector(".tab__icon--menu");
  let btn_debug = document.querySelector(".tab__icon--debug");

  btn_heart.addEventListener("click", () => {
    let localCats = [];
    // get local cats
    localCats = JSON.parse(localStorage.getItem("favKats"));
    localCats
      ? localStorage.setItem(
          "favKats",
          JSON.stringify([...localCats, imgDetails.url])
        )
      : localStorage.setItem("favKats", JSON.stringify([imgDetails.url]));

    console.log("localCats", localCats);
  });

  btn_shuffle.addEventListener("click", () => {
    console.log("shuffle clicked");
    // todo
  });

  btn_menu.addEventListener("click", () => {
    console.log("menu clicked");
    // todo
  });

  btn_debug.addEventListener("click", () => {
    imgDetails ? console.log(imgDetails) : console.log("Sed Lyf! no img");
    // todo
  });
});

// Obsolete code

// document.onload = function () {
//   let img = new Image();
//   img.src = "https://source.unsplash.com/1920x1080/?cat";
//   img.onload = function (e) {
//     console.log("image loaded");
//     console.log(e);
//   };
//   console.log("img", img);
// };

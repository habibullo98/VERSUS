document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".nav-items").style.top = "0px";
});

document.querySelector(".fa-circle-xmark").addEventListener("click", () => {
  document.querySelector(".nav-items").style.top = "-300px";
});

// Scrol top

// console.log(window.scrollY());
window.addEventListener("scroll", function () {
  console.log(this.scrollY);

  // top
  if (this.scrollY > 200) {
    document.querySelector(".top").style.visibility = "visible";
  } else {
    document.querySelector(".top").style.visibility = "hidden";
  }

  // work1
  let workEffect1 = document.querySelector(".work-effect1");
  if (this.scrollY > 265) {
    workEffect1.classList.add("work1-animate");
    workEffect1.classList.remove("work1");
  } else {
    workEffect1.classList.remove("work1-animate");
    workEffect1.classList.add("work1");
  }
  // work2
  let workEffect2 = document.querySelector(".work-effect2");
  if (this.scrollY > 265) {
    workEffect2.classList.add("work2-animate");
    workEffect2.classList.remove("work2");
  } else {
    workEffect2.classList.remove("work2-animate");
    workEffect2.classList.add("work2");
  }
  // work3
  let workEffect3 = document.querySelector(".work-effect3");
  if (this.scrollY > 265) {
    workEffect3.classList.add("work3-animate");
    workEffect3.classList.remove("work3");
  } else {
    workEffect3.classList.remove("work3-animate");
    workEffect3.classList.add("work3");
  }

  // work3
  let workEffect3_2 = document.querySelector(".work-effect3_2");
  if (this.scrollY > 455) {
    workEffect3_2.classList.add("work3_2-animate");
    workEffect3.classList.remove("work3_2");
  } else {
    workEffect3_2.classList.remove("work3_2-animate");
    workEffect3_2.classList.add("work3_2");
  }

  // work4
  let workEffect4 = document.querySelector(".work-effect4");
  if (this.scrollY > 455) {
    workEffect4.classList.add("work4-animate");
    workEffect4.classList.remove("work4");
  } else {
    workEffect4.classList.remove("work4-animate");
    workEffect4.classList.add("work4");
  }
  // work5
  let workEffect5 = document.querySelector(".work-effect5");
  if (this.scrollY > 455) {
    workEffect5.classList.add("work5-animate");
    workEffect5.classList.remove("work5");
  } else {
    workEffect5.classList.remove("work5-animate");
    workEffect5.classList.add("work5");
  }
  // work6
  let workEffect6 = document.querySelector(".work-effect6");
  if (this.scrollY > 455) {
    workEffect6.classList.add("work6-animate");
    workEffect6.classList.remove("work6");
  } else {
    workEffect6.classList.remove("work6-animate");
    workEffect6.classList.add("work6");
  }
  // work7
  let workEffect7 = document.querySelector(".work-effect7");
  if (this.scrollY > 665) {
    workEffect7.classList.add("work7-animate");
    workEffect7.classList.remove("work7");
  } else {
    workEffect7.classList.remove("work7-animate");
    workEffect7.classList.add("work7");
  }
  // work8
  let workEffect8 = document.querySelector(".work-effect8");
  if (this.scrollY > 665) {
    workEffect8.classList.add("work8-animate");
    workEffect8.classList.remove("work8");
  } else {
    workEffect8.classList.remove("work8-animate");
    workEffect8.classList.add("work8");
  }
  // work9
  let workEffect9 = document.querySelector(".work-effect9");
  if (this.scrollY > 665) {
    workEffect9.classList.add("work6-animate");
    workEffect9.classList.remove("work9");
  } else {
    workEffect9.classList.remove("work9-animate");
    workEffect9.classList.add("work9");
  }
});

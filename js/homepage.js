// load navigation bar and footer
$(function() {
  $("#navigation").load("./navigation.html");
  $("#footer").load("./footer.html");
});

// Animation on Scroll
AOS.init({
  offset: 300,
  duration: 1000
});

// add the auto scroll behavior to the homepage
let firstSection = document.getElementsByClassName("section")[0];
let firstTimeScroll = true;
let cnt = 0; // used to set a little bit delay of scrolling down, otherwise it would be too fast

window.addEventListener("scroll", () => {
  let firstSectionTop = firstSection.getBoundingClientRect().top;
  console.log(firstSectionTop, firstTimeScroll);
  if (firstSectionTop >= 600 && firstTimeScroll) {
    // 300 is the offset of AOS init function, not very accurate but works

    window.scrollBy(0, firstSectionTop - 80);
    if (cnt++ > 50) {
      firstTimeScroll = false;
    }
  }
});

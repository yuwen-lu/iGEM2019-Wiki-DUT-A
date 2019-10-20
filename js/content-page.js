// pushing the contents up, to the right of the navigation bar
let sideNav = document.getElementsByClassName("side-nav")[0];
let sideNavHeight = sideNav.clientHeight * 1.2;
let content = document.getElementsByClassName("content-container")[0];
content.style.top = "-" + sideNavHeight.toString() + "px";

// stop the sidenav when hitting the footer
let footer = document.getElementById("footer");
let footerTop = footer.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  let footerTop = footer.getBoundingClientRect().top;
  let sidenavBottom = sideNav.getBoundingClientRect().bottom;
  console.log(footerTop);
  console.log("bottom: " + sidenavBottom);
  if (sidenavBottom >= footerTop) {
    console.log("hit");
    sideNav.style.opacity = "0";
  } else if (footerTop >= windowHeight) {
    console.log("detatched");
    sideNav.style.opacity = "1";
  }
});

// change the font of the currently viewing section in the side-nav

let sections = document.querySelectorAll("section");
let sideNavItems = document.getElementsByClassName("side-nav-item");

window.addEventListener("scroll", () => {
  sections.forEach((current, index) => {
    let rect = current.getBoundingClientRect();
    let topPosition = rect.top;
    let bottomPosition = rect.bottom;

    if (
      topPosition <= 0.5 * windowHeight &&
      bottomPosition >= 0.5 * windowHeight
    ) {
      sideNavItems[index].style.color = "#fdb4b4";
      sideNavItems[index].style.fontSize = "1.5rem";
      // console.log(topPosition / windowHeight, bottomPosition / windowHeight); // if the element is in the vertical center of the page
    } else {
      sideNavItems[index].style.color = "rgb(160,160,160)";
      sideNavItems[index].style.fontSize = "1.2rem";
    }
  });
});

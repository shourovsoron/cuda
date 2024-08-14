$(document).ready(function () {
  $(function () {
    $(".percent").percentageLoader({
      strokeWidth: 15,
      // bgColor: "#d9d9d9",
      // ringColor: "#d53f3f",
      textColor: "#3c4761",
      valElement: "p",
      fontSize: "4rem",
      fontWeight: "normal",
    });
  });

  $(document).ready(function () {
    var mixer = mixitup(".container");
  });

  $(".service-section").waypoint(function (direction) {
    if (direction == "down") {
      let navbar = document.getElementById("navbar");
      navbar.classList.remove("sticky");
    } else {
      let navbar = document.getElementById("navbar");
      navbar.classList = "sticky";
    }
  });

  //Navigation Menu

  let navbar = document.getElementById("navbar");


  function scrollDetect() {
    var lastScroll = 0;

    window.onscroll = function () {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        console.log(currentScroll);

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;

        navbar.classList.remove("sticky");

        setTimeout(() => {
          if(lastScroll == currentScroll){
            navbar.classList = "sticky";
          }

        }, 1000);

      } else {
        lastScroll = currentScroll;

        if (lastScroll <= 0) {
          navbar.classList.remove("sticky");
        } else {

          // setTimeout(() => {
          //   if(lastScroll == currentScroll){
          //     navbar.classList = "sticky";
          //   }
  
          // }, 1000);
        }

        if (lastScroll == 0) {
          navbar.classList.remove("sticky");
        }
      }

    };

    
    if (currentScroll == 0) {
      navbar.classList.remove("sticky");

    }
  }

  scrollDetect();


});



  //======JS for Mobile Menu

  const mobileDrawer = document.querySelector(".mobile-menu-drawer");
  const mobileDrawerBtn = document.querySelector(".mobile-menu-open");
  const mobileDrawerCloseBtn = document.querySelector(".close-drawer");
  const mobileMenuItem = document.querySelector(".mobile-menu-items");
  const ActivedMenu = document.querySelector(".active");
  let logo = document.querySelector(".logo");


  const mainMenu = document.querySelector(".main-nav");
  console.log(mainMenu)

  mobileDrawerBtn.addEventListener("click", () => {
    mobileDrawer.classList.add("open-mobile-menu");
  });

  mobileDrawerCloseBtn.addEventListener("click", () => {
    mobileDrawer.classList.remove("open-mobile-menu");
  });

  mobileMenuItem.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
      mobileDrawer.classList.remove("open-mobile-menu");
    }
    
  });

  mainMenu.addEventListener("click", (e) => {
   

    if (e.target.tagName == "A") {
     
      if (ActivedMenu) {
        ActivedMenu.classList.remove("active");
        e.target.classList.add("active");
      }
    }
   

    // let currentScroll =
    //   document.documentElement.scrollTop || document.body.scrollTop;

    // if (currentScroll >= 0) {
    //   navbar.classList.remove("sticky");
    // }
  });

  logo.addEventListener("click", () => {
    const ActivedMenu = document.querySelector(".active");
    const home = document.querySelector(".main-nav li:first-child");
    ActivedMenu.classList.remove("active");
    home.classList.add("active");


    // let currentScroll =
    //   document.documentElement.scrollTop || document.body.scrollTop;
    //   navbar.classList.remove("sticky");

  });

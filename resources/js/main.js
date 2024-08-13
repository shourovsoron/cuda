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



  function scrollDetect() {
    var lastScroll = 0;
    let navbar = document.getElementById("navbar");

    window.onscroll = function () {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;

        navbar.classList.remove("sticky");

      } else {
        lastScroll = currentScroll;

        if (lastScroll == 0) {
          navbar.classList.remove("sticky");
        } else {
          navbar.classList = "sticky";
        }
      }

    };
  }

  scrollDetect();


  //======JS for Mobile Menu

  const mobileDrawer=document.querySelector(".mobile-menu-drawer");
  const mobileDrawerBtn=document.querySelector(".mobile-menu-open");
  const mobileDrawerCloseBtn=document.querySelector(".close-drawer");
  const mobileMenuItem=document.querySelector(".mobile-menu-items");



  mobileDrawerBtn.addEventListener("click", ()=>{
    mobileDrawer.classList.add("open-mobile-menu");

  })

  mobileDrawerCloseBtn.addEventListener("click", ()=>{
    mobileDrawer.classList.remove("open-mobile-menu");

  })

  mobileMenuItem.addEventListener("click", (e)=>{
    if(e.target.tagName=="A"){
      mobileDrawer.classList.remove("open-mobile-menu");
    }
   

  })


});

//toggle class active
const navList = document.getElementsByClassName('nav-list')[0];
const menu = document.getElementsByClassName('nav-extra')[0];

//ketika menu diklik
menu.addEventListener("click", function() {
  navList.classList.toggle('active');
})

// hilangkan sideBar
document.addEventListener("click", function(e) {
  if (!menu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove('active')
  }
  });
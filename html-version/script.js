function hideIcon(self, num) {
  if (num === 1) {
    self.style.backgroundImage = "none";
    self.type = "date";
  } else {
    self.style.backgroundImage = "none";
    self.type = "number";
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const toggleBtn = document.getElementById("bar-btn");
const linkMenu = document.getElementById("responsive-menu");
toggleBtn.addEventListener("click", () => {
  linkMenu.classList.toggle("responsive-nav-link-toggle");
  console.log("hello");
});

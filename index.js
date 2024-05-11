function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const body = document.body;
  const icon = document.querySelector(".toggle-icon");

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    body.classList.add("body-no-scroll");
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x");
  } else {
    sidebar.style.display = "none";
    body.classList.remove("body-no-scroll");
    icon.classList.remove("bi-x");
    icon.classList.add("bi-list");
  }
}

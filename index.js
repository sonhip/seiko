function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const body = document.body;

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    body.classList.add("body-no-scroll");
  } else {
    sidebar.style.display = "none";
    body.classList.remove("body-no-scroll");
  }
}

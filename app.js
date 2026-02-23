function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function copyEmail() {
  navigator.clipboard.writeText("yomi@example.com");
  alert("Email copied!");
}

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
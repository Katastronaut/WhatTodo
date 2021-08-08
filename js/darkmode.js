let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkmode-toggle");
const lightModeToggle = document.querySelector("#lightmode-toggle");

document.addEventListener("DOMContentLoaded", checkState);

// Check if dark mode is enabled
// If it's enables, turn it off
// If it's disabled, turn it on

const enableDarkMode = () => {
  // 1. add the class darkmode to the body
  document.body.classList.add("darkmode");
  // 2. update darkMode in the LocalStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. remove the class darkmode to the body
  document.body.classList.remove("darkmode");
  // 2. update darkMode in the LocalStorage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    darkModeToggle.classList.remove("has--opacity");
    lightModeToggle.classList.add("has--opacity");
  }
});

lightModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "disabled") {
    disableDarkMode();
    lightModeToggle.classList.remove("has--opacity");
    darkModeToggle.classList.add("has--opacity");
  }
});

function checkState() {
  // Check if already todos set
  if (localStorage.getItem("darkMode") === "enabled") {
    darkModeToggle.classList.remove("has--opacity");
    lightModeToggle.classList.add("has--opacity");
  } else {
    lightModeToggle.classList.remove("has--opacity");
    darkModeToggle.classList.add("has--opacity");
  }
}

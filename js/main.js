// Accordion
const accrodHeaders = document.querySelectorAll(".accord-header");
accrodHeaders.forEach((ach) => {
  ach.addEventListener("click", toggelItem, false);
});

function toggelItem() {
  const currentContentEle = this.nextElementSibling;

  const isCollapsed = currentContentEle.classList.contains("collapse");

  accrodHeaders.forEach((ach) => {
    const contentEle = ach.nextElementSibling;
    if (!contentEle.classList.contains("collapse")) {
      contentEle.classList.add("collapse");
    }
  });

  if (isCollapsed) {
    currentContentEle.classList.remove("collapse");
  }
}

// Toggle Button
const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

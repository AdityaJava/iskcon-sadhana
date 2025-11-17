console.log("hey");

async function includeHTML(selector, url) {
  const dashBoardElement = document.querySelector(selector);
  if (!dashBoardElement) return;
  try {
    const htmlToInclude = await fetch(url);
    if (!htmlToInclude.ok) {
      dashBoardElement.innerHTML = "";
      return;
    }
    const html = await htmlToInclude.text();
    dashBoardElement.innerHTML = html;
  } catch (ex) {
    console.error("Include failed");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#header", "../Header/Header.html");
  await includeHTML("#sidebar", "../SideBar/SideBar.html");
  setupSidebarNavigation();
});

function setupSidebarNavigation() {
  const sidebar = document.querySelector("#sidebar");
  const options = sidebar.querySelectorAll("li");

  options.forEach((option) => {
    option.style.cursor = "pointer"; // show pointer on hover
    option.addEventListener("click", () => {
      const page = option.textContent.trim().toLowerCase(); // e.g., "dashboard" or "reports"
      console.log("Clicked:", page);
    });
  });
}

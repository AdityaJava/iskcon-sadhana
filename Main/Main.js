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
    option.addEventListener("click", async () => {
      const page = option.textContent.trim().toLowerCase(); // e.g., "dashboard" or "reports"
      console.log("Clicked:", page);
      let pageUrl = "";
      if (page === "dashboard") {
        pageUrl = "../SadhanaDashboard/SadhanaDashboard.html";
      } else if (page === "reports") {
        pageUrl = "Reports.html";
      } else {
        console.warn("No page mapped for:", page);
        return;
      }
      debugger;
      const contentDiv = document.querySelector("#content");
      try {
        const response = await fetch(pageUrl);
        if (!response.ok) {
          contentDiv.innerHTML = `<p>Error loading ${page}</p>`;
        }
        const html = await response.text();
        contentDiv.innerHTML = html;
      } catch (ex) {
        console.error("Exception:", ex);
      }
    });
  });
}

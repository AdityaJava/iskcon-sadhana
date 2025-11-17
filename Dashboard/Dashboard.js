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

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header", "../Header/Header.html");
  includeHTML("#dashboard", "../SideBar/SideBar.html");
});

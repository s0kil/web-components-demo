window.pages = {};
window.pages._404 = () => document.getElementById("/404");

// Pages
window.pages.home = () => import("./pages/home");
window.pages.about = () => import("./pages/about");

const changePageTitle = (element) => {
  const requestedTitle = element.content.querySelector("title");
  if (requestedTitle) document.title = requestedTitle.textContent;
};

const mountPage = (page) => {
  const applicationRoot = document.getElementById("root");
  changePageTitle(page);
  applicationRoot.appendChild(page.content);
};

const initializeRouter = () => {
  const path = window.location.pathname;
  const requestedTemplate = document.getElementById(path);
  if (requestedTemplate === null) mountPage(window.pages._404());
  else mountPage(requestedTemplate);
};

window.addEventListener("DOMContentLoaded", initializeRouter);

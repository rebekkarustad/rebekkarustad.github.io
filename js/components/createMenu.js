const header = document.querySelector("header");

export function createMenu() {
  function navigationMenu() {
    header.innerHTML = `<nav class="navbar">
                                <a href="index.html" class="nav-branding">R</a>

                                <ul class="nav-menu">
                                    <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                                    <li class="nav-item"><a href="skills.html" class="nav-link">Skills and tools</a></li>
                                    <li class="nav-item"><a href="portfolio.html" class="nav-link">Portfolio</a></li>
                                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                                </ul>

                                <div class="hamburger">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                            </nav>`;
  }
  navigationMenu();

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(".nav-menu a");
  const menuLenght = menuItem.length;

  for (let i = 0; i < menuLenght; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "current";
    }
  }
}

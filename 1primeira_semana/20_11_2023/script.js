const container = document.querySelector("#global-container");
ReactDOM.render(<Menu />, container);

function Menu() {
  return (
    <header id="header">
      <div id="Logo">
        <img src="Vector.svg" alt="logo" />
      </div>
      <div id="searchBar">
        <input id="inputSearch" type="search" />
        <button id="search-btn">PESQUISAR</button>
      </div>
      <nav>
        <ul id="header-menu-list">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SALES</a>
          </li>
          <li>
            <a href="">RECORDS</a>
          </li>
          <li>
            <a href="">WISHLIST</a>
          </li>
        </ul>
      </nav>
      <div id="toggler-container">
        <img id="togglerMenu" src="toggler.svg" alt="toggler menu" />
      </div>
    </header>
  );
}

const togglerContainer = document.querySelector("#toggler-container");
const hiddenMenu = document.createElement("div");

const togglerMenu = document.querySelector("#togglerMenu");
togglerMenu.addEventListener("click", togglerItens);

function togglerItens() {
  if (togglerContainer.contains(hiddenMenu)) {
    hiddenMenu.remove();
  } else {
    togglerContainer.appendChild(hiddenMenu);
    hiddenMenu.innerHTML = `
    <nav>
      <ul id="nav-hidden-list">
        <li><a href="">home</a></li>
        <li><a href="">sales</a></li>
        <li><a href="">records</a></li>
        <li><a href="">wishlist</a></li>
      </ul>
    </nav>
    `;
    togglerMenu.style.display = "none";
  }
  console.log(togglerContainer.contains(hiddenMenu));
}

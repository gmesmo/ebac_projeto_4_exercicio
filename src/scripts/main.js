document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAsTabs();
      removeBotoesAtivos();

      aba.classList.add("selector__selected_tab--is-active");
      botao.target.classList.add("option--is-active");
    });
  }
});

function removeBotoesAtivos() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("option--is-active");
  }
}

function escondeTodasAsTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("selector__selected_tab--is-active");
  }
}

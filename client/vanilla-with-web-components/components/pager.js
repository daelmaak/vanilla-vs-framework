const prevBtnCx = 'prev-btn';
const nextBtnCx = 'next-btn';
const pageCx = 'current-page';

class Pager extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <button class="${prevBtnCx}">Prev</button>
      <span class="${pageCx}"></span>
      <button class="${nextBtnCx}">Next</button>
    `;

    this.shadowRoot
      .querySelector(`.${prevBtnCx}`)
      .addEventListener('click', () => this.pagerModel.loadPrevious());
    this.shadowRoot
      .querySelector(`.${nextBtnCx}`)
      .addEventListener('click', () => this.pagerModel.loadNext());
  }

  init(pagerModel) {
    this.pagerModel = pagerModel;
    this.pagerModel.subscribe(({ page }) => {
      this.shadowRoot.querySelector(`.${pageCx}`).textContent = page;
    });
  }
}

customElements.define('isy-pager', Pager);

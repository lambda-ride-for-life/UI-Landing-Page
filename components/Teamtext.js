TweenMax.staggerFrom('.contributor-link', 3, {opacity:0, y:200, rotation:580, scale:2, delay:0.5}, 0.2);
TweenMax.staggerFrom('.Who-we-are, a', 3, {opacity:0, x:200, scale:2, delay:0.5}, 0.3);

class Contributor {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.contributor-item[data-tab='${this.data}']`);
    this.contributorItem = new ContributorItem(this.itemElement);
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    const links = document.querySelectorAll('.contributor-link');
    Array.from(links);
    this.contributorItem.select();
  }
}

class ContributorItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".contributor-item");
    Array.from(items);
    this.element.classList.toggle("text-hidden");
  }
}

const links = document.querySelectorAll(".contributor-link").forEach(link => new Contributor(link));

class Contributor {
    constructor(domElement) {
        this.domElement = domElement;
        this.expandText = this.domElement.querySelector('.expandText');
        this.expandText.textContent = 'expand';
        this.expandText.addEventListener('click',() => this.expandContributor());
    };

    expandContributor(){
        this.domElement.classList.toggle('text-open')
    }
};

let contributors = document.querySelectorAll('.contributor').forEach(contributor => new Contributor(contributor));


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render()
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: '1.jpg' },
            { id: 2, title: 'Mouse', price: 20, img: '2.jpg' },
            { id: 3, title: 'Keyboard', price: 200, img: '3.jpg' },
            { id: 4, title: 'Gamepad', price: 50, img: '4.jpg' }
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }

    getSumm() {
        let sum = 0;
        this.goods.forEach(good => sum += good.price);
        alert(sum);
    }
}

class ProductItem {
    constructor (product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item">
                        <h3 class="product-title">${this.title}</h3>
                        <img class="product__img" src="img/${this.img}" alt="${this.title}">
                        <p class="product-price">${this.price}</p>
                        <button class="buy-btn">Купить</button>
                    </div>`
    }
}

let list = new ProductList;

let btnSumm = document.querySelector('.btn-summ');
btnSumm.addEventListener('click', function () {
    list.getSumm();
});

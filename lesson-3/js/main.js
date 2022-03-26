const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
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
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                        <h3 class="product-title">${this.title}</h3>
                        <img class="product__img" src="${this.img}" alt="${this.title}">
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





class BasketList { // тут я не понял как сделать наследование
    constructor(container = '.btn-wrp') {
        this.container = container;
        this.goods = [];
        this._getBasketProducts()
            .then(data => {
                this.goods = data.contents;
                this.render()
            });
    }

    _getBasketProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    addItem() {

    }

    deleteItem() {

    }

    calcFinalSum() {

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new BasketItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
}

class BasketItem extends ProductItem {
    constructor(product) {
        super(product) // почему здесь именно так? пробовал product.name и product.product_name - не работает
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="basket-item">
                    <h3 class="basket-title">${this.title}</h3>
                    <p class="basket-quantity">${this.quantity}</p>
                    <p class="basket-price">${this.price}</p>
                    <button>X</button>
                </div>`
    }


    changeQuantity() {

        
    }

    calcSum() {

    }
}

let basketlist = new BasketList;

let buyAction = document.querySelector('.btn-cart');
let basketWrp = document.querySelector('.btn-wrp')
buyAction.addEventListener('click', function() {
    basketWrp.classList.toggle('hidden')
})
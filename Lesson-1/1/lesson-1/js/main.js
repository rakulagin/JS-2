const products = [
    {id: 1, title: 'Notebook', price: 2000, img: '1.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: '2.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: '3.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: '4.jpg'}
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <h3 class="product-title">${product.title}</h3>
                <img class="product__img" src="img/${product.img}" alt="${product.title}">
                <p class="product-price">${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = (list.map(item => renderProduct(item))).join(""); // превратили массив в строку, убралась запятая
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
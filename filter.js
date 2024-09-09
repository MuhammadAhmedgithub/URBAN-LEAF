document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: 'Air Purifying Plant', price: 150 },
        { id: 2, name: 'Flowering Plant', price: 250 },
        { id: 3, name: 'Fruit Plant', price: 125 },
        { id: 4, name: 'Indirect Sunlight Plant', price: 110 },
        { id: 5, name: 'Hanging Plant', price: 135 },
        { id: 6, name: 'Cacti and Succulents Plant', price: 175 },
        { id: 7, name: 'Amaryllis Plant', price: 130 },
        { id: 8, name: 'Peace Lily Plant', price: 190 },
        { id: 9, name: 'Magnolia Plant', price: 145 },
        { id: 9, name: 'Spider Plant', price: 165 },
    ];

    // Save products to localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    displayProducts(storedProducts);
});

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: Rs:${product.price}</p>
        `;
        productList.appendChild(item);
    });
}

function sortItems() {
    const sortOption = document.getElementById('sort').value;
    let products = JSON.parse(localStorage.getItem('products'));

    if (sortOption === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'name') {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(products);
}

function filterItems() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const products = JSON.parse(localStorage.getItem('products'));
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterValue));

    displayProducts(filteredProducts);
}
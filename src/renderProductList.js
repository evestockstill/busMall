function renderProductList(randomProduct) {
    const li = document.createElement('li');
    li.className = randomProduct.id;
    li.id = randomProduct.id;

    const h3 = document.createElement('h3');
    h3.textContent = randomProduct.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = randomProduct.image;
    img.alt = randomProduct.name + ' image';
    li.appendChild(img);

    return li;
}
export default renderProductList;
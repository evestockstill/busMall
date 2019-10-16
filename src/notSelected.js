function renderNotSelectedId(notSelectedId, product);
const li = document.createElement('li');
li.textContent = product.name;

const span = document.createElement('span');
span.textContent = notSelectedId.product.id;
li.appendChild(span);
return li;
export default notSelectedId
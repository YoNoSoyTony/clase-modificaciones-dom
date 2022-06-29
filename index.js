const apple = {
  name: 'apple',
  price: 15,
  add: document.querySelector('#apple-add'),
  less: document.querySelector('#apple-less'),
  more: document.querySelector('#apple-more'),
  cart: document.querySelector('#apple-cart'),
  quantity: document.querySelector('#apple-cart-quantity'),
};

const tomato = {
  name: 'tomato',
  price: 22,
  add: document.querySelector('#tomato-add'),
  less: document.querySelector('#tomato-less'),
  more: document.querySelector('#tomato-more'),
  cart: document.querySelector('#tomato-cart'),
  quantity: document.querySelector('#tomato-cart-quantity'),
};

const banana = {
  name: 'banana',
  price: 18,
  add: document.querySelector('#banana-add'),
  less: document.querySelector('#banana-less'),
  more: document.querySelector('#banana-more'),
  cart: document.querySelector('#banana-cart'),
  quantity: document.querySelector('#banana-cart-quantity'),
};
const avocado = {
  name: 'avocado',
  price: 8,
  add: document.querySelector('#avocado-add'),
  less: document.querySelector('#avocado-less'),
  more: document.querySelector('#avocado-more'),
  cart: document.querySelector('#avocado-cart'),
  quantity: document.querySelector('#avocado-cart-quantity'),
};
const mango = {
  name: 'mango',
  price: 25,
  add: document.querySelector('#mango-add'),
  less: document.querySelector('#mango-less'),
  more: document.querySelector('#mango-more'),
  cart: document.querySelector('#mango-cart'),
  quantity: document.querySelector('#mango-cart-quantity'),
};

const totalTag = document.querySelector('#total');

const arrProducts = [apple, tomato, banana, avocado, mango];
const objProducts = { apple, tomato, banana, avocado, mango };

const increase = (product) => {
  const current = parseInt(objProducts[product].quantity.innerHTML);
  objProducts[product].quantity.innerHTML = current + 1;
  if (current + 1 == 1) {
    objProducts[product].cart.style = 'display:flex'; // queremos que se muestre
  }
  setTotal();
};

const decrease = (product) => {
  const current = parseInt(objProducts[product].quantity.innerHTML);
  if (current > 0) {
    objProducts[product].quantity.innerHTML = current - 1;
    if (current - 1 == 0) {
      objProducts[product].cart.style = 'display:none'; // no queremos que se muestre
    }
    setTotal();
  }
};

const setTotal = () => {
  const total = arrProducts
    .map((product) => {
      return parseInt(product.quantity.innerHTML) * product.price;
    })
    .reduce((x, y) => x + y);
  totalTag.innerHTML = `total: $${total}`;
};

arrProducts.map((product) => {
  product.add.addEventListener('click', () => increase(product.name));
  product.more.addEventListener('click', () => increase(product.name));
  product.less.addEventListener('click', () => decrease(product.name));
});

//objProducts[product].cart.style = 'display:none'; // no queremos que se muestre
//objProducts[product].cart.style = 'display:flex'; // queremos que se muestre

//mango.quantity.innerHTML = '2';
//banana.quantity.innerHTML = parseInt(banana.quantity.innerHTML) + 1;
//document.getElementById("MyElement").classList.add('MyClass');
//document.getElementById("MyElement").classList.remove('MyClass');

const products = [
  {
    name: 'banana',
    price: 80,
    tax: 89,
  },
];

const cart = [
  {
    product: 'banana',
    quantity: 3,
  },
];

/**
 * ReactJS
 * Vue
 * Svelte
 * Lit
 *
 * pokedex usando la pokeAPI
 * character roster con la rick and morty api
 */

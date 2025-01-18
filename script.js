let products = [
  {
    "title": "Парта растущая Pensare Grey",
    "price": 22000,
    "image": "https://img.mebelok.com/image/cache/data/FunDesk/23092021/parta_pensare_grey_foto_15-800x600.jpg.webp",
      "description": "Парта растишка для школьника Pensare Grey Детский стол-трансформер Pensare Эргономичная, растущая парта с вместительной надстройкой. Надстройка включает в себя один выдвижной ящик, три полки, выдвижную подставку для книг, и специальные отверстия для крепления аксессуаров.",
  },
  {
      "title": "Комплект парта и стул растущие Sole Grey",
      "price": 3999,
      "image": "https://img.mebelok.com/image/cache/data/FunDesk/aksessuary-dlya-detskoy/20240922-800x600.jpg.webp",
      "description": "Sole предназначена для обеспечения более комфортной среды обучения. Стол и стул могут быть легко отрегулированы по высоте, что позволяет оптимально адаптировать его под соответствующий рост ребенка. ",
    },
    {
      "title": "Диван угловой Диана ольха ",
      "price": 35786,
      "image": "https://img.mebelok.com/image/cache/data/Askalon/12024011-800x600.jpg.webp",
      "description": "Диван угловой Диана – изысканный и интеллигентный. Он является отличным выбором для современного интерьера, выполненного в стиле модерн. Такая мебель станет изюминкой даже самого модного дизайна дома.  ",
    }
];
function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + 'm')) {
            return cookie.substring(cookieName.lenght + 1);
        }
    }
    return '';
}
class Cart{
  constructor(){
    this.products = []
    this.cartCounter = document.querySelector('.cart-container span')
    this.loadCartFromCookies();
  }
  addItem(productIndex) {
      let productInCart = this.products.find(product => product.productIndex === productIndex);
      console.log("pr",productInCart,productIndex)
      if (productInCart) {productInCart.quanity += 1;
      }else {
        this.products.push({
          productIndex,
          quanity:1
      });
    }
    this.updateCounter()
    this.saveCartToCookies()
  }
  updateCounter() {
    let count = 0
    for (let i = 0;i < this.products.length;i++)  {
      count += this.products[i].quanity
    }
    this.cartCounter.innerHTML = count;
  }
updateQuanity(productIndex, newQuanity) {
  let productInCart = this.products.find(product => productIndex === productIndex)
  if (productInCart) {
    productInCart.quanity = newQuanity;
    if (productInCart.quanity == 0) {
      this.products = this.products.filter(product => product.productIndex !== productIndex)
      
    }
    this.updateCounter();
    this.saveCartToCookies();
  }
}
  saveCartToCookies() {
    let cartJSON = JSON.stringify(this.products);
    document.coookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
  }
  loadCartFromCookies() {
    let cartCookie = getCookieValue('cart')
    if (cartCookie && cartCookie !== '') {
      this.products = JSON.parse(cartCookie);
      this.updateCounter();
    }
  }
  calculateTotal(){
    let total = 0;
    for(let i = 0;i < this.products.lenght;i++){
      total += products[this.products[i].productIndex].price * this.products[i].quanity;
    }
    return total;
  }
}
const cart = new Cart();

function getProductCart(product){
  return `<article class="item">
  <img src="${product.image}">
  <h2>${product.title}</h2>
  <p class="item-desc">${product.description}</p>
  <p class="item-price">${product.price}</p>
  <button class="item-buy">
      Купити
  </button>
</article>`
}
function printProducts(_products) {
  let localProducts = _products || products
  let itemsContainer = document.querySelector(".items");

  itemsContainer.innerHTML = "";
  if(!localProducts.length) {
    itemsContainer.innerHTML = "<h1> Товар не найден</h1>";
     return;
  }

  for(let i = 0;i < localProducts.length;i++){
    itemsContainer.innerHTML += getProductCart(localProducts[i]);
  }
  let buyButtons = document.querySelectorAll(".item-buy");
  console.log(buyButtons)
  for(let i = 0;i < buyButtons.length;i++) {
    buyButtons[i].addEventListener("click",() => cart.addItem(i))
  }
}

  printProducts();

  let search = document.querySelector(".search");

function onSearch(event){
  let localProducts = products.filter(product =>
  product.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

  printProducts(localProducts);
}
search.addEventListener("change",onSearch)
 
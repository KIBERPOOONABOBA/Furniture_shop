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
    this.loadCartFromCookies
  }
  addItem(productIndex) {
    let productInCart = this.products.find(product => product.productIndex === product)
    if (productInCart) {productInCart.quanity += 1;
    }else {
      this.products.push({
       productsIndex,
quanity:1
      )};
  }
this.updateCounter()
  this.saveCartToCookies()
}

uptadeCounter() {
let count = 0
for (let i = 0;i < this.products.lenght;i++)  {
  count += this.products[i].quanity
}
this.cartCounter.innerHTML = count;
uptadeQuanity(productIndex, newQuanity) {
  let productInCart = this.products.find(product => productIndex === productIndex)
  if (productInCart) {
    productInCart.quanity = newQuanity;
    if (productInCart.quanity == 0) {
      this.products = this.products.filter(product => product.productIndex !== productIndex)
    }
  }
}
}

const menuEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsConteiner = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailClose.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClose=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
   
}
function toggleCarritoAside(){
   
    const ismobileMenuClose=mobileMenu.classList.contains('inactive');
   
    if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive')
    }

    const isdesktopMenuClose=desktopMenu.classList.contains('inactive');
   
    if(!isdesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }


    const isProductDetailClose=productDetailContainer.classList.contains('inactive');
   
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive')
    }


    shoppingCartContainer.classList.toggle('inactive');
  
}


function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive')

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')

}
const productList =[];

productList.push({
    nombre: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    nombre: 'Carro',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for(product  in productList){
    console.log(product)
}

function renderProducts(arr){
    for(product  of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg=document.createElement('img');
     
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText='$ '+product.price;
        const productName = document.createElement('p');
        productName.innerText=product.nombre;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
     
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsConteiner.appendChild(productCard);
     
     }
}

renderProducts(productList);




    



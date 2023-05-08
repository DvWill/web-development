const product = [
    {
        id: 0,
        image: 'img/main4.png',
        title: 'Tenis Tesla',
        price: 549,
    },
    {
        id: 1,
        image: 'img/main5.png',
        title: 'Tenis Adidas Adi2000',
        price: 1000,
    },
    {
        id: 2,
        image: 'img/main6.webp',
        title: 'Tenis Louis Viutton - LV Trainer',
        price: 9149,
    },
    {
        id: 3,
        image: 'img/main1.png',
        title: 'Tenis Nike Dunk Low Retro "UCLA"',
        price: 1199,
    },
    {
        id: 4,
        image: 'img/main2.png',
        title: 'Tenis Nike Dunk Low Retro',
        price: 1049,
    },
    {
        id: 5,
        image: 'img/main3.png',
        title: 'Tenis Nike Dunk Low Pro SB - Gulf',
        price: 1249,
    },
];
const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>R$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Adicionar ao Carrinho</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
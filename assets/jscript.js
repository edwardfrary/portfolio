var
price = 0,
x = 0,
y = 0,
z = 0,
burger = 3,
cburger = 3.5,
hotdog = 2.5;

function buyBurger(){
    x = burger;
}

function buyCburger(){
    x = cburger;
}

function buyHotdog(){
    x = hotdog;
}

function clearMain(){
    x = 0;
}

function clearSide(){
    y = 0;
}

function clearDrink(){
    z= 0;
}

function purchases() {
    price = x + y + z;
    document.getElementById("price").value ="$ " + price.toFixed(2);
    console.log(price);
    return price;
}
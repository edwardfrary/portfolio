var
money = 0,
price = 0,
x = 0,
y = 0,
z = 0,
burger = 3,
cburger = 3.5,
hotdog = 2.5,
fries = 2.5,
salad = 3,
chips = 2,
soda = 2.5,
dietsoda = 2.5,
water = 2;

function buyBurger(){
    x = burger;
    purchases();
}

function buyCburger(){
    x = cburger;
    purchases();
}

function buyHotdog(){
    x = hotdog;
    purchases();
}

function clearMain(){
    x = 0;
    purchases();
}

function buyFries(){
    y = fries;
    purchases();
}

function buySalad(){
    y = salad;
    purchases();
}

function buyChips(){
    y = chips;
    purchases();
}

function clearSide(){
    y = 0;
    purchases();
}

function buySoda(){
    z = soda;
    purchases();
}

function buyDietSoda(){
    z = dietsoda;
    purchases();
}

function buyWater(){
    z=water;
    purchases();
}
function clearDrink(){
    z= 0;
    purchases();
}

function purchases() {
    price = x + y + z;
    document.getElementById("price").value ="$ " + price.toFixed(2);
    console.log(price);
    return price;
}

function buy() {
    money = money - price;
    document.getElementById("currentmoney").value = "$ " + money.toFixed(2);
}
function addMoney(){
    money = money + 5;
    document.getElementById("currentmoney").value = "$ " + money.toFixed(2);
}
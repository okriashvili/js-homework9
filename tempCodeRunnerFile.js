var stock = {
    weight : "2კგ",
    quantity : "1000",
    price : "25 ლარი",
    photo : "რაღაც ფოტო"
};
var x = stock.quantity;

function onStock() {

    if(stock.quantity === 0 ){
        console.log("მარაგი ამოიწურა");
    }else{console.log("მარაგში არის" + x + "პროდუქტი");
        };
};
onStock()
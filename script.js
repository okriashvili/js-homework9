// ობიექტების დავალება !!!!!!!!!!!!!!
// დავალება 1: შექმენით ობიექტი გასაღებებით 1-დან 12-მდე და თვეების დასახელებების მნიშვნელობებით. მიღებული
// ობიექტი კონსოლზე გამოიტანეთ.
var months = {
    1 : "january",
    2 : "february",
    3 : "march",
    4 : "april",
    5 : "may",
    6 : "june",
    7 : "jule",
    8 : "august",
    9 : "september",
    10 : "october",
    11 : "november",
    12 : "december",
}
console.log(months);


// დავალება 2:
// შექმენით ობიექტი person, რომლის გასაღებები იქნება 'სახელი', 'გვარი' და 'გენდერი'. მათი მნიშვნელობები
// თქვენ თვითონ განსაზღვრეთ. ეკრანზე გამოიტანეთ სახელი გვარის და გენდერის მნიშვნელობები ერთ
// სტრინგში. სიტყვები ერთმანეთს დააცილეთ და გენდერი ფრჩხილებში ჩასვით.
// მაგ: 'ნატო შონია (მდედრობითი)'
var person = {
    saxeli : "მალხაზ",
    gvari : "ოქრიაშვილი", 
    sqesi : "მამრობითი",
}
console.log(person.saxeli + " " + person.gvari + " " + "(" + person.sqesi + ")");


// დავალება 3: შექმენით ობიექტი date, რომლის გასაღებები იქნება day, month და year. 
// მათ მნიშვნელობებად მიმდინარე თარიღი განსაზღვრეთ. ეკრანზე გამოიტანეთ ეს თარიღი.
var ricxvi = new Date();
var date = {
    day : ricxvi.getDate(),
    month : ricxvi.getMonth() + 1,
    year : ricxvi.getFullYear(),
} 
console.log(date.day + '/' + date.month + '/' + date.year);


// დავალება 4: წარმოდგენილ კოდში აღმოაჩინეთ შეცდომა:
// let obj = {11key: 'მნიშვნელობა1', key-8: 'მნიშვნელობა2', key4: 'მნიშვნელობა3'};

// პასუხი : 11key და key-8 უნდა იყვნენ მოქცეული ფრიჩხილებში= "11key" და "key-8 / key_8"
// სინტაქსურად რიცხვით გასღების მნიშვნელობის დაწყება არ შეიძლება, ისევე როგორც არ შეიძლება ტირეს გამოყენება, მაგრამ შესაძლოა ქვდა ტირე გამოვიყენიოთ key_8



// დავალება 5: წარმოდგენი კოდში რომელ გასაღებს არ სჭირდება ბრჭყალებში ჩასმა?
/** 
let obj = {
    '9name': 10,
    'key7': 20,
    'a-b': 30,
    'city 10': 40,
    'city10': 50
    };
 * */ 
// პასუხი: key7 - city10 ეს ორი გასაღები შეგვიძლია ბრჭყალების გარეშე დავწეროთ


// დავალება 6: მოცემულია ობიექტი products. ამ ობიექტის ყველა ელემენტი, რომლის მნიშვნელობაა 'მარწყვი' შევცვალოთ მნშვნელობით 'ალუბალი'.
let products = {
    pr1: 'ბანანი',
    pr2: 'მარწყვი',
    pr3: 'მსხალი',
    pr4: 'მარწყვი',
    pr5: 'ატამი',
    pr6: 'საზამთრო',
    pr7: 'მარწყვი',
    set setName(change) {
        this.pr2,p4,p7;
    }
}
for( var key in products) {
    if(products[key] === "მარწყვი") {
        products[key] = "ალუბალი";
    }
}
console.log(products);


// დავალება 7: მოცემულია ობიექტი car. კონსოლზე გამოიტანეთ ამ ობიექტის მწარმოებელი (manufacturer) და ფერი.
const car = {
    model: {
        manufacturer: "BMW",
        mark: "X6",
    },
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5,
};
console.log(car.model.manufacturer + "  " + car.color);


// დავალება 8:წინა დავალებაში მოცემული car ობიექტის ფერი შეცვალეთ "white"-თი, ხოლო მარჯვენასაჭიანობა შეცვალეთ მარცხენასაჭიანობით
const newCar = {
    model: {
        manufacturer: "BMW",
        mark: "X6",
    },
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5,
    set setColor(changeColor) {
        this.color = changeColor
    },
    set setWheel(changeWheel) {
        this.is_left_hand_drive = changeWheel
    }
    
};
    newCar.setColor = "white";
    newCar.setWheel = true;
console.log(newCar);
   

// დავალება 9: მოცემული ობიექტის ყველა ელემენტის მნიშვნელობა აახარისხეთ კვადრატში.
let obj = {
    a: 7, 
    b: 8, 
    c: 9,
};

for(var key in obj) {
    console.log(Math.pow(obj[key], 2));
}


// დავალება 10: მოცემულია ობიექტი book. კონსოლზე ჯერ გამოიტანეთ ამ ობიექტის გასაღებების მასივი, შემდეგ ამ ობიექტისმნიშვნელობების მასივი.
var book = {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    publisher: "O'Reilly Media",
    year_of_publication: 2011,
};
for(var key in book) {
    console.log("ამ ობიექტის გასაღებების მასივი -" + key + '/' + "ამ ობიექტისმნიშვნელობების მასივი" + book[key]);
} 


// დავალება 11: მოცემულია ორი ობიექტი book და year. ოპერატორი ... spread–ის საშუალებით გააერთიანეთ ეს ორი ობიექტი
// ერთ ობიექტში mergeBook –ში და გამოიტანეთ კონსოლზე.
var book = {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
};
var year = {
    year_of_publication: 2011,
};
const mergeBook = {...book, ...year}
console.log(mergeBook);


// დავალება 12: მოცემულია ობიექტი user. დესტრუქტურიზაციით (destructuring of objects) გამოაცხდეთ ცვლადები 
// username დაpassword და კონსოლზე გამოიტანეთ მათი მნიშვნელობები.
const user = {
    userName : "superadmin",
    password: "Godzilla",
}
var {userName, password} = user
console.log(userName);
console.log(password);


// დავალება 13: დაწერეთ ისრული ფუნქცია canEnrollToCourse, რომელსაც გადაეცემა ობიექტი student, (სტუდენტის სახელი და
// გადახდილი თანხა). ფუნქციამ უნდა დააბრუნოს true თუ გადახდილი თანხა 1125 ლარის ტოლია ან მეტია.
// წინააღმდეგ შემთხვევაში უნდა დააბრუნოს false.

const canEnrollToCourse = (student) => student.paydVolum > 1125
const student = {
    studentName : "პეტრე მგელაძე",
    paydVolum: 700,
};
console.log(canEnrollToCourse(student));


//დავალება 14 : დაწერეთ ისრული ფუნქცია getTotalAmount, რომელსაც გადაეცემა ობიექტი purchases. 
// ფუნქციამ უნდადააბრუნოს გადახდილი თანხების ჯამი.
const purchases = {
 foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
 amountPaid: [4, 6, 4, 12, 15],
 date: "27/11/2021"
};
var payment = purchases.amountPaid.reduce( function (a, b){
    return a + b
}) 
console.log(payment);


// დავალება 15: დაწერეთ ისრული ფუნქცია getFullModelOfCar, რომელსაც გადაეცემა car ობიექტი და დააბრუნებს
// ავტომობილის მოდელის სრულ დასახელებას manufacturer.name-ისა და model-ის გათვალისწინებით.
const auto = {
    manufacturer: {
        name: "BMW",
        location: "Munich, Germany",
        year_of_establish: 1916,
    },
    model: "X6",
    color: "black",
    is_left_hand_drive: false,
    number_of_doors: 5
};
const getFullModelOfCar = function(auto) {
    return auto.manufacturer.name + " " + auto.model
}
console.log(getFullModelOfCar(auto));


// დავალება 16: დაწერეთ ფუნქცია getTotalPrice, რომელიც დააბრუნებს ობიექტი purchases-ის საყიდლების ჯამურ ფასს.
const  getTotalPrice = (purchases) => {
    return purchases.reduce((sum, item) => sum + item.price, 0);
};
const purchase = [
    {item: "hammer", price: 22},
    {item: "screwdriver",price: 17},
    {item: "nails", price: 8}]
console.log(getTotalPrice(purchase));


// დალავება 17: დაწერეთ ფუნქცია getAveragePrice, რომელიც დააბრუნებს ობიექტი purchases-ის (წინა დავალების მიხედვით)საყიდლების საშუალო ფასს.
const  getAvaragePrice = (purchase) => {
    return purchase.reduce((sum, item) => sum + item.price, 0);
};
const purchas = [
    {item: "hammer", price: 22},
    {item: "screwdriver",price: 17},
    {item: "nails", price: 8}]
var avarage = getAvaragePrice(purchas) / 3
console.log(avarage);

document.write("დავალება 18 - " + "<br>")
// დავალება 18: შექმენით პროდუქტის ობიექტი product, რომელსაც ექნება შემდეგი თვისებები: weight, quantity, price, photo.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის ყველა key.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის ყველა value.
// Html დოკუმენტში დავბეჭდოთ პროდუქტის ობიექტის key და value ერთად. 
var product = {
    weight : "2კგ",
    quantity : "1000",
    price : "25 ლარი",
    photo : "რაღაც ფოტო",
};
for(var key in product) {
    document.write(key + "<br>" + product[key] + "<br>");
};


document.write( "<br>" + "დავალება 19 - ")
//დაცალება 19: მოცცმულია ობიექტი person. გადაწერეთ ეს ობიექტი და დაუმატეთ მეთოდი sayHello, რომელიც ეკრანზე
// გამოიტანს სტრინგს 'გამარჯობა X', სადაც X წარმოადგენს ობიექტი person–ის სახელს.
let women = {
 firstName: "ნათია",
 age: 30,
};
var x = women.firstName;
function sayHello() {
    document.write("გამარჯობა" + " " + x);
    return;
};
sayHello();


document.write( "<br>" + "დავალება 20 - " + "<br>")
// დავალება 20: შექმენით პროდუქტის ობიექტი product, რომელსაც ექნება შემდეგი თვისებები: weight, quantity, price, photo და
// მეთოდი (ფუნქცია) onstock, რომელიც დაადგენს არის თუ არა მარაგში პროდუქტი – თუ რაოდენობა (quantity)
// უდრის 0, მაშინ Html დოკუმენტში დაბეჭდეთ 'მარაგი ამოიწურა', თუ მეტია 0–ზე, Html დოკუმენტში დავბეჭდოთ
// 'მარაგში არის X პროდუქტი', სადაც X არის პროდუქტის რაოდენობა.
// მოცემული ინფორმაცია გამოიტანეთ html ში bootstrap card მეშვეობით
var stock = {
    weight : "2კგ",
    quantity : "1000",
    price : "25 ლარი",
    photo : "რაღაც ფოტო"
};
var x = stock.quantity;;
function onStock() {
    if(stock.quantity === 0 ){
        document.write("მარაგი ამოიწურა");
    }else{document.write("მარაგში არის" + " " + x + " " + "პროდუქტი");
        };
};
onStock()



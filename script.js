let title = "Наушники";
let price = 1500;      
let discount = 10;    
let rating = 4.5;      
let inStock = true;    


let finalPrice = price - (price * discount / 100);


let stockText = inStock ? "В наличии" : "Нет в наличии";

console.log(`Название: ${title}`);
console.log(`Цена без скидки: ${price}`);
console.log(`Скидка: ${discount}%`);
console.log(`Итоговая цена: ${finalPrice}`);
console.log(`Рейтинг: ${rating}/5`);
console.log(`Наличие: ${stockText}`);

console.log("Типы (typeof):");
console.log("title →", typeof title);
console.log("price →", typeof price);
console.log("discount →", typeof discount);
console.log("rating →", typeof rating);
console.log("inStock →", typeof inStock);

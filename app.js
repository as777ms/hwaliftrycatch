function convert(a){
    let array = a.map((el, arr)=>{
        return el.toUpperCase()
    })
    return array
}
console.log(convert(["Hello", "World"]))


//2
function calculate(arr){
    let array = arr.map((el, arr)=>{
        if(typeof el === 'number'){
            return el+1
        }
        else{
            return el
        }
    }) 
    return array
}
console.log(calculate(["Anisa", 10]))


//2
function calculate(arr){
    return arr.map((el)=>(
    {
        name: el.name,
        age: el.age+1
    }
    ))
}
console.log(calculate([{name: "Anisa", age: 10}, {name: "Human", age: 1000}]))


//3
function numbersSquer(arr){
    return arr.map((el)=>{
        return el*el
    })
}
console.log(numbersSquer([1,2,3,4]))


//4
function logelEments(arr){
    return arr.forEach((el)=>{
         console.log(el)
     })
}
console.log(logelEments([1,2,3,4]))


//5
function summ(arr){
    let cnt = 0
    arr.forEach((el)=>{
        cnt += el
    })
    return cnt
}
console.log(summ([1,2,3,4,5]))

//6
function priceProduct(arr){
    let cnt = 0
    arr.forEach((el)=>{
        cnt += el.price *1.10
        console.log(cnt)
    })
    return cnt
}
(priceProduct([{ name: "Product A", price: 100 },{ name: "Product B", price: 200 },{ name: "Product C", price: 300 }]))


//7
function parseJSON(jsonString) {
    try {
        const parsedObject = JSON.parse(jsonString);
        return parsedObject;
    } catch (error) {
        return `Ошибка при парсинге JSON: ${error.message}`;
    }
}
console.log(parseJSON('{"name": "John",}')); 



//8
function getProperty(obj, propertyName) {
    try {
        if (propertyName in obj) {
            return obj[propertyName];
        } else {
            throw new Error(`Свойство "${propertyName}" не существует в объекте.`);
        }
    } catch (error) {
        return error.message;
    }
}
const exampleObject = { name: "John", age: 30 };
console.log(getProperty(exampleObject, 'name')); 

//9
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно.");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(divideNumbers(10, 2));
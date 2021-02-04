let bonus = 3;
function add(num1, num2){
    let result = num1 + num2 +bonus;
    if(result>10){
        var mood = "cold";
        
    }
    console.log(mood);
    console.log(bonus);
    return result;
    
    
}
const output = add(4,23);
console.log(bonus);
console.log(output);
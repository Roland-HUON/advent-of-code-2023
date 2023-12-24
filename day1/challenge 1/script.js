let element = document.querySelector('body'); // replace 'selector' with your CSS selector
let content = element.innerHTML; // gets the content of the element
let lines = content.split('\n'); // splits the content into lines
let output = [];
let total=[];
for (let line of lines) { // iterates over each line
    let output=[];
    let numbers = line.match(/\d+/g) || [];// gets all numbers in the line
    var Snumbers = numbers.toString();
    for (var i = 0, len = Snumbers.length; i < len; i += 1) {
        output.push(+Snumbers.charAt(i));
    }
    let result;
    if (output.length > 1) {// if there are more than 1 numbers
        console.log(output);
        result = output[0]*10 + output[output.length-1];
        total.push(result);
    } else if (output.length === 1) {// if there is only 1 number
        result = output[0]*10 + output[0];
        total.push(result);
    } else {// if there are no numbers
        result = 0;
        total.push(result);
    }
    console.log(result);
}
console.log(total);
for (var i = 0, sum = 0; i < total.length; sum += total[i++]){
    console.log(sum);
}
// total.forEach((element)=>{
//     total2+=element;
// });
// console.log("Le tout est égale à : "+total2);

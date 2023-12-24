let element = document.querySelector('body'); // replace 'selector' with your CSS selector
let content = element.innerHTML;
let lines = content.split('\n');
for (let line of lines) {
    let numbers = line.match(/\d+/g) || [];
    let result;
    if (numbers.length > 1) {
        console.log(numbers);
        result = numbers[0] + numbers[numbers.length-1];
    } else if (numbers.length === 1) {
        result = numbers[0];
    } else {
        result = '';
    }
    console.log(result);
}
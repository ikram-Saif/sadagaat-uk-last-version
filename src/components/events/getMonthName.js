export function getMonthName(d) {

    const date = new Date(d);
    const month = date.toLocaleString('en-US', { month: 'short' });
   console.log(month);
return month
}
export function getNumberWithComma(num) {

    const number = num.toLocaleString('en-US', { style: 'currency', currency: 'SDG' });
//    console.log(number);
return number
}
export function getNumber(num) {

    const number = num.toLocaleString('en-US');
//    console.log(number);
return number
}
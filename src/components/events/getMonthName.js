export function getMonthName(d) {

    const date = new Date(d);
    const month = date.toLocaleString('en-US', { month: 'short' });
   console.log(month);
return month
}
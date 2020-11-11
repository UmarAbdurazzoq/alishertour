var dollarExchangeRate = 9433.34, 
    yevroExchangeRate = 10354.03;

var personBudget = parseInt (prompt("Alisher, hisobingni krit"), 10);
var answer = document.querySelector(".answer");

 
var airplane = 500 * dollarExchangeRate,
    hotel = 250 * dollarExchangeRate,
    other = 120 * yevroExchangeRate;
var spend = airplane + hotel + other;

var difference = spend - personBudget;

if (spend <= personBudget) {

  answer.textContent = `BU yil puling yetdi Alisher oq yo'l! ;)`;
} else {
  answer.textContent = `Alisher keyingi yil ko'proq pul yeg'ib kelarsan :(  ${difference}  so'm yetmayapdi`;
}
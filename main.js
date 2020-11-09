var dollarKurs = 9433.34, 
    yevroKurs = 10354.03;

var personBudget = parseInt (prompt("Alisher, hisobingni krit"), 10);
var answer = document.querySelector(".answer");

 
var airplane = 500 * dollarKurs,
    hotel = 250 * dollarKurs,
    other = 120 * yevroKurs;
var spend = airplane + hotel + other;

var difference = spend - personBudget;

if (spend <= personBudget) {

  answer.textContent = `BU yil puling yetdi Alisher oq yo'l! ;)`;
} else {
  answer.textContent = `Alisher keyingi yil ko'proq pul yeg'ib kelarsan :(  ${difference}  so'm yetmayapdi`;
}
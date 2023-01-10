// Declaring variables
const cardHolder = document.getElementById("name");
const btn = document.getElementById("btn");
const cardNumber = document.getElementById("number");
const h3 = document.querySelector("h3");
const caution = document.getElementById("caution");
const caution1 = document.getElementById("caution1");
const secondPage = document.querySelector(".second-page");
const firstPage = document.getElementById("article");
const expDate = document.getElementById("exp");
const cantBlank = document.getElementById("blank-exp");
const mmYy = document.getElementById("mm/yy");
const cvc = document.getElementById("cvc");
const wrongCvc = document.getElementById("wrongCvc");
const btn2 = document.getElementById("btn2");
const theName = document.getElementById("the-name");
const liveCvc = document.getElementById("live-cvc");
const liveDate = document.getElementById("live-date");
const append = document.getElementById("container-second-page");
// Regexes
let myRegex = /^\d{4} \d{4} \d{4} \d{4}$/g;
let myRegex1 = /^[A-Z a-z]+$/g;
// live inputs
cardNumber.oninput = () => {
  return (h3.innerHTML = `<h3>${cardNumber.value}</h3>`);
};
cardHolder.oninput = () => {
  let arr = cardHolder.value.split("");
  let x = arr.map((e) => e.toUpperCase());
  return (theName.innerHTML = `<p>${x.join("")}</p>`);
};
cvc.oninput = () => {
  return (liveCvc.innerHTML = `<span>${cvc.value}</span>`);
};
function ab(a, b) {
  a.oninput = () => {
    liveDate.innerHTML = `<span>${a.value}/${b.value}</span>`;
  };
  b.oninput = () => {
    liveDate.innerHTML = `<span>${a.value}/${b.value}</span>`;
  };
}
ab(expDate, mmYy);
// btn control and conditisons using if statement
btn.onclick = (e) => {
  if (!cardHolder.value.match(myRegex1)) {
    cardHolder.style.border = "1px solid hsl(0, 100%, 66%)";
    caution.style.visibility = "visible";
    return e.preventDefault();
  } else if (!cardNumber.value.match(myRegex)) {
    cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
    caution1.style.visibility = "visible";
    return e.preventDefault();
  } else if (expDate.value == 0) {
    cantBlank.style.visibility = "visible";
    expDate.style.border = "1px solid hsl(0, 100%, 66%)";
    return e.preventDefault();
  } else if (mmYy.value == 0) {
    cantBlank.style.visibility = "visible";
    mmYy.style.border = "1px solid hsl(0, 100%, 66%)";
    return e.preventDefault();
  } else if (cvc.value == 0) {
    cantBlank.style.visibility = "visible";
    cvc.style.border = "1px solid hsl(0, 100%, 66%)";
    return e.preventDefault();
  } else if (cvc.value > 999 || cvc.value < 100) {
    wrongCvc.style.visibility = "visible";
    cvc.style.border = "1px solid hsl(0, 100%, 66%)";
    return e.preventDefault();
  } else {
    firstPage.style.display = "none";
    append.append(secondPage);
    secondPage.style.display = "flex";
    return e.preventDefault();
  }
};
// add whiteSpace and romove it
cardNumber.addEventListener("keydown", function (e) {
  const txt = this.value;
  if (
    (txt.length == 4 || txt.length == 9 || txt.length == 14) &&
    e.which !== 8
  ) {
    this.value = this.value + " ";
  }
});
// btn2 refresh the page
btn2.addEventListener("click", () => {
  firstPage.style.display = "flex";
  secondPage.style.display = "none";
  return window.location.reload();
});
// End

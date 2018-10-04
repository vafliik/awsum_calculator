let error = document.getElementsByName("error")[0];
let text = error.innerText;
let num1_input = document.getElementsByName("num1")[0];
let num2_input = document.getElementsByName("num2")[0];
let sum_btn = document.getElementsByClassName("button_small")[0];
let sum_field = document.getElementsByName("sum")[0];

//Intentional console log message - will they spot it?
console.log("I hate my job and my boss!");

num2_input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        //MUHAHAHAHAHAHAHA
        clearInput();
    }
});

async function calcSum() {
    //Make the button permaclicked
    sum_btn.classList.add("clicked")

    //wait for no reason
    await sleep(1500);

    let num1 = num1_input.value;
    let num2 = num2_input.value;
    if (num2.includes(" ")) {
        throw "Uncaught exception in num2!";
    }
    let sum = Number(num1) + Number(num2);
    if (sum > 1000) {
        sum = 1000;
    }

    if (num1 == num2) {
        sum = num1;
    }
    if (isNaN(sum)) {
        error.innerText = "General error";
    }
    sum_field.value = sum;

}

function clearInput() {
    sum_btn.classList.remove("clicked")
    num1_input.value = "";
    num2_input.value = "";
    error.innerText = text
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
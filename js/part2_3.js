
let length = 0, stack = [];

let noOfButtons = document.querySelectorAll("button").length;

for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        let value = document.querySelector("input").value;

        if (buttonInnerHTML === "Push") {
            pushToStack(value);
        } else if (buttonInnerHTML === "Pop") {
            popFromStack();
        }
    })
}

function displayStack() {
    let setStack = "";
    for (let i = 0; i < length; i++) {
        setStack += stack[i] + " ";
    }
    document.getElementById("array").textContent = "Stack: " + setStack;
};

function pushToStack(value) {
    stack[length] = value;
    length++;
    displayStack();
}

function popFromStack() {
    length--;
    displayStack();
}





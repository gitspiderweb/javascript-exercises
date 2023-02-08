
let length = 0, queue = [];
let remaining = 0;

let noOfButtons = document.querySelectorAll("button").length;

for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        let value = document.querySelector("input").value;

        if (buttonInnerHTML === "Push") {
            pushToQueue(value);
        } else if (buttonInnerHTML === "Pop") {
            popFromQueue();
        }
    })
}

function displayQueue() {
    let setQueue = "";
    for (let i = remaining; i < length; i++) {
        setQueue += queue[i] + " ";
    }
    document.getElementById("array").textContent = "Queue: " + setQueue;
};

function pushToQueue(value) {
    queue[length] = value;
    length++;
    displayQueue();
}

function popFromQueue() {
    remaining++;
    displayQueue();
}





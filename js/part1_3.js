let n = 5;
let string = "";

//initialize table
const table = document.getElementById("table");


// Pyramid
for (let i = 1; i <= n; i++) {
    let multiple = 0;
    //initialize table row
    const tRow = table.insertRow();

    for (let k = 1; k <= i; k++) {
        //initialize table cell
        const cell = tRow.insertCell();
        cell.classList.add("no-border");
        multiple += i;
        cell.innerHTML = multiple;
    }

}
// Reverse Pyramid
for (let i = n - 1; i >= 1; i--) {
    //initialize table row
    const tRow = table.insertRow();
    let multiple = 0;
    for (let k = i; k >= 1; k--) {
        //initialize table cell
        const cell = tRow.insertCell();
        cell.classList.add("no-border");
        multiple += i;
        cell.innerHTML = multiple;
    }

}

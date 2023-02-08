//initialize table
const table = document.getElementById("table");



for (let i = 1; i <= 6; i++) {
    //initialize table row
    const tRow = table.insertRow();
    let multiple = i;
    //initialize table cell
    const cell = tRow.insertCell();
    cell.classList.add("no-border");
    cell.innerHTML = i;

    for (let j = 1; j < 5; j++) {
        //initialize table cell
        const cell = tRow.insertCell();
        cell.classList.add("no-border");
        multiple *= i + 1;
        cell.innerHTML = multiple
    }

}

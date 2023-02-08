//initialize table
const table = document.getElementById("table");

for (let row = 0; row <= 10; row++) {
    let value = 0;

    //initialize row
    const tRow = table.insertRow();

    for (let column = 10; column >= 0; column--) {
        //initialize cell
        const cell = tRow.insertCell()
        cell.classList.add("no-border");;
        if (row === column || row + column === 10) {
            row <= 5 ? value = 6 - row : value = row - 4;
            row % 2 === 0 ? cell.innerHTML = "*" : cell.innerHTML = value;
        }
        else {
            cell.innerHTML = " ";
        }
    }

}


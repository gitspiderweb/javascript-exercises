//letter equivalent object
const oddEven = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k'
};

//initialize table
const table = document.getElementById("table");

for (let row = 0; row < 2; row++) {
    //initialize table row
    const tRow = table.insertRow();

    for (let column = 0; column <= 10; column++) {
        //initialize table cell
        const cell = tRow.insertCell();
        if (row === 0) {
            //put letter value
            cell.innerHTML = oddEven[column];
        } else {
            //put number value
            cell.innerHTML = column;
        }
    }
}


for (let rows = 0; rows < 4; rows++) {

    const table = document.getElementById("table-random");
    const row = table.insertRow();

    for (let columns = 0; columns < 5; columns++) {
        const cell = row.insertCell();
        //generate random number
        let randomNum = Math.floor(Math.random() * 10 + 1);

        if (randomNum % 2 === 0) {
            //highlight character
            let string = oddEven[randomNum];
            cell.innerHTML = string.toUpperCase();
            cell.classList.add("highlight");
        } else {
            cell.innerHTML = oddEven[randomNum];
        }
    }
}

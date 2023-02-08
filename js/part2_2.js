let arr = [];
let array2d = [];
let current = 0;

//generate unique random numbers
while (arr.length < 16) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
//map to 2d array
for (let rows = 0; rows < 4; rows++) {
    let rowValues = [];
    for (let columns = 0; columns < 4; columns++) {
        rowValues.push(arr[current++]);
    }
    array2d.push(rowValues);
}
console.log(array2d);

//access table
const table = document.getElementById("table-random");

let rowSum = [0, 0, 0, 0];
let colSum = [0, 0, 0, 0];
for (let tRow = 0; tRow <= 4; tRow++) {
    //create a row
    const row = table.insertRow();
    for (let tCol = 0; tCol <= 4; tCol++) {
        const cell = row.insertCell();

        if (tCol === 4) {
            if (rowSum[tRow] != undefined)
                cell.innerHTML = rowSum[tRow];
            cell.classList.add("no-border");
        } else if (tRow === 4) {
            if (colSum[tCol] != undefined)
                cell.innerHTML = colSum[tCol];
            cell.classList.add("no-border");
        } else {
            //create a cell 
            rowSum[tRow] += array2d[tRow][tCol];
            colSum[tCol] += array2d[tRow][tCol];
            //fill cell data

            cell.innerHTML = array2d[tRow][tCol];
        }

    }
}






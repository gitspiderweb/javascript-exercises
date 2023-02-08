//initialize string
let string = "";

//initialize table
const table = document.getElementById("table");


for (let rows = 0; rows <= 6; rows++) {
    //generate table rows
    const tRow = table.insertRow();

    for (let columns = 0; columns <= 6; columns++) {
        //generate table cell
        const cell = tRow.insertCell();
        cell.classList.add("no-border");
        //all row-column (starting from row[0], col[0]) that add up to 3 || 9 are marked with asterisk
        let addRowColumn = rows + columns;
        // all row-column (starting from row[0], col[0]) that with difference of 3 || -3 are marked with asterisk
        let subtractRowColumn = rows - columns;
        //generate the pipe character in the middle
        if (columns === 3) {
            string += ' | ';
            cell.innerHTML = "|";
        } else if (addRowColumn === 3 || addRowColumn === 9 || subtractRowColumn === 3 || subtractRowColumn === -3) {
            string += " * ";
            cell.innerHTML = "*"
        } else {
            //add white space
            string += "   ";
            cell.innerHTML = "";
        }
    }
    //new line
    string += "\n";
}
//print pattern
console.log(string);
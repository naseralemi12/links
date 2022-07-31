//@ts-check
let addButton = document.getElementById('addButton');
let saveButton = document.getElementById('saveButton');
let dialog = document.querySelector('dialog');
let cancelButton = document.getElementById('cancelButton');
let deleteDialog = document.getElementById('deleteDialog');
let currentRow = null;

addButton.addEventListener('click', () => {
    if (typeof dialog.showModal === "function") {
        dialog.showModal();
    }
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

onFormSubmit = () => {
    let dialogInput = {};
    dialogInput.title = document.getElementById("title").value;
    dialogInput.date = document.getElementById("date").value;
    dialogInput.summary = document.querySelector("textarea").value;
    if (currentRow == null) {
        let table = document.getElementById("blogList").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = dialogInput.title;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = dialogInput.date;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = dialogInput.summary;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<a onClick="onEdit(this)"><img src="edit.png" width="20px" height="20px" alt="Edit" /></a>
                       <a onClick="onDelete(this)"><img src="delete.png" width="20px" height="20px" alt="Delete"/></a>`;
    } else {
        selectedRow.cells[0].innerHTML = dialogInput.title;
        selectedRow.cells[1].innerHTML = dialogInput.date;
        selectedRow.cells[2].innerHTML = dialogInput.summary;
    }
    resetForm();
}

resetForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.querySelector("textarea").value = "";
    selectedRow = null;
}

onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.querySelector("textarea").value = selectedRow.cells[2].innerHTML;
    dialog.showModal();
}

onDelete = (td) => {
    deleteDialog.showModal();
    deleteDialog.addEventListener("close", function() {
        if (deleteDialog.returnValue === 'Delete') {
            row = td.parentElement.parentElement;
            document.getElementById("blogList").deleteRow(row.rowIndex);
            resetForm();
        }
    });
}
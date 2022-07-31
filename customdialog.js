let alertBtn = document.getElementById('alertButton');
let alertBox = document.getElementById('alertBox');
let confirmBtn = document.getElementById('confirmButton');
let confirmBox = document.getElementById('confirmBox');
let promptBtn = document.getElementById('promptButton');
let promptBox = document.getElementById('promptBox');

alertBtn.addEventListener('click', () => {
    if (typeof alertBox.showModal === "function") {
        alertBox.showModal();
        document.getElementById('confirmMsg').style.visibility = "hidden";
    }
});

promptBtn.addEventListener('click', () => {
    if (typeof promptBox.showModal === "function") {
        promptBox.showModal();
        document.getElementById('confirmMsg').style.visibility = "visible";
    }

});

confirmBtn.addEventListener('click', () => {
    if (typeof confirmBox.showModal === "function") {
        confirmBox.showModal();
        document.getElementById('confirmMsg').style.visibility = "visible";
    }

});

ConfFun = () => {
    document.getElementById("confirmMsg").innerHTML = 'Confirm result: true';
    document.getElementById('confirmMsg').innerHTML = 'Confirm result: true';
    document.getElementById('confirmMsg').style.borderStyle = 'double';
    document.getElementById('confirmMsg').style.width = 'fit-content';
    document.getElementById('confirmMsg').style.padding = '1rem';
}

CancelFun = () => {
    document.getElementById("confirmMsg").innerHTML = 'Confirm result: false';
    document.getElementById('confirmMsg').innerHTML = 'Confirm result: false';
    document.getElementById('confirmMsg').style.borderStyle = 'double';
    document.getElementById('confirmMsg').style.width = 'fit-content';
    document.getElementById('confirmMsg').style.padding = '1rem';
}

TypeName = () => {
    document.getElementById("confirmMsg").innerHTML = document.getElementById("inputBox").value;
    document.getElementById('confirmMsg').innerHTML = document.getElementById("inputBox").value;
    document.getElementById('confirmMsg').style.borderStyle = 'double';
    document.getElementById('confirmMsg').style.width = 'fit-content';
    document.getElementById('confirmMsg').style.padding = '1rem';
}

promptCancelFun = () => {
    document.getElementById("confirmMsg").innerHTML = 'Your name: blank!';
    document.getElementById('confirmMsg').innerHTML = 'Your name: blank!';
    document.getElementById('confirmMsg').style.borderStyle = 'double';
    document.getElementById('confirmMsg').style.width = 'fit-content';
    document.getElementById('confirmMsg').style.padding = '1rem';
}
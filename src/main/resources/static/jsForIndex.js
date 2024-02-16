let tickets = [];
let allfilled = false;
let chooseFilled = false;
let amountFilled = false;
let fNameFilled = false;
let lNameFilled = false;
let telFilled = false;
let emailFilled = false;


function buyTicket() {
    let innChoose = document.getElementById("choose").value;
    let innAmount = document.getElementById("amount").value;
    let innfName = document.getElementById("fName").value;
    let innlName = document.getElementById("lName").value;
    let innTel = document.getElementById("tel").value;
    let innEmail = document.getElementById("email").value;

    if (innChoose === 'Choose movie here...') {
        document.getElementById("chooseError").innerHTML = "<font color=\"red\">"+'Choose a movie'+"</font>";
        innChoose = "";
        document.getElementById("choose").innerHTML = '<option style="display:none">Choose movie here...</option><option>Casablanca</option><option>Fort Apache</option><option>Apocolypse Now</option>';
    }
    else {
        chooseFilled = true;
        document.getElementById("chooseError").innerHTML = "";
    }

    if (isNaN(innAmount) || innAmount === '') {
        document.getElementById("amountError").innerHTML = "<font color=\"red\">"+'Must be a number, and must be filled'+"</font>";
        innAmount = "";
        document.getElementById("amount").value = "";
    }
    else {
        innAmount = document.getElementById("amount").value;
        amountFilled = true;
        document.getElementById("amountError").innerHTML = "";
    }

    if (innfName === '' || isNaN(innfName) === false) {
        document.getElementById("fNameError").innerHTML = "<font color=\"red\">"+'Cannot be a number, and must be filled'+"</font>";
        innfName = "";
        document.getElementById("fName").value = "";
    }
    else {
        innfName = document.getElementById("fName").value;
        fNameFilled = true;
        document.getElementById("fNameError").innerHTML = "";
    }

    if (innlName === '' || isNaN(innlName) === false) {
        document.getElementById("lNameError").innerHTML = "<font color=\"red\">"+'Cannot be a number, and must be filled'+"</font>";
        innlName = "";
        document.getElementById("lName").value = "";
    }
    else {
        innlName = document.getElementById("lName").value;
        lNameFilled = true;
        document.getElementById("lNameError").innerHTML = "";
    }

    if (innTel === '' || isNaN(innTel)) {
        document.getElementById("telError").innerHTML = "<font color=\"red\">"+'Must be a number, and must be filled'+"</font>";
        innTel = "";
        document.getElementById("tel").value = "";
    }
    else {
        innTel = document.getElementById("tel").value;
        telFilled = true;
        document.getElementById("telError").innerHTML = "";
    }

    if (innEmail === '' || isNaN(innEmail) === false) {
        document.getElementById("emailError").innerHTML = "<font color=\"red\">"+'Cannot be a number, and must be filled'+"</font>";
        innEmail = "";
        document.getElementById("email").value = "";
    }
    else {
        innEmail = document.getElementById("email").value;
        emailFilled = true;
        document.getElementById("emailError").innerHTML = "";
    }

    if (chooseFilled && amountFilled && fNameFilled && lNameFilled && telFilled && emailFilled) {
        allfilled = true;
    }

    if (allfilled) {
        const purchasedTicket = {
            choose : innChoose,
            amount : innAmount,
            fname : innfName,
            lname : innlName,
            tel : innTel,
            email : innEmail
        }
        tickets.push(purchasedTicket);
        document.getElementById("choose").innerHTML = '<option style="display:none">Choose movie here...</option><option>Casablanca</option><option>Fort Apache</option><option>Apocolypse Now</option>';
        document.getElementById("amount").value = "";
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";

        let out = "<table><tr>" +
            "<th>Movie</th><th>Amount</th><th>Firstname</th><th>Lastname</th><th>Tel</th><th>Email</th>" +
            "</tr>";

        for (let i=0; i<tickets.length; i++) {
            out += "<tr>";
            out += "<td>"+tickets[i].choose+"</td><td>"+tickets[i].amount+"</td><td>"+tickets[i].fname+"</td><td>"+tickets[i].lname+"</td><td>"+tickets[i].tel+"</td><td>"+tickets[i].email+"</td>";
            out += "</tr>";
        }
        document.getElementById("arrayField").innerHTML = out;
        chooseFilled = false;
        amountFilled = false;
        fNameFilled = false;
        lNameFilled = false;
        telFilled = false;
        emailFilled = false;
        allfilled = false;
    }
}
allfilled = false;

function deleteTickets() {
    tickets = [];
    document.getElementById("arrayField").innerHTML = "";
}
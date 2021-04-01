function menuFunction() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menulinks").style.display = "initial";
    document.getElementById("secondicon").style.display = "initial";
}

function menuFunctionClose() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menulinks").style.display = "none";
}

function sendEmail() {
    var x = document.getElementById("nameinp").value;
    var y = document.getElementById("subinp").value;
    var z = document.getElementById("messinp").value;
    var t = false

    if (x == "") {
        alert("Please fill all the details")
    } else if (y == "") {
        alert("Please fill all the details")
    } else if (z == "") {
        alert("Please fill all the details")
    } else {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "demoflare03@gmail.com",
            Password: "flaredemo1324",
            To: 'hitanshs3433@gmail.com',
            From: "demoflare03@gmail.com",
            Subject: x + " - " + y,
            Body: z,
        })

        alert("Mail sent successfully")
    }

    var x = document.getElementById("nameinp").value = "";
    var y = document.getElementById("subinp").value = "";
    var z = document.getElementById("messinp").value = "";
}

function clearFunction() {
    var x = document.getElementById("nameinp").value = "";
    var y = document.getElementById("subinp").value = "";
    var z = document.getElementById("messinp").value = "";
}

function year() {
    var t = new Date();
    var u = t.getFullYear();
    document.getElementById("date").innerHTML = u;
}

year();

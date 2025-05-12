// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submit

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Easy list of usernames and passwords
    var users = {
        "admin": "admin123",
        "sreeconnect": "sree@123",
        "user1": "pass1",
        "nandu": "nandu@18",
"24a31a4601@pragati.ac.in": "24A31A4601",
"24a31a4602@pragati.ac.in": "24A31A4602",
"24a31a4603@pragati.ac.in": "24A31A4603",
"24a31a4604@pragati.ac.in": "24A31A4604",
"24a31a4605@pragati.ac.in": "24A31A4605",
"24a31a4606@pragati.ac.in": "24A31A4606",
"24a31a4607@pragati.ac.in": "24A31A4607",
"24a31a4608@pragati.ac.in": "24A31A4608",
"24a31a4609@pragati.ac.in": "24A31A4609",
"24a31a4610@pragati.ac.in": "24A31A4610",
"24a31a4611@pragati.ac.in": "24A31A4611",
"24a31a4612@pragati.ac.in": "24A31A4612",
"24a31a4613@pragati.ac.in": "24A31A4613",
"24a31a4614@pragati.ac.in": "24A31A4614",
"24a31a4615@pragati.ac.in": "24A31A4615",
"24a31a4616@pragati.ac.in": "24A31A4616",
"24a31a4617@pragati.ac.in": "24A31A4617",
"24a31a4618@pragati.ac.in": "24A31A4618",
"24a31a4619@pragati.ac.in": "24A31A4619",
"24a31a4620@pragati.ac.in": "24A31A4620",
"24a31a4621@pragati.ac.in": "24A31A4621",
"24a31a4622@pragati.ac.in": "24A31A4622",
"24a31a4623@pragati.ac.in": "24A31A4623",
"24a31a4624@pragati.ac.in": "24A31A4624",
"24a31a4625@pragati.ac.in": "24A31A4625",
"24a31a4626@pragati.ac.in": "24A31A4626",
"24a31a4627@pragati.ac.in": "24A31A4627",
"24a31a4628@pragati.ac.in": "24A31A4628",
"24a31a4629@pragati.ac.in": "24A31A4629",
"24a31a4630@pragati.ac.in": "24A31A4630",
"24a31a4631@pragati.ac.in": "24A31A4631",
"24a31a4632@pragati.ac.in": "24A31A4632",
"24a31a4633@pragati.ac.in": "24A31A4633",
"24a31a4634@pragati.ac.in": "24A31A4634",
"24a31a4635@pragati.ac.in": "24A31A4635",
"24a31a4636@pragati.ac.in": "24A31A4636",
"24a31a4637@pragati.ac.in": "24A31A4637",
"24a31a4638@pragati.ac.in": "24A31A4638",
"24a31a4639@pragati.ac.in": "24A31A4639",
"24a31a4640@pragati.ac.in": "24A31A4640",
"24a31a4641@pragati.ac.in": "24A31A4641",
"24a31a4642@pragati.ac.in": "24A31A4642",
"24a31a4643@pragati.ac.in": "24A31A4643",
"24a31a4644@pragati.ac.in": "24A31A4644",
"24a31a4645@pragati.ac.in": "24A31A4645",
"24a31a4646@pragati.ac.in": "24A31A4646",
"24a31a4647@pragati.ac.in": "24A31A4647",
"24a31a4648@pragati.ac.in": "24A31A4648",
"24a31a4649@pragati.ac.in": "24A31A4649",
"24a31a4650@pragati.ac.in": "24A31A4650",
"24a31a4651@pragati.ac.in": "24A31A4651",
"24a31a4652@pragati.ac.in": "24A31A4652",
"24a31a4653@pragati.ac.in": "24A31A4653",
"24a31a4654@pragati.ac.in": "24A31A4654",
"24a31a4655@pragati.ac.in": "24A31A4655",
"24a31a4656@pragati.ac.in": "24A31A4656",
"24a31a4657@pragati.ac.in": "24A31A4657",
"24a31a4658@pragati.ac.in": "24A31A4658",
"24a31a4659@pragati.ac.in": "24A31A4659",
"24a31a4660@pragati.ac.in": "24A31A4660",
"24a31a4661@pragati.ac.in": "24A31A4661",
"24a31a4662@pragati.ac.in": "24A31A4662",
"24a31a4663@pragati.ac.in": "24A31A4663",
"24a31a4664@pragati.ac.in": "24A31A4664",
"24a31a4665@pragati.ac.in": "24A31A4665",
"24a31a4666@pragati.ac.in": "24A31A4666",

    };

    // Check if username exists and password matches
    if (users[username] && users[username] === password) {
        // ✅ Redirect to main page
        window.location.replace("main.html");
    } else {
        document.getElementById('errorMsg').innerText = "Invalid username or password!";
        document.getElementById('errorMsg').style.color = "red";
    }
});

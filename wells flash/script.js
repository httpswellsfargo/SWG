document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const validUsername = 'marykstroup01';
    const validPassword = 'Amber2016';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // usernameError.style.display = 'none';
    // passwordError.style.display = 'none';

    let valid = true;
    if (username !== validUsername) {
        usernameError.style.display = 'block';
        valid = false;
    }
    if (password !== validPassword) {
        passwordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        window.location.href = 'dashboard.html';
    }

});



let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlinks");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};









function myFunction() {
    var x = document.getElementById("password")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if(x.type === 'password'){
        x.type="text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display ="none";
        z.style.display = "block";
    }
}























// const username = "AbdRsd";
// const password = "Let$go0809";

// function passcheck() {


//     if(document.getElementById('username').value !=username) {
//         alert('Wrong username, Try again .');
//         return false;
//     }

//     if(document.getElementById('username').value ==username) {
//         alert('Correct Username. Click Ok');
//     }

//     if(document.getElementById('password').value !=password) {
//         alert('Wrong password, Try again .');
//         return false;
//     }

//     if(document.getElementById('password').value ==password) {
//         alert('Correct Password. Click Ok');
//     }
// }

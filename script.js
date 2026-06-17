// function changeColor() {
//     document.body.style.backgroundColor = "pink";
// }







// Task 5

function loadUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {

            const userList = document.getElementById("userList");

            userList.innerHTML = "";

            data.forEach(user => {

                const li = document.createElement("li");

                li.textContent = user.name;

                userList.appendChild(li);

            });

        })
        .catch(error => {
            console.log("Error:", error);
        });

}





window.onscroll = function() {
    document.getElementById("topBtn").style.display =
        window.scrollY > 200 ? "block" : "none";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




// Task 6

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (name === "" || email === "" || password === "") {
        error.innerHTML = "All fields are required!";
        return false;
    }

    if (!email.includes("@")) {
        error.innerHTML = "Enter valid email!";
        return false;
    }

    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters!";
        return false;
    }

    error.innerHTML = "Form submitted successfully!";
    error.style.color = "green";
    return false; 
}





let index = 0;

const colors = [
    "lightblue",
    "lightgreen",
    "lightyellow",
    "pink",
    "lavender",
    "lightgray"
];

function changeColor() {

    document.body.style.backgroundColor = colors[index];

    index++;

    if (index === colors.length) {
        index = 0;
    }

}
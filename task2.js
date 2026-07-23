function getUsers() {
    const status = document.getElementById("status");
    const usersDiv = document.getElementById("users");

    usersDiv.innerHTML = "";
    status.innerHTML = "Loading...";

    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const div = document.createElement("div");
                    div.className = "user";

                    div.innerHTML = `
                        <p><b>Name:</b> ${user.name}</p>
                        <p><b>Email:</b> ${user.email}</p>
                        <p><b>Phone:</b> ${user.phone}</p>
                    `;

                    usersDiv.appendChild(div);
                });

                status.innerHTML = "Loaded successfully";
            })
            .catch(error => {
                status.innerHTML = "Error loading data";
                console.log(error);
            });
    }, 2000);
}
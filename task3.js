// let messages = [];

// const input = document.getElementById("messageInput");
// const addBtn = document.getElementById("addBtn");
// const clearBtn = document.getElementById("clearBtn");
// const charCount = document.getElementById("charCount");
// const status = document.getElementById("status");
// const messagesDiv = document.getElementById("messages");

// // Character count
// input.addEventListener("input", () => {
//     charCount.textContent = "Characters: " + input.value.length;
// });

// // Display messages
// function displayMessages() {
//     messagesDiv.innerHTML = "";

//     messages.forEach((msg) => {
//         let div = document.createElement("div");
//         div.textContent = msg;

//         messagesDiv.appendChild(div);

//         // Remove after 10 seconds
//         setTimeout(() => {
//             div.remove();
//             status.textContent = "Message Expired";
//         }, 10000);
//     });
// }

// // Add message using Promise
// addBtn.addEventListener("click", () => {
//     let message = input.value;

//     let promise = new Promise((resolve, reject) => {
//         if (message.length >= 3) {
//             resolve(message);
//         } else {
//             reject("Message must contain at least 3 characters");
//         }
//     });

//     promise
//         .then((msg) => {
//             status.textContent = "Message Added Successfully";
//             messages.push(msg);
//             displayMessages();
//             input.value = "";
//             charCount.textContent = "Characters: 0";
//         })
//         .catch((error) => {
//             status.textContent = error;
//         });
// });

// // Clear all messages
// clearBtn.addEventListener("click", () => {
//     messages = [];
//     messagesDiv.innerHTML = "";
//     status.textContent = "All Messages Cleared";
// });






























// let inputBox = document.getElementById("messageInput");
// let characterCount = document.getElementById("characterCount");
// let addButton = document.getElementById("addButton");
// let clearButton = document.getElementById("clearButton");
// let messageContainer = document.getElementById("messageContainer");
// let statusMessage = document.getElementById("statusMessage");
// let messages = [];
// inputBox.addEventListener("input", function () {
//     let length = inputBox.value.length;
//     characterCount.textContent = "Characters : " + length;
// });
// addButton.addEventListener("click", function () {
//     let message = inputBox.value;
//     let promise = new Promise(function (resolve, reject) {
//         if (message.length >= 3) {
//             resolve(message);
//         }
//         else {
//             reject("Message must contain at least 3 characters");
//         }
//     });
//     promise.then(function (result) {
//         statusMessage.textContent = "Message Added Successfully";
//         messages.push(result);
//         displayMessages();
//         removeMessageAfter10Seconds(result);
//         inputBox.value = "";
//         characterCount.textContent = "Characters : 0";
//     })
//     .catch(function (error) {
//         statusMessage.textContent = error;
//     });
// });
// function displayMessages() {
//     messageContainer.innerHTML = "";
//     messages.forEach(function (msg) {
//         let paragraph = document.createElement("p");
//         paragraph.textContent = msg;
//         paragraph.className = "message";
//         messageContainer.appendChild(paragraph);
//     });
// }
// function removeMessageAfter10Seconds(message) {
//     setTimeout(function () {
//         let index = messages.indexOf(message);
//         if (index != -1) {
//             messages.splice(index, 1);
//             displayMessages();
//             statusMessage.textContent = "Message Expired";
//         }
//     }, 10000);
// }
// clearButton.addEventListener("click", function () {
//     messages = [];
//     messageContainer.innerHTML = "";
//     statusMessage.textContent = "All Messages Cleared";
// });
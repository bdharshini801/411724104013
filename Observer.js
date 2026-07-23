// let observers=[]
// function attach(observer){
//     observers.push(observer)
// }
// function detach(observer){
//     let newObservers=[]
//     for(let i of observers){
//         if(i!=observer){
//             newObservers.push(i)
//         }
//     }
//     observers=newObservers
// }
// function notify(){
//     for(let i of observers){
//         console.log(i+": Notified")
//     }
// }
// attach("A")
// attach("B")
// notify()
// attach("C")
// detach("B")
// notify()











// let observers = [];

// function attach(type) {
//     observers.push(type);
// }

// function detach(type) {
//     observers = observers.filter(observer => observer !== type);
// }

// function notify(type, message) {
//     console.log("\nAnnouncement: " + type);

//     for (let observer of observers) {
//         if (observer === type) {
//             console.log(type + " subscribers received: " + message);
//         }
//     }
// }

// // Subscribers
// attach("Holiday");
// attach("Exam");
// attach("Festival");

// // Notifications
// notify("Holiday", "Tomorrow is declared a holiday.");
// notify("Exam", "Semester exams begin on Monday.");
// notify("Festival", "Annual Day celebration is on Friday.");

// // Remove Festival subscription
// detach("Festival");

// // Notify agains
// notify("Festival", "Pongal celebration next week.");










let observers = [];
function attach(type) {
    observers.push(type);
}
function detach(type) {
    let newObservers = [];
    for (let observer of observers) {
        if (observer != type) {
            newObservers.push(observer);
        }
    }
    observers = newObservers;
}
function notify(type, message) {
    console.log("\nAnnouncement: " + type);
    for (let observer of observers) {
        if (observer === type) {
            console.log(type + " subscribers received: " + message);
        }
    }
}
attach("Holiday");
attach("Exam");
attach("Festival");
notify("Holiday", "Tomorrow is declared a holiday.");
notify("Exam", "Semester exams begin on Monday.");
notify("Festival", "Annual Day celebration is on Friday.");
detach("Festival");
notify("Festival", "Pongal celebration next week.");

// const age=21;
// if(age<18){
//     console.log("Not Eligible to vote")
// }
// else if(age == 18){
//     console.log("Eligible to vote")
// }
// else{
//     console.log("Eligible to vote")
// }
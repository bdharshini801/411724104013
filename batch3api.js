// fetch("https://jsonplaceholder.typicode.com/posts/1",
//     {
//         method: "DELETE"
//     }
// )
// .then(response => response.json())
// .then(data => {console.log(data)})









// fetch("https://jsonplaceholder.typicode.com/posts",
//     {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: 'My Post',
//             body: 'Learning Fetch',
//             userId: 1
//         })
//     }
// )

// .then(response => response.json())
// .then(data => {console.log(data)})






fetch("https://jsonplaceholder.typicode.com/posts/5",
    {
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'Title'
            
        })
    }
)
.then(response => response.json())
.then(data => {console.log(data)})
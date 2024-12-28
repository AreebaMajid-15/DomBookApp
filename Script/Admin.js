
 import {baseurl} from './Baseurl.js'
// check is admin username is there


// to get value from admin 

let form = document.getElementById("form")
form.addEventListener("submit",function(){
  event.preventDefault()
    let title = form.title.value;
    let author = form.author.value;
    let select = form.select.value;

  //  console.log(title, author, select)
  let bookobj = { title , author, select}
  
  // adding data into the backend
  fetch(`${baseurl}/AddBook`, {
    method: "POST", 
    headers: {
        "content-type": "application/json",

    },
    body: JSON.stringify(bookobj),
    })
    .then(() => {
        alert("Book Added");
  })
  .catch((err) => {
    alert("Something went wrong in adding book")
  })
})
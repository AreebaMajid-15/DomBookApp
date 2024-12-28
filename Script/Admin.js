
 import {baseurl} from './Baseurl.js'
// check is admin username is there


// to get book detail from admin 
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
        window.location.reload()
  })
  .catch((err) => {
    alert("Something went wrong in adding book")
  })
})

// to display book detail given by admin

getbook()

async function getbook() {
    try{
        let res = await fetch(`${baseurl}/AddBook`);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
        alert("Something went wronng in diaplaying book")
    }
    
}

 function diaplaybook(arr){
    let cont = document.getElementById("DissplayBook");
    cont.innerHTML ="";
     
    arr.map((el,i ) =>{
        let card = document.createElement("div")
        card.setAttribute("class", "bookcard");

    let title = document.createElement("h4");
    title.textContent = `Title: ${el.title} ` ;

    let author = document.createElement("h5")
    author.textContent = `Author: ${el.author}`;

    let category = document.createElement("h5")
    category.textContent = `Category: ${el.category}`
    
    let status = document.createElement("h6")
    status.textContent = el.status == true ? "Status: Verified" : "Status: Pending";


// verify button
    let  verifybtn  = document.createElement("button")
    verifybtn.textContent = "Verify Book"
// to verify button function
    verifybtn.addEventListener("click", function(){
        alert("Are you sure to verify?")
        verifybtnfun( el, i)
    })

    // to delete button
    let deletbtn = document.createElement("button")
    deletbtn.textContent = "Delete Book"

    // to delete book function
    deletbtn.addEventListener("click", function(){
        alert("Are you sure to delete?")
        deletebtnfun(el, i)
    });

    card.append( title, author, category, status, verifybtn , deletbtn)
     cont.append(card)

 });
}
window.onload = async () => {
    let arr = await getbook();
    diaplaybook(arr);
    
}
// to change to verify status of book and add it into the server
 function  verifybtnfun(el, i){
   // to change the status
     console.log("before", el);
     let updatedbook = {...el, status: !el.status};
     console.log("after",  updatedbook);

     // to change status in backend
     let bookID = el.id; 
     fetch(`${baseurl}/AddBook/${bookID}` , {
        method: "PATCH", 
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updatedbook),
     })
     .then( () =>{
        alert("Book is verified")
        window.location.reload()
     })
     .catch( (err) => {
        alert("something went wrong in verfying book")
        console.log(err)
     })
 }



// to delete a book
function deletebtnfun( el, i){
    let deleteID = el.id ;
    fetch(`${baseurl}/AddBook/${deleteID}`, {
        method: "DELETE", 
    })
    .then(() => {
        //alert("Book Deleted")
        window.location.reload()
    })
    .catch((err) => {
        alert("somethinng went wrong in deleting book")
    })
}
import {baseurl} from './Baseurl.js'


let availbook = document.getElementById("Avalbook")
availbook.addEventListener("click", function(){



})

let Borbook = document.getElementById("Borbook")
availbook.addEventListener("click", function(){

    
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
    let cont = document.getElementById("diplaybook");
    cont.innerHTML = "";
     
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
    status.textContent = el.status == true ? "Status: Not Available" : "Status: Available";


// verify button
 //   let  verifybtn  = document.createElement("button")
 //   verifybtn.textContent = "Verify Book"
// to verify button function
  //  verifybtn.addEventListener("click", function(){
  //      alert("Are you sure to verify?")
  //      verifybtnfun( el, i)
  //  })

    // to delete button
    let Brwbtn = document.createElement("button")
    Brwbtn.textContent = "Borrow Book"

    // to delete book function
      Brwbtn.addEventListener("click", function(){
     let num = prompt("You can only bur books for 10days")
      let Days =  document.createElement("h4")
      Days.textContent = `Borrowed Days: ${num}`
        Brwbtnbtnfun(el, i)
    });

    card.append( title, author, category, status, Brwbtn )
     cont.append(card)

 });
}
window.onload = async () => {
    let arr = await getbook();
    diaplaybook(arr);
    
}


// to change available state of book 
 function  Brwbtnbtnfun(el, i){
   // to change the status
     console.log("before", el);
     let updatedbookstatus = {...el, status: !el.status};
     console.log("after",  updatedbookstatus);

     // to change status in backend
     let bookID = el.id; 
     fetch(`${baseurl}/AddBook/${bookID}` , {
        method: "PATCH", 
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(updatedbookstatus),
     })
     .then( () =>{
        alert("Book is borrowed now")
        window.location.reload()
     })
     .catch( (err) => {
        alert("something went wrong in borrowing book")
        console.log(err)
     })
 }

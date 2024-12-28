
let form = document.getElementById("form")
form.addEventListener("submit", function(){
    event.preventDefault();

    let email = form.email.value;
    let password = form.password.value;

   // console.log(email, password)

   if(email== "admin@empher.com" && password=="empher@123"){
      alert("Logged in as Admin")
      window.location.href = "Admin.html"
   }
   else if(email=="user@empher.com" && password=="user@123"){
    window.location.href = "book.html"
}
else{
    alert("Error")
}
 let loginData = { email, password}
 console.log(loginData)
})
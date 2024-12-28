

const nav = () => {
    let card  = `<div id="Nav">
    <a href="index.html">Login</a>
    <a href="Admin.html">Admin</a>
    <a href="book.html">Books</a>
</div>`

let cont =     document.getElementById("cont")

 cont.innerHTML = card;
}
  

 nav()
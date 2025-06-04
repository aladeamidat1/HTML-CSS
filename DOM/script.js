console.log('Happy developing ✨')

const wrapper = document.getElementById("wrapper");
console.log(wrapper)

const bookList =document.getElementById("book-list");
console.log(bookList)

const addBook = document.getElementById("add-book");
console.log(addBook)


 const title = document.getElementsByClassName("title")
console.log(title)


const isArray = Array.isArray(Array.from(title))
console.log(isArray)

let arr = Array.from(title)

arr.forEach((value)=>{
    console.log(value)
})


const tag = document.getElementsByTagName("ul")
console.log(tag)

*/

const bookList = document.querySelector("Book-list ul");
console.log(booklist)

booklist.addEventListener("click",(event)=>{
    const delectBin = eveny.target.textContent
    if(delectBin == "delete"){
        const li = event.target.parentElement
        booklist.removeChild(li)
    }
})

const addBookForm = document.querySelector("#add-book");
addBookForm.addEventListener("submit" , (event)=>{
    event.preventDefault()
    let value = document.querySelector("#add-book input").value.trim();
    if(value != ""){
        const{liTag,valueSpan,deleteSpan} = createElement()

        valueSpan.textContent = value
        deleteSpan.textContent = "delete"


        liTag.appendChild(valueSpan);
        liTag.appendChild(deleteSpan);
        booklist.appendChild(liTag)

        valueSpan.classList.add("name");
        deleteSpan.classList.add("delete")
    }

})


function createElement{
        const liTag = document.createElement(li);
        const valueSpan = document.createElement("span");
        const deleteSpan = document.createElement("span")
        return{liTag,valueSpan,deleteSpan}
}


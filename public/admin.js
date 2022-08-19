
// Your Code Here

let submitButton = document.createElement('button')
submitButton.textContent = 'Save'

async function main() {

    let response = await fetch('http://localhost:3001/listBooks')

    let books = await response.json()
    console.log(books)
}



async function updateBook(book) {

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let submitButton = document.createElement('button')
    submitButton.textContent = 'Save'

    let response = await fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: book.id,
            quantity: quantityInput.value
        })
    })
    let updatedBook = await response.json();
    console.log(updatedBook)
}
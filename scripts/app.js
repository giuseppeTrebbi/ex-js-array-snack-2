//ex1
const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
]
const longBooks = books.filter(libro => libro.pages > 300)
const longBooksTitles = longBooks.map(libro => libro.title)
console.log("Titoli:", longBooksTitles)


//ex2
const availableBooks = books.filter(libro => libro.available)
const discountedBooks = availableBooks.map(libro => {
    const prezzo = (Number(libro.price.replace("€", "")) * 4 / 5).toFixed(2) + "€"
    return { ...libro, price: prezzo }
})
const fullPricedBooks = discountedBooks.find(libro => {
    const decimali = Number(libro.price.replace("€", "")) - Number(Number(libro.price.replace("€", "")).toFixed(0))
    return decimali === 0
})
console.log("Prezzo intero:", fullPricedBooks)


//ex3
const authors = books.map(libro => libro.author)
const areAuthorsAdult = authors.every(autore => autore.age >= 18)
if (areAuthorsAdult) {
    authors.sort((a, b) => a.age - b.age)
} else {
    authors.sort((a, b) => b.age - a.age)
}
console.log("Autori ordinati:", authors)


//ex4
const ages = authors.map(autore => autore.age)
const agesSum = ages.reduce((somma, età) => somma += età, 0)
console.log("Età media:", agesSum / ages.length)


//ex5
function getBooks(ids) {
    const promesseLibri = ids.map(id => new Promise(resolve => resolve(fetch(`http://localhost:3333/books/${id}`).then(data => data.json()))))
    return Promise.all(promesseLibri)
}
getBooks([2, 13, 7, 21, 19]).then(libri => {
    console.log("Libri da API:", libri)
})


//ex6
const areThereAvailableBooks = books.some(libro => libro.available)
const booksByPrice = books.toSorted((libroA, libroB) => Number(libroA.price.replace("€", "")) - Number(libroB.price.replace("€", "")))
booksByPrice.sort((libroA, libroB) => libroA.available ? -1 : 1)
console.log("Libri ordinati:", booksByPrice)


//ex7
const tags = []
const tagCounts = []

books.forEach(libro => {
    libro.tags.forEach(tag => {
        if (!tags.includes(tag)) {
            tags.push(tag)
        }
    })
})
tags.forEach(tag => {
    const count = books.reduce((acc, libro) => {
        if (libro.tags.includes(tag)) {
            acc++
        }
        return acc
    }, 0)
    tagCounts.push({ tag: tag, frequenza: count })
})
console.log("Tags count:", tagCounts)













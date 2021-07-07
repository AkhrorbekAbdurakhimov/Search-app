const usersTable   = document.querySelector('.users-table'),
    booksTable     = document.querySelector('.books-table'),
    moviesTable    = document.querySelector('.movies-table'),
    usersCheckbox  = document.querySelector('#users'),
    booksCheckbox  = document.querySelector('#books'),
    moviesCheckbox = document.querySelector('#movies'),
    dataItems      = document.querySelectorAll('.data-item'),
    dataList       = document.querySelector('.datalist-wrapper'),
    searchInput    = document.querySelector('#searchInput'),
    searchBtn      = document.querySelector('.search-btn')

usersCheckbox.addEventListener('click', () => {
    if (usersCheckbox.checked) {
        dataItems[0].classList.remove('hidden')
    } else {
        dataItems[0].classList.add('hidden')
    }
})

booksCheckbox.addEventListener('click', () => {
    if (booksCheckbox.checked) {
        dataItems[1].classList.remove('hidden')
    } else {
        dataItems[1].classList.add('hidden')
    }
})

moviesCheckbox.addEventListener('click', () => {
    if (moviesCheckbox.checked) {
        dataItems[2].classList.remove('hidden')
    } else {
        dataItems[2].classList.add('hidden')
    }
})

searchInput.addEventListener('keyup', (e) => {
    searchItem(searchInput.value)
})

searchBtn.addEventListener('click', (e) => {
    searchItem(searchInput.value)
})

async function searchItem (word) {
    let users = await fetch(`/users?text=${word}`, {
        method: 'SEARCH'
    })
    users = await users.json()
    usersRenderer(users)
    let books = await fetch(`/books?text=${word}`, {
        method: 'SEARCH'
    })
    books = await books.json()
    booksRenderer(books)  
    let movies = await fetch(`/movies?text=${word}`, {
        method: 'SEARCH'
    })
    movies = await movies.json()
    moviesRenderer(movies) 
}

const usersRenderer = (users) => {
    let string = ''
    users.map(user => {
        string += `
            <tr>
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.phone_number}</td>
            </tr>
        `
    })
    usersTable.innerHTML = string
}

const booksRenderer = (books) => {
    let string = ''
    books.map(book => {
        string += `
            <tr>
                <td>${book.id}</td>
                <td>${book.book_name}</td>
                <td>${book.release_year}</td>
                <td>${book.genre}</td>
            </tr>
        `
    })
    booksTable.innerHTML = string
}

const moviesRenderer = (movies) => {
    let string = ''
    movies.map(movie => {
        string += `
            <tr>
                <td>${movie.id}</td>
                <td>${movie.movie_name}</td>
                <td>${movie.release_year}</td>
                <td>${movie.genre}</td>
            </tr>
        `
    })
    moviesTable.innerHTML = string
}

const getUsers = async () => {
    let response = await fetch('/users')
    let users = await response.json()
    usersRenderer(users)
}

const getBooks = async () => {
    let response = await fetch('/books')
    let books = await response.json()
    booksRenderer(books)
}

const getMovies = async () => {
    let response = await fetch('/movies')
    let movies = await response.json()
    moviesRenderer(movies)
}

getUsers()
getBooks()
getMovies()
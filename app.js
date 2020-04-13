const article = document.querySelector("#sagan")

// READ
console.log(article.dataset.columns)
console.log(article.dataset.indexNumber)
console.log(article.dataset.parent)

// WRITE
article.dataset.columns = 5
article.dataset.indexNumber = 22222
article.dataset.parent = "Universe"

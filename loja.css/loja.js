produtoJson.map((item, index) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    document.querySelector('.produto-area').append(produtoItem)
})
produtoJson.map((item, index) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    document.querySelector('.produto-area').append(produtoItem)

    produtoItem.querySelector('.produto-item--img img').src = item.img
    produtoItem.querySelector('.produto-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` 
    produtoItem.querySelector('.produto-item--name').innerHTML = item.name
    produtoItem.querySelector('.produto-item--desc').innerHTML = item.description

    produtoItem.querySelector('.produto-item a').addEventListener('click', () => {
        console.log('clicou na pagina')
    })
})
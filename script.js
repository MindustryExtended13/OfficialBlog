document.addEventListener('DOMContentLoaded', () => {
    let element = document.querySelector('.main')
    let inner = '', first = true

    for(let page of pages) {
        if(!first) {
            inner += '<br>'         
        } else {
            first = false
        }

        inner += `
<div class="page">
    <img src="${page.icon}" alt=""></img>
    <div class="text">
        <h1><a href="${page.link}">${page.name}</a></h1>
        <br>
        <p>Posted by ${page.author} at ${page.date}</p>
        <br>
        <p>${page.description}</p>
    </div>
</div>
`
    }
    
    element.innerHTML = inner
})
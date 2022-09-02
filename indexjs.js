

let allItems = [
    {
        nome: `animewoman`,
        preco: 99.99,
        img: `animewoman.jpg`,
        type: `Figure action`,
    },
    {
        nome: `dragonballpersonagem`,
        preco: 99.99,
        img: `dragonballpersonagem.jpg`,
        type: `Figure action`,
    },
    {
        nome: `starwarspersonagem`,
        preco: 99.99,
        img: `starwarspersonagem.jpg`,
        type: `Figure action`,
    },
    {
        nome: `clock`,
        preco: 90.99,
        img: `clock.jpg`,
        type: `Painting`,
    },
    {
        nome: `gamepad`,
        preco: 90.99,
        img: `gamepad.jpg`,
        type: `Painting`,
    },
    {
        nome: `personagem`,
        preco: 90.99,
        img: `personagem.jpg`,
        type: `Painting`,
    }
]

console.log(allItems)

let listFigures = []
let listFrames  = []
let ulDocPaintings = document.querySelector(`ul.ulPaintings`)
let ulDocFigures = document.querySelector(`ul.ulActionFigures`)

function separateItens (lista){
    for (i = 0; i < lista.length; i++){
        let nomeObjeto   = lista[i].nome
        let precoObjeto  = lista[i].preco
        let imagemObjeto = lista[i].img
        let tipoObjeto   = lista[i].type
        if (tipoObjeto.toUpperCase() == `painting`.toUpperCase()){
            let objetoPush = {nome: nomeObjeto, preco: precoObjeto, img: imagemObjeto, type: tipoObjeto}
            listFrames.push(objetoPush)
        }else if (tipoObjeto.toUpperCase() == `Figure action`.toUpperCase()){
            let objetoPush = {nome: nomeObjeto, preco: precoObjeto, img: imagemObjeto, type: tipoObjeto}
            listFigures.push(objetoPush)
        }
    }
    return
}


separateItens(allItems)

console.log(listFrames)
console.log(listFigures)

function creatingItemsFrames (list){
    if (list == listFrames){
        for (i = 0; i < list.length; i++){
            let liDoc  = document.createElement('li')
                liDoc.classList.add(`cards`)

            let divDoc = document.createElement(`div`)
                divDoc.classList.add(`cardInfo`)

            let imgDoc = document.createElement(`img`)
                imgDoc.classList.add(`imgCards`)
                imgDoc.src = `./assets/img/painting/${list[i].img}`
                imgDoc.alt = list[i].nome

            let h3Doc  = document.createElement(`h3`)
                h3Doc.classList.add(`h3Card`)
                h3Doc.innerText = `${list[i].nome}`

            let pDoc   = document.createElement(`p`)
                pDoc.classList.add(`pCard`)
                pDoc.innerText = `R$: ${list[i].preco}`

            ulDocPaintings.append(liDoc)
                liDoc.append(divDoc)
                    divDoc.append(imgDoc, h3Doc, pDoc)
                    
        }
    }
}

creatingItemsFrames(listFrames)
console.log(ulDocPaintings)

function creatingItemsFigures (list){
    if (list == listFigures){
        for (i = 0; i < list.length; i++){
            let liDoc  = document.createElement('li')
                liDoc.classList.add(`cards`)

            let divDoc = document.createElement(`div`)
                divDoc.classList.add(`cardInfo`)

            let imgDoc = document.createElement(`img`)
                imgDoc.classList.add(`imgCards`)
                imgDoc.src = `./assets/img/actions/${list[i].img}`
                imgDoc.alt = list[i].nome

            let h3Doc  = document.createElement(`h3`)
                h3Doc.classList.add(`h3Card`)
                h3Doc.innerText = `${list[i].nome}`

            let pDoc   = document.createElement(`p`)
                pDoc.classList.add(`pCard`)
                pDoc.innerText = `R$: ${list[i].preco}`

            ulDocFigures.append(liDoc)
                liDoc.append(divDoc)
                    divDoc.append(imgDoc, h3Doc, pDoc)
                    
        }
    }
}

creatingItemsFigures (listFigures)
console.log(ulDocFigures)
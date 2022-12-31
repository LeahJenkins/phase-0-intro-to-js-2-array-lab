const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(){
cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}



function appendCat(){
    var newArray = cats.slice()
    newArray.push("Broom")
    return newArray
}

function prependCat(){
    var newArray = cats.slice()
    newArray.unshift("Arnold")
    return newArray
}

function removeLastCat(){
    var newArray = cats.slice(0, 2)
    return newArray
}

function removeFirstCat(){
    var newArray = cats.slice(1)
    return newArray
}



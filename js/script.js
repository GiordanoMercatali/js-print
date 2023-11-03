const shoppingList = [];

let i = countElems(shoppingList);
console.log(shoppingList);
document.getElementById("result").innerHTML = shoppingList;

function countElems(array = []){
    let curElem;
    while (!(curElem === null)) {
        curElem = prompt("Insert element");
        if(curElem !== null){
            array.push(curElem);
        }
    }

    return array;
}
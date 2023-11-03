const arrayList = [];

let i = returnElems(shoppingList);
console.log(shoppingList);
document.getElementById("result").innerHTML = shoppingList;

function returnElems(array = []){
    let curElem;
    while (!(curElem === null)) {
        curElem = prompt("Insert element");
        if(curElem !== null){
            array.push(curElem);
        }
    }

    return array;
}
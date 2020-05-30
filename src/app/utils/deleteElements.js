window.deleteElementsAfterElement = (containerElementSelector, mainElementSelector) => {
    let container = document.querySelector(containerElementSelector);
    let mainElement = document.querySelector(mainElementSelector);
    let allChildren = container.children;
    // let otherElementsCopy = [...allChildren]
    // let otherElements = otherElementsCopy.filter(el => el != mainElement)
    let mainElementIndex = Array.prototype.indexOf.call(allChildren, mainElement)
    // let haveToDeleIndex = mainElementIndex + 1


    for (let i = mainElementIndex + 1; i < allChildren.length + 1; i++) {
        // container = document.querySelector(containerElementSelector);
        // allChildren = container.children;
    
        while (i < allChildren.length) {
            allChildren[i].remove();
        }
        console.log(allChildren[i])
        console.log(allChildren)

         
    } 
}



window.clearChildElementsExeptFirst = (parentElementSelector) => {
    let firstElement = document.querySelector(parentElementSelector).children[0]
    console.log(firstElement)
    let parent = document.querySelector(parentElementSelector);
    parent.innerHTML = "";
    parent.append(firstElement)
}
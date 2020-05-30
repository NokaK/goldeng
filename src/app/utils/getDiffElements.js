export const getDifferentElementsArray = (array, target) => {
    let allElement = [...array];
    let diffElements = allElement.filter(el => el != target);
    return diffElements;
}


export const removeClasses = (elementsArray, elements) => {
    elementsArray.forEach(element => {
        element.classList.remove(elements);
    });
}
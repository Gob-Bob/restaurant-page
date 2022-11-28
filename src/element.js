export const createClass = (element, name) => {
    return element.classList.add(name)
}
const createID = (element, name) => {
    return element.setAttribute('id', name)
}
const createSelector = (element, selectorType, name) => {
    if (selectorType == 'class') {
        return createClass(element, name)
    } if (selectorType == 'id') {
        return createID(element, name)
    } else {
        console.log('Choose "class" or "id" as a selector type.')
    }
}
// Select class element function
// Select id element function
// Return element function
    // If element is a class...
        // Return select class element function
    // If element is a id...
        // Return select id element function
const createDiv = (element, selectorType, name, textContent, appendParent) => {
    const newDiv = document.createElement(element)
    createSelector(newDiv, selectorType, name)
    const newContent = document.createTextNode(textContent)
    newDiv.appendChild(newContent)
    appendParent.appendChild(newDiv)
    // Return element selected function
}
// Button creation function
const createButton = () => {
    
}
const createElementType = (element, selectorType, name, textContent, appendParent) => {
    if (element == 'div') {
        return createDiv(element, selectorType, name, textContent, appendParent)
    } if (element == 'button') {
        // Button creation function
    } else {
        console.log('Unrecognized element type.')
    }
}
export const createElement = (element, selectorType, name, textContent) => {

    // element = what type of element? Div, button, etc.
    // selectorType = class or id
    // name = name of selector type
    // textContent = text content
    // appendParent = where the element will append to

    const mainContent = document.getElementById('content')
    return createElementType(element, selectorType, name, textContent, mainContent)
}
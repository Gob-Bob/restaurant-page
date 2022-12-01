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
const selectClass = name => {
    return document.getElementsByClassName(name)
}
const selectID = name => {
    return document.getElementById(name)
}
const selectElement = (selectorType, name) => {
    if (selectorType == 'class') {
        return selectClass(name)
    } if (selectorType == 'id') {
        return selectID(name)
    }
}
const createDiv = (element, selectorType, name, textContent, appendParent) => {
    const newDiv = document.createElement(element)
    createSelector(newDiv, selectorType, name)
    const newContent = document.createTextNode(textContent)
    newDiv.appendChild(newContent)
    appendParent.appendChild(newDiv)
    return selectElement(selectorType, name)
}
const createButton = (element, selectorType, name, textContent, appendParent) => {
    const newButton = document.createElement(element)
    createSelector(newButton, selectorType, name)
    const newContent = document.createTextNode(textContent)
    newButton.appendChild(newContent)
    appendParent.appendChild(newButton)
    return selectElement(selectorType, name)
}
const createElementType = (element, selectorType, name, textContent, appendParent) => {
    if (element == 'div') {
        return createDiv(element, selectorType, name, textContent, appendParent)
    } if (element == 'button') {
        return createButton(element, selectorType, name, textContent, appendParent)
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
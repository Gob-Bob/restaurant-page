export const create = (type, selector, selectorName, text, appendParent) => {
    let element = document.createElement(type)
    if (selector == 'class') {
        element.classList.add(selectorName)
    }
    element.innerHTML = text
    appendParent.appendChild(element)
    return element
}
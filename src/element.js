export const create = (type, selector, selectorName, text, appendParent) => {
    let element = document.createElement(type)
    // if (selector == 'class') {
    //     if (selectorName.indexOf(' ') >= 0) {

    //     }
    //     element.classList.add(selectorName)
    // }
    if (selector == 'class') {
        element.classList.add(selectorName)
    }
    element.innerHTML = text
    appendParent.appendChild(element)
    return element
}
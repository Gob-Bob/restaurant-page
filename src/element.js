export const create = (type, selector, selectorName, text, parent) => {
    const element = document.createElement(type)
    if (selector == 'class') {
        element.classList.add(selectorName)
    }
    element.innerHTML = text
    parent.appendChild(element)
    return element
}
export const img = (source, parent) => {
    const element = document.createElement('img')
    element.src = source
    parent.appendChild(element)
    return element
}
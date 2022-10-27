// create an element
function createAnElement(type, content, attribute, appender) {
    const el = document.createElement(type);

    if (type == 'input' && attribute == 'submit') {
        el.setAttribute('type', attribute);
        el.value = "Preview"
        el.addEventListener('click', fetchData)
    } else if (type == 'label'){
        el.setAttribute('for', content);
        el.textContent = content;
    } else if (type == 'input') {
        el.setAttribute('type', attribute);
        el.name = content
    }
    
    if (appender) {
    appender.appendChild(el);
    }
    return el;
}
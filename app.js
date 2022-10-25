const uploadInput = document.getElementById("uploadInput");
const outputElement = document.getElementById("output");
const previewBtn = document.getElementById("previewBtn");

// Calculate total size
uploadInput.addEventListener("change", () => {
    let numberOfBytes = 0;
    for (const file of uploadInput.files) {
        numberOfBytes += file.size;
    }

    // Approximate to the closest prefixed unit
    const units = [
        "B",
        "KiB",
        "MiB",
        "GiB",
    ];
    const exponent = Math.min(
        Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
        units.length - 1
    );
    const approx = numberOfBytes / 1024 ** exponent;
    const output =
        exponent === 0
            ? `${numberOfBytes} bytes`
            : `${approx.toFixed(3)} ${units[exponent]
            } (${numberOfBytes} bytes)`;

    document.getElementById("fileNum").textContent = uploadInput.files.length;
    document.getElementById("fileSize").textContent = output;
},
    false
);

// Getting the names
document.getElementById("uploadInput").addEventListener("change", function () {
    let fr = new FileReader();
    fr.readAsText(this.files[0]);
    console.log(fr);
    fr.onload = function () {
        let resultList = fr.result;
        let movieList = [];
        let htmlMovieList = []
        if (resultList == "") {
            outputElement.textContent = "There is no movie list to display it !!!"
        } else {
            movieList = resultList.split(" \r\n")
            
            outputElement.innerHTML = `
            <fieldset>  
            <legend>Which movies do you want more information about?</legend>  

            </fieldset>`
            let elementToAppend = document.querySelector('fieldset');
            for (const movie of movieList) {

            }
            let movieListLength = movieList.length - 1
            for (let i = 0; i <= movieListLength; i++) {
                createAnElement('input', movieList[i], 'checkbox', elementToAppend)
                createAnElement('label', movieList[i], '', elementToAppend)
                if (i == movieListLength) {
                    createAnElement('input', movieList[i], 'submit', elementToAppend)
                }
            }
            // previewBtn.style.display = 'block'; check if its needed
        }
        console.log(movieList);
        console.log(htmlMovieList);

    };
});

// check the checked movies
function fetchData() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);
    });
    console.log(values);

    // check for unchecked == 0
};

// create an element
function createAnElement(type, content, attribute, appender) {
    const el = document.createElement(type);

    if (type == 'input' && attribute == 'submit') {
        el.setAttribute('type', attribute);
        el.value = "Submit now"
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

// `<input type="checkbox" name="${movie}" value="${movie}">${movie}<br>`

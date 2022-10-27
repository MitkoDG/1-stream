// import {html, render} from 'https://unpkg.com/lit-html?module';
import { markAsFavorite } from './src/favorite.js';
import { createAnElement } from './src/util.js';

const uploadInput = document.getElementById("uploadInput");
const outputElement = document.querySelector(".output");

document.querySelector('.favorite button').addEventListener('click', markAsFavorite)

// Calculate total size
// uploadInput.addEventListener("change", () => {
//     let numberOfBytes = 0;
//     for (const file of uploadInput.files) {
//         numberOfBytes += file.size;
//     }

//     // Approximate to the closest prefixed unit
//     const units = [
//         "B",
//         "KiB",
//         "MiB",
//         "GiB",
//     ];
//     const exponent = Math.min(
//         Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
//         units.length - 1
//     );
//     const approx = numberOfBytes / 1024 ** exponent;
//     const output =
//         exponent === 0
//             ? `${numberOfBytes} bytes`
//             : `${approx.toFixed(3)} ${units[exponent]
//             } (${numberOfBytes} bytes)`;

//     document.getElementById("fileNum").textContent = uploadInput.files.length;
//     document.getElementById("fileSize").textContent = output;
// },
//     false
// );

// Getting the names
document.getElementById("uploadInput").addEventListener("change", function () {
    let fr = new FileReader();
    fr.readAsText(this.files[0]);
    console.log(fr);
    fr.onload = function () {
        let resultList = fr.result;
        let movieList = [];
        if (resultList == "") {
            outputElement.textContent = "There is no movie list to display it !!!"
        } else {
            outputElement.textContent = '';
            movieList = resultList.split("\r\n")

            let elementToAppend = document.querySelector('fieldset');
            let movieListLength = movieList.length - 1;
            for (let i = 0; i <= movieListLength; i++) {
                const surroundDiv = createAnElement('div', '', '', outputElement)
                createAnElement('input', movieList[i], 'checkbox', surroundDiv);
                createAnElement('label', movieList[i], '', surroundDiv);

                if (i == movieListLength) {
                    createAnElement('button', '', 'btn', outputElement);
                }
            }
        }

    };

});





export function markAsFavorite(event) {
    let checkboxes = Array.from(document.querySelectorAll('section input[type="checkbox"]:checked'));
    const movieListFavorites = document.querySelectorAll('section input');
    
    for (let check of movieListFavorites) {
        console.log(check);
        console.log(check.checked);
        if (check.checked !== true){
            check.parentElement.remove()
        } 
    }
}

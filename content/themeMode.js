const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode);

let container = document.querySelector('.container')
let btn = document.querySelector('button');



function setDarkorLight() {
    if (isDarkMode) {
        container.classList.add('dark');
        container.classList.remove('light')
    } else {
        container.classList.remove('dark')
        container.classList.add('light')
    }


}

if (localStorage.getItem('theme')) {
    container.classList.add(localStorage.getItem('theme'));
} else {
    setDarkorLight();
}

let ans = localStorage.getItem('theme')
document.body.classList.add(ans)
console.log(ans);







btn.addEventListener('click', () => {
    if (container.classList.contains('dark')) {

        container.classList.add('light');
        container.classList.remove('dark');
        localStorage.setItem('theme', 'light')

    } else {
        container.classList.add('dark');
        container.classList.remove('light');
        localStorage.setItem('theme', 'dark')

    }
})



//Ye wala pura system me ka mode check karega dark ya light | (OS) ka check krega
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {

            setDarkorLight();
        }
    })





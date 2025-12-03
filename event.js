let btn = document.querySelector('#btn')
let inp = document.querySelector('input')

btn.addEventListener('click', () => {
    inp.click();

})

inp.addEventListener('change', (dets) => {
    let file = dets.target.files[0];
    console.log(file);
    
    if(file){

        btn.textContent = file.name;
    }

})
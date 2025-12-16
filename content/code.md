let h1 = document.querySelector('h1');
h1.innerHTML = "<i>Hey</i>";
h1.className = "tag";

console.dir(h1)





let sel = document.querySelector('select')
let dev = document.querySelector('#device')



sel.addEventListener('change', (dets)=>{
    let d = dets.target.value
    dev.textContent= `${d} Device selected`
})
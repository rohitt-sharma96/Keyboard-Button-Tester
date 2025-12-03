let h1 = document.querySelector('h1');

let main = document.querySelector('main');

document.addEventListener('keydown', (dets)=>{
    // console.log(dets.key);
    if(dets.key === " "){
        // h1.textContent = "spc"
    }else{

        h1.textContent = `${dets.key}`
    }
    
    
})
/* let h1 = document.querySelector('h1')

h1.className = 'hulu'
h1.className += ' golu'


console.dir(h1)
 */

//* Q.1 Select the heading of a page by ID and change its text to "Welcome to Sheryians"
/* 
let h1 = document.getElementById('h1')
console.log(h1);

h1.textContent= "Welcome to Sheryians"
*/
//* Q.1 Select all <li> elements and prints their text using a loop
/* 
let li = document.querySelectorAll('li')

li.forEach((val)=>{
    console.log(val.textContent)
})
     */

//* Q.3 Select a paragraph and replace its content with: <b> Updated </b> by JavaScript
/* 
let para = document.querySelector('p')
para.innerHTML = '<b> Updated </b>'
 */


//* Q.4 How do you get src of an image using JavaScript?
/* let img = document.querySelector('img')
console.log(img.src);
let src = img.getAttribute('src')
console.log(src);
 */

//* Q.5 Select a link and update its href to point to https://www.sheryians.com
// let link = document.querySelector('a')
// link.href = 'https://www.sheryians.com';
// link.setAttribute('href','https://www.sheryians.com')


//* Q.6 Add a title attribute to a div dynamically 
// let div =  document.querySelector('div')
// div.setAttribute('title', 'Demo')


//* Q.7 Remove the disabled attribute from a button
// let btn = document.querySelector('button')
// btn.removeAttribute('disabled')

//* Q.8 Create a new list item <li> New Task </li> and add it to the end of a <ul>.
/* let ul = document.querySelector('ul')

let li = document.createElement('li')

li.textContent = 'New Task';
ul.appendChild(li) */

//* Q.9 Create a new image element with a placeholder source and add it at the top of a div
// let div = document.querySelector('div');
// let img = document.createElement('img');

// img.setAttribute('src', 'https://images.unsplash.com/photo-1761839257664-ecba169506c1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

// img.classList.add('placeholder')

// document.body.prepend(img);

//* Q.10 Select the first item in list and delete it from the DOM.

// let ul = document.querySelector('ul')
// let li = document.querySelector('li')

// ul.removeChild(li)

//* Q.11 Add a highlight class to every even item in a list.

// document.querySelectorAll('ul li:nth-child(2n)') //For target even elem.
/* 
let lis = document.querySelectorAll('li')

let btn = document.querySelector('button')

lis.forEach((val, idx)=>{
    console.log(val);
    
    if(idx % 2 == 1){
        val.classList.add('highlight')
    }
})

btn.addEventListener('click', ()=>{
    lis.forEach((val)=>{
        val.classList.toggle('highlight')
    })
}) */


//* Q. 12 Toggle a class active on a button when clicked (Hint: use classList.toggle())


//* Q.13 set the font size of all <p> elements to 18px using .style
let paras = document.querySelectorAll('p')

 paras.forEach((val)=>{
    val.style.fontSize = '18px';
 })


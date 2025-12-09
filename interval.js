// localStorage,sessionStorage, And Cookies 
// localStorage mein set karna - setItem
// localStorage se remove karna - removeItem
// localStorage mein se edit karna - setItem -> se hi edit krte hai
// localStorage se data fetch karna  - getItem


localStorage.setItem('friends',JSON.stringify(['akash','rohit','kunal']))

let val = JSON.parse(localStorage.getItem('friends'))
    
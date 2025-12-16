const users = [
    {
        userName: 'aayush gupta',
        pic: 'https://i.pinimg.com/736x/6b/b9/ed/6bb9eddacfd2e11eca1b986b274749a5.jpg',
        bio: 'silent chaos in a loud world 🖤 | not for everyone'
    },
    {
        userName: 'aman verma',
        pic: 'https://i.pinimg.com/736x/54/ba/9b/54ba9be7870f15265b0cc0a7a1978ebf.jpg',
        bio: 'living life one vibe at a time ✨'
    },
    {
        userName: 'priya sharma',
        pic: 'https://i.pinimg.com/1200x/72/2b/ca/722bca5614ee56d5ef0d6ff647017b59.jpg',
        bio: 'soft heart, strong mind 🌸'
    },
    {
        userName: 'karan singh',
        pic: 'https://i.pinimg.com/1200x/ae/54/31/ae5431a21686d1eb7d38ac5e2a7b8799.jpg',
        bio: 'dream big. stay real.'
    },
    {
        userName: 'neha patel',
        pic: 'https://i.pinimg.com/736x/41/b9/e4/41b9e4ad8bf71be1bca26845723f880c.jpg',
        bio: 'creating my own sunshine ☀️'
    }
];


function showUsers(arr) {
    arr.forEach((user) => {
        //Creating card div here
        let card = document.createElement('div');
        card.classList.add('card');

        //Creating image tag here and assigning image address
        let img = document.createElement('img')
        img.src = user.pic;
        img.classList.add('bg-img')

        //Crating blurred-layer div 
        let blurredLayer = document.createElement('div')
        blurredLayer.style.backgroundImage = `url(${user.pic})`
        blurredLayer.classList.add('blurred-layer')


        //Creating div name content that contain h3 and p tag
        let content = document.createElement('div')
        content.classList.add('content');

        let h3 = document.createElement('h3')
        h3.textContent = user.userName;

        let p = document.createElement('p')
        p.textContent = user.bio;

        //Append heading and paragraph to Content
        content.appendChild(h3);
        content.appendChild(p);

        //Append all to card
        card.appendChild(img)
        card.appendChild(blurredLayer)
        card.appendChild(content)

        //Finally, Append card to body or any container
        let cards = document.querySelector('.cards')
        cards.appendChild(card)
    })
}

showUsers(users);

let inp = document.querySelector('.inp')

inp.addEventListener('input', () => {
    let newArr = users.filter((user) => {
        document.querySelector('.cards').innerHTML = "";
        return user.userName.startsWith(inp.value)
    })
    
    console.log(newArr);

   if(newArr.length == 0){
    document.querySelector('.cards').innerHTML = "User Not found!"
   }

    showUsers(newArr);
})
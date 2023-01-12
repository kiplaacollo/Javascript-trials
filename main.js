const Headsection = document.createElement('section');
const header = document.createElement('div');
header.classList.add('head');
const msg = document.createElement('h1');
msg.classList.add('msg');
msg.textContent = 'WELCOME';
const list = document.createElement('ul');
const listItem = ['Home', 'About', 'Contact'];;
list.classList.add('navigation');
const hamburger = document.createElement('div');
hamburger.innerHTML = '<a href="javascript:void(0);" class="icon"><i class="fa fa-bars"></i></a>';
hamburger.classList.add('icon')

for (let i =0; i < listItem.length; i++){
    const li = document.createElement('li');


    li.innerHTML = listItem[i];
    list.appendChild(li);
}

    

    header.appendChild(msg);
    header.appendChild(list);
    header.appendChild(hamburger);
    


    Headsection.appendChild(header);

    document.body.appendChild(Headsection);

    const humb = document.querySelector('.icon');
    const nav = document.querySelector('.navigation');
    humb.addEventListener('click', () => {
        nav.classList.toggle('active');
        msg.classList.toggle('active');
    })

    
    


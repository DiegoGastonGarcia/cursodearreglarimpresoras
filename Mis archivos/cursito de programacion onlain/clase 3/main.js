let cards = [
    {
        tittle: 'The Darkest Flowers',
        description: 'Blessed pal que lea',
        img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=683&q=80'
    },
    {
        tittle: 'Pink City',
        description: 'Blessed pal que lea',
        img: 'https://images.squarespace-cdn.com/content/v1/582c85d4e4fcb579977af37f/1582730983385-DVZ60GLF4JOLZQU8WDWD/ke17ZwdGBToddI8pDm48kJanlAjKydPZDDRBEy8QTGN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hveExjbswnAj1UrRPScjfAi-WHBb3R4axoAEB7lfybbrcBqLQ3Qt4YGS4XJxXD2Ag/over+consumption.jpg?format=500w'
    },  
    {
        tittle: 'De Pana Time',
        description: 'Blessed pal que lea',
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04fb9860442387.5a4d35e65c508.jpg'
    },
    {
        tittle: 'Long Night in the Road',
        description: 'Blessed pal que lea',
        img: 'https://images.squarespace-cdn.com/content/v1/582c85d4e4fcb579977af37f/1557941742329-VY9Y76YHVPTJ0EVUB3DO/ke17ZwdGBToddI8pDm48kIBgYGdXRBx9YUuNNxcbfDF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s1LK8gu64hle203mIYOUnp1UMwdvSdG07QgC9u2_Z6oW1Um8lqSe9e-U9ZVCH2dIQ/Driving+Spread-colour2.jpg?format=500w'
    },
    {
        tittle: 'The Undying Singer',
        description: 'Blessed pal que lea',
        img: 'https://images.squarespace-cdn.com/content/v1/582c85d4e4fcb579977af37f/1570041025000-W7UZ3BZE2NG2VM4XYCLQ/ke17ZwdGBToddI8pDm48kHIj3vKke5ik-qqF3zapNgJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0vApyh6NsI3juLutxTva2hj3yuBvPDyVv1hCiJxXP1ffm34niHG5NQTYfsxlBad5Gg/GWAY.jpg?format=500w'
    }
]

document.addEventListener('DOMContentLoaded', function ()
{
createCard();
listenerToModal ();
listenerToCards ();


const aboutUs = document.querySelector('#about_us');
aboutUs.addEventListener('click', () =>{
    const scrollToContent = document.querySelector('footer');
    scrollToContent.scrollIntoView({
        behavior: 'smooth',
    });
})

})



const openTab = (location) => {
    window.open(`https://www.${location}.com`);
}


let listenerToModal = () => {
    let modalContainer = document.querySelector('.modal_container')
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer){
        modalContainer.classList.remove('show')
        }
    })
}


let listenerToCards = () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', (ev) => {
            const modalContainer = document.querySelector('.modal_container');
            modalContainer.classList.add('show');
            const target = ev.target;
            const card = target.closest('.card')
            let usedIndex = card.dataset.index;
            cambiameElModal(parseInt(usedIndex));
        }
        )
    })
}

const cambiameElModal = (index) => {
    const modal = document.querySelector('.modal');
    const tittle = document.querySelector('#modal_title');
    const description = document.querySelector('#modal_description');
    const image = document.querySelector('#modal_img');
    tittle.textContent = cards[index].tittle;
    description.textContent = cards[index].description;
    image.src = cards[index].img;
}

let createCard = () => {
    let cardElements = cards.map((el, index) =>{
        return `<div data-index=${index} class="card">
        <div class="card_description">
          <h4 class="card_title">${el.tittle}</h4>
          <p>${el.description}</p>
        </div>
        <img src="${el.img}" alt="">
      </div>`
    })
    cardElements.forEach((element) => {
        const temporalParent = document.createElement('div');
        temporalParent.innerHTML = element;
        const cardsCointainer = document.querySelector('.cards_container');
        cardsCointainer.appendChild(temporalParent.firstChild)
    })
}



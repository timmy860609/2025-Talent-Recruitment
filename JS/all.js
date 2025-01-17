

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelector('.goTop');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            goTopButton.style.display = 'block';  
        } else {
            goTopButton.style.display = 'none';   
        }
    });

    
    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});





let scrollPosition = 0;

function openPopup(cardElement) {
    const title = cardElement.getAttribute('data-title');
    const subtitle = cardElement.getAttribute('data-subtitle');
    const content = cardElement.getAttribute('data-content');
    const additionalImg = cardElement.getAttribute('data-additional-img');

   
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-subtitle').textContent = subtitle;
    document.getElementById('popup-text').textContent = content;

    const additionalImgElement = document.getElementById('popup-additional-img');
    additionalImgElement.src = additionalImg || '';
    additionalImgElement.style.display = additionalImg ? 'block' : 'none';

   
    scrollPosition = window.scrollY;
    document.body.style.top = `-${scrollPosition}px`; 
    document.body.classList.add('no-scroll'); 

   
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    
    document.body.classList.remove('no-scroll');
    document.body.style.top = ''; 
    window.scrollTo(0, scrollPosition); 
}

document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

const popupContent = document.querySelector('.popup-content');
popupContent.addEventListener('click', (e) => e.stopPropagation());



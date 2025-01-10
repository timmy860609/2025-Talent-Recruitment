//popup
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


    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('no-scroll'); // 禁用滾動
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; 
    document.body.classList.remove('no-scroll'); 
}

document.getElementById('popup').addEventListener('click', function(event) {
    
    if (event.target === this) {
        closePopup();
    }
});

const popupContent = document.querySelector('.popup-content');
popupContent.addEventListener('click', (e) => e.stopPropagation());


//goTop

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelector('.goTop');

    // 滾動事件監聽
    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            goTopButton.style.display = 'block';  // 顯示 GoTop 按鈕
        } else {
            goTopButton.style.display = 'none';   // 隱藏 GoTop 按鈕
        }
    });

    // 點擊事件：回到頂部
    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // 平滑滾動效果
        });
    });
});


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




// 等待 DOM 加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 當點擊封面圖片時，隱藏圖片並顯示影片
    document.getElementById('videoThumbnail').addEventListener('click', function() {
        // 隱藏封面圖片
        document.getElementById('videoThumbnail').style.display = 'none';  

        // 顯示影片並開始播放
        const videoIframe = document.getElementById('videoIframe');
        videoIframe.src = "https://drive.google.com/file/d/1BT-bW1UJhLUo4QQAl7aWuRJ8COD_d3ZB/preview";  // 設定影片的 URL (直接播放影片)
        videoIframe.style.display = 'block';  // 顯示影片
    });
});





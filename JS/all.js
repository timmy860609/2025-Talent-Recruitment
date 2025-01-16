
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

// 儲存當前滾動位置
let scrollPosition = 0;

function openPopup(cardElement) {
    const title = cardElement.getAttribute('data-title');
    const subtitle = cardElement.getAttribute('data-subtitle');
    const content = cardElement.getAttribute('data-content');
    const additionalImg = cardElement.getAttribute('data-additional-img');

    // 更新彈窗的內容
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-subtitle').textContent = subtitle;
    document.getElementById('popup-text').textContent = content;

    const additionalImgElement = document.getElementById('popup-additional-img');
    additionalImgElement.src = additionalImg || '';
    additionalImgElement.style.display = additionalImg ? 'block' : 'none';

    // 保存滾動位置，並禁用滾動
    scrollPosition = window.scrollY;
    document.body.style.top = `-${scrollPosition}px`; // 固定當前滾動位置
    document.body.classList.add('no-scroll'); // 禁用滾動

    // 顯示彈窗
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    // 恢復滾動
    document.body.classList.remove('no-scroll');
    document.body.style.top = ''; // 清除固定樣式
    window.scrollTo(0, scrollPosition); // 恢復滾動位置
}

// 點擊彈窗外部關閉彈窗
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

// 防止點擊彈窗內部時觸發關閉
const popupContent = document.querySelector('.popup-content');
popupContent.addEventListener('click', (e) => e.stopPropagation());



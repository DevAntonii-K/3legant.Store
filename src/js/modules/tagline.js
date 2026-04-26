

export default function closeTagline() {
    const tagline = document.querySelector('.tagline');
    const closeTaglineBtn = document.querySelector('.tagline__close');
    
    closeTaglineBtn.addEventListener('click', () => {
        tagline.classList.add('none')
    })
}


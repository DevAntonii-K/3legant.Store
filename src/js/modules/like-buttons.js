export default function likeButtons() {
    const buttons = document.querySelectorAll('.slider__like-btn');

    buttons.forEach(btn => {

        const offSrc = btn.src;
        const onSrc = btn.src.replace('add-to-wishlist.png', 'add-to-wishlist-on.png');

        let state = 'off';

        btn.addEventListener('click', () => {

            btn.classList.add('is-animating');

            if (state === 'on') {
                btn.src = offSrc;
                state = 'off';
            } else {
                btn.src = onSrc;
                state = 'on';
            }

            setTimeout(() => {
                btn.classList.remove('is-animating');
            }, 200);

        });

    });
}
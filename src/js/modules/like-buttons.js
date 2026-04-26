export default function likeButtons() {
    const buttons = document.querySelectorAll('.slider__like-btn');

    buttons.forEach(btn => {

        // initial state
        btn.dataset.state = 'off';

        btn.addEventListener('click', () => {

            // 1. start animation
            btn.classList.add('is-animating');

            // 2. toggle image + state
            if (btn.dataset.state === 'on') {
                btn.src = btn.dataset.off;
                btn.dataset.state = 'off';
            } else {
                btn.src = btn.dataset.on;
                btn.dataset.state = 'on';
            }

            // 3. remove animation after short delay
            setTimeout(() => {
                btn.classList.remove('is-animating');
            }, 200);

        });

    });
}
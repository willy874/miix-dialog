export default function trapTabKey(modal) {
    modal.addEventListener('keydown', (e) => {
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        let focusableElements = modal.querySelectorAll(focusableElementsString);
        // Convert NodeList to Array
        focusableElements = Array.prototype.slice.call(focusableElements);

        const firstTabStop = focusableElements[0];
        const lastTabStop = focusableElements[focusableElements.length - 1];
        if (e.keyCode === 9) {
            // SHIFT + TAB
            if (e.shiftKey) {
                if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    lastTabStop.focus();
                }
                // TAB
            } else {
                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                }
            }
        }
    })
}
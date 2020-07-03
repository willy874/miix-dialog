import interact from 'interactjs'

export default (dialog, header, draggableCss) => {
    let position = {
        x: 0,
        y: 0
    }
    interact(dialog)
        .draggable({
            allowFrom: header,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            listeners: {
                start(event) {
                    event.target.classList.add(draggableCss)
                },
                move(event) {
                    position.x += event.dx
                    position.y += event.dy
                    event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
                },
                end(event) {
                    event.target.classList.remove(draggableCss)
                }
            }
        })
}
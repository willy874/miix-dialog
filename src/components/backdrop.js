import m from 'mithril'
import classNames from 'classnames/bind'
import styles from '../styles/main.css'
import Dialog from '../dialog'
const cx = classNames.bind(styles)

export default class Backdrop {
    oncreate(vnode) {
        setTimeout(() => {
            vnode.dom.classList.add(`${cx('show')}`)
        }, 100)
    }
    view(vnode) {
        const {
            dialogId,
            modal,
            zIndex
        } = vnode.attrs
        return m('div', {
            class: cx('modal-backdrop', 'fade'),
            style: {
                zIndex: zIndex -1
            },
            onclick: (e) => {
                e.preventDefault();
                if (modal) {
                    Dialog.close(null, dialogId)
                }
            }
        })
    }
}
import m from 'mithril'
import classNames from 'classnames/bind'
import styles from '../styles/main.css'
const cx = classNames.bind(styles)

const loop = []

class ToastComponent {
    view(vnode) {
        const {
            position,
            content,
            buttons
        } = vnode.attrs

        let _pos = {
            top: true,
            left: false,
            right: true,
            bottom: false
        }
        if (position && position.indexOf('bottom') > -1) {
            _pos.top = false
            _pos.bottom = true
        }
        if (position && position.indexOf('left') > -1) {
            _pos.left = true
            _pos.right = false
        }

        return m('div', {
            class: cx('md-toast', {
                'md-left': _pos.left,
                'md-right': _pos.right,
                'md-top': _pos.top,
                'md-bottom': _pos.bottom,
            })
        }, [
            m('div', {
                class: cx('md-toast-content')
            }, [
                m('span', {
                    class: cx('md-toast-text')
                }, m.trust(content)),
                (Array.isArray(buttons)) ? [
                    buttons.map(item => {
                        return m('button[type="button"]', {
                            class: cx('md-action', 'md-button'),
                            onclick: item.onclick
                        }, item.label)
                    })
                ] : null
            ])
        ])
    }
}

const Toast = {
    show: (instance = {}) => {
        if (Object.keys(instance).length > 0) {
            loop.push(instance)
        }
    },
    view: (vnode) => {
        if (loop.length == 0) {
            return
        }
        return m('div', {
            class: cx('toast-container', {
                'md-left': _pos.left,
                'md-right': _pos.right,
                'md-top': _pos.top,
                'md-bottom': _pos.bottom
            })
        }, [
            loop.map(item => {
                return m(ToastComponent, {
                    ...item
                })
            })
        ])
    }
}
export default Toast
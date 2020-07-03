import m from 'mithril'
import classNames from 'classnames/bind'
import Backdrop from '../components/backdrop'
import styles from '../styles/main.css'
import Dialog from './index'
const cx = classNames.bind(styles)

class Button {
    view(vnode) {
        const {
            type,
            classnames,
            title
        } = vnode.attrs

        if (title && typeof title === 'string') {
            return m('button[type="button"]', {
                class: cx('swal2-styled', classnames),
                onclick: (e) => {
                    e.preventDefault()
                    if (type === 'confirm') {
                        return Dialog.close(true)
                    }
                    Dialog.close()
                }
            }, m.trust(title))
        }
        return
    }
}

class AlertComponent {
    oncreate(vnode) {
        const {
            dom,
            attrs
        } = vnode
        setTimeout(() => {
            dom.classList.add(`${cx('swal2-show')}`)
            dom.style.display = 'flex'
        }, 150);

        //自動關閉
        if (attrs.autoClose && typeof attrs.autoClose === 'number') {
            setTimeout(() => {
                Dialog.close()
            }, attrs.autoClose);
        }
    }
    view(vnode) {
        const {
            icon,
            title,
            content,
            buttons,
            footer,
            autoClose
        } = vnode.attrs
        return m('div', {
            class: cx('modal-content', 'swal2-popup'),
            style: {
                display: 'none',
            }
        }, [
            m('div', {
                class: cx('swal2-header')
            }, [
                (icon === 'success') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-success', 'swal2-icon-show'),
                        style: {
                            display: 'flex',
                        }
                    }, [
                        m.trust(`
                        <div class="${cx('swal2-success-circular-line-left')}" style="background-color: transparent;"></div>
                        <span class="${cx('swal2-success-line-tip')}"></span> 
                        <span class="${cx('swal2-success-line-long')}"></span>
                        <div class="${cx('swal2-success-ring')}"></div> 
                        <div class="${cx('swal2-success-fix')}" style="background-color: transparent;"></div>
                        <div class="${cx('swal2-success-circular-line-right')}" style="background-color: transparent;"></div>
                    `)
                    ])
                ] : null,
                (icon === 'info') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-info'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'question') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-question'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'error') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-error', 'swal2-icon-show'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`
                        <span class="${cx('swal2-x-mark')}">
                            <span class="${cx('swal2-x-mark-line-left')}"></span>
                            <span class="${cx('swal2-x-mark-line-right')}"></span>
                        </span>
                        `)
                    ])
                ] : null,
                (icon === 'warning') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-question'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'confirm') ? [
                    m('div', {
                        class: cx('swal2-icon', 'swal2-warning'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (title) ? [
                    m('h2', {
                        class: cx('swal2-title')
                    }, title)
                ] : null,
            ]),

            (content) ? [
                m('div', {
                    class: cx('swal2-content')
                }, m.trust(content))
            ] : null,
            (buttons) ? [
                m('div', {
                    class: cx('swal2-actions')
                }, [
                    Object.keys(buttons).map(item => {
                        if (item == 'cancel') {
                            return m(Button, {
                                type: 'cancel',
                                classnames: cx('swal2-styled', 'swal2-cancel'),
                                title: buttons.cancel
                            })
                        }
                        if (item == 'confirm') {
                            return m(Button, {
                                type: 'confirm',
                                classnames: cx('swal2-styled', 'swal2-confirm'),
                                title: buttons.confirm ? buttons.confirm : (!autoClose) ? 'OK' : null
                            })
                        }
                    })
                ])
            ] : null,
            (footer) ? [
                m('div', {
                    class: cx('swal2-footer')
                }, [
                    m.trust(footer)
                ])
            ] : null
        ])
    }
}

export default class AlertPanel {
    constructor(vnode) {
        this.key = vnode.attrs.key
    }
    oncreate({
        dom
    }) {
        const modal = dom.querySelector(`.${cx('modal')}`)
        setTimeout(() => {
            this.display = true
            modal.classList.add(`${cx('show')}`)
            m.redraw()
        }, 200);

    }
    onbeforeremove({
        dom
    }) {
        const modal = dom.querySelector(`.${cx('modal')}`)
        modal.classList.remove(`${cx('show')}`)
        const backdrop = dom.querySelector(`.${cx('modal-backdrop')}`)
        if (backdrop) {
            backdrop.classList.remove(`${cx('show')}`)
        }
        const content = dom.querySelector(`.${cx('modal-content')}`)
        content.classList.remove(`${cx('swal2-show')}`)
        content.classList.add(`${cx('swal2-hide')}`)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
                m.redraw()
            }, 150)
        })
    }
    view(vnode) {
        const {
            item,
            zIndex
        } = vnode.attrs
        const {
            opts
        } = item

        return m('div', {
            class: cx('modal-placeholder')
        }, [
            m('div', {
                class: cx('modal'),
                style: {
                    display: 'block',
                    paddingRight: '16px',
                    zIndex
                }
            }, [
                m('div', {
                    id: `dialog-${this.key}`,
                    class: cx('modal-dialog', 'modal-dialog-centered')
                }, [
                    m(AlertComponent, {
                        dialogId: `dialog-header-${this.key}`,
                        ...opts
                    })
                ])
            ]),
            m(Backdrop, {
                zIndex
            })
        ])
    }
}
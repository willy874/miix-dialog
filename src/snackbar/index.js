import m from 'mithril'
import uuid from 'uuid/v4'
import classNames from 'classnames/bind'
import 'miix-components/dist/styles.css'
import {
    Button
} from 'miix-components'
import styles from '../styles/main.css'
const cx = classNames.bind(styles)

const loop = []

function handleInstance(options = {}, icon) {
    let defaultOptions = {
        icon, //success, error, warning, info ,或自定按鈕
        title: false, //文字
        content: false, //文字
        position: 'top right',
        closeButton: false,
        actions: [],
        autoClose: 800, //自動關閉, 800ms
    }

    const id = `${uuid.v4()}`

    let opts = Object.assign({}, defaultOptions, options, {
        onclose: () => {
            SnackBar.close(id)
        }
    })

    const instance = {
        uuid: id,
        opts
    }

    if (loop.length > 0) {
        loop.splice(0, 1)
    }

    loop.push(instance)
    return id
}

class SnackBarComponent {
    oncreate(vnode) {
        const {
            id,
            autoClose,
            onclose
        } = vnode.attrs

        if (autoClose) {
            setTimeout(() => {
                onclose(id)
            }, autoClose)
        }
    }
    onbeforeremove(vnode) {
        vnode.dom.classList.add(vnode.attrs.animationEnd)
        return new Promise(resolve => {
            // vnode.dom.addEventListener("animationend", resolve)
            setTimeout(() => {
                resolve(true)
            }, 500);
        })
    }
    view(vnode) {
        let {
            id,
            icon,
            position,
            title,
            content,
            closeButton,
            actions,
            onclose,
            autoClose,
            animationStart,
            animationEnd
        } = vnode.attrs
        const status = (icon === 'success' || icon === 'error' || icon === 'warning' || icon === 'info') ? icon : ''
        icon = (icon === 'success') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>')) :
            (icon === 'error') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 475.5 475.5"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>')) :
            (icon === 'warning') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>')) :
            (icon === 'info') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>')) :
            (icon) ? icon : null
        const top = position.indexOf('top') > -1
        const left = position.indexOf('left') > -1
        const right = position.indexOf('right') > -1
        const bottom = position.indexOf('bottom') > -1
        const center = position.indexOf('center') > -1
        position = position || 'top right'
        animationStart = animationStart || 'slideInRight'
        animationEnd = animationEnd || 'fadeOut'
        this.animation = animationStart
        return m('div', {
            class: cx('snackbar-container', status, {
                'snackbar-position-left-top': left && top,
                'snackbar-position-right-top': right && top,
                'snackbar-position-left-bottom': left && bottom,
                'snackbar-position-right-bottom': right && bottom,
                'snackbar-position-center-top': center && top,
                'snackbar-position-center-bottom': center && bottom,
                'snackbar-position-center-right': center && right,
                'snackbar-position-center-left': center && left,
            })
        }, [
            m('', {
                class: cx('snackbar-body', this.animation),
            }, [
                icon,
                m('span', {
                    class: cx('snackbar-title'),
                }, title),
                m('div', {
                    class: cx('snackbar-content'),
                }, content),
                actions.map(item => {
                    return m(Button, {
                        onclick: (e) => {
                            item.click(e)
                            onclose(id)
                        }
                    }, item.label)
                }),
                (closeButton || !autoClose) ? [
                    //修改為button
                    m('i', {
                        class: cx('cancel'),
                        onclick: (e) => {
                            e.preventDefault()
                            onclose(id)
                        }
                    })
                ] : null
            ])
        ])
    }
}

const SnackBar = {
    success: (options = {}) => {
        return handleInstance(options, 'success')
    },
    info: (options = {}) => {
        return handleInstance(options, 'info')
    },
    warning: (options = {}) => {
        return handleInstance(options, 'warning')
    },
    error: (options = {}) => {
        return handleInstance(options, 'error')
    },
    show: (options = {}) => {
        return handleInstance(options)
    },
    close: (key) => {
        let _index
        if (key) {
            _index = loop.findIndex((item) => {
                return item.uuid == key
            })
        } else {
            _index = loop.length - 1
        }

        setTimeout(() => {
            loop.splice(_index, 1)
            m.redraw()
        }, 0)
    },
    view: () => {
        let zIndex = 1050
        return [
            loop.map(item => {
                return m(SnackBarComponent, {
                    key: item.uuid,
                    ...item.opts,
                    zIndex
                })
            })
        ]
    }
}


export default SnackBar
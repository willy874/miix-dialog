import m from 'mithril'
import uuid from 'uuid'
import {
    isMobile
} from 'miix-utils'
import {
    hasScroller
} from '../utils'
import ModalPanel from './modal'
import AlertPanel from './alert'
import classNames from 'classnames/bind'
import styles from '../styles/main.css'
const cx = classNames.bind(styles)

const MODAL = '對話視窗',
    ALERT = '警告視窗'


let dialogLoop = []

function handleAlert(icon, options = {}) {
    let defaultOptions = {
        icon, //success, error, warning, info ,或自定按鈕
        title: false, //文字
        content: null, //html
        buttons: {
            cancel: null, //文字
            confirm: null //文字
        },
        footer: null, //html
        autoClose: false //自動關閉, 800ms
    }

    let opts = Object.assign({}, defaultOptions, options)

    let didHide
    if (opts.didHide && typeof opts.didHide === 'function') {
        didHide = opts.didHide
        delete opts.didHide
    }
    const id = `${uuid.v4()}`
    const instance = {
        type: ALERT,
        uuid: id,
        opts,
        didHide
    }

    Dialog.loop.push(instance)

    openModal()

    return id
}

function openModal() {
    if (!document.body.classList.contains(`${cx('modal-open')}`)) {
        document.body.classList.add(`${cx('modal-open')}`)
        if (!isMobile() && hasScroller()) {
            document.body.style.paddingRight = '16px'
        }
    }
}


const Dialog = {
    loop: [],
    loading: (value) => {
        isLoading = value
    },
    //警告視窗
    success: (options = {}) => {
        return handleAlert('success', options)
    },
    error: (options = {}) => {
        return handleAlert('error', options)
    },
    info: (options = {}) => {
        return handleAlert('info', options)
    },
    warning: (options = {}) => {
        return handleAlert('warning', options)
    },
    confirm: (options = {}) => {
        if (!options.confirm) {
            options.confirm = '確定'
        }
        if (!options.cancel) {
            options.cancel = '取消'
        }
        return handleAlert('confirm', options)
    },
    //對話視窗
    show: (component, attributes = {}, didHide) => {
        if (typeof attributes === 'function') {
            didHide = attributes
            attributes = {}
        }
        const instance = {
            type: MODAL,
            component,
            uuid: `${uuid.v4()}`,
            attributes,
            didHide
        }
        Dialog.loop.push(instance)

        openModal()

        return instance.uuid
    },
    close: (returnValue, key) => {
        let _index, closeItem = null

        if (key) {
            _index = Dialog.loop.findIndex((item) => {
                return item.uuid == key
            })
            closeItem = Dialog.loop[_index]
        } else {
            _index = Dialog.loop.length - 1
            closeItem = Dialog.loop[_index]
        }

        setTimeout(() => {
            Dialog.loop.splice(_index, 1)
            if (Dialog.loop.length === 0) {
                const body = document.body
                body.classList.remove(`${cx('modal-open')}`)
                body.style.paddingRight = ''
            }
            m.redraw()
        }, 150)

        if (typeof closeItem.didHide === 'function') {
            let promise = new Promise((resolve, reject) => {
                resolve(closeItem.didHide(returnValue))
            })
            return promise
        }

    },
    view: (vnode) => {
        let zIndex = 1050
        return [
            Dialog.loop.map((item, index) => {
                zIndex = zIndex + 2
                //對話視窗
                if (item.type === MODAL) {
                    return m(ModalPanel, {
                        key: item.uuid,
                        dialogId: item.uuid,
                        item,
                        zIndex
                    })
                }
                //警告視窗
                if (item.type === ALERT) {
                    return m(AlertPanel, {
                        key: item.uuid,
                        dialogId: item.uuid,
                        item,
                        zIndex
                    })
                }
            }),

        ]
    }
}

export default Dialog
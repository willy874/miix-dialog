import m from 'mithril'
import interact from 'interactjs'
import classNames from 'classnames/bind'
import {
    enableDrag,
    trapTabKey
} from '../utils'
import Backdrop from '../components/backdrop'
import styles from '../styles/main.css'
const cx = classNames.bind(styles)


export default class ModalPanel {
    constructor(vnode) {
        this.dialogId = vnode.attrs.dialogId
        this.attributes = {}
        this.drag = false
        this.remove = false
        this.size = null
        this.modal = false

        let {
            options
        } = vnode.attrs.item.attributes
        if (options) {
            const {
                center,
                drag,
                fullscreen,
                size,
                modal
            } = options
            this.modal = (modal)?true:false
            this.drag = drag
            this.fullscreen = fullscreen
            this.size = size
            this.center = center
        }

        if (vnode.attrs.item && vnode.attrs.item.attributes) {
            this.attributes = Object.assign({}, vnode.attrs.item.attributes)
            delete this.attributes.options
            delete this.attributes.dialogId
        }

        this.focusedElementBeforeModal = null;

    }
    oncreate({
        dom
    }) {
        const modal = dom.querySelector(`.${cx('modal')}`)
        const dialog = dom.querySelector(`#dialog-${this.dialogId}`)

        //拖拉視窗處理handler
        let header = dom.querySelector(`#dialog-header-${this.dialogId}`);
        if (header == null) {
            header = dom.querySelector('.modal-header')
        }

        //可拖拉視窗
        if (header && this.drag) {
            enableDrag(dialog, header, `${cx('draggable')}`)
        }
        setTimeout(() => {
            modal.classList.add(`${cx('show')}`)
        }, 200);

        //foucs tab cycle
        trapTabKey(modal)
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

        const dialog = dom.querySelector(`#dialog-${this.dialogId}`)
        interact(dialog).unset()

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
            component
        } = item

        return m('div', {
            class: cx('modal-placeholder')
        }, [
            
            m('div', {
                class: cx('modal', 'fade'),
                style: {
                    display: 'block',
                    paddingRight: (this.fullscreen) ? false : '17px',
                }
            }, [
                m('div', {
                    id: `dialog-${this.dialogId}`,
                    style: {
                        zIndex: zIndex
                    },
                    class: cx({
                        'modal-dialog': (this.fullscreen) ? false : true,
                        'modal-dialog-centered': this.center,
                        'modal-sm': this.size === 'sm',
                        'modal-lg': this.size === 'lg',
                        'modal-xl': this.size === 'xl',
                        'modal-full': this.fullscreen
                    })
                }, [
                    m(component, {
                        dialogId: `${this.dialogId}`,
                        ...this.attributes
                    })
                ]),
                m(Backdrop, {
                    dialogId: this.dialogId,
                    modal: this.modal,
                    zIndex
                })
            ])
            
        ])
    }
}
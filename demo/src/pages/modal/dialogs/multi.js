import m from 'mithril'
import Dialog from '@core/dialog'
import ModalDialog from './modal'
import classNames from 'classnames/bind'
import styles from '@core/styles/main.css'
const cx = classNames.bind(styles);

export default class MultiDialog {
    view() {
        return m('div', {
            class: cx('modal-content')
        }, [
            m('div', {
                class: cx('modal-header')
            }, [
                m('h5', {
                    class: cx('modal-title')
                }, 'Modal title'),
                m('button[type="button"]', {
                    class: cx('close'),
                    onclick: (e) => {
                        Dialog.close()
                    }
                }, [
                    m.trust(`&times;`)
                ])
            ]),
            m('div', {
                class: cx('modal-body')
            }, [
                m('p', 'Modal body text goes here')
            ]),
            m('div', {
                class: cx('modal-footer')
            }, [
                m('button[type="button"]', {
                    class: cx('btn', 'btn-secondary'),
                    onclick: (e) => {
                        Dialog.close()
                    }
                }, [
                    'Close'
                ]),
                m('button[type="button"]', {
                    class: cx('btn', 'btn-primary'),
                    onclick: (e) => {
                        Dialog.show(ModalDialog, {
                            size: 'sm'
                        })
                    }
                }, [
                    'Open Next'
                ])
            ]),
        ])
    }
}
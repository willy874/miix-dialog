'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var m = _interopDefault(require('mithril'));
var uuid = _interopDefault(require('uuid'));
var miixUtils = require('miix-utils');
var interact = _interopDefault(require('interactjs'));
var classNames = _interopDefault(require('classnames/bind'));
var uuid$1 = _interopDefault(require('uuid/v4'));
var miixComponents = require('miix-components');

var enableDrag = (dialog, header, draggableCss) => {
    let position = {
        x: 0,
        y: 0
    };
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
                    event.target.classList.add(draggableCss);
                },
                move(event) {
                    position.x += event.dx;
                    position.y += event.dy;
                    event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
                },
                end(event) {
                    event.target.classList.remove(draggableCss);
                }
            }
        });
};

function hasScroller() {
    return document.body.scrollHeight > document.documentElement.clientHeight
}

var styles = {"modal-open":"_2a6UV","modal":"_2aYMo","modal-dialog":"MGpqs","fade":"_1rIRg","show":"_2rgZz","modal-static":"_7iziF","modal-dialog-scrollable":"_2LzS3","modal-dialog-centered":"_2dwvn","modal-backdrop":"_2sXEg","modal-scrollbar-measure":"s0cii","modal-sm":"_1af75","modal-lg":"_30Gzy","modal-xl":"_3Srw6","swal2-show":"_1x5yg","swal2-container":"_1gSOM","swal2-top":"_1J1k9","swal2-top-start":"_2Do2_","swal2-top-end":"_2CKVQ","swal2-top-left":"_10f2E","swal2-top-right":"_3pL31","swal2-center-start":"_3d81A","swal2-center-end":"_2T426","swal2-center-left":"_2CY90","swal2-center-right":"_2U7LY","swal2-bottom":"_1hOfe","swal2-bottom-start":"_3F1_u","swal2-bottom-end":"_1rqkh","swal2-bottom-left":"_1YVje","swal2-bottom-right":"_244aR","swal2-grow-fullscreen":"_2E8SW","swal2-modal":"_10txd","swal2-center":"_3YDSN","swal2-popup":"_39MSa","swal2-header":"_3tgJ8","swal2-title":"Aa0QQ","swal2-styled":"_3kuK6","swal2-confirm":"_3lNro","swal2-icon-content":"_3F14X","swal2-icon":"_3I1L0","swal2-question":"_2aMM3","swal2-info":"_1T862","swal2-warning":"_34pMO","swal2-content":"_1lWfE","swal2-actions":"_3vHuG","swal2-cancel":"VrGlO","swal2-success":"_3aQep","swal2-success-circular-line-left":"_2Eo1A","swal2-success-line-tip":"_2FmSm","swal2-success-line-long":"_3o6Rt","swal2-success-ring":"_2BFxU","swal2-success-fix":"_3KpTA","swal2-success-circular-line-right":"_2FFqU","swal2-error":"_3Ax07","swal2-x-mark":"_1lO2b","swal2-x-mark-line-left":"LJ5WF","swal2-x-mark-line-right":"YLd6D","swal2-toast":"jMxrK","swal2-icon-show":"_2Yphc","swal2-toast-animate-success-line-tip":"_1rB5w","swal2-toast-animate-success-line-long":"_1iXx1","swal2-toast-show":"_2VbrM","swal2-hide":"BZZQv","swal2-toast-hide":"VvIXu","swal2-animate-success-line-tip":"_7IZn-","swal2-animate-success-line-long":"_3FAZK","swal2-rotate-success-circular-line":"_3vexm","swal2-animate-error-icon":"_1RAwV","swal2-animate-error-x-mark":"_2m_UZ","swal2-noanimation":"BxIM4","toast-container":"_3nJmQ","md-bottom":"_1Mui7","md-left":"_1TW-K","md-right":"_2z3Q8","md-top":"_3Y8J6","md-toast-text":"bOZ2Q","md-toast":"jNdll","md-toast-content":"_2Np4P","md-capsule":"kztA0","ng-leave-active":"_2WI1z","md-swipeleft":"_37Qb_","md-swiperight":"_35cB5","md-swipeup":"x7N5-","md-swipedown":"_1Mcxv","ng-enter":"_2tizx","ng-enter-active":"_36I_4","ng-leave":"eyMtY","md-action":"_2l_dU","md-button":"KycN1","md-toast-animating":"_3uuZO","snackbar-container":"_29oU4","snackbar-position-left-top":"_1ZzqF","snackbar-position-right-top":"_2AMjk","snackbar-position-left-bottom":"DEyzl","snackbar-position-right-bottom":"_2JGbV","snackbar-position-center-top":"_3fjZh","snackbar-position-center-bottom":"_36BzU","snackbar-position-left-center":"_1TzvG","snackbar-position-right-center":"_3PsEX","error":"_3XeB9","warning":"_1joZJ","info":"_3jsa9","success":"egQgR","snackbar-body":"_3XAuH","cancel":"_1Onjm","snackbar-title":"_288iB","snackbar-content":"_1eokX","bounce":"_3av9z","flash":"_3tJw7","pulse":"_3WdWp","rubberBand":"_1eB7Z","shake":"_3-yFk","headShake":"_2yVAv","swing":"_2yte8","tada":"_27_mJ","wobble":"uhXUF","jello":"tB8mQ","heartBeat":"_9rhQ4","bounceIn":"pMDn3","bounceInDown":"_303bi","bounceInLeft":"_3ZDKa","bounceInRight":"_2dUB9","bounceInUp":"_2KMUp","bounceOut":"vN6aC","bounceOutDown":"w_hL8","bounceOutLeft":"_1-klp","bounceOutRight":"_15Mv4","bounceOutUp":"_3lsi1","fadeIn":"_2Vsgr","fadeInDown":"_2RUG7","fadeInDownBig":"_15JjB","fadeInLeft":"_2V063","fadeInLeftBig":"_3Zrki","fadeInRight":"EDLfz","fadeInRightBig":"_3pC3G","fadeInUp":"_1EhOB","fadeInUpBig":"DCPRg","fadeOut":"_3F3qc","fadeOutDown":"_2hJ98","fadeOutDownBig":"_1e4hf","fadeOutLeft":"_3LLHP","fadeOutLeftBig":"JmRuW","fadeOutRight":"_3KgOv","fadeOutRightBig":"_28ID_","fadeOutUp":"_1-flx","fadeOutUpBig":"_3AUS2","animated":"_3N_vV","flip":"_17uRQ","flipInX":"_3xl2a","flipInY":"_19BKC","flipOutX":"_3bRlc","flipOutY":"_2tTsb","lightSpeedIn":"_1jwhs","lightSpeedOut":"_8f9cE","rotateIn":"_2F0ht","rotateInDownLeft":"txYab","rotateInDownRight":"_3XaU2","rotateInUpLeft":"_2NW5P","rotateInUpRight":"_1ZkaX","rotateOut":"_15oaO","rotateOutDownLeft":"_3PYiB","rotateOutDownRight":"_3_ekz","rotateOutUpLeft":"_1NYXX","rotateOutUpRight":"_2yguw","hinge":"_1-cPB","jackInTheBox":"_2L04G","rollIn":"_2gTn_","rollOut":"_1rnDQ","zoomIn":"_1j6lK","zoomInDown":"_29S83","zoomInLeft":"eZB_q","zoomInRight":"_2L-0S","zoomInUp":"_2kpNG","zoomOut":"_1iIu1","zoomOutDown":"oH0hn","zoomOutLeft":"_10lvR","zoomOutRight":"_2p9v3","zoomOutUp":"_1mvBW","slideInDown":"_3ooiT","slideInLeft":"qCZQ4","slideInRight":"_2jYNT","slideInUp":"_3cYhN","slideOutDown":"_3R-LU","slideOutLeft":"_10lDb","slideOutRight":"_3Y0Uq","slideOutUp":"_3Zyry","infinite":"_1qhko","delay-1s":"FQV-X","delay-2s":"ly9LQ","delay-3s":"WGFFz","delay-4s":"i9HLU","delay-5s":"_1BhUy","fast":"eHcao","faster":"_1aU9h","slow":"_1gdNM","slower":"_35-C9","draggable":"_1uJ1i"};

const cx = classNames.bind(styles);

class Backdrop {
    oncreate(vnode) {
        setTimeout(() => {
            vnode.dom.classList.add(`${cx('show')}`);
        }, 100);
    }
    view(vnode) {
        const {
            zIndex
        } = vnode.attrs;
        return m('div', {
            class: cx('modal-backdrop', 'fade'),
            style: {
                zIndex: zIndex - 1
            }
        })
    }
}

const cx$1 = classNames.bind(styles);

class ModalPanel {
    constructor(vnode) {
        this.dialogId = vnode.attrs.dialogId;
        this.attributes = {};
        this.drag = false;
        this.remove = false;
        this.size = null;
        let {
            options
        } = vnode.attrs.item.attributes;
        if (options) {
            const {
                center,
                drag,
                fullscreen,
                size
            } = options;

            this.drag = drag;
            this.fullscreen = fullscreen;
            this.size = size;
            this.center = center;
        }

        if (vnode.attrs.item && vnode.attrs.item.attributes) {
            this.attributes = Object.assign({}, vnode.attrs.item.attributes);
            delete this.attributes.options;
            delete this.attributes.dialogId;
        }

    }
    oncreate({
        dom
    }) {
        const modal = dom.querySelector(`.${cx$1('modal')}`);
        const dialog = dom.querySelector(`#dialog-${this.dialogId}`);
        const header = dom.querySelector(`#dialog-header-${this.dialogId}`);

        //可拖拉視窗
        if (header && this.drag) {
            enableDrag(dialog, header, `${cx$1('draggable')}`);
        }
        setTimeout(() => {
            modal.classList.add(`${cx$1('show')}`);
        }, 200);

    }
    onbeforeremove({
        dom
    }) {
        const modal = dom.querySelector(`.${cx$1('modal')}`);
        modal.classList.remove(`${cx$1('show')}`);
        const backdrop = dom.querySelector(`.${cx$1('modal-backdrop')}`);
        if (backdrop) {
            backdrop.classList.remove(`${cx$1('show')}`);
        }

        const dialog = dom.querySelector(`#dialog-${this.dialogId}`);
        interact(dialog).unset();

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
                m.redraw();
            }, 150);
        })
    }
    view(vnode) {
        const {
            item,
            zIndex
        } = vnode.attrs;
        const {
            component
        } = item;

        return m('div', {
            class: cx$1('modal-placeholder')
        }, [
            m('div', {
                class: cx$1('modal', 'fade'),
                style: {
                    display: 'block',
                    paddingRight: (this.fullscreen) ? false : '16px',
                    zIndex
                }
            }, [
                m('div', {
                    id: `dialog-${this.dialogId}`,
                    class: cx$1({
                        'modal-dialog': (this.fullscreen) ? false : true,
                        'modal-dialog-centered': this.center,
                        'modal-sm': this.size === 'sm',
                        'modal-lg': this.size === 'lg',
                        'modal-xl': this.size === 'xl',
                        'modal-full': this.fullscreen
                    })
                }, [
                    m(component, {
                        dialogId: `dialog-header-${this.dialogId}`,
                        ...this.attributes
                    })
                ])
            ]),
            m(Backdrop, {
                zIndex
            })
        ])
    }
}

const cx$2 = classNames.bind(styles);

class Button {
    view(vnode) {
        const {
            type,
            classnames,
            title
        } = vnode.attrs;

        if (title && typeof title === 'string') {
            return m('button[type="button"]', {
                class: cx$2('swal2-styled', classnames),
                onclick: (e) => {
                    e.preventDefault();
                    if (type === 'confirm') {
                        return Dialog.close(true)
                    }
                    Dialog.close();
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
        } = vnode;
        setTimeout(() => {
            dom.classList.add(`${cx$2('swal2-show')}`);
            dom.style.display = 'flex';
        }, 150);

        //自動關閉
        if (attrs.autoClose && typeof attrs.autoClose === 'number') {
            setTimeout(() => {
                Dialog.close();
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
        } = vnode.attrs;
        return m('div', {
            class: cx$2('modal-content', 'swal2-popup'),
            style: {
                display: 'none'
            }
        }, [
            m('div', {
                class: cx$2('swal2-header')
            }, [
                (icon === 'success') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-success', 'swal2-icon-show'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`
                        <div class="${cx$2('swal2-success-circular-line-left')}" style="background-color: rgb(255, 255, 255);"></div>
                        <span class="${cx$2('swal2-success-line-tip')}"></span> 
                        <span class="${cx$2('swal2-success-line-long')}"></span>
                        <div class="${cx$2('swal2-success-ring')}"></div> 
                        <div class="${cx$2('swal2-success-fix')}" style="background-color: rgb(255, 255, 255);"></div>
                        <div class="${cx$2('swal2-success-circular-line-right')}" style="background-color: rgb(255, 255, 255);"></div>
                    `)
                    ])
                ] : null,
                (icon === 'info') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-info'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx$2('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'question') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-question'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx$2('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'error') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-error', 'swal2-icon-show'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`
                        <span class="${cx$2('swal2-x-mark')}">
                            <span class="${cx$2('swal2-x-mark-line-left')}"></span>
                            <span class="${cx$2('swal2-x-mark-line-right')}"></span>
                        </span>
                        `)
                    ])
                ] : null,
                (icon === 'warning') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-question'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx$2('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (icon === 'confirm') ? [
                    m('div', {
                        class: cx$2('swal2-icon', 'swal2-warning'),
                        style: {
                            display: 'flex'
                        }
                    }, [
                        m.trust(`<div class="${cx$2('swal2-icon-content')}">i</div>`)
                    ])
                ] : null,
                (title) ? [
                    m('h2', {
                        class: cx$2('swal2-title')
                    }, title)
                ] : null,
            ]),

            (content) ? [
                m('div', {
                    class: cx$2('swal2-content')
                }, m.trust(content))
            ] : null,
            (buttons) ? [
                m('div', {
                    class: cx$2('swal2-actions')
                }, [
                    Object.keys(buttons).map(item => {
                        if (item == 'cancel') {
                            return m(Button, {
                                type: 'cancel',
                                classnames: cx$2('swal2-styled', 'swal2-cancel'),
                                title: buttons.cancel
                            })
                        }
                        if (item == 'confirm') {
                            return m(Button, {
                                type: 'confirm',
                                classnames: cx$2('swal2-styled', 'swal2-confirm'),
                                title: buttons.confirm ? buttons.confirm : (!autoClose) ? 'OK' : null
                            })
                        }
                    })
                ])
            ] : null,
            (footer) ? [
                m('div', {
                    class: cx$2('swal2-footer')
                }, [
                    m.trust(footer)
                ])
            ] : null
        ])
    }
}

class AlertPanel {
    constructor(vnode) {
        this.key = vnode.attrs.key;
    }
    oncreate({
        dom
    }) {
        const modal = dom.querySelector(`.${cx$2('modal')}`);
        setTimeout(() => {
            this.display = true;
            modal.classList.add(`${cx$2('show')}`);
            m.redraw();
        }, 200);

    }
    onbeforeremove({
        dom
    }) {
        const modal = dom.querySelector(`.${cx$2('modal')}`);
        modal.classList.remove(`${cx$2('show')}`);
        const backdrop = dom.querySelector(`.${cx$2('modal-backdrop')}`);
        if (backdrop) {
            backdrop.classList.remove(`${cx$2('show')}`);
        }
        const content = dom.querySelector(`.${cx$2('modal-content')}`);
        content.classList.remove(`${cx$2('swal2-show')}`);
        content.classList.add(`${cx$2('swal2-hide')}`);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
                m.redraw();
            }, 150);
        })
    }
    view(vnode) {
        const {
            item,
            zIndex
        } = vnode.attrs;
        const {
            opts
        } = item;

        return m('div', {
            class: cx$2('modal-placeholder')
        }, [
            m('div', {
                class: cx$2('modal'),
                style: {
                    display: 'block',
                    paddingRight: '16px',
                    zIndex
                }
            }, [
                m('div', {
                    id: `dialog-${this.key}`,
                    class: cx$2('modal-dialog', 'modal-dialog-centered')
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

const cx$3 = classNames.bind(styles);

const MODAL = '對話視窗',
    ALERT = '警告視窗';

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
    };

    let opts = Object.assign({}, defaultOptions, options);

    let didHide;
    if (opts.didHide && typeof opts.didHide === 'function') {
        didHide = opts.didHide;
        delete opts.didHide;
    }
    const id = `${uuid.v4()}`;
    const instance = {
        type: ALERT,
        uuid: id,
        opts,
        didHide
    };

    Dialog.loop.push(instance);

    openModal();

    return id
}

function openModal() {
    if (!document.body.classList.contains(`${cx$3('modal-open')}`)) {
        document.body.classList.add(`${cx$3('modal-open')}`);
        if (!miixUtils.isMobile() && hasScroller()) {
            document.body.style.paddingRight = '16px';
        }
    }
}


const Dialog = {
    loop: [],
    loading: (value) => {
        isLoading = value;
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
            options.confirm = '確定';
        }
        if (!options.cancel) {
            options.cancel = '取消';
        }
        return handleAlert('confirm', options)
    },
    //對話視窗
    show: (component, attributes = {}, didHide) => {
        if (typeof attributes === 'function') {
            didHide = attributes;
            attributes = {};
        }
        const instance = {
            type: MODAL,
            component,
            uuid: `${uuid.v4()}`,
            attributes,
            didHide
        };
        Dialog.loop.push(instance);

        openModal();

        return instance.uuid
    },
    close: (returnValue, key) => {
        let _index, closeItem = null;

        if (key) {
            _index = Dialog.loop.findIndex((item) => {
                return item.uuid == key
            });
            closeItem = Dialog.loop[_index];
        } else {
            _index = Dialog.loop.length - 1;
            closeItem = Dialog.loop[_index];
        }

        setTimeout(() => {
            Dialog.loop.splice(_index, 1);
            if (Dialog.loop.length === 0) {
                const body = document.body;
                body.classList.remove(`${cx$3('modal-open')}`);
                body.style.paddingRight = '';
            }
            m.redraw();
        }, 150);

        if (typeof closeItem.didHide === 'function') {
            let promise = new Promise((resolve, reject) => {
                resolve(closeItem.didHide(returnValue));
            });
            return promise
        }

    },
    view: (vnode) => {
        let zIndex = 1050;
        return [
            Dialog.loop.map((item, index) => {
                zIndex = zIndex + 2;
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
};

const cx$4 = classNames.bind(styles);

const loop = [];

function handleInstance(options = {}, icon) {
    let defaultOptions = {
        icon, //success, error, warning, info ,或自定按鈕
        title: false, //文字
        content: false, //文字
        position: 'top right',
        closeButton: false,
        actions: [],
        autoClose: 800, //自動關閉, 800ms
    };

    const id = `${uuid$1.v4()}`;

    let opts = Object.assign({}, defaultOptions, options, {
        onclose: () => {
            SnackBar.close(id);
        }
    });

    const instance = {
        uuid: id,
        opts
    };

    if (loop.length > 0) {
        loop.splice(0, 1);
    }

    loop.push(instance);
    return id
}

class SnackBarComponent {
    oncreate(vnode) {
        const {
            id,
            autoClose,
            onclose
        } = vnode.attrs;

        if (autoClose) {
            setTimeout(() => {
                onclose(id);
            }, autoClose);
        }
    }
    onbeforeremove(vnode) {
        vnode.dom.classList.add(vnode.attrs.animationEnd);
        return new Promise(resolve => {
            // vnode.dom.addEventListener("animationend", resolve)
            setTimeout(() => {
                resolve(true);
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
        } = vnode.attrs;
        const status = (icon === 'success' || icon === 'error' || icon === 'warning' || icon === 'info') ? icon : '';
        icon = (icon === 'success') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg>')) :
            (icon === 'error') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 475.5 475.5"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>')) :
            (icon === 'warning') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>')) :
            (icon === 'info') ? m('i', m.trust('<svg class="mt-n1" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>')) :
            (icon) ? icon : null;
        const top = position.indexOf('top') > -1;
        const left = position.indexOf('left') > -1;
        const right = position.indexOf('right') > -1;
        const bottom = position.indexOf('bottom') > -1;
        const center = position.indexOf('center') > -1;
        position = position || 'top right';
        animationStart = animationStart || 'slideInRight';
        animationEnd = animationEnd || 'fadeOut';
        this.animation = animationStart;
        return m('div', {
            class: cx$4('snackbar-container', status, {
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
                class: cx$4('snackbar-body', this.animation),
            }, [
                icon,
                m('span', {
                    class: cx$4('snackbar-title'),
                }, title),
                m('div', {
                    class: cx$4('snackbar-content'),
                }, content),
                actions.map(item => {
                    return m(miixComponents.Button, {
                        onclick: (e) => {
                            item.click(e);
                            onclose(id);
                        }
                    }, item.label)
                }),
                (closeButton || !autoClose) ? [
                    //修改為button
                    m('i', {
                        class: cx$4('cancel'),
                        onclick: (e) => {
                            e.preventDefault();
                            onclose(id);
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
        console.log('show');
        return handleInstance(options)
    },
    close: (key) => {
        let _index;
        if (key) {
            _index = loop.findIndex((item) => {
                return item.uuid == key
            });
        } else {
            _index = loop.length - 1;
        }

        setTimeout(() => {
            loop.splice(_index, 1);
            m.redraw();
        }, 0);
    },
    view: () => {
        let zIndex = 1050;
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
};

const cx$5 = classNames.bind(styles);

const loop$1 = [];

class ToastComponent {
    view(vnode) {
        const {
            position,
            content,
            buttons
        } = vnode.attrs;

        let _pos = {
            top: true,
            left: false,
            right: true,
            bottom: false
        };
        if (position && position.indexOf('bottom') > -1) {
            _pos.top = false;
            _pos.bottom = true;
        }
        if (position && position.indexOf('left') > -1) {
            _pos.left = true;
            _pos.right = false;
        }

        return m('div', {
            class: cx$5('md-toast', {
                'md-left': _pos.left,
                'md-right': _pos.right,
                'md-top': _pos.top,
                'md-bottom': _pos.bottom,
            })
        }, [
            m('div', {
                class: cx$5('md-toast-content')
            }, [
                m('span', {
                    class: cx$5('md-toast-text')
                }, m.trust(content)),
                (Array.isArray(buttons)) ? [
                    buttons.map(item => {
                        return m('button[type="button"]', {
                            class: cx$5('md-action', 'md-button'),
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
            loop$1.push(instance);
        }
    },
    view: (vnode) => {
        if (loop$1.length == 0) {
            return
        }
        return m('div', {
            class: cx$5('toast-container', {
                'md-left': _pos.left,
                'md-right': _pos.right,
                'md-top': _pos.top,
                'md-bottom': _pos.bottom
            })
        }, [
            loop$1.map(item => {
                return m(ToastComponent, {
                    ...item
                })
            })
        ])
    }
};

exports.Dialog = Dialog;
exports.SnackBar = SnackBar;
exports.Toast = Toast;

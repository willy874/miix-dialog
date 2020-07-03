import m from 'mithril'
import Dialog from '@core/dialog'

export default class AlertPage {
    view() {
        return [
            m.trust(`
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Alert</h1>
            <p class="lead">警告視窗</p>
        </div>               
            `),
            m('.container', [
                m('.row', [
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.success({
                                    title: '上傳成功',
                                    content: '<div>內容</div>'
                                })
                            }
                        }, 'Success')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.error({
                                    title: '輸入錯誤'
                                })
                            }
                        }, '錯誤')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.warning({
                                    title: '輸入錯誤'
                                })
                            }
                        }, '錯誤')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.error({
                                    title: '輸入錯誤'
                                })
                            }
                        }, '錯誤')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.error({
                                    title: '輸入錯誤',
                                    autoClose: 800
                                })
                            }
                        }, '自動關閉')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.confirm({
                                    title: '是否上傳?',
                                    buttons: {
                                        cancel: '取消',
                                        confirm: '確定'
                                    },
                                    didHide: (returnValue) => {
                                        //按下確定回傳true值
                                        if (returnValue) {
                                            console.log('確定上傳')
                                            return
                                        }
                                        //按下取消時,觸發作業
                                    }
                                })
                            }
                        }, '確認')
                    ])
                ])
            ]),
            m(Dialog)
        ]
    }
}
import m from 'mithril'
import Toast from '@core/toast'

export default class ToastPage {
    view() {
        return [
            m.trust(`
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Toast</h1>
            <p class="lead">推播訊息</p>
        </div>               
            `),
            m('.container', [
                m('.row', [
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Toast.show({
                                    // position: 'top left',
                                    content: '已刪除資料'
                                })
                            }
                        }, '提示')
                    ])
                ])
            ]),
            m(Toast)
        ]
    }
}
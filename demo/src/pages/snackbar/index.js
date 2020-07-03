import m from 'mithril'
import SnackBar from '@core/snackbar'
import {
    Button
} from 'miix-components'

export default class SnackbarPage {
    view() {
        return [
            m.trust(`
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">SnackBar</h1>
            <p class="lead">推播訊息</p>
            <div style="max-width:1130px;margin:auto">
                <h4>JS接口</h4>
                <table class="table" style="width:100%">
                    <tbody>
                        <tr>
                            <td style="width:100px">Option</td>
                            <td style="width:100px">Type</td>
                            <td style="width:100px">Default</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>string</td>
                            <td>top right</td>
                            <td>填入SnackBar定位點，可輸入top、left、right、bottom、center</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>string</td>
                            <td>-</td>
                            <td>預設有success、error、warning、info四種樣式，也可自填入字串</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>string</td>
                            <td>-</td>
                            <td>為第二次序的節點，使用&lt;span&gt;</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>string</td>
                            <td>-</td>
                            <td>為第三次序的節點，使用&lt;div&gt;</td>
                        </tr>
                        <tr>
                            <td>actions</td>
                            <td>string</td>
                            <td>-</td>
                            <td>為第四次序的節點，在snackbar-body的節點，可以自由定義組件</td>
                        </tr>
                        <tr>
                            <td>closeButton</td>
                            <td>boolen</td>
                            <td>false</td>
                            <td>設定是否顯示關閉按鈕，當沒有設定自動關閉時，也會自動顯示</td>
                        </tr>
                        <tr>
                            <td>autoClose</td>
                            <td>number(ms)</td>
                            <td>800</td>
                            <td>自動關閉秒數，或輸入false設定為不關閉</td>
                        </tr>
                        <tr>
                            <td>animationStart</td>
                            <td>string</td>
                            <td>slideInRight</td>
                            <td>
                            進入動畫選項，可參考<a href="https://daneden.github.io/animate.css" target="_blank">animate.css</a><br>
                            或使用自訂css class name使用animation-name定義動畫
                            </td>
                        </tr>
                        <tr>
                            <td>animationEnd</td>
                            <td>string</td>
                            <td>fadeOut</td>
                            <td>
                            消失動畫選項，可參考<a href="https://daneden.github.io/animate.css" target="_blank">animate.css</a><br>
                            或使用自訂css class name使用animation-name定義動畫
                            </td>
                        </tr>
                    </tbody> 
                </table>
            </div>
            <div style="max-width:1130px;margin:auto">
                <h4>CSS接口</h4>
                <table class="table"style="width:100%">
                    <tbody>
                        <tr>
                            <td style="width:300px">Option</td>
                            <td style="width:100px">Type</td>
                            <td style="width:150px">Default</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>--snackbar-status</td>
                            <td>color</td>
                            <td>rgb(50,50,50)</td>
                            <td>SnackBar預設色系</td>
                        </tr>
                        <tr>
                            <td>--snackbar-text-color</td>
                            <td>color</td>
                            <td>rgb(50,50,50)</td>
                            <td>SnackBar預設文字顏色</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
            
        </div>               
            `),
            m('.container', [
                m('.row', [
                    m('.mx-2', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                SnackBar.show({
                                    position: 'top right',
                                    actions: [
                                        m('a[href="#"]', {
                                            onclick: (e) => {
                                                e.preventDefault()
                                                SnackBar.close()
                                            }
                                        }, '點我關閉')
                                    ],
                                    autoClose: false,
                                })
                            }
                        }, '點我測試')
                    ]),
                    ['success', 'error', 'warning', 'info'].map((item) => {
                        return m('.mx-2', [
                            m('button[type="button"]', {
                                onclick: (e) => {
                                    SnackBar.show({
                                        icon: item,
                                        position: 'top right',
                                        autoClose: 5000,
                                    })
                                }
                            }, item)
                        ])
                    }),
                    ['top left', 'top right', 'top center', 'right bottom', 'left bottom', 'bottom center'].map((item) => {
                        return m('.mx-2', [
                            m('button[type="button"]', {
                                onclick: (e) => {
                                    SnackBar.show({
                                        position: item,
                                        content: item,
                                        actions: [{
                                                click: (e) => {
                                                    e.preventDefault()
                                                },
                                                label: `點我關閉 這是${item}`
                                            }
                                            // m(Button, {
                                            //     onclick: (e) => {
                                            //         e.preventDefault()
                                            //         SnackBar.close()
                                            //     }
                                            // }, `點我關閉 這是${item}`)
                                            // m('a[href="#"]', {
                                            //     onclick: (e) => {
                                            //         e.preventDefault()
                                            //         SnackBar.close()
                                            //     }
                                            // }, `點我關閉 這是${item}`)
                                        ],
                                        autoClose: 50000,
                                        animationStart: 'fadeIn'
                                    })
                                }
                            }, item)
                        ])
                    })

                ])
            ]),
            m(SnackBar)
        ]
    }
}
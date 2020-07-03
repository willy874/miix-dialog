import m from 'mithril'
import Dialog from '@core/dialog'
import ModalDialog from './dialogs/modal'
import LongDialog from './dialogs/long'
import CenterDialog from './dialogs/center'
import MultiDialog from './dialogs/multi'
import DragDialog from './dialogs/drag'
import FullDialog from './dialogs/full'

export default class ModalPage {
    view() {
        return [
            m.trust(`
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Modal</h1>
            <p class="lead">互動視窗</p>
            <div style="max-width:1130px;margin:auto">
                <h4>JS接口</h4>
                <table class="table"style="width:100%">
                    <tbody>
                        <tr>
                            <td style="width:500px">
                                Function
                            </td>
                            <td>
                                Description
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Dialog.show( component , attributes , didHide)
                            </td>
                            <td>
                                開啟Dialog Popup視窗
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Dialog.close( returnValue , key )
                            </td>
                            <td>
                                關閉Dialog Popup視窗
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table"style="width:100%">
                    <tbody>
                        <tr>
                            <td style="width:100px">Parameter</td>
                            <td style="width:100px">Option</td>
                            <td style="width:150px">Type</td>
                            <td style="width:150px">Default</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>component</td>
                            <td>-</td>
                            <td>class object</td>
                            <td>-</td>
                            <td>填入view 組件</td>
                        </tr>
                        <tr>
                            <td>attributes</td>
                            <td>-</td>
                            <td>object</td>
                            <td>{ }</td>
                            <td>填入選項數定</td>
                        </tr>
                        <tr>
                            <td>attributes</td>
                            <td>center</td>
                            <td>Boolen</td>
                            <td>false</td>
                            <td>使用Bootstrap class: modal-dialog-centered，視窗置中</td>
                        </tr>
                        <tr>
                            <td>attributes</td>
                            <td>drag</td>
                            <td>Boolen</td>
                            <td>false</td>
                            <td>視窗是否可以拖拉</td>
                        </tr>
                        <tr>
                            <td>attributes</td>
                            <td>fullscreen</td>
                            <td>Boolen</td>
                            <td>false</td>
                            <td>使用Bootstrap class: modal-full，全螢幕視窗</td>
                        </tr>
                        <tr>
                            <td>attributes</td>
                            <td>size</td>
                            <td>String</td>
                            <td>null</td>
                            <td>可填入xl、lg、sm來改變大小</td>
                        </tr>
                        <tr>
                            <td>didHide</td>
                            <td>-</td>
                            <td>Function</td>
                            <td>function(){}</td>
                            <td>填入要執行的函式</td>
                        </tr>
                        <tr>
                            <td>returnValue</td>
                            <td>-</td>
                            <td>object</td>
                            <td>{ }</td>
                            <td>填入要執行的函式所需的參數</td>
                        </tr>
                        <tr>
                            <td>key</td>
                            <td>-</td>
                            <td>String</td>
                            <td>uuid</td>
                            <td>要關閉的視窗對應的哈希ID</td>
                        </tr>
                    </tbody> 
                </table>
            </div>            
        </div>
        
            `),
            
            m('.container', [
                m('.row', [
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(ModalDialog, {
                                    model: {
                                        id: 1,
                                        name: 'abc'
                                    }
                                }, (returnValue) => {
                                    console.log(returnValue)
                                })
                            }
                        }, 'Modal Open')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(LongDialog)
                            }
                        }, '滾動長內容')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(CenterDialog, {
                                    options: {
                                        center: true
                                    }
                                })
                            }
                        }, '垂直置中')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(ModalDialog, {
                                    options: {
                                        size: 'xl'
                                    }
                                })
                            }
                        }, 'Extra large Modal'),
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(ModalDialog, {
                                    options: {
                                        size: 'lg'
                                    }
                                })
                            }
                        }, 'Large Modal'),
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(ModalDialog, {
                                    options: {
                                        size: 'sm'
                                    }
                                })
                            }
                        }, 'Small Modal')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(MultiDialog)
                            }
                        }, '多重視窗')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(DragDialog, {
                                    options: {
                                        drag: true
                                    }
                                })
                            }
                        }, '可拖拉視窗')
                    ]),
                    m('.col-12', [
                        m('button[type="button"]', {
                            onclick: (e) => {
                                Dialog.show(FullDialog, {
                                    options: {
                                        fullscreen: true
                                    }
                                })
                            }
                        }, '全螢幕視窗')
                    ]),
                ])
            ]),
            m(Dialog)
        ]
    }
}
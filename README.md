# M2X mithriljs 對話視窗元件庫

## 命令引用

### 顯示對話方塊
Dialog.show(對話方塊, 屬性設定, 回傳函式)
Dialog.show(對話方塊, 回傳函式)
```
Dialog.show(ModalDialog, {}, (returnValue) => {
   console.log(returnValue)
})
```

### 關閉對話方塊
Dialog.close(回傳值?)
回傳值可為空值或不填寫

### 功能
支援多重視窗(預設)
自訂視窗位置
自訂視窗大小
支援拖拉

### 屬性設定
```
Dialog.show(CenterDialog, {
    //自訂屬性傳入至CenterDialog
    //model: Person,
    
    //視窗屬性
    options: {
        center: true, //垂直置中  參數值 true 或 false, 預設值為false
        size: 'sm' //視窗大小 參數值 sm | lg | xl, 小視窗|中視窗|大視窗
        drag: true //視窗是否可拖拉 參數值 true 或 false, 預設值為false
        fullscreen: true //視窗最大化 參數值 true 或 false 預設值為false
    }
})
```

### 引入及部署位置
```
import {
    Dialog
} from 'miix-dialog'
```

> 在Layout Component放置基底元件

`m(Dialog)`


> 在Page Component放置互動元件
```
Dialog.show(EditDialog,{
    model: Person
}, (returnValue)=>{
    //關閉視窗後,觸發之作業
})
```

### 互動視窗modal範例
```
class EditDialog {
    view(vnode) {
    
        //外部傳入自訂屬性
        const {
           model
        } = vnode.attrs
        
        return m('.modal-content', [
            m('.modal-header', [
                m('h5.modal-title', 'Modal title'),
                m('button[type="button"].close', {
                    onclick: (e) => {
                        Dialog.close()
                    }
                }, [
                    m.trust(`&times;`)
                ])
            ]),
            m('.modal-body', [
                m('p', 'Modal body text goes here')
            ]),
            m('.modal-footer', [
                m('button[type="button"].btn.btn-secondary', {
                    onclick: (e) => {
                        Dialog.close()
                    }
                }, [
                    'Close'
                ]),
                m('button[type="button"].btn.btn-primary', {
                    onclick: (e) => {
                        Dialog.close('回傳值')
                    }
                }, [
                    'Save changes'
                ])
            ]),
        ])
    }
}
```

import m from 'mithril'

export default class HomePage {
    view() {
        return m.trust(`
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Dialog</h1>
        <p class="lead">對話方塊元件</p>
    </div>
    <div class="container">
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Modal</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">互動視窗</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>支援多重視窗</li>
                        <li>視窗可設定拖拉</li>
                        <li>透明視窗模式</li>
                        <li>全螢幕模式</li>
                    </ul>
                    <a href="#!/modal" class="btn btn-lg btn-block btn-outline-primary">
                        demo
                    </a>
                </div>
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Alert</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">警告視窗</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Success訊息</li>
                        <li>Error訊息</li>
                        <li>自定icon訊息</li>
                        <li>Confirm訊息</li>
                    </ul>
                    <a href="#!/alert" class="btn btn-lg btn-block btn-outline-primary">
                        demo
                    </a>
                </div>
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Toast</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">推播訊息</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>自動關閉</li>
                        <li>佈景主題</li>
                        <li>自定位置</li>
                    </ul>
                    <a href="#!/toast" class="btn btn-lg btn-block btn-outline-primary">
                        demo
                    </a>
                </div>
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">SnackBar</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">提示訊息</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>自動關閉</li>
                        <li>動作按鈕</li>
                        <li>自定位置</li>
                    </ul>
                    <a href="#!/snackbar" class="btn btn-lg btn-block btn-outline-primary">
                        demo
                    </a>
                </div>
            </div>
        </div>
    </div>
        `)
    }
}
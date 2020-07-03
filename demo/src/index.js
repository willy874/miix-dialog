import m from 'mithril'
import * as Page from './pages'

const root = document.querySelector('#mount-node')

m.route(root, '/', {
    '/': Page.HomePage,
    '/modal': Page.ModalPage,
    '/alert': Page.AlertPage,
    '/snackbar': Page.SnackbarPage,
    '/toast': Page.ToastPage
})
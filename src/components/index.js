import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'


export const componentPlugin = {
    install (app) {
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}
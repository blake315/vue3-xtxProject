
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted(el, binding) {
                useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if(isIntersecting) {
                            el.src = binding.value
                        }
                        
                    }
                )
            },
        })
    }
}
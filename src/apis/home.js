import httpInstance from '@/utils/http'

export function getBannerAPI (params = {}) {
    const {distributionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return  httpInstance({
        url: '/home/hot'
    })
}

export const getGoodsAPI = () =>{
    return httpInstance({
        url: 'home/goods'
    })
}
import requst from '@/utils/http'

export function getCategoryAPI (id) {
    return requst({
        url: '/category',
        params: {
            id
        }
    })
}

export const getCateGoryFilterAPI = (id) => {
    return requst({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

export const getSubCategoryAPI = (data) => {
    return requst({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }


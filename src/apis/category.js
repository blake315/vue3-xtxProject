import requst from '@/utils/http'

export function getCategoryAPI (id) {
    return requst({
        url: '/category',
        params: {
            id
        }
    })
}


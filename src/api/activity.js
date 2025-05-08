import request from "@/utils/request"

export function pageQueryActivity(params) {
    return request({
        method: 'get',
        url: '/api/activity/pageQuery',
        params: params
    })
}
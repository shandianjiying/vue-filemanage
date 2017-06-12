import { httpRequest } from '../service/httpService'

export function getFilelist (id) {
    return httpRequest({
        url: 'file/files?id=' + id,
        method: 'get'
    })
}

export function addFile (file) {
    return httpRequest({
        url: 'file/files',
        method: 'post',
        data: file
    })
}

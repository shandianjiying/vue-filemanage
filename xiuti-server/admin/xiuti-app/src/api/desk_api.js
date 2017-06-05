import { httpRequest } from '../service/httpService'

export function getFilelist () {
    return httpRequest({
        url: 'file/files',
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

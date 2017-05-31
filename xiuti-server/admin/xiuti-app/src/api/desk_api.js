import { httpRequest } from '../service/httpService'

export function getFilelist () {
    return httpRequest({
        url: 'file/files',
        method: 'get'
    })
}

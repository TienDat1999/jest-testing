import { instance as axiosClient } from './network'

const axiosService = {

  getAll(params: any, url: string): Promise<any> {
    return axiosClient.get(url, { params })
  },

  getById(id: string, url: string): Promise<any> {
    const base_url = `${url}${id}`
    return axiosClient.get(base_url)
  },

  post(url: string, data: any): Promise<any> {
    const base_url = `${url}`
    return axiosClient.post(base_url, data)
  },

  put(data: any, url: string): Promise<any> {
    const base_url = `${url}`
    return axiosClient.put(base_url, data)
  },

  update(data: Partial<any>, url: string): Promise<any> {
    const base_url = `${url}`
    return axiosClient.patch(base_url, data)
  },

  updateById(data: Partial<any>, url: string): Promise<any> {
    const base_url = `${url}${data.get?.('userId') || data.userId}`
    return axiosClient.post(base_url, data)
  },

  delete(id: string, url: string): Promise<any> {
    const base_url = `${url}${id}`
    return axiosClient.delete(base_url)
  },
}

export default axiosService

import axiosService from "network/axiosMethod"

export const  login = async () => {
    return await axiosService.getAll('/auth/login', null)
 }
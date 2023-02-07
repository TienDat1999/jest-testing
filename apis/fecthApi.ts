import axiosService from "network/axiosMethod"

export const  getGreeting = async () => {
   return await axiosService.getAll('/greeting', null)
}
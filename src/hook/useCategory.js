import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../Context/axiosContext";

export const useCategories = () => {
    const axiosInstance = useAxios()
    return useQuery('categories',async () => {
        const {data} = await axiosInstance.axios.get('category')
        return data
    })
}
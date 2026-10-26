import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

export const getCategories = async () => {
    const response = await $api.get('/products/categories');
    return response.data;
};

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    });
};
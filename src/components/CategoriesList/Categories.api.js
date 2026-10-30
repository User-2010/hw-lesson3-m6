import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

 const getByCategoryProductsList = async (category) => {
    const response = await $api.get(`/products/category/${category}`);
    return response.data;
};

export const useCategoriesList = (slug) => {
    return useQuery({
        queryKey: ['products', 'categories', slug],
        queryFn: () => getByCategoryProductsList(slug),
        enabled: !!slug
    });
};
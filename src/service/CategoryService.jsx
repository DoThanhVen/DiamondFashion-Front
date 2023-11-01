import { callAPI } from "./API";
const urlCategory = `/api/category`
const urlCategoryItem = `/api/category/categoryItem`
class CategoryService {
    getAllCategory = async () => {
        return await callAPI(urlCategory, 'GET')
    }

    getAllCategoryById=async(id)=>{
        return await callAPI(`${urlCategory}/${id}`,'GET')
    }

    addCategory = async (type_category, image) => {
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("id_account", '5');
            formData.append("type_category", type_category);
            formData.append("create_date", new Date());
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
            const response = await callAPI(`${urlCategory}`, 'POST', formData, config);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    updateCategory = async (id,type_category, image) => {
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("type_category", type_category);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
            const response = await callAPI(`${urlCategory}/${id}`, 'PUT', formData, config);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    
    };




    //CategoryItem
    getAllCategoryItem = async () => {
        return await callAPI(urlCategoryItem, 'GET')
    }
    
    getAllCategoryItemById=async(id)=>{
        return await callAPI(`${urlCategoryItem}/${id}`)
    }

    addCategoryItem=async(idCategory,type_category_item)=>{
        try {
            const formData=new FormData();
            formData.append("category", idCategory);
            formData.append("idAccount", '5');
            formData.append("type_categoryItem", type_category_item);
            formData.append("create_date", new Date());
            const reponse=await callAPI(urlCategoryItem,'POST',formData)
            console.log(reponse);
        } catch (error) {
            
        }
    }

} export default new CategoryService();
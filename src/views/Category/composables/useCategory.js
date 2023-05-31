// 封装分类数据相关业务代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export function useCategory () {
    const categoryData = ref([]);
    const route = useRoute();
    const getCategory = async () => {
      const res = await getCategoryAPI(route.params.id);
      categoryData.value = res.result;
    };
    
    onMounted(() => getCategory());

    return {categoryData}
}
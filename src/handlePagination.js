import { ref, computed } from "vue";

export default function handlePagination(data) {
  let page = ref(1); 

  data.value.map((item) => {
    return { index: item, value: `this_${item}` };
  });

  const perPage = 10;

  const paginatedData = computed(() =>
    data.value.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.value.length / perPage)) {
        console.log(Math.ceil(data.value.length / perPage))
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage };
}
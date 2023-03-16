import { ref, computed } from "vue";

export default function handlePagination(data) {
  let page = ref(1); 

  data.value.map((item) => {
    return { index: item, value: `this_${item}` };
  });

  const scrollTop = () => {
    window.scrollTo({
      behaviour: "smooth",
      top: "0px"
    })
  }

  const perPage = 10;

  const paginatedData = computed(() =>
    data.value.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.value.length / perPage)) {
      scrollTop()
      page.value += 1;
    }
  };
  
  const backPage = () => {
    if (page.value !== 1) {
      scrollTop()
      page.value -= 1;
    }
  };
  
  const goToPage = (numPage) => {
    scrollTop()
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage };
}
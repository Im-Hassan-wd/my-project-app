import { ref } from 'vue'

const getData = (url) => {
  const projects = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(url)
      if(!data.ok) {
        throw Error('no data available')
      }
        projects.value = await data.json()
      }
      catch(err) {
        error.value = err.message
      }
    }

    return { projects, error, load }
}

export default getData;
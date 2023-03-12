import { ref } from 'vue'

const getProjects = () => {
  const projects = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('https://api.github.com/users/im-hassan-wd/repos')
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

export default getProjects;
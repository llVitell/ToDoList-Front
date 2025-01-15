const useFetch = (url: string) => {
  const data = ref()
  const error = ref()
  const isLoading = ref(true)

  const fetchData = async () => {
    try {
      const response = await fetch(url).then((res) => res.json())
      data.value = response
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  fetchData()

  return { data, error, isLoading }
}

export default useFetch

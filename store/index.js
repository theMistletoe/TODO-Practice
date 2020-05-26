const STORAGE_KEY = 'TODO-List'
const taskStorage = {
  fetch() {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return tasks
  },
  save(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }
}

export default taskStorage

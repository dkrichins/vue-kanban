import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  boards: [{}],
  activeBoard: {},
  activeTasks: {},
  error: {},
  user: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  //Mutations are the only thing alowed to update the store directly through store.propName
  mutations: {
    setBoards(state, boards){
      state.boards = boards
    }
  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  // Dispatch fires actions, commit fires mutations
  actions: {
    getBoards({commit, dispatch}) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(handleError)
    },
    getBoard({commit, dispatch}, id) {
      api('boards/' + id)
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard({commit, dispatch}, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/' + board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    login(user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          state.user = res.data.data
          router.push('/boards')
        })
        .catch(handleError)
    },
    register(user) {
     auth.post('register', user)
      .then(res =>{
        console.log(res)
        if(res.data.error){
          return handleError(res.data.error)
        }
        //LETS REDIRECT THE PAGE
        state.user = res.data.data
        router.push('/boards')
      })
      .catch(handleError)
    },
    getAuth(){
      auth('authenticate')
        .then(res =>{
          state.user = res.data.data
          router.push('/boards')
        }).catch(err => {
          router.push('/login')
        })
    },
    clearError(){
      state.error = {}
    }
  }
}
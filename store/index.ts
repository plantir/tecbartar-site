export const state = () => ({})
export const actions = {
  async nuxtClientInit({ state, commit, dispatch }, { req, $axios, $service }) {
    return new Promise((resolve, reject) => {
      commit('auth/init', $axios)
      resolve(true)
    })
  }
}

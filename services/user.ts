import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'

export default class UserService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios)
  }
  update(params): Promise<{ data: any }> {
    return this.$axios.put('user', params)
  }
  get(): Promise<{ data: any }> {
    return this.$axios.get('user')
  }
  getTestAnswer(testName): Promise<{ data: any }> {
    return this.$axios.get(`user/getTestAnswer/${testName}`)
  }
  seeVideo(data): Promise<{ data: any }> {
    return this.$axios.post('user/seeVideo', data)
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    user: UserService
  }
}
declare module '@nuxt/types' {
  interface NuxtServiceInstance {
    user: UserService
  }
}

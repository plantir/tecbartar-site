import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'

export default class personalityTestService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios)
  }
  answer(params): Promise<{ data: any }> {
    return this.$axios.post('personalityTest/answer', params)
  }
  get(id): Promise<{ data: any }> {
    return this.$axios.get(`personalityTest/${id}`)
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    personalityTest: personalityTestService
  }
}
declare module '@nuxt/types' {
  interface NuxtServiceInstance {
    personalityTest: personalityTestService
  }
}

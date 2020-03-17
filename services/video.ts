import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'

export default class VideoService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios)
  }
  all(): Promise<{ data: any }> {
    return this.$axios.get('videos')
  }
  get(level): Promise<{ data: any }> {
    return this.$axios.get(`videos/${level}`)
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    video: VideoService
  }
}
declare module '@nuxt/types' {
  interface NuxtServiceInstance {
    video: VideoService
  }
}

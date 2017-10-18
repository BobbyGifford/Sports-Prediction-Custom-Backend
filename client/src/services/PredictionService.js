import Api from '@/services/Api'

export default {
  index () {
    return Api().get('predictions')
  },
  post (prediction) {
    return Api().post('predictions', prediction)
  }
}

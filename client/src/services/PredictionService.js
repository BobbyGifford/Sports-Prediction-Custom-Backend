import Api from '@/services/Api'

export default {
  index () {
    return Api().get('predictions')
  },
  post (prediction) {
    return Api().post('predictions', prediction)
  },
  indexNFL () {
    return Api().get('predictions/NFL')
  },
  indexNCAAF () {
    return Api().get('predictions/NCAAF')
  },
  indexNBA () {
    return Api().get('predictions/NBA')
  }
}

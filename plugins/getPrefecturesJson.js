import axios from 'axios'

export default ({app}, inject) => {
  app.$getPrefecturesJson = () => {
    return axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'X-API-KEY': 'PzAqqyzgOkcB6huWPg2Ss9dcr6pR1gBmcYXjudWl'
        },
        data: {}
      })
      .then((res) => {
        return res.data
      })
  }
}
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$getmunicipalitiesJson = (prefecturesSelected) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=${prefecturesSelected} `
  return axios
    .get(url, {
      headers: {
        'X-API-KEY': '***********************************'
      },
      data: {}
    })
    .then((res) => {
      return res.data
    })
}
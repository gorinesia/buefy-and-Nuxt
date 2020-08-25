<template>
<div>
  <div class="container content has-text-centered">
    <img src="~/assets/NUXTJS.jpg" alt="image01">
  </div>
  <div class="container content has-text-centered">
    <NLink to="/about">
      <h3>{{ linkname1 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <NLink to="/cityapi">
      <h3>{{ linkname2 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <NLink to="/awesome">
      <h3>{{ linkname4 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <NLink to="/vxdemo">
      <h3>{{ linkname5 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <NLink to="/image_predict">
      <h3>{{ linkname6 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <NLink to="/sample">
      <h3>{{ linkname7 }}</h3>
    </NLink>
  </div>
  <div class="container content has-text-centered">
    <a :href="outurl">
      <h3>{{ linkname3 }}</h3>
    </a>
  </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  head: {
    title: 'First page'
  },
  data() {
    return {
      outurl: 'https://ja.nuxtjs.org/',
      linkname7: '（外部リンク）バリデーションサンプル',
      linkname6: '（外部リンク）画像管理サンプル',
      linkname5: '（外部リンク）状態管理（vuex）サンプル',
      linkname4: '（外部リンク）WEBフォントサンプル',
      linkname3: '（外部リンク）v-bindのサンプル',
      linkname2: '（外部リンク）市区町村サンプル',
      linkname1: '（外部リンク）郵便番号サンプル',
    }
  },
  computed: {
    today() {
      return moment().format('YYYY/MM/DD dddd')
    }
  }
}
</script>

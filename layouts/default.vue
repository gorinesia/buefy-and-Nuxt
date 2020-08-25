<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            サンプル画面
          </h1>
          <h2 class="subtitle">
            Nuxtチュートリアル
          </h2>
        </div>
      </div>
    </section>
    <section>
      <nuxt />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>今日は{{ today }}です。</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    today() {
      return moment().format('YYYY/MM/DD dddd')
    }
  }
}
</script>

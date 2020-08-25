<template>
<section>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <div class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">ログイン</h1>
        </div>
      </div>
    </div>
    <div class="column">
      <NLink to="/">
        <p>ルートのページへ戻ります</p>
      </NLink>
    </div>
    <div class="container">
      <div class="box">
        <p>バリデーションのサンプル用です</p>
        <ValidationProvider rules="required|email" name="メールアドレス" v-slot="{ errors, valid }">
          <b-field label="メールアドレス" :type="{'is-danger': errors[0], 'is-success': valid }" :message="errors">
            <b-input type="email" v-model="email" placeholder="sample@example.com">
            </b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider rules="required|min:8" name="パスワード" v-slot="{ errors, valid }">
          <b-field label="パスワード" :type="{'is-danger': errors[0], 'is-success': valid }" :message="errors">
            <b-input type="password" v-model="password">
            </b-input>
          </b-field>
        </ValidationProvider>
        <b-button @click="passes(login)">ログイン</b-button>
        <b-button @click="resetForm">リセット</b-button>
      </div>
    </div>
  </ValidationObserver>
</section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      console.log('Login!')
    },
    resetForm() {
      console.log('Reset!')
      this.email = ''
      this.password = ''
      this.$refs.observer.reset();
    }
  }
}
</script>

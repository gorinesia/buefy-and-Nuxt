<template>
  <div id="app" class="container">
    <section>
      <b-field grouped group-multiline>
        <button class="button field is-danger" @click="checkedRows = []"
          :disabled="!checkedRows.length">
          <b-icon icon="close"></b-icon>
          <span>Clear</span>
        </button>
        <b-select v-model="checkboxPosition">
          <option value="left">左にcheckを表示</option>
          <option value="right">右にcheckを表示</option>
        </b-select>
      </b-field>

      <b-tabs>
        <b-tab-item label="チェックリスト">
          <b-table
            :data="data"
            :columns="columns"
            :checked-rows.sync="checkedRows"
            checkable
            :checkbox-position="checkboxPosition">
            <template slot="bottom-left">
              <b>チェックされた数: {{ checkedRows.length }}</b>
            </template></b-table>
        </b-tab-item>

        <b-tab-item label="Checked rows(JSON)">
          <pre>{{ checkedRows }}</pre>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    const data = [
      { 'id': 1, 'check_list': 'リリース作業手順', 'etc': '作業手順が完成しているか', 'date': '2020-08-24' },
      { 'id': 2, 'check_list': '作業計画', 'etc': '日時の共有', 'date': '2020-08-24' },
      { 'id': 3, 'check_list': 'ユーザー教育', 'etc': '利用者の教育は完了しているか', 'date': '2020-08-24' },
      { 'id': 4, 'check_list': '環境構築', 'etc': 'DB環境構築', 'date': '2020-08-24' },
      { 'id': 5, 'check_list': 'テスト用のシステムの停止', 'etc': 'テスト中に利用しているシステムは停止されているか', 'date': '2020-08-24' },
    ]
    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [data[0]],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'check_list',
          label: 'チェック項目',
        },
        {
          field: 'etc',
          label: '備考',
        },
        {
          field: 'date',
          label: '作成日',
          centered: true
        },
      ]
    }
  }
}
</script>
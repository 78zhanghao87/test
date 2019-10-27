<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button v-on:click="adduser">新建用户</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'myhello',
  data () {
    return {
      msg: '11Welcome to Your Vue.js App'
    }
  },
  methods:{
    adduser: function () {
      // `this` 在方法里指向当前 Vue 实例
      this.msg='Hello ' + '!';
    }
  }
}
</script>
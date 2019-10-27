<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go to index</router-link>
  </div>
</template>

<script>
export default {
  name: 'notfoundpage',
  data () {
    return {
      msg: '404'
    }
  }
}
</script>
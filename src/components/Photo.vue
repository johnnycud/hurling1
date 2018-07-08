<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="photo">
        <img :src="this.photos[$route.params.id].url" />
      </div>
      <div class="player">
        <span>{{ this.photos[$route.params.id].player }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="county">
        <span>{{ this.photos[$route.params.id].county }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/photos">
          NEXT
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../data'
export default {
  data () {
    return {
      'photos': data.photos
    }
  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>

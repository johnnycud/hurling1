<template>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="picture">
          <img :src="playerUrl"/>
        </div>
        <div class="info">
        <span>{{ player.info }}</span>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{player.comment }}</span>
      </div>
        <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
        </div>
      </div>
    </div>
</template>
<script>
  import { find } from 'lodash'
  export default {
    data () {
      return {
        cat: null
      }
    },
    mounted () {
      this.cat = find(this.$root.player, (player) => player['.key'] === this.$route.params.id)
    }
  }
</script>

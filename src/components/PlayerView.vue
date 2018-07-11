<template>
  <div class="faq">
    <div class="container">
      <section class="section">
        <h1 class="title">Players</h1>
        <h2 class="subtitle is-4">That game had everything and it just shows all the work that’s being put in up in Dublin. They were outstanding and that’s the perfect preparation for an All Ireland final..</h2>

        <div class="columns" v-if="players && players.length">
          <div class="column is-one-third" v-for="faq of faqs">
            <div class="card">
              <div class="card-content">
                <p class="title">{{ players.title }}</p>
                <p class="answer">{{players.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'faq',
  data: () => ({
    faqs: [],
    errors: []
  }),

  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.faqs = response.data.slice(0,10);
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd
  padding: 2.5em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap

</style>
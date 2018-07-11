<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>28 July: Clare 1-23 Galway 2-14 (Davy Fitzgerald).</strong></p>
          </div>
          <div class="column">
            <p>“Gameplan right? Maybe things worked for us today, I don’t know if the gameplan is right. Trust me, against Cork I got slaughtered. Did that make me a bad manager? I’d like to think not. I don’t think it makes Anthony [Cunningham] a bad manager. So , things worked out for us today so they did. Let’s not read too much into that stuff, we got the breaks and things went right for us today.”</strong></p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Keep your eye on the ball, even when it's in the referee's pocket."</p>
              <p class="subtitle">- Christy Ring</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Pat Fox has it on his hurley and is motoring well now. But here comes Joe Rabbitte hot on his tail. I've seen it all now - a Rabbitte chasing a Fox around Croke Park!"</p>
              <p class="subtitle">- Micheal O Muircheartaigh</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"I'm not giving away any secrets like that to Tipperary. If I had my way, I wouldn't even tell them the time of the throw-in."</p>
              <p class="subtitle">- Ger Loughnane</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'Reporting on a match held in London (1921).',
      subheading: "Several broken sticks, two broken heads, and two bruised fingers were part of the afternoon's play, for hurling, the Irish national game is the fastest and probably the most dangerous of sports. It is a combination of hockey, football, golf, baseball, battle and sudden death. It was a real Irish game."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0

</style>

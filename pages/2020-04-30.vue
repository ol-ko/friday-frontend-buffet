<template>
  <div>
    <Link
      type="talk"
      level="s"
      title="Design Systems, Pattern Libraries & Style Guides... Oh My!"
      link="https://www.youtube.com/watch?v=rO5dBA-avfw"
      author="Jesse Showalter, Content Creator for InVision, Sketch, Adobe"
      duration="10 min"
    >
      <p>
        Design Systems, Pattern Libraries, Style Guides? Confused? Don't be,
        watch this short video and don't forget to check out the examples linked
        in the video description. And after that - try your luck with the
        <a href="https://forms.gle/X1yAu5BpZxV7e1H26">QUIZ</a>! Whoever gives
        the BEST answers wins a secret prize.
      </p>
    </Link>

    <Link
      type="game"
      level="s"
      title="CSS Diner"
      link="http://flukeout.github.io/"
      author="Luke Pacholski, Head of UX at ActiveState"
      duration="27 min"
    >
      <p>
        A GAME for learning CSS selectors. How far can you get without the tips?
      </p>
    </Link>

    <Link
      type="talk"
      level="l"
      title="What the... JavaScript?"
      link="https://www.youtube.com/watch?v=2pL28CcEijU"
      author="Kyle Simpson, author of the 'You Don't Know JS Yet' book series"
      duration="39 min"
    >
      <p>
        Fan of the famous
        <a href="https://archive.org/details/wat_destroyallsoftware"
          >WAT video</a
        >? Now check out the REAL JavaScript WTFs! Also know why they happen and
        never trip over them again. Share with your backend friends too.
      </p>
    </Link>

    <Link
      type="talk"
      level="m"
      title="The Faker You Are, the More Successful You Can Be"
      link="https://youtu.be/bEg5ySTUGxE"
      author="Pablo Stanley, InvisionApp Design Lead"
      duration="27 min"
    >
      <p>
        Things that make a good designer. NOT. Hilarious talk teaching the DOs
        by making fun of the DON'Ts. If you haven't watched it last year, you're
        missing out!
      </p>
    </Link>

    <Link
      type="talk"
      level="s"
      title="Beyond Console Log in 100 Seconds"
      link="https://www.youtube.com/watch?v=L8CDt1J3DAw"
      author="Fireship, https://fireship.io"
      duration="2 min"
    >
      <p><code>console.log</code> like you've never logged before!</p>
    </Link>

    <BuffetGif
      link="https://media0.giphy.com/media/3oxQNpWtsUFmzQYpHO/giphy.gif?cid=ecf05e472ff4bdf0e232683b5bfabf4c9c37ab4e042b6782&rid=giphy.gif"
      alt="Nomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnom"
    ></BuffetGif>

    <EditionsNav prev="2020-04-03"></EditionsNav>
  </div>
</template>

<script>
import Link from '@/components/Link.vue'
import BuffetGif from '@/components/BuffetGif.vue'
import EditionsNav from '@/components/EditionsNav.vue'

export default {
  components: {
    Link,
    BuffetGif,
    EditionsNav
  }
}
</script>

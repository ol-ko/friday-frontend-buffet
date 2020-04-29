<template>
  <div>
    <Link
      type="talk"
      title="Um, its about your JavaScript..."
      link="https://www.youtube.com/watch?v=31WieWrYPqc"
      author="Tammy Everts, UX researcher & CXO at SpeedCurve"
      duration="32 min"
      level="s"
    >
      <p>
        Web performance metrics and their impact on UX. Watch out for links on
        the slides, they lead to more awesome things!
      </p>
    </Link>

    <Link
      type="article"
      title="13 Security Tips for Front-End Apps"
      duration="7 min read"
      link="https://medium.com/better-programming/frontend-app-security-439797f57892"
      level="s"
    >
      <p>
        Thing #10001 to care about as a Frontend Engineer - SECURITY
      </p>
    </Link>

    <Link
      type="course"
      title="Start Building Accessible Web Applications Today"
      duration="2 h 7 min"
      link="https://egghead.io/courses/start-building-accessible-web-applications-today"
      author="Marcy Sutton - Head of Learning at Gatsby, ex accessibility engineer at Adobe, axe-core contributor, O'Reilly author"
      level="m"
    >
      <p>
        This course will introduce you to accessibility through hands-on,
        technical examples that are way more effective than reading 10-year-old
        static web content.
      </p>
    </Link>

    <Link
      type="course"
      title="Web Accessibility by Google"
      link="https://www.udacity.com/course/web-accessibility--ud891"
      duration="6 h 30 min"
      author="Alice Boxhall - Software Engineer, Google, Rob Dodson - Developer Advocate, Google"
      level="l"
    >
      <p>
        In this course you’ll get hands-on experience making web applications
        accessible. You’ll understand when and why users need accessibility.
        Then you’ll dive into the 'how': making a page work properly with screen
        readers, and managing input focus (e.g. the highlight you see when
        tabbing through a form.) You’ll understand what 'semantics' and
        'semantic markup' mean for web pages and add ARIA markup to enable
        navigating the interface with a range of assistive devices. Finally,
        you’ll learn styling techniques that help users with partial vision
        navigate your pages easily and reliably.
      </p>
      <p>— <em>Recommended by Zsuzsa, Homegate's Accessibility Champion</em></p>
    </Link>

    <BuffetGif
      link="https://media0.giphy.com/media/l0MYwONBGDS7aPGOk/giphy.gif?cid=ecf05e47f11b60e402ef4940645265756568b9061e24d5df&rid=giphy.gif"
      alt="Nomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnomnom"
    ></BuffetGif>

    <EditionsNav next="2020-04-30"></EditionsNav>
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

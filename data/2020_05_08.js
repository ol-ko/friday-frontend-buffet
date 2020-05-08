export default {
  date: '2020-05-08',
  links: [
    {
      type: 'article',
      level: 'm',
      title: 'async/await with loops',
      link: 'https://zellwk.com/blog/async-await-in-loops/',
      author:
        'Zell Liew, Frontend Engineer and author featured in CSS Tricks, Smashing Magazine',
      duration: '10 min',
      description: `
    <p>
        Ever got ESLint shout this at you?
        <br />
        <code>
          >> [eslint] Unexpected \`await\` inside a loop. (no-await-in-loop)
        </code>
        <br />
        This article explains what's really going on there - and it depends on
        the way you loop!
      </p>
`
    },
    {
      type: 'article',
      level: 's',
      title: 'How To Learn CSS',
      link: 'https://www.smashingmagazine.com/2019/01/how-to-learn-css/',
      author: 'Rachel Andrew, Editor in Chief of Smashing Magazine',
      duration: '15 min read',
      description: `<p>
        Always wanted to truly understand CSS, but didn't know where to start?
        Best overview post on the internet by Rachel Andrew will clarify all the
        important concepts and list all the other topics you might want to dive
        into (follow the links!)
      </p>`
    },
    {
      type: 'game',
      level: 's',
      title: 'Flexbox froggy',
      link: 'https://flexboxfroggy.com/',
      description: `
    <p>
        Understand the full power of flexbox while helping colorful froggies
        find their lily pads. Cuteness over 9000. (P.S. Don't forget those
        semicolons, it's not JavaScript)
      </p>
`
    },
    {
      type: 'course',
      level: 'm',
      title: 'TypeScript Fundamentals',
      link: 'https://www.pluralsight.com/courses/typescript',
      author:
        'John Papa (Principal Developer Advocate at Microsoft), Dan Wahlin (Google GDE, Microsoft MVP and regional director)',
      duration: '4h 25 min',
      description: `
    <p>
        Some say this is the most complete and practical course on TypeScript.
        You will learn about the benefits of using Typescript, language
        features, tooling and more.
      </p>
      <p>
        Course available with the Pluralsight Skills account that will set you
        back by <strong>$29 per month</strong> or during a free trial period
        (which allows you to watch
        <a href="https://help.pluralsight.com/help/individual-free-trial">
          200 minutes of content over 10 days
        </a>
        )
      </p>
`
    },
    {
      type: 'talk',
      level: 's',
      title: 'What the heck is the event loop anyway?',
      link: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
      author: 'Philip Roberts',
      duration: '27 min',
      description: `
    <p>
        If you (like me) smile and nod when other JavaScript programmers say
        things like “don’t block the event loop”, “make sure your code runs at
        60 frames-per-second”, “well of course, it won’t work, that function is
        an asynchronous callback!” - this talk is for you.
      </p>
      <p>
        With some handy visualisations, and fun hacks, Philip gives us an
        understanding of what actually happens when JavaScript runs.
      </p>
`
    }
  ],
  gif: 'https://media.giphy.com/media/XBXBWRWbSmM6HnjErP/giphy.gif'
}

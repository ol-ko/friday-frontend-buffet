<template>
  <main>
    <nav>
      <a href="/" class="logo" title="A link from here... to here!">
        <h1>
          <span>Friday<br />Frontend<br />BuFFet</span>
        </h1>
      </a>
      <p>
        <a href="#gif" title="Wow, so shallow..."
          >⬇️ ⬇️ ⬇️ Skip straight to Gif ⬇️ ⬇️ ⬇️</a
        >
      </p>
    </nav>
    <div class="content">
      <nuxt />
    </div>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Ultra&display=swap');

body {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

main {
  position: relative;
}

section {
  margin-top: 3em;
}

.logo {
  text-decoration: none;
  background: none;

  h1 {
    font-family: 'Ultra', serif;
    border: 10px solid black;
    border-radius: 50%;
    width: 240px;
    height: 240px;
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    transform: rotate(-10deg);
    box-shadow: magenta 5px 5px 0 0;
  }

  span {
    background: yellow;
    font-size: 32px;
  }
}

a {
  color: black;
  background: yellow;
  font-weight: bold;
  display: inline-block;
  transition: transform 0.1s ease-in-out;

  &:hover,
  &:active {
    transform: scale(1.02);
  }
}

nav {
  a {
    font-size: 16px;
  }

  p {
    text-align: center;

    a {
      background: none;
    }
  }
}

@media (max-width: 799px) {
  main {
    margin: 0 24px;
  }

  nav {
    text-align: center;
  }

  .type {
    font-size: 28px;
    position: absolute;
    left: 0;
    cursor: default;

    & + h2 {
      text-indent: 1.4em;
    }
  }
}

@media (min-width: 800px) {
  nav {
    display: flex;
    align-items: center;

    h1 {
      flex: 0 0 auto;
    }

    p {
      flex: 1 0 auto;

      a {
        font-size: 28px;
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;
  }

  .content {
    margin-left: 48px;
  }
  .type {
    font-size: 28px;
    position: absolute;
    left: 0;
    cursor: default;
  }
}

.duration {
  margin-left: 48px;
}

h2 {
  margin-bottom: 8px;
  font-size: 28px;

  & + p {
    margin-top: 0;
  }
}

dl {
  display: flex;
  flex-wrap: wrap;

  dt {
    flex: 0 0 100px;
  }

  dd {
    flex: 1 0 calc(100% - 100px);
    margin: 0;
  }
}

.gif {
  border-top: 4px dashed magenta;
  text-align: center;
  padding-top: 48px;
  margin-top: 48px;
  color: white;

  div {
    background: black;
    padding: 48px 0;
  }

  h2 {
    margin: 0 0 48px 0;
    color: magenta;
    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
  }

  img {
    max-width: 100%;
  }
}

@keyframes pulsate {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    color: yellow;
  }
  100% {
    -webkit-transform: scale(1);
  }
}
</style>

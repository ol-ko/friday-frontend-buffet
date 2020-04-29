<template>
  <nav>
    <nuxt-link
      to="/"
      class="logo"
      title="Friday Frontend BuFFet latest edition"
    >
      <h1>
        <span>Friday<br />Frontend<br />BuFFet</span>
      </h1>
    </nuxt-link>
    <p>
      <a href="#gif" title="Wow, so shallow..."
        >⬇️ ⬇️ ⬇️ Skip straight to Gif ⬇️ ⬇️ ⬇️</a
      >
    </p>
  </nav>
</template>

<style lang="scss">
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
}
</style>

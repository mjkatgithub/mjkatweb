<template>
  <div class="pageWrapper">
    <header>
      <NuxtLink to="/">Lo Go</NuxtLink>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/datenschutzerklaerung">datenschutzerklaerung</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/impressum">impressum</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
    <footer>
      footer
    </footer>
  </div>
</template>

<style>
  body {
    background-color: #213c5b;
  }
  header {
    background-color: #0c5688;
  }

  .pageWrapper {
    background-color: #415c7b;
  }

  footer {
    background-color: #26384c;
  }
</style>
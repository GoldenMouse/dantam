<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

:root {
  --color-primary: #ffd8cb;
  --color-primary-darken: #fcc7b6;
  --font-family-primary: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-alt: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-color: #151515;
  --font-color-light: #9b9b9b;
}

* {
  padding: 0;
  margin: 0;
  }

body,html {
  font-family: var(--font-family-primary);
  color: var(--font-color);
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  line-height: 1.5;
  box-sizing: border-box;
  background-color: #ffffff;

}
a {
  text-decoration: none;
  color: var(--font-color);
}

ul {
  list-style: none;
}

i {
  color: #151515;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-solid {
  padding: 11px 32px;
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  font-size: 0.9rem;
  font-family: var(--font-family-alt);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-overflow: ellipsis;
  border-radius: 25px;
  line-height: 24px;

  &:hover {
    background-color: var(--color-primary-darken);
  }
}

.container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
}

.owl-dots{
  position: absolute;
  top: 50%;
  right: -18rem;
  display: flex;
  flex-direction: column;
}

</style>

<script>
  import '../app.css'
  import Footer from '$lib/components/Footer.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import { theme } from '$lib/stores'
  import { onMount } from 'svelte'

  let ready = false
  onMount(() => {
    theme.toggle()
    ready = true
  })

  let prevScrollPos = 0
  let showNav = true

  function handleScroll() {
    const currentScrollPos = window.scrollY
    showNav = prevScrollPos > currentScrollPos
    prevScrollPos = currentScrollPos
  }
</script>

<svelte:head>
  <title>HackHarvard 2023</title>
  <meta property="og:title" content="HackHarvard 2023" />
  <meta
    property="og:description"
    content="Join us for the eighth iteration of HackHarvard, an exhilarating 36-hour free undergraduate hackathon hosted at Harvard University."
  />
  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/hackharvard/branding/78c3354fe5237280aa4a52c4100c6fd0d0279600/static/logo.svg"
  />
  <meta property="og:type" content="website" />
</svelte:head>

<svelte:window on:scroll={handleScroll} />

{#if ready}
  {#if showNav}
    <Nav />
  {/if}

  <slot />
  <Footer />
{/if}

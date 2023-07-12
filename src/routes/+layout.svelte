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
</svelte:head>

<svelte:window on:scroll={handleScroll} />

{#if ready}
  {#if showNav}
    <Nav />
  {/if}

  <slot />
  <Footer />
{/if}

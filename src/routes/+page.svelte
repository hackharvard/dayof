<script>
  import Faq from '$lib/sections/Faq.svelte'
  import Landing from '$lib/sections/Landing.svelte'
  import Checkin from '$lib/sections/Checkin.svelte'
  import Speakers from '$lib/sections/Speakers.svelte'
  import Tracks from '$lib/sections/Tracks.svelte'
  import Challenges from '$lib/sections/Challenges.svelte'
  import Welcome from '$lib/sections/Welcome.svelte'
  import Sponsors from '$lib/sections/Sponsors.svelte'
  import Hype from '../lib/sections/Hype.svelte'
  import Schedule from '../lib/sections/Schedule.svelte'
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

<svelte:window on:scroll={handleScroll} />

{#if ready}
  {#if showNav}
    <Nav />
  {/if}

  <main class="mt-20">
    <Tracks />
    <Challenges />
    <Checkin />
    <Schedule />
    <Speakers />
  </main>
  <Footer />
{/if}

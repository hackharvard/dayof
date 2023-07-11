<script>
  import { onMount } from 'svelte'

  import '../app.css'
  import Footer from '$lib/components/Footer.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import { slide } from 'svelte/transition'

  let prevScrollPos = 0
  let showNav = true

  function handleScroll() {
    const currentScrollPos = window.pageYOffset
    showNav = prevScrollPos > currentScrollPos
    prevScrollPos = currentScrollPos
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  })
</script>

{#if showNav}
  <Nav />
{/if}

<slot />
<Footer />

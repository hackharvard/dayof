<script>
  import Applications from '$lib/sections/Applications.svelte'
  import Faq from '$lib/sections/Faq.svelte'
  import Landing from '$lib/sections/Landing.svelte'
  import Speakers from '$lib/sections/Speakers.svelte'
  import Tracks from '$lib/sections/Tracks.svelte'
  import TracksPrizes from '$lib/sections/TracksPrizes.svelte'
  import Welcome from '$lib/sections/Welcome.svelte'
  import Sponsors from '$lib/sections/Sponsors.svelte'
</script>

<main class="mt-20">
  <Landing />
  <Welcome />
  <Tracks />
  <Applications />
  <Faq />
  <TracksPrizes />
  <Speakers />
  <Sponsors />
</main>

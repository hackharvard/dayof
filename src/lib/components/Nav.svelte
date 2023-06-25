<script>
  import { classNames } from '$lib/utils'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Brand from './Brand.svelte'
  import { navigating } from '$app/stores'
  import { fade } from 'svelte/transition'
  import { theme } from '$lib/stores'

  onMount(() => {
    updateShadow()
  })

  let shadow = false
  let open = false
  $: hash = $page.url.hash
  $: if ($navigating) {
    open = false
  }
  const pages = [
    {
      name: 'Welcome',
      href: '#welcome'
    },
    {
      name: 'Tracks',
      href: '#tracks'
    },
    {
      name: 'Applications',
      href: '#applications'
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
    {
      name: 'Speakers',
      href: '#speakers'
    },

    {
      name: 'Sponsors',
      href: '#sponsors'
    }
  ]
  function updateShadow() {
    shadow = window.scrollY !== 0
  }
  function handleTheme() {
    theme.toggle()
  }
</script>

<svelte:window on:scroll={updateShadow} />
<nav
  class={classNames(
    'px-dynamic fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b bg-primary dark:bg-secondary transition-all',
    shadow && !open ? 'shadow-b border-gray-200' : 'border-white'
  )}
>
  <Brand />
  <div class="flex items-center">
    <div class="hidden items-center gap-2 md:flex">
      {#each pages as page}
        <a
          class={classNames(
            'rounded-md px-3 py-2 transition-all dark:shadow-sm dark:shadow-secondary-100',
            hash === page.href
              ? 'bg-gray-200 dark:bg-secondary-200'
              : 'hover:bg-gray-100 dark:hover:bg-secondary-100'
          )}
          href={page.href}
        >
          {page.name}
        </a>
      {/each}
      <button type="button" on:click={handleTheme}> tmp </button>
    </div>
    <button
      class="sm:hidden"
      type="button"
      on:click={() => {
        open = !open
      }}
    >
      {#if open}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      {/if}
    </button>
  </div>
</nav>
{#if open}
  <div
    class="p-dynamic fixed left-0 top-20 z-50 flex h-[calc(100vh-5rem)] w-screen flex-col gap-2 bg-white sm:hidden"
    transition:fade
  >
    {#each pages as page}
      <a
        class={classNames(
          'rounded-md px-3 py-2 transition-colors',
          hash === page.href ? 'bg-gray-200' : 'hover:bg-gray-100'
        )}
        href={page.href}
      >
        {page.name}
      </a>
    {/each}
  </div>
{/if}

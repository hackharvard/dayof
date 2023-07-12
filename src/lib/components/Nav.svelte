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
    { name: 'HOME', href: '#home' },
    {
      name: 'WELCOME',
      href: '#welcome'
    },
    // {
    //   name: 'Tracks',
    //   href: '#tracks'
    // },
    {
      name: 'APPLICATIONS',
      href: '#applications'
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
    {
      name: 'SPEAKERS',
      href: '#speakers'
    },
    {
      name: 'SPONSORS',
      href: '#sponsors'
    }
  ]
  function updateShadow() {
    shadow = window.scrollY !== 0
  }
  function handleTheme() {
    theme.toggle()
  }

  function scrollToSection(event, href) {
    event.preventDefault()
    const element = document.querySelector(href)
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
</script>

<svelte:window on:scroll={updateShadow} />
<nav
  class={classNames(
    'px-dynamic fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b bg-primary transition-all dark:bg-secondary',
    shadow && !open
      ? 'shadow-b border-gray-200 dark:border-secondary'
      : 'border-white dark:border-secondary'
  )}
>
  <Brand />
  <div class="flex items-center">
    <div class="hidden items-center gap-2 md:flex">
      {#each pages as page}
        <a
          class={classNames(
            'rounded-md px-3 py-2 text-pink-700 transition-all dark:shadow-sm dark:shadow-secondary-100',
            hash === page.href
              ? 'bg-gray-200 dark:bg-secondary-200'
              : 'hover:bg-gray-100 dark:hover:bg-secondary-100'
          )}
          href={page.href}
          on:click={event => scrollToSection(event, page.href)}
        >
          {page.name}
        </a>
      {/each}
      <button class="ml-2 rounded-full p-1" type="button" on:click={handleTheme}>
        {#if $theme === 'dark'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 18a5 5 0 0 0-10 0" />
            <line x1="12" y1="2" x2="12" y2="9" />
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
            <line x1="1" y1="18" x2="3" y2="18" />
            <line x1="21" y1="18" x2="23" y2="18" />
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
            <line x1="23" y1="22" x2="1" y2="22" />
            <polyline points="8 6 12 2 16 6" />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 18a5 5 0 0 0-10 0" />
            <line x1="12" y1="9" x2="12" y2="2" />
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
            <line x1="1" y1="18" x2="3" y2="18" />
            <line x1="21" y1="18" x2="23" y2="18" />
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
            <line x1="23" y1="22" x2="1" y2="22" />
            <polyline points="16 5 12 9 8 5" />
          </svg>
        {/if}
      </button>
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
    class="p-dynamic fixed left-0 top-20 z-50 flex h-[calc(100vh-5rem)] w-screen flex-col gap-2 bg-primary dark:bg-secondary sm:hidden"
    transition:fade
  >
    {#each pages as page}
      <a
        class={classNames(
          'rounded-md px-3 py-2 transition-all dark:shadow-secondary-100',
          hash === page.href
            ? 'bg-gray-200 dark:bg-secondary-200'
            : 'hover:bg-gray-100 dark:hover:bg-secondary-100'
        )}
        href={page.href}
        on:click={event => {
          open = false
          scrollToSection(event, page.href)
        }}
      >
        {page.name}
      </a>
    {/each}
    <button
      class="flex items-center gap-2 rounded-md px-3 py-2 transition-colors"
      type="button"
      on:click={handleTheme}
    >
      <span class="capitalize">
        {$theme}
      </span>
      {#if $theme === 'dark'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 18a5 5 0 0 0-10 0" />
          <line x1="12" y1="2" x2="12" y2="9" />
          <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
          <line x1="1" y1="18" x2="3" y2="18" />
          <line x1="21" y1="18" x2="23" y2="18" />
          <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
          <line x1="23" y1="22" x2="1" y2="22" />
          <polyline points="8 6 12 2 16 6" />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 18a5 5 0 0 0-10 0" />
          <line x1="12" y1="9" x2="12" y2="2" />
          <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
          <line x1="1" y1="18" x2="3" y2="18" />
          <line x1="21" y1="18" x2="23" y2="18" />
          <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
          <line x1="23" y1="22" x2="1" y2="22" />
          <polyline points="16 5 12 9 8 5" />
        </svg>
      {/if}
    </button>
  </div>
{/if}

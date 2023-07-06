<script>
  import Marquee from '$lib/components/Marquee.svelte'
  import { theme } from '$lib/stores'
</script>

<div
  class="py-dynamic space-y-4 bg-applications-light text-center dark:bg-applications-dark sm:space-y-8"
>
  <h1 class="px-dynamic text-5xl font-bold text-violet-700 dark:text-white sm:text-6xl md:text-8xl">
    APPLICATIONS
  </h1>
  <Marquee />
  <a
    class="pressable px-dynamic inline-block rounded-full bg-red-600 px-6 py-2 text-3xl font-bold uppercase text-white transition-colors before:bg-secondary hover:bg-red-500 sm:px-8 sm:py-3 sm:text-4xl md:px-10 md:py-4 md:text-6xl"
    href="#applications"
  >
    Apply!**
  </a>
  <div class="px-dynamic md:text-lg">
    **Applications for HackHarvard 2023 will open in mid-August. Fill out <a
      href="https://forms.gle/FyaEZ2Stqn1Zpezh7"
      target="_blank"
      class="text-red-600 transition-colors hover:text-green-400"
    >
      this form
    </a> if you want to be notified when applications open.
  </div>
  <div class="px-dynamic flex justify-center">
    <div class="relative">
      <img
        class="h-40 max-h-48 object-fill sm:h-full"
        src={'images/arrows/left' + ($theme == 'dark' ? '-dark' : '-light') + '.png'}
        alt=""
      />
      <div class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div class="font-bold uppercase text-white">
          <div class="text-3xl md:text-4xl">Early</div>
          <div class="text-2xl">Month DD</div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-dynamic flex justify-center">
    <div class="relative">
      <img
        class="h-40 max-h-48 object-fill sm:h-full"
        src={'images/arrows/right' + ($theme == 'dark' ? '-dark' : '-light') + '.png'}
        alt=""
      />
      <div class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <div class="font-bold uppercase text-white">
          <div class="text-3xl md:text-4xl">Regular</div>
          <div class="text-2xl">Month DD</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .pressable {
    transition: transform 100ms, background-color 300ms;
    transform-style: preserve-3d;
  }
  .pressable::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    transform: translate3d(0, 0.5rem, -1rem);
    transition: transform 100ms, background-color 300ms;
  }
  .pressable:hover {
    transform: translateY(0.1rem);
  }
  .pressable:hover::before {
    transform: translate3d(0, 0.4rem, -1rem);
  }
  .pressable:active {
    transform: translateY(0.4rem);
  }
  .pressable:active::before {
    transform: translate3d(0, 0.1rem, -1rem);
  }
  @media (min-width: 640px) {
    .pressable::before {
      transform: translate3d(0, 0.6rem, -1rem);
    }
    .pressable:hover {
      transform: translateY(0.2rem);
    }
    .pressable:hover::before {
      transform: translate3d(0, 0.4rem, -1rem);
    }
    .pressable:active {
      transform: translateY(0.4rem);
    }
    .pressable:active::before {
      transform: translate3d(0, 0.2rem, -1rem);
    }
  }
  @media (min-width: 768px) {
    .pressable::before {
      transform: translate3d(0, 0.8rem, -1rem);
    }
    .pressable:hover {
      transform: translateY(0.2rem);
    }
    .pressable:hover::before {
      transform: translate3d(0, 0.6rem, -1rem);
    }
    .pressable:active {
      transform: translateY(0.6rem);
    }
    .pressable:active::before {
      transform: translate3d(0, 0.2rem, -1rem);
    }
  }
</style>

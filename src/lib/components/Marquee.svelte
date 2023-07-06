<div
  class="flex w-full select-none gap-10 overflow-hidden border-b-4 border-t-4 border-black py-2 text-2xl font-bold uppercase dark:border-white"
>
  <div class="marquee flex min-w-full shrink-0 justify-around gap-10">
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
  </div>
  <div class="marquee flex min-w-full shrink-0 justify-around gap-10">
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
  </div>
</div>

<style>
  .marquee {
    animation: marquee 10s linear infinite;
  }
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 2.5rem));
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .marquee {
      animation-play-state: paused;
    }
  }
</style>

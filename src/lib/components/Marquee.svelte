<div
  class="flex uppercase text-2xl overflow-hidden w-full select-none gap-10 border-t-4 border-b-4 border-black py-2 font-bold"
>
  <div class="flex marquee min-w-full gap-10 justify-around shrink-0">
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
    <span>Apply today!</span>
    <span>HackHarvard 2023!</span>
  </div>
  <div class="flex marquee min-w-full gap-10 justify-around shrink-0">
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

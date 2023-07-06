<script>
  import { onMount, onDestroy } from 'svelte'

  // Countdown
  let countdown
  let remainingTime = { months: 0, days: 0, hours: 0, minutes: 0 }
  const targetDate = new Date('2023-10-14T00:00:00Z').getTime()
  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now
    remainingTime = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60)
    }
  }
  updateCountdown()
  onMount(() => {
    countdown = setInterval(updateCountdown, 1000)
  })
  onDestroy(() => {
    clearInterval(countdown)
  })
</script>

<div class="justify-left flex h-screen">
  <div class="w-fit lg:mr-20 lg:mt-10 lg:w-5/12">
    <img src="rocket.png" alt="" class="w-full" />
  </div>
  <div class="flex w-screen flex-col items-center lg:w-fit">
    <!-- Toggle (probably have to code animation) -->
    <div class="collapse mt-10 flex w-3/4 items-start justify-end lg:visible lg:mt-20">
      <img src="toggle.svg" alt="" class="hidden lg:block" />
    </div>

    <!-- Placeholder HackHarvard text -->
    <div class="countdown-nums mt-4 hidden items-center text-center lg:visible lg:block">
      <p>HACKHARVARD<br />2023</p>
    </div>

    <!-- Placeholder HackHarvard text (image) -->
    <div class="item-start visible mr-4 w-fit lg:hidden">
      <img src="hackharvard_text.png" alt="" class="block lg:hidden" />
    </div>

    <!-- Countdown  -->
    <div class="collapse mt-1 flex flex-wrap lg:visible">
      <div class="m-4 flex flex-col items-center">
        <p class="countdown-nums">{remainingTime.months}</p>
        <p class="countdown-text">MONTHS</p>
      </div>
      <div class="m-4 flex flex-col items-center">
        <p class="countdown-nums">{remainingTime.days}</p>
        <p class="countdown-text">DAYS</p>
      </div>
      <div class="m-4 flex flex-col items-center">
        <p class="countdown-nums">{remainingTime.hours}</p>
        <p class="countdown-text">HOURS</p>
      </div>
      <div class="m-4 flex flex-col items-center">
        <p class="countdown-nums mb-0">{remainingTime.minutes}</p>
        <p class="countdown-text">MINUTES</p>
      </div>
    </div>
  </div>
</div>

<style>
  :global(:root) {
    --primary: #FFFFF;
  }
  :global(body) {
    position: relative;
    transform-origin: top left;
    background: radial-gradient(208.33% 121.31% at 14.48% 71.78%, #e63d3f 10.94%, #c0015d 89.58%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .countdown-nums {
    color: #ffffff;
    font-size: 60px;
    font-family: 'Exo';
    font-weight: 800;
  }

  .countdown-text {
    color: #ffffff;
    font-size: 27px;
    font-family: 'Exo';
    font-weight: 800;
  }
</style>

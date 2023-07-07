<script>
  import { onMount, onDestroy } from 'svelte'
  import { theme } from '$lib/stores'

  // Countdown
  let countdown
  let remainingTime = { months: 0, days: 0, hours: 0, minutes: 0 }
  const targetDate = new Date('2023-10-14T00:00:00Z').getTime()
  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now
    const tmp = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60)
    }
    function format(n) {
      if (n > 10) {
        return n.toString()
      } else {
        return `0${n}`
      }
    }
    remainingTime = {
      months: format(tmp.months),
      days: format(tmp.days),
      hours: format(tmp.hours),
      minutes: format(tmp.minutes)
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
<div class="min-h-full lg:h-dynamic p-dynamic grid grid-cols-1 lg:grid-cols-2 bg-local-light dark: bg-local-dark">
  <div class="flex items-center justify-center lg:-translate-x-10">
    <img src={'images/rocket' + ($theme == 'dark' ? '-dark' : '-light') + '.png'} alt="" class="" />
    
  </div>
  <div class="flex items-center justify-center">
    <div class="text-center mt-10 lg:mt-0">
      <!-- Placeholder HackHarvard text -->
      <img src={'images/title' + ($theme == 'dark' ? '-dark' : '-light') + '.png'} alt="" />

      <!-- Countdown  -->
      <div class="mt-10 flex items-center justify-center">
        <div class="flex w-min gap-4 font-exo text-4xl font-bold text-white dark:text-opacity-0 dark: font-outline">
          <div>
            <div>{remainingTime.months}</div>
            <div>MONTHS</div>
          </div>
          <div>
            <div>{remainingTime.days}</div>
            <div>DAYS</div>
          </div>
          <div>
            <div>{remainingTime.hours}</div>
            <div>HOURS</div>
          </div>
          <div>
            <div>{remainingTime.minutes}</div>
            <div>MINUTES</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Social media banner -->
  <!-- <div class="w-screen flex items-center justify-center bg-slate-400"> -->
    <!-- p-dynamic in parent div makes this impossible to position idk -->
  <!-- </div> -->
</div>

<style>
  .bg-local-light {
    background: radial-gradient(208.33% 121.31% at 14.48% 71.78%, #e63d3f 10.94%, #c0015d 89.58%);
  }

  .bg-local-dark {
    background: #170440;
  }

  .font-outline {
    -webkit-text-stroke: 1px white;
  }
</style>

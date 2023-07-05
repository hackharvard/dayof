<script>
  let clicked = false
  function handleClick() {
    clicked = !clicked
  }
  import { theme } from '$lib/stores'
  let mode
  theme.subscribe(value => {
    mode = value
  })
</script>

<div class="flex justify-center flex items-center">
  <h1 class="text-violet-700 dark:text-white text-8xl font-bold">APPLICATIONS</h1>
</div>
<div class="flex justify-center" style="height: 100px;"><h1 class="text-3xl">(BANNER)</h1></div>
<div class="relative flex justify-center" style="height: 100px;">
  <div>
    <a href="/">
      <button on:click={handleClick}>
        {#if clicked}
          <img
            class="absolute transform -translate-x-1/2 -translate-y-1/2"
            width="352"
            height="85"
            style="top:35%; left:50%;"
            src={'/apply_button' + (mode == 'dark' ? '_dark' : '') + '.svg'}
            alt=""
          />
          <h1
            class="text-white absolute transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold"
            style="top:35%; left:50%;"
          >
            APPLY!**
          </h1>
        {:else}
          <img
            class="absolute transform -translate-x-1/2 -translate-y-1/2"
            width="352"
            height="85"
            style="top:35%; left:50%;"
            src="/apply_button_shadow.svg"
            alt=""
          />
          <img
            class="absolute transform -translate-x-1/2 -translate-y-1/2"
            width="352"
            height="85"
            style="top:30%; left:50%;"
            src={'/apply_button' + (mode == 'dark' ? '_dark' : '') + '.svg'}
            alt=""
          />
          <h1
            class="text-white absolute transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white"
            style="top:30%; left:50;"
          >
            APPLY!**
          </h1>
        {/if}
      </button>
    </a>
  </div>
</div>
<div class="flex justify-center" style="height: 35px;">
  **Applications for HackHarvard 2023 will open in mid-August. Fill out&nbsp;<a
    href="https://forms.gle/FyaEZ2Stqn1Zpezh7"
    target="_blank"
    class="text-red-600 hover:text-green-400"
  >
    this form
  </a>&nbsp;if you want to be notified when applications open.
</div>
<div class="relative flex justify-center">
  <img
    width="858"
    height="204"
    src={'/left_arrow' + (mode == 'dark' ? '_dark' : '') + '.svg'}
    alt=""
  />
  <h1
    class="absolute transform -translate-x-1/2 -translate-y-1/2
    text-4xl font-bold"
    style="top:30%; left:50%; color:white"
  >
    EARLY
  </h1>
  <h1
    class="absolute transform -translate-x-1/2 -translate-y-1/2
    text-7xl font-bold"
    style="top:55%; left:50%; color:white"
  >
    MONTH DD
  </h1>
</div>
<div class="relative flex justify-center">
  <img
    width="858"
    height="204"
    src={'/right_arrow' + (mode == 'dark' ? '_dark' : '') + '.svg'}
    alt=""
  />
  <h1
    class="absolute transform -translate-x-1/2 -translate-y-1/2
      text-4xl font-bold"
    style="top:30%; left:50%; color:white"
  >
    REGULAR
  </h1>
  <h1
    class="absolute transform -translate-x-1/2 -translate-y-1/2
      text-7xl font-bold"
    style="top:55%; left:50%; color:white"
  >
    MONTH DD
  </h1>
</div>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Exo:wght@800&family=Lexend:wght@600&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import { onMount, onDestroy } from "svelte";

    // Countdown
    let countdown;
    let remainingTime = { months: 0, days: 0, hours: 0, minutes: 0 };
    const targetDate = new Date('2023-10-14T00:00:00Z').getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        remainingTime = {
            months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
            days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60)
        };
    }
    onMount(() => {
        countdown = setInterval(updateCountdown, 1000);
    });
    onDestroy(() => {
        clearInterval(countdown);
    });
</script>

<style>
    :global(:root) {
        --primary: #FFFFF
    }
        :global(body) {
            position: relative;
            transform-origin: top left;
            background: radial-gradient(208.33% 121.31% at 14.48% 71.78%,
                #E63D3F 10.94%, #C0015D 89.58%);
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

    .countdown-nums {
        color: #FFFFFF;
        font-size: 60px;
        font-family: 'Exo';
        font-weight: 800;
    }

    .countdown-text {
        color: #FFFFFF;
        font-size: 27px;
        font-family: 'Exo';
        font-weight: 800;
    }
</style>

<div class="flex h-screen justify-left">
    <div class="w-fit lg:w-5/12 lg:mr-20 lg:mt-10">
      <img src="rocket.png" alt="" class="w-full">
    </div>
    <div class="flex flex-col items-center w-screen lg:w-fit">
        <!-- Toggle (probably have to code animation) -->
        <div class="flex items-start justify-end w-3/4 mt-10 collapse lg:visible lg:mt-20">
            <img src="toggle.svg" alt="" class="hidden lg:block">
        </div>
        
        <!-- Placeholder HackHarvard text -->
        <div class="countdown-nums items-center mt-4 text-center lg:visible hidden lg:block">
            <p>HACKHARVARD<br>2023</p>
        </div>

        <!-- Placeholder HackHarvard text (image) -->
        <div class="w-fit mr-4 item-start visible lg:hidden">
            <img src="hackharvard_text.png" alt="" class="block lg:hidden">
        </div>

        <!-- Countdown  -->
        <div class="flex flex-wrap mt-1 collapse lg:visible">
            <div class="flex flex-col items-center m-4">
                <p class="countdown-nums">{remainingTime.months}</p>
                <p class="countdown-text">MONTHS</p>
            </div>
            <div class="flex flex-col items-center m-4">
                <p class="countdown-nums">{remainingTime.days}</p>
                <p class="countdown-text">DAYS</p>
            </div>
            <div class="flex flex-col items-center m-4">
                <p class="countdown-nums">{remainingTime.hours}</p>
                <p class="countdown-text">HOURS</p>
            </div>
            <div class="flex flex-col items-center m-4">
                <p class="countdown-nums mb-0">{remainingTime.minutes}</p>
                <p class="countdown-text">MINUTES</p>
            </div>
        </div>
    </div>
</div>
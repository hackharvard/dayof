<script>
  import { fade } from 'svelte/transition'
  import clsx from 'clsx'
  import { clickOutside } from '$lib/utils'

  let className
  export { className as class }
  export let track
  let openState = false
</script>

<button
  class={clsx(className)}
  type="button"
  on:click={() => {
    openState = true
  }}
>
  <slot />
</button>

{#if openState}
  <div
    class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center bg-white/70 backdrop-blur-xl dark:bg-secondary/70"
    transition:fade={{ duration: 150 }}
  >
    <div class="px-dynamic flex h-full w-full items-center justify-center">
      <div
        class="flex h-2/3 max-w-xl flex-col rounded-lg bg-white p-10 dark:bg-secondary"
        use:clickOutside
        on:outclick={() => {
          openState = false
        }}
      >
        <div class="mb-5 flex shrink-0 items-center justify-between">
          <h1 class="text-xl uppercase">{track.name}</h1>
          <button
            class="shrink-0"
            type="button"
            on:click={() => {
              openState = false
            }}
          >
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
          </button>
        </div>
        <div class="h-full gap-8 overflow-hidden overflow-y-auto">
          <div class="mb-4 font-bold">
            {track.name}
          </div>
          {#if track.desc === 'CAREYAYA'}
            <p>
              CareYaya Health Technologies, a premier US Health-Tech startup, is funding
              transformative ideas in healthcare from top students at HackHarvard. Transform Health,
              a subsidiary of CareYaya Health Technologies, is a venture lab with a focus on
              generative AI and the impacts it can have on US health outcomes.

              <br />

              <b>
                We're challenging hackers to create a web-based application that will enhance the
                well-being and quality of life for elderly individuals.
              </b>
              Participants are encouraged to leverage open-source technologies and consider the feasibility
              of implementing the product in real-world scenarios. Bring your own idea, or focus on one
              of Transform's Pilot Innovation Projects (PIPs):
            </p>
            <br />
            <ul>
              <li>
                &bull; ImmortalAI: Everyone has a story to tell, but not all stories are heard. With
                ImmortalAI, we're changing that by creating digital avatars that capture people's
                likeness and personality. By harnessing the latest advancements in generative AI, we
                transform a person's essence into a digital form that can interact with loved ones,
                share stories, and preserve memories. By joining us, you're not just working on a
                project; you're helping to keep stories alive for generations to come.
              </li>
              <li>
                &bull; DreamScape: Ever wonder what our dreams and thoughts would look like if they
                were images? DreamScape is on a mission to find out. Using a generative AI pipeline
                and Muse EEG collection, we turn the dreams and thoughts of elders suffering from
                dementia into visual experiences. This not only provides therapeutic benefits but
                also helps us better understand and stage Alzheimer’s and dementia. By diving into
                the human mind with us, you're not just exploring unknown territories, but also
                bringing comfort to those grappling with memory loss.
              </li>
              <li>
                &bull; SkinGuard: Early detection can be a lifesaver, especially when it comes to
                skin cancer. SkinGuard makes this easier than ever by turning your cellphone into a
                powerful skin check tool. Simply snap a picture, and an app powered by the latest
                computer vision models will analyze it to assess the risk of Melanoma. This project
                is more than just a tech endeavor; it's a step towards a world where anyone can
                check their skin's health anytime, anywhere, providing peace of mind and promoting
                early detection. Your involvement could be the catalyst that saves lives.
              </li>
            </ul>
            <br />
            <p>You can read more about CareYaya + Transform here:</p>
            <ul>
              <li>&bull; <a href="https://www.careyaya.org/">https://www.careyaya.org/</a></li>
              <li>
                &bull; <a href="https://transform.careyaya.org/">https://transform.careyaya.org/</a>
              </li>
            </ul>
            <br />
            <p>
              Novel ideas or those focused on one of Transform's PPIs will be judged equally. We
              look forward to seeing your innovative solutions that improve the lives of seniors
              through technology! Good luck!
            </p>
          {:else if track.desc === 'TERRA'}
            <b>Are you ready to reshape the future of well-being?</b>
            <br /> <br />
            <p>
              Join us in this exhilarating hackathon and empower your innovative spirit! Dive into
              the world of health and fitness technology, where you'll craft groundbreaking
              solutions that transform the way we monitor, motivate, and maintain our physical and
              mental health.
            </p>
            <br />
            <p>
              <b>
                Challenge: Innovate technology that empowers individuals to lead healthier and
                fitter lives, enhancing their well-being journey, and breaking the barriers to
                optimal health.
              </b>
            </p>
            <br />
            <p>
              Develop cutting-edge apps, wearables, AI-driven solutions, or any groundbreaking tech
              that improves fitness, monitors health, and inspires positive lifestyle changes Prizes
              await the most visionary solutions, along with the opportunity to make a tangible
              impact on global health and fitness.
              <br /> <br />
              Requirement(s): Use the Terra API! In any way shape or form. You can ask to integrate data
              into Terra as a producer, or consume data from other wearables as a consumer, or anything
              else you think would be useful!
            </p>
          {:else}
            <p>
              {track.desc}
            </p>
          {/if}

          <br />
          {#if track.questions}
            <div class="mb-4 font-bold">Guiding questions</div>
            <ol>
              {#each track.questions as question}
                <li>- {question}</li>
              {/each}
            </ol>
          {/if}
          {#if track.prizes}
            <div class="mb-4 font-bold">Prizes</div>
            <ol>
              {#each track.prizes as prize}
                <li>- {prize}</li>
              {/each}
            </ol>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

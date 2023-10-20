<script>
  import { onMount } from 'svelte'
  import Modal from '../components/TrackModal.svelte'

  let tracks = [
    {
      img: 'images/tracks/health.jpg',
      name: 'Health and Fitness\n(Sponsored by Terra API)',
      desc: 'TERRA'
    },
    {
      img: 'images/tracks/space.jpg',
      name: 'Earth and Space',
      desc: "Embark on a journey beyond our planet and explore the vastness of both Earth and Space in this hackathon track. From addressing environmental challenges on our home planet to pioneering new frontiers in space exploration, this track welcomes visionaries and problem solvers who are eager to make a significant impact on our world, both near and far. Whether you're interested in climate solutions, space technology, or protecting our planet, this hackathon is your launchpad to innovation."
    },
    {
      img: 'images/tracks/better.jpg',
      name: 'So You Think You Can Do It\nBetter',
      desc: 'Do you believe you can take existing products, services, or systems and make them infinitely better? If you\'re an advocate for improving the status quo and have innovative ideas to disrupt industries, this is your chance to shine. In the "So You Think You Can Do It Better" Hackathon, you\'ll challenge the conventional and reimagine how things can be done. From upgrading everyday apps to reinventing established processes, bring your game-changing ideas to the table and prove that you can indeed do it better!'
    },
    {
      img: 'images/tracks/efficiency.jpg',
      name: 'Efficiency Boosters',
      desc: "Efficiency fuels progress in our fast-paced world. If you're a problem solver with a passion for streamlining processes and maximizing productivity, then the Efficiency Boosters Hackathon is the perfect platform for you. Join forces with like-minded individuals to develop innovative solutions that optimize workflows, enhance resource management, and boost overall efficiency across various domains. Your ingenuity could revolutionize industries, so let's hack for a more efficient future!"
    }
  ]
</script>

<div class="py-dynamic bg-purple-100 dark:bg-secondary" id="tracks">
  <h1 class="text-center font-exo text-5xl font-bold uppercase sm:text-7xl">tracks</h1>
  <div class="px-dynamic mt-5 flex items-center justify-center">
    {#each tracks as track}
      <Modal
        class="overflow-hidden rounded-md px-2 transition-transform hover:scale-[1.05]"
        {track}
      >
        <div class="sm:h-64 sm:w-64">
          <img
            class="h-full w-full object-cover"
            src={track.img}
            alt={track.name}
            style="background-color:white"
          />
        </div>
        <div class="bg-white dark:bg-secondary-100">
          <div class="text-center">
            <div class="whitespace-pre-line font-bold">{track.name}</div>
          </div>
        </div>
      </Modal>
    {/each}
  </div>
</div>

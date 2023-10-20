<script>
  import { onMount } from 'svelte'
  import Modal from '../components/TrackModal.svelte'

  let tracks = [
    {
      img: 'images/tracks/health.jpg',
      name: 'Health and Fitness\n(Sponsored by Terra API)',
      desc: 'TERRA',
      questions: [
        'How can technology be harnessed to promote healthier lifestyles and well-being?',
        'What innovative solutions can improve access to healthcare for underserved communities?',
        'How might wearable technology and data analytics enhance fitness routines and health monitoring?',
        'Are there ways to leverage AI and telemedicine to revolutionize healthcare delivery?',
        'What opportunities exist for addressing mental health challenges through technology?',
        'Can we create tools to encourage healthier eating habits and nutrition choices?',
        'How can we use technology to motivate and engage individuals in fitness and wellness programs?'
      ],
      prizes: ['Invitation to interview for a position in Terra.', 'Garmin Venus 2 Watches!']
    },
    {
      img: 'images/tracks/space.jpg',
      name: 'Earth and Space',
      desc: "Embark on a journey beyond our planet and explore the vastness of both Earth and Space in this hackathon track. From addressing environmental challenges on our home planet to pioneering new frontiers in space exploration, this track welcomes visionaries and problem solvers who are eager to make a significant impact on our world, both near and far. Whether you're interested in climate solutions, space technology, or protecting our planet, this hackathon is your launchpad to innovation.",
      questions: [
        'What technologies can help mitigate the effects of climate change and protect the environment?',
        'How can we use space technology to monitor and address environmental issues on Earth?',
        'What innovations can improve sustainable agriculture and resource management?',
        'Are there opportunities to advance space exploration and colonization efforts?',
        'How can space technology benefit life on Earth, from communications to resource utilization?',
        'What solutions can address space debris and ensure the long-term sustainability of space activities?',
        'How can we harness Earth and space data for scientific research and global benefit?'
      ],
      prizes: ['Drones!']
    },
    {
      img: 'images/tracks/better.jpg',
      name: 'So You Think You Can Do It\nBetter',
      desc: 'Do you believe you can take existing products, services, or systems and make them infinitely better? If you\'re an advocate for improving the status quo and have innovative ideas to disrupt industries, this is your chance to shine. In the "So You Think You Can Do It Better" Hackathon, you\'ll challenge the conventional and reimagine how things can be done. From upgrading everyday apps to reinventing established processes, bring your game-changing ideas to the table and prove that you can indeed do it better!',
      questions: [
        'What existing products, services, or processes are ready for enhancement or transformation?',
        'How can we make everyday tasks and experiences more efficient, user-friendly, or cost-effective?',
        'What industries could benefit from a complete overhaul or innovative rethinking?',
        'Are there areas where simplification or consolidation could lead to better outcomes?',
        'How can we address pain points and inefficiencies in current systems or technologies?',
        'What are the most pressing issues where doing things "better" would have the greatest impact?',
        'Can we reimagine traditional business models or approaches to create more value?'
      ],
      prizes: ['Hydroflasks!']
    },
    {
      img: 'images/tracks/efficiency.jpg',
      name: 'Efficiency Boosters',
      desc: "Efficiency fuels progress in our fast-paced world. If you're a problem solver with a passion for streamlining processes and maximizing productivity, then the Efficiency Boosters Hackathon is the perfect platform for you. Join forces with like-minded individuals to develop innovative solutions that optimize workflows, enhance resource management, and boost overall efficiency across various domains. Your ingenuity could revolutionize industries, so let's hack for a more efficient future!",
      questions: [
        'Where can we identify bottlenecks or inefficiencies in various industries and processes?',
        'How can automation and artificial intelligence be leveraged to streamline workflows?',
        'Are there opportunities to optimize resource allocation and reduce waste?',
        'What tools and technologies can enhance project management and task coordination?',
        'How can we improve energy efficiency and reduce environmental impact through innovation?',
        'What solutions can boost productivity and reduce downtime in manufacturing or services?',
        'Are there untapped opportunities to make complex systems more user-friendly and efficient?'
      ],
      prizes: ['Portable chargers!']
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

<script>
  import { onMount } from 'svelte'
  import Modal from '../components/TrackModal.svelte'
  let challenges = [
    {
      img: 'images/challenges/terra_api.jpg',
      name: 'Terra API',
      desc: 'SMASH the competition by showcasing the most promising use of the Terra API specifically.',
      prizes: [
        'Invitation to interview for a position in Terra.',
        'Limited edition Hulk-themed trophies!'
      ]
    },
    {
      img: 'images/challenges/nucleus_genomics.jpg',
      name: 'Nucleus Genomics',
      desc: 'TBA',
      prizes: [
        'First iteration of Nucleus DNA kit (not usable, just for show). Value: Should Nucleus succeed, only 100 of these were made so potentially quite a bit one day!'
      ]
    },
    {
      img: 'images/challenges/careyaya.jpg',
      name: 'CareYaya Health Technologies',
      desc: 'CAREYAYA',
      prizes: [
        '1st: $500 + straight to final round interviews for a paid internship position.',
        '2nd: $300 + straight to final round interviews for a paid internship position.',
        '3rd: $200 + straight to final round interviews for a paid internship position.',
        "All winners of CareYaya's challenge will be awarded the opportunity to join the W23 cohort of Transform Health. Students in the cohort will receive hands-on guidance and support from industry experts, and a direct investment of $10,000+ to pursue their venture."
      ]
    },
    {
      img: 'images/challenges/mathworks.png',
      name: 'MathWorks',
      desc: 'MATLAB must be used significantly in the submission, using code authored in other programming languages or platforms is permitted but must be integrated into MATLAB. All submissions MUST be tagged with MATLAB on Devpost. Submissions must include external, and user-created functions to run the code. Must contain a PDF or HTML report detailing your submission along with visualization of your output. Apps developed in MATLAB are also allowed. For extra credit, submit a short 2- minute video explaining your submission and how it tackles the problem at hand on Devpost.',
      prizes: ['TBA']
    },
    {
      img: 'images/challenges/BGB.jpg',
      name: 'BGB Group',
      desc: 'EARLIER DIAGNOSIS: How might we create urgency with primary care physicians (PCPs) to implement consistent cognitive screening (neurocognitive assessments and/or use of blood-based biomarkers) to proactively identify AD patients early in their disease progression and refer to neurologists?',
      prizes: [
        'Each team member will receive a $250 Amex gift card and an interview opportunity for a 5-week paid apprenticeship.'
      ]
    },
    {
      img: 'images/challenges/gcloud.jpg',
      name: 'Google Cloud',
      desc: 'Build your hackathon project with a suite of secure storage, powerful compute, and integrated data analytics products provided by Google Cloud. See full list of products here: g.co/cloud. Learn more about the tools and opportunities with Google Cloud by joining the Google Cloud Student Innovators program - goo.gle/student-innovators. Winners will receive a Google Cloud branded backpack! Be sure to redeem your Google Cloud Credits as soon as possible through the Google Cloud Credit Form. Use the promo code in your pre-event email to access the form!',
      prizes: ['Each team member will receive a Google Cloud Backpack!']
    },
    {
      img: 'images/challenges/github.png',
      name: 'GitHub',
      desc: 'GitHub is one of the best ways to collaborate, push code, get feedback, and show the world what you’ve built during a hackathon. To take it a step further, GitHub is now offering you access to industry tools, events & learning resources through something called GitHub Global Campus. Win this weekend’s Most Creative Use of GitHub prize category, first by signing up for GitHub Global Campus and second by using a GitHub repository to host your hackathon project’s code! Make sure your use of GitHub stands out with a detailed ReadMe page, meaningful pull requests and collaboration history, and even a GitHub pages deployment!',
      prizes: ['GitHub swag!']
    },
    {
      img: 'images/challenges/godaddy.png',
      name: 'GoDaddy',
      desc: 'GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win to win Best Domain Name from GoDaddy Registry!',
      prizes: [
        'Hack from Home Kit! Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport.'
      ]
    },
    {
      img: 'images/challenges/matlab.png',
      name: 'MATLAB',
      desc: 'MATLAB and Simulink are computational tools used at over 100,000 businesses, government and university sites in over 190 countries. Use MATLAB and/or Simulink exclusively or integrate them into another tool for your next hack to win Best Use of MATLAB! You can also claim a free MATLAB software license to get started.',
      prizes: ['Exclusive MathWorks branded Wireless YoYo Speaker!']
    },
    {
      img: 'images/challenges/fidelity.jpg',
      name: 'Fidelity',
      desc: 'At Fidelity, accessibility is viewed as a major key to the success of their business, which is why they are challenging you to come up with innovative ways to make tech more accessible! We want you to use your hacking skills to find and build solutions that put opportunities and resources within reach for all communities. The team with the best accessibility hack will win a Fidelity branded wireless charger for each team member!',
      prizes: ['Fidelity Branded Wireless Charger']
    },
    {
      img: 'images/challenges/circle.jpg',
      name: 'Circle',
      desc: 'With Circle, you can embed secure wallets into your app in just minutes. Circle Web3 wallets are compatible with multiple blockchains and are supported by over a dozen programming language SDKs. Circle’s programmable wallets will enable you to add secure transactions to your hackathon project using RESTful APIs, with options for both user and developer controlled transactions. If your hackathon idea involves in-app purchases, user to user payments, app to user payments, or all of the above, integrating Circle programmable wallets to your Web2 or Web3 tech-stack may be the perfect solution. Sign up for a developer account and start using Circle’s APIs today, for a chance to win a Circle Branded Hardware Wallet for you and each of your teammates!',
      prizes: ['Circle Branded Hardware Wallet']
    },
    {
      img: 'images/challenges/redis.png',
      name: 'Redis Cloud',
      desc: 'Redis Cloud is the easiest way to build and scale real-time applications - Period! It includes Redis Stack, adding indexing, querying, full-text search, JSON, time-series, and probabilistic data structures to the already-rich set of features of Redis. Redis Stack works with all of your favorite programming languages and can be added to any existing application. It’s the easiest way to build real-time applications that scale and perform. Show us how you’ve used Redis Cloud in a way that showcases your unique and specific data structure needs and each member of your team could win a personal, portable Redis Stack server IOT hardware unit to keep developing on the go. Find out why Stack Overflow Developers have voted Redis their “most loved and admired” noSQL database for years-running by rolling Redis into your MLH Hackathon project. Sign up for your free Redis Cloud account, and head over to the MLH jump off page on Redis University for more info and docs links. Enter coupon code MLHFall2023 to claim your Redis Cloud credits and get started for free!',
      prizes: ['Libre Mini Computer with Redis Stack Server Pre-Installed']
    }
  ]
</script>

<div class="py-dynamic bg-purple-100 dark:bg-secondary" id="challenges">
  <h1 class="text-center font-exo text-5xl font-bold uppercase sm:text-7xl">challenges</h1>
  <div class="px-dynamic mt-10 flex items-center justify-center">
    <div class="flex h-screen items-center justify-center">
      <div class="flex flex-wrap items-center justify-center">
        {#each challenges as track}
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
            <div class="bg-white p-3 dark:bg-secondary-100">
              <div class="text-center">
                <div class="whitespace-pre-line font-bold">{track.name}</div>
              </div>
            </div>
          </Modal>
        {/each}
      </div>
    </div>
  </div>
</div>

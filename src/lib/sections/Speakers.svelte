<script>
  import { onMount } from 'svelte'
  import Modal from '../components/Modal.svelte'

  let speakers = []
  onMount(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        speakers = data.results.map(({ picture, name }) => ({
          img: picture.large,
          name: `${name.first} ${name.last}`,
          role: 'Software Engineer',
          bio: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'
        }))
      })
  })
</script>

<div class="py-dynamic bg-purple-100 dark:bg-secondary" id="speakers">
  <h1 class="text-center font-exo text-5xl font-bold uppercase sm:text-7xl">Speakers</h1>
  <p class="mt-5 text-center">
    If you’re interested in being a speaker for HackHarvard, please email us at <a
      class="link"
      href="mailto:team@hackharvard.io">team@hackharvard.io!</a
    >
  </p>
  <!-- <div class="px-dynamic mt-10 flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
      {#each speakers as speaker}
        <Modal class="overflow-hidden rounded-md transition-transform hover:scale-[1.05]" {speaker}>
          <div class="sm:h-52 sm:w-52">
            <img class="h-full w-full object-cover" src={speaker.img} alt={speaker.name} />
          </div>
          <div class="bg-white p-3 dark:bg-secondary-100">
            <div class="text-center">
              <div class="whitespace-pre-line font-bold">{speaker.name}</div>
              <div>{speaker.role}</div>
            </div>
          </div>
        </Modal>
      {/each}
    </div>
  </div> -->
</div>

<script>
  import Disclosure from '../components/Disclosure.svelte'
</script>

<div class="p-dynamic flex justify-center bg-faq-light bg-cover dark:bg-faq-dark" id="faq">
  <div class="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-secondary">
    <div>
      <h1 class="text-5xl font-bold uppercase text-red-700 sm:text-7xl">FAQ</h1>
      <p class="mt-5 font-bold text-blue-700 dark:text-blue-200">
        What if my question is not here?
      </p>
      <p>
        Please email us at <a class="link" href="mailto:team@hackharvard.io">team@hackharvard.io</a>
        and we'll get back to you ASAP!
      </p>
    </div>
    <div class="mt-8 space-y-8">
      <div class="space-y-6">
        <h3 class="text-3xl font-bold text-red-700 sm:text-4xl md:text-5xl">GENERAL</h3>
        <Disclosure>
          <svelte:fragment slot="title">What if I've never hacked before?</svelte:fragment>
          <svelte:fragment slot="content">
            That's ok! In fact, you've found the perfect place and time to pick up new skills and
            concepts. There will be mentors, workshops, and tech talks to help ease you through the
            hackathon experience. Applications are not filtered based on experience. First time
            hackers are also eligible for the first-time hacker prize!
          </svelte:fragment>
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">When is registration?</svelte:fragment>
          <svelte:fragment slot="content"
            >Early applications will be due XX. Round 2 applications will be due XX.</svelte:fragment
          >
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">Can I attend?</svelte:fragment>
          <svelte:fragment slot="content">
            As long as you are an undergraduate student at any college in the world and are 18 or
            older, you are invited to apply to HackHarvard!
          </svelte:fragment>
        </Disclosure>
      </div>
      <div class="space-y-6">
        <h3 class="text-3xl font-bold text-red-700 sm:text-4xl md:text-5xl">TEAMS</h3>
        <Disclosure>
          <svelte:fragment slot="title">What if I don't have a team?</svelte:fragment>
          <svelte:fragment slot="content">
            If you registered as an individual and do not have a team yet, don’t sweat it. There
            will be several online events and channels geared towards facilitating team formation
            and project ideation. We will help you find people to work with!
          </svelte:fragment>
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">How do teams work?</svelte:fragment>
          <svelte:fragment slot="content">
            Each team consists of a maximum of four members. You can create a team and designate
            teammates during registration, or you can register as an individual. All teammates must
            submit individual applications. Admission decisions will be all-or-none, so either all
            of your teammates will receive admission or none of your teammates will receive
            admission.
          </svelte:fragment>
        </Disclosure>
      </div>
      <div class="space-y-6">
        <h3 class="text-3xl font-bold uppercase text-red-700 sm:text-4xl md:text-5xl">
          Tracks & Prizes
        </h3>
        <Disclosure>
          <svelte:fragment slot="title">What are tracks?</svelte:fragment>
          <svelte:fragment slot="content">
            Tracks are areas of focus that you may choose to hack in. If you submit your project to
            a track, you are eligible to win the track-specific prize.
          </svelte:fragment>
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">Will there be swag and prizes?</svelte:fragment>
          <svelte:fragment slot="content">
            Of course! We will be shipping swag to all participants who submit a project, as well as
            prizes to all winning projects.
          </svelte:fragment>
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">Do I have to submit to a track?</svelte:fragment>
          <svelte:fragment slot="content">
            No, you can submit a project that is unrelated to the tracks provided.
          </svelte:fragment>
        </Disclosure>
        <Disclosure>
          <svelte:fragment slot="title">Do I have to submit a project?</svelte:fragment>
          <svelte:fragment slot="content">
            You do not have to submit a project, though we highly recommend you do! You will not be
            eligible to receive swag if you do not submit a project.
          </svelte:fragment>
        </Disclosure>
      </div>
    </div>
  </div>
</div>

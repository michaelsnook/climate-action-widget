<script>
  import CountryPicker from './CountryPicker.svelte'
  export let noStyles = false
  export let noLayout = false
  export let theme = {}
  let mainColor = theme.color ?? '#663399'
  let darkColor = theme.darkColor ?? '#332e3c'
  let actionColor = theme.actionColor ?? '#bc4747'
  let coolColor = theme.coolColor ?? '#297373'
  let brightColor = theme.brightColor ?? '#ffe66d'

  let view = 'initial'
</script>

<section class="widget-inner" style="
  --main-color: {mainColor};
  --dark-color: {darkColor};
  --action-color: {actionColor};
  --cool-color: {coolColor};
  --bright-color: {brightColor};
">
  <h1>Stop With</h1>
  <h2>All This Climate Chaos</h2>
  <main class="interactions">
    {#if view === 'initial'}
      <a href class="button button-solid" on:click|preventDefault={() => view = 'find-action'}>Find an action near you</a>
      <a href class="button button-outline" on:click|preventDefault={() => view = 'join-group'}>Join a local group</a>
      <a href class="button button-clear" on:click|preventDefault={() => view = 'organizer'}>Organizers, get in touch</a>
    {:else if view === 'join-group'}
      <CountryPicker type="join-group" />
      <a href on:click|preventDefault={() => view = 'initial'}>go back</a>
    {:else if view === 'find-action'}
      <CountryPicker type="find-action" />
      <a href on:click|preventDefault={() => view = 'initial'}>go back</a>
    {:else if view === 'organizer'}
      <p>cool just email us or sthg</p>
      <a href on:click|preventDefault={() => view = 'initial'}>go back</a>
    {/if}
  </main>

</section>

<style global>
  section.widget-inner {
    box-sizing: border-box;
    font-size: 16px;
    font-family: sans-serif;
    max-width: 400px;
    margin: 0 auto;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
</style>

{#if !noLayout}
<style global>
  section.widget-inner {
    min-height: 300px;
  }
  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
    padding-left: 0.5rem;
  }
  .pad {
    padding: 1rem 1.6rem;
    margin-bottom: 2rem;
  }
  select, option, input {
    width: 100%;
    border: 1px gray solid;
    padding: 1rem;
    margin: 0 0 1rem;
    border-radius: 3px;
    display: block;
    font-size: 16px;
  }
  a.button {
    width: 100%;
    text-align: center;
    margin: 0.3rem auto;
    display: inline-block;
  }
  label {
    display: block;
    padding: 0.5rem 0;
  }
  main.interactions {
    padding: 2rem 0;

  }
</style>
{/if}

{#if !noStyles}
<style global>
	h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    color: var(--dark-color);
  }
  h1 {
    color: var(--main-color);
    font-weight: bold;
    font-size: 3rem;
  }
  a {
    color: var(--main-color);
  }
  a.button-solid {
    background-color: var(--main-color);
    color: white;
  }
  a.button-outline {
    border: 1px var(--main-color) solid;
  }
  a.button-solid, a.button-outline {
    padding: 1rem 3rem;
    border-radius: 3px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
{/if}

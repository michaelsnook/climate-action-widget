<script>
  import CountryPicker from './CountryPicker.svelte'
  import { _ } from 'svelte-i18n'
  import localeSetup from './i18n'
  
  export let noStyles
  export let noLayout
  export let theme = {}
  export let title = 'Get Involved'
  export let subtitle = 'Defund Climate Chaos'
  export let locale

  let mainColor = theme.mainColor || '#DD0000'

  export let view = 'initial'
  let startingView = view
  localeSetup(locale)

</script>

<main class="cop-widget-inner" style="--main-color: {mainColor};">
  {#if title.length > 0}<h1>{title}</h1>{/if}
  {#if subtitle.length > 0}<h2>{subtitle}</h2>{/if}
  {#if view === 'initial'}
    <a href class="button button-solid" on:click|preventDefault={() => view = 'find-action'}>
      {$_('cta_find_action')}
    </a>
    <a href class="button button-outline" on:click|preventDefault={() => view = 'join-group'}>
      {$_('cta_join_group')}
    </a>
    <a href class="button button-clear" on:click|preventDefault={() => view = 'organiser'}>
      {$_('cta_organisers')}
    </a>
  {:else if view === 'join-group'}
    <CountryPicker type="join-group" />
  {:else if view === 'find-action'}
    <CountryPicker type="find-action" />
  {:else if view === 'organiser'}
    <p>{$_('organiser_message')}</p>
  {:else if view === 'search'}
    <form method="GET" action="https://act.plannedparenthoodaction.org/local">
      <label for="filter-location">{$_('label_postcode_country')}</label>
      <input id="filter-location" name="filter[location]" placeholder={$_('placeholder_postcode_country')} />
    </form>
  {/if}
  {#if view !== startingView}
    <a href class="link go-back" on:click|preventDefault={() => view = startingView}>
      &#171; {$_('go_back')}
    </a>
  {/if}
</main>

{#if !noLayout}
<style>
  main.cop-widget-inner {
    box-sizing: border-box;
    font-size: 16px;
    max-width: 400px;
    min-height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    place-content: center;
  }
  .cop-widget-inner *,
  .cop-widget-inner *:before,
  .cop-widget-inner *:after {
    box-sizing: inherit;
  }
  .cop-widget-inner h1,
  .cop-widget-inner h2,
  .cop-widget-inner h3,
  .cop-widget-inner h4,
  .cop-widget-inner h5,
  .cop-widget-inner h6,
  .cop-widget-inner p,
  .cop-widget-inner ol,
  .cop-widget-inner ul,
  .cop-widget-inner form {
    margin: 0;
    padding: 0;
  }
  .cop-widget-inner ol, .cop-widget-inner ul {
    list-style: none;
    padding-left: 0.5rem;
  }
  .cop-widget-inner .pad {
    padding: 1rem 1.6rem;
    margin-bottom: 2rem;
  }
  .cop-widget-inner select,
  .cop-widget-inner option,
  .cop-widget-inner input {
    width: 100%;
    border: 1px gray solid;
    padding: 1rem;
    margin: 0 0 1rem;
    border-radius: 3px;
    display: block;
    font-size: 16px;
  }
  .cop-widget-inner a.button {
    width: 100%;
    text-align: center;
    margin: 0.3rem auto;
    display: inline-block;
  }
  .cop-widget-inner label {
    display: block;
    padding: 0.5rem 0;
  }
  .cop-widget-inner form {
    padding: 1rem 0;
  }
</style>
{/if}

{#if !noStyles}
<style>
	.cop-widget-inner h1,
  .cop-widget-inner h2,
  .cop-widget-inner h3,
  .cop-widget-inner h4,
  .cop-widget-inner h5,
  .cop-widget-inner h6,
  .cop-widget-inner p,
  .cop-widget-inner ol,
  .cop-widget-inner ul {
    font-weight: normal;
    color: var(--dark-color);
  }
  .cop-widget-inner {
    font-family: sans-serif;
  }
  .cop-widget-inner h1 {
    color: var(--main-color);
    font-weight: bold;
    font-size: 3rem;
  }
  .cop-widget-inner a {
    color: var(--main-color);
  }
  .cop-widget-inner a.button-solid {
    background-color: var(--main-color);
    color: white;
  }
  .cop-widget-inner a.button-outline {
    border: 1px var(--main-color) solid;
  }
  .cop-widget-inner a.button-solid,
  .cop-widget-inner a.button-outline {
    padding: 1rem 3rem;
    border-radius: 3px;
    text-decoration: none;
  }
  .cop-widget-inner a:hover {
    text-decoration: underline;
  }
</style>
{/if}

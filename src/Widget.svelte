<script>
  export let noStyles = false;
  export let noLayout = false;
  export let theme = {};
  let mainColor = theme.color ?? '#663399';
  let darkColor = theme.darkColor ?? '#332e3c';
  let actionColor = theme.actionColor ?? '#bc4747';
  let coolColor = theme.coolColor ?? '#297373';
  let brightColor = theme.brightColor ?? '#ffe66d';
  let countries = [
    ['USA', 'https://stopthemoneypipeline.com/'],
    ['UK', 'https://tippingpointuk.org/' ]
  ];

  let countrySelected;
  function redirect() {
    if (!countrySelected) { return; }
    window.location.href = countrySelected;
  }
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

  <label for="country-select">Choose your region to connect to actions near you</label>
  <select id="country-select" bind:value={countrySelected} on:change={redirect}>
    <option value="" default>-- select a region --</option>
    {#each countries as c}
      <option value={c[1]}>{c[0]}</option>
    {/each}
  </select>

  <a href class="button button-solid">Find an action near you</a>
  <a href class="button button-outline">Join a local group</a>
  <a href class="button button-clear">Organizers, get in touch</a>

</section>

<style>
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
<style>
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
</style>
{/if}

{#if !noStyles}
<style>
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

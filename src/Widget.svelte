<script>
  export let noStyles = false;
  export let noLayout = false;
  export let theme = {};
  let mainColor = theme.color ?? '#663399';
  let darkColor = theme.darkColor ?? '#332e3c';
</script>

<section class="widget-inner" style="
  --main-color: {mainColor};
  --dark-color: {darkColor};
">
  <h1>Stop With</h1>
  <p>All This Climate Chaos</p>
</section>

<style>
  section.widget-inner {
    box-sizing: border-box;
    font-size: 16px;
    font-family: sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
</style>

{#if !noLayout}
<style>
  ol, ul {
    list-style: none;
    padding-left: 0.5rem;
  }
  .pad {
    padding: 1rem 1.6rem;
    margin-bottom: 2rem;
  }
</style>
{/if}

{#if !noStyles}
<style>
	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: var(--dark-color);
  }

  h1 {
    color: var(--main-color);
    font-weight: bold;
  }
</style>
{/if}

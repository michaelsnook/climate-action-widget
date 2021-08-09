<script>
  let countries = [
    ['USA', 'https://stopthemoneypipeline.com/'],
    ['UK', 'https://tippingpointuk.org/' ],
  ]

  let countrySelected
  function redirect() {
    if (!countrySelected) { return }
    window.location.href = countrySelected
  }
</script>

<label for="country-select">Choose your region to connect to actions near you</label>
<select id="country-select" bind:value={countrySelected} on:change={redirect}>
  <option value="" default>-- select a region --</option>
  {#each countries as c}
    <option value={c[1]}>{c[0]}</option>
  {/each}
</select>

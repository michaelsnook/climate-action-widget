<script>
  let countries = [
    ['Canada', 'https://rbcrevealed.com/oct-29th-action-map/'],
    ['France', 'https://act.350.org/survey/day_of_action_oct_2021/'],
    ['Germany (350)', 'https://350.org/de/defund-climate-chaos/'],
    ['Germany (Urgewald)', 'https://urgewald.org/weltspartag'],
    ['UK', 'https://defundclimatechaos.uk/'],
    ['USA', 'https://fossilfreefuture.earth/'],
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

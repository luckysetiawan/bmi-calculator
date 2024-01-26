<script>
  import { WHOStandardStore, AsiaPacificStandardStore } from '../../store';
</script>

<div class="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
    <p class="text-3xl font-bold">About</p><br>
    
    <p>BMI Calculator is a tool that can help you calculate your body mass index (BMI) then classify your weight status according to your BMI.</p><br>

    <p>Although BMI is simple and widely used, there are several limitations to it that make it not perfect in assessing your health or body composition. For example, BMI is only calculated with height and weight. Therefore, it doesn't matter whether the majority of your weight came from muscle or fat, one can be classified as obese with a low fat percentage. So BMI is not suitable for someone with high muscle mass.</p><br>

    <p>This app provides two standards of BMI range classification:</p>
    <ol class="list-inside list-decimal">
        <li><a href="https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index">World Health Organization</a></li>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5571887/">Asia-Pacific</a></li>
    </ol><br>

    <div class="flex flex-col md:flex-row">
        <table class="border-collapse border table-auto m-4">
            <caption class="caption-top">
                WHO Standard
            </caption>
            <thead>
              <tr>
                <th class="border text-center px-4 py-2">BMI Range</th>
                <th class="border text-center px-4 py-2">Classification</th>
              </tr>
            </thead>
            <tbody>
              {#each $WHOStandardStore as {min, max, classification}}
              <tr>
                {#if min === -1}
                    <td class="border text-center px-4 py-2">{'<'} {max}</td>
                {:else if max === -1}
                    <td class="border text-center px-4 py-2">{'>='} {min}</td>
                {:else}
                    <td class="border text-center px-4 py-2">{min} - {max}</td>
                {/if}

                <td class="border text-center px-4 py-2">{classification}</td>
              </tr>
              {/each}
            </tbody>
        </table>
    
        <table class="border-collapse border table-auto m-4">
            <caption class="caption-top">
                Asia-Pacific
            </caption>
            <thead>
              <tr>
                <th class="border text-center px-4 py-2">BMI Range</th>
                <th class="border text-center px-4 py-2">Classification</th>
              </tr>
            </thead>
            <tbody>
              {#each $AsiaPacificStandardStore as {min, max, classification}}
              <tr>
                {#if min === -1}
                    <td class="border text-center px-4 py-2">{'<'} {max}</td>
                {:else if max === -1}
                    <td class="border text-center px-4 py-2">{'>='} {min}</td>
                {:else}
                    <td class="border text-center px-4 py-2">{min} - {max}</td>
                {/if}

                <td class="border text-center px-4 py-2">{classification}</td>
              </tr>
              {/each}
            </tbody>
        </table>
    </div>
</div>
<script>
    import { WHOStandardStore, AsiaPacificStandardStore, CalculatorResultStore } from '../store';

    let weight = 0.0;
    let height = 0.0;
    let showResult = false;

    const classifyBMI = (_standards, _bmi) => {
        for(const {min, max, classification} of _standards) {
            if (min === -1 || max === -1) {
                if (min === -1 && _bmi < max) return classification;
                if (max === -1 && _bmi >= min) return classification;
            } else {
                if (_bmi >= min && _bmi <= max) return classification;
            }
        }

        return 'unknown';
    }

    const calculateBMI = (_weight, _height) => {
        // convert height from m to cm
        let height = _height / 100;
        let bmi = _weight / (height * height);

        return parseFloat(bmi.toFixed(1));;
    }

    const handleSubmit = () => {
        CalculatorResultStore.update((result) => { 
            let bmi = calculateBMI(weight, height);

            result = {
                bmi: bmi,
                who: classifyBMI($WHOStandardStore, bmi),
                ap: classifyBMI($AsiaPacificStandardStore, bmi),
            };

            return result;
         });

         showResult = true;
    };
</script>

<div class="container mx-auto max-w-2xl">
    <form on:submit|preventDefault={handleSubmit}>
        <label for="weight" class="block text-sm font-medium leading-6 text-gray-900">Weight (kg)</label>
        <div class="mt-2 mb-4">
            <input type="number" min = 0 step="0.01" bind:value={ weight } name="weight" id="weight" class="block w-full rounded-md border-0 text-center py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
        </div>

        <label for="height" class="block text-sm font-medium leading-6 text-gray-900">Height (cm)</label>
        <div class="mt-2 mb-4">
            <input type="number" min = 0 step="0.01" bind:value={ height } name="height" id="height" class="block w-full rounded-md border-0 text-center py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Calculate</button>
        </div>
    </form>

    {#if showResult}
        <p>Your BMI is {$CalculatorResultStore.bmi}!</p>
        <p>According to WHO Standard, you are {$CalculatorResultStore.who}.</p>
        <p>According to Asia Pacific Standard, you are {$CalculatorResultStore.ap}.</p>
    {/if}
</div>

<style lang="postcss">
    label {
        color: #ededed;
    }
</style>
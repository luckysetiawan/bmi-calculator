<script>
    import { WHOStandard, AsiaPacificStandard } from '../store';

    const classifyBMI = (standards, bmi) => {
        for(const {min, max, classification} of standards) {
            if (min === -1 || max === -1) {
                if (min === -1 && bmi < max) return classification;
                if (max === -1 && bmi >= min) return classification;
            } else {
                if (bmi >= min && bmi <= max) return classification;
            }
        }

        return 'unknown';
    }
    
    const calculateBMI = (standards, weight, height) => {
        let bmi = weight / (height * height);
        let bmiRounded = parseFloat(bmi.toFixed(1));

        return classifyBMI(standards, bmiRounded);
    }
</script>

<div class="container mx-auto max-w-7xl">
    <p class="text-3xl font-bold">Coming Soon</p>

    <p>For example, if you have this measurement:</p>
    <p>Weight: 75kg</p>
    <p>Height: 1.65m</p>
    <p>According to WHO Standards, you are {calculateBMI($WHOStandard, 75, 1.65)}.</p>
    <p>According to Asia Pacific Standards, you are {calculateBMI($AsiaPacificStandard, 75, 1.65)}.</p>
    
    
</div>

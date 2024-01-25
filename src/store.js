import { readable, writable } from 'svelte/store';

export const WHOStandardStore = readable([
    {
        min: -1,
        max: 18.5,
        classification: 'underweight'
    },
    {
        min: 18.5,
        max: 24.9,
        classification: 'normal'
    },
    {
        min: 25,
        max: 29.9,
        classification: 'overweight'
    },
    {
        min: 30,
        max: -1,
        classification: 'obese'
    },
]);

export const AsiaPacificStandardStore = readable([
    {
        min: -1,
        max: 18.5,
        classification: 'underweight'
    },
    {
        min: 18.5,
        max: 22.9,
        classification: 'normal'
    },
    {
        min: 23,
        max: 24.9,
        classification: 'overweight'
    },
    {
        min: 25,
        max: -1,
        classification: 'obese'
    },
]);

export const CalculatorResultStore = writable({
    bmi: null,
    whoClassification: null,
    apClassification: null,
    whoIdealWeightMin: null,
    whoIdealWeightMax: null,
    apIdealWeightMin: null,
    apIdealWeightMax: null,
});

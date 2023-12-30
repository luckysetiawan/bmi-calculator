<script>
    import { base } from '$app/paths'
    import "../app.css";

    let links = [
        { text: 'Home', href: base },
        { text: 'About', href: base + '/about' },
        { text: 'Other Tools', href: 'https://luckysetiawan.github.io/#/3' }
    ];
</script>

<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex flex-1">
    <a href="{base}" class="text-2xl font-bold -m-1.5 p-1.5">BMI Calculator</a>
    </div>
    <div class="flex gap-x-12">
    {#each links as {text, href}}
        <a href="{href}" class="text-sm font-semibold leading-6">{text}</a>
    {/each}
    </div>
</nav>

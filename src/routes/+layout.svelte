<script>
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</svelte:head>

<main>
    <Navbar />
    <slot />
</main>

<style lang="postcss">
    :global(html) {
        background-color: #222222;
        color: #ededed;
    }

    :global(a) {
        color: #ff7324;
    }

    :global(a:hover) {
        color: #8dcffc;
    }
</style>

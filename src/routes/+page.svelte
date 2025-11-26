<script>

  import { onMount } from "svelte";

  let users = [];
  onMount(() => {

    // simulate a remote resource call to fetch data to populate the use list with three users
    users = [
      { name: "Alice", id: 1 },
      { name: "Bob", id: 2 },
      { name: "Charlie", id: 3 }
    ];

    console.log("Users:", users);



  });

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
{#each users as user}
  <div>
    <p>{user.name} (ID: {user.id})</p>
    <a href="/user/{user.name}">Go to user {user.name}'s page</a>
  </div>
{/each}


<a href="/hello/world">Go to route param at root with rest</a>
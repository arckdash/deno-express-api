const stagingUrl = Deno.env.get('STAGING_URL') || 'http://localhost:3000';

Deno.bench("All users", async () => {
    await fetch(`${stagingUrl}/users`)
});

Deno.bench("Single user", async () => {
    await fetch(`${stagingUrl}/users/1`)
});

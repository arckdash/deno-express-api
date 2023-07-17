import { assertEquals } from "https://deno.land/std@0.193.0/testing/asserts.ts";
const stagingUrl = Deno.env.get('STAGING_URL') || 'http://localhost:3000';

Deno.test("Users list", async () => {
    const res = await fetch(`${stagingUrl}/users`)
    const response = await res.json();
    console.log('response: ', response);
    assertEquals(res.status, 200);
})

Deno.test("User data", async () => {
    const res = await fetch(`${stagingUrl}/users/2`)
    const response = await res.json();

    assertEquals(res.status, 200);
    assertEquals(response.name, 'Funmi');
})
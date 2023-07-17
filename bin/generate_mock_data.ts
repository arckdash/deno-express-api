#!usr/bin/env -S deno run --allow-write

const fakeData = `{
    users: [
        {
            id: 1,
            name: "Sara",
            department: "Engineering"
        },
        {
            id: 2,
            name: "Funmi",
            department: "Sales"
        },
        {
            id: 3,
            name: "David",
            department: "Marketing"
        },
        {
            id: 4,
            name: "Dante",
            department: "R&D"
        },
    ],
}`;

await Deno.writeFile(
    "../test_data.json",
    JSON.parse(fakeData),
);

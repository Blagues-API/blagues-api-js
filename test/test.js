const BlaguesAPI = require('../lib/index');
const blaguesAPI = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjkwODM1MTMxMjc1MDE4MjcwIiwibGltaXQiOjEwMCwia2V5IjoiU3dlcTZTM0lrOW02bjZOaW03VkltSFNjdXA2SUZhd2hzWDNoVmwxQXBxVDJRZlh3VUciLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yM1QxNzozOTo1MSswMDowMCIsImlhdCI6MTYxOTE5OTU5MX0.vdRD7xBnX6R9iIkhVfsBtCDVsX3tKJVxjCUosrFx2HU');

test();

async function test() {
    console.log(await blaguesAPI.Jokes.random());
    console.log(await blaguesAPI.Jokes.rancomCategorized(blaguesAPI.Category.DEV));
    console.log(await blaguesAPI.Jokes.fromId(815));

    console.log(await blaguesAPI.Jokes.random({
        disallow: [blaguesAPI.Category.DARK]
    }));

    console.log(await blaguesAPI.Jokes.random({
        disallow: [
            blaguesAPI.Category.BEAUF,
            blaguesAPI.Category.DARK,
            blaguesAPI.Category.LIMIT
        ]
    }));
}
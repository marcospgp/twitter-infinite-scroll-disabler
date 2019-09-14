"use strict";

const getContainer = () => new Promise((resolve) => {
    const x = $('section[aria-labelledby]');

    if (x.length === 0) {
        setTimeout(() => { resolve(getContainer()); }, 100);
        return;
    }

    const y = x.children("div[aria-label]").first().children().first();

    resolve(y);
});

console.log("I'm alive!");

const container = getContainer().then(container => {
    console.log("Got container:");
    console.log(container);
    container.css({
        "max-height": "1200px",
        overflow: "hidden"
    });
});

// Done: limited the size of the tweets container
// Next: Add some bottom margin and add a button that increases its height


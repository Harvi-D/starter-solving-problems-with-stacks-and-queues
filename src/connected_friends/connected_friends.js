const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
    const users = Object.keys(graph);

    if (users.length === 0) {
        return false;
    }

    if (startUser === endUser) {
        return true;
    }

    const enqueued = [startUser];
    const discovered = new Queue;
    discovered.enqueue(startUser);

    while (discovered.first) {
        const user = discovered.dequeue();
        const following = graph[user];

        for (const followedUser of following) {
            if (followedUser === endUser) {
                return true;
            }
            if (!enqueued.includes(followedUser)) {
                enqueued.push(followedUser);
                discovered.enqueue(followedUser);
            }
        }
    }
    return false;
};

module.exports = connected;

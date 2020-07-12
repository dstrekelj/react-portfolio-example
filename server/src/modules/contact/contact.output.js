const { Serializer, Error } = require("jsonapi-serializer");
const uuid = require("uuid").v4;

function failure(error) {
    const errorSerializer = new Error(
        error.inner.map((e) => ({
            id: uuid(),
            status: "422",
            title: e.name,
            detail: e.message,
            meta: {
                name: e.path,
                message: e.message,
            },
        }))
    );

    return errorSerializer;
}

function success() {
    const messageSerializer = new Serializer("messages", {
        pluralizeType: false,
        attributes: ["message"],
    });

    const response = messageSerializer.serialize({
        id: uuid(),
        message: "Your message has been sent!",
    });

    return response;
}

module.exports.success = success;
module.exports.failure = failure;

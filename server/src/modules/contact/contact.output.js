const { Serializer, Error: ErrorSerializer } = require("jsonapi-serializer");
const uuid = require("uuid").v4;

function failure(error) {
    let errorSerializer;

    try {
        if (typeof error === "object" && Array.isArray(error.inner)) {
            errorSerializer = new ErrorSerializer(
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
        } else if (typeof error === "string") {
            errorSerializer = new ErrorSerializer({
                id: uuid(),
                status: "500",
                title: error,
                detail: error,
            });
        } else if (typeof error === "number") {
            errorSerializer = new ErrorSerializer({
                id: uuid(),
                status: "500",
                title: error.toString(),
                detail: error.toString(),
            });
        } else {
            throw new Error("Internal server error");
        }
    } catch (e) {
        errorSerializer = new ErrorSerializer({
            id: uuid(),
            status: "500",
            title: "Internal server error",
            detail: e.toString(),
        });
    }

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

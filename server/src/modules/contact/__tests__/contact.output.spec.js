const output = require("../contact.output");
const { ValidationError } = require("yup");

describe("modules/contact/contact.output", () => {
    describe("failure", () => {
        it("should return serialized error if no error object", () => {
            const result = output.failure();

            expect(result).toHaveProperty("errors");
            expect(result.errors).toEqual(expect.any(Array));
            expect(result.errors).toHaveLength(1);
            expect(result.errors[0]).toHaveProperty("id");
            expect(result.errors[0].id).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("status");
            expect(result.errors[0].status).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("detail");
            expect(result.errors[0].detail).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("title");
            expect(result.errors[0].title).toEqual(expect.any(String));
        });

        it("should return serialized error if error message", () => {
            const result = output.failure("Something went wrong.");

            expect(result).toHaveProperty("errors");
            expect(result.errors).toEqual(expect.any(Array));
            expect(result.errors).toHaveLength(1);
            expect(result.errors[0]).toHaveProperty("id");
            expect(result.errors[0].id).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("status");
            expect(result.errors[0].status).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("detail");
            expect(result.errors[0].detail).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("title");
            expect(result.errors[0].title).toEqual(expect.any(String));
        });

        it("should return serialized error if error number", () => {
            const result = output.failure(1234);

            expect(result).toHaveProperty("errors");
            expect(result.errors).toEqual(expect.any(Array));
            expect(result.errors).toHaveLength(1);
            expect(result.errors[0]).toHaveProperty("id");
            expect(result.errors[0].id).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("status");
            expect(result.errors[0].status).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("detail");
            expect(result.errors[0].detail).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("title");
            expect(result.errors[0].title).toEqual(expect.any(String));
        });

        it("should return serialized error for validation error object", async () => {
            const result = output.failure({
                inner: [
                    {
                        path: "email",
                        name: "validation error",
                        message: "email is a required field",
                    },
                ],
            });

            expect(result).toHaveProperty("errors");
            expect(result.errors).toEqual(expect.any(Array));
            expect(result.errors).toHaveLength(1);
            expect(result.errors[0]).toHaveProperty("id");
            expect(result.errors[0].id).toEqual(expect.any(String));
            expect(result.errors[0]).toHaveProperty("status");
            expect(result.errors[0].status).toEqual("422");
            expect(result.errors[0]).toHaveProperty("detail");
            expect(result.errors[0].detail).toEqual(
                "email is a required field"
            );
            expect(result.errors[0]).toHaveProperty("title");
            expect(result.errors[0].title).toEqual("validation error");
            expect(result.errors[0]).toHaveProperty("meta");
            expect(result.errors[0].meta).toMatchObject({
                name: "email",
                message: "email is a required field",
            });
        });
    });

    describe("success", () => {
        it("should return serialized success message", () => {
            const result = output.success();

            expect(result).toHaveProperty("data");
            expect(result.data).toEqual(expect.any(Object));
            expect(result.data).toHaveProperty("id");
            expect(result.data.id).toEqual(expect.any(String));
            expect(result.data).toHaveProperty("type");
            expect(result.data.type).toEqual("messages");
            expect(result.data).toHaveProperty("attributes");
            expect(result.data.attributes).toMatchObject({
                message: "Your message has been sent!",
            });
        });
    });
});

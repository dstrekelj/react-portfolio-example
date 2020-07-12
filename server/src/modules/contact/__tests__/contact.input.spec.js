const input = require("../contact.input");
const { ValidationError } = require("yup");

describe("modules/contact/contact.input", () => {
    it("should return body if valid", async () => {
        const validInput = {
            email: "john.doe@example.com",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        };

        const result = await Promise.resolve(input.validate(validInput));

        expect(result).toBe(validInput);
    });

    it("should throw error for missing inputs", async () => {
        try {
            await Promise.resolve(input.validate());
        } catch (e) {
            expect(e).toEqual(expect.any(ValidationError));
            expect(e.inner).toHaveLength(2);
            expect(e.inner[0].path).toEqual("email");
            expect(e.inner[0].message).toEqual("email is a required field");
            expect(e.inner[1].path).toEqual("message");
            expect(e.inner[1].message).toEqual("message is a required field");
        }
    });

    it("should throw error for invalid email", async () => {
        try {
            await Promise.resolve(
                input.validate({
                    email: "foo.bar@example",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                })
            );
        } catch (e) {
            expect(e).toEqual(expect.any(ValidationError));
            expect(e.inner).toHaveLength(1);
            expect(e.inner[0].path).toEqual("email");
            expect(e.inner[0].message).toEqual("email must be a valid email");
        }
    });

    it("should throw error for invalid message", async () => {
        try {
            await Promise.resolve(
                input.validate({
                    email: "foo.bar@example.com",
                    message: "Lorem ipsum dolor sit amet",
                })
            );
        } catch (e) {
            expect(e).toEqual(expect.any(ValidationError));
            expect(e.inner).toHaveLength(1);
            expect(e.inner[0].path).toEqual("message");
            expect(e.inner[0].message).toEqual(
                "message must be at least 30 characters"
            );
        }
    });
});

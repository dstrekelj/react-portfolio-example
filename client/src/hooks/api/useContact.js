import { useMutation } from "react-query";

async function postContact(payload) {
    const response = await fetch(`${process.env.API_URL}/API/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/vnd.api+json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    return data;
}

export default function useContact() {
    return useMutation(postContact);
}

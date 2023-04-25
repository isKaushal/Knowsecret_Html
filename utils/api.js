import fetch from "node-fetch";


// const url = "http://192.168.1.239:8080";
const url = "https://api.testntrack.com"

export async function loginAdmin({ email = "", password = "" }) {
    const resp = await fetch(`${url}/api/v1/knowsecret/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: email,
            password: password,
        }),
    });

    const result = await resp.json();
    console.log(result);

    return result;
}

export async function getAllProfiles() {
    const resp = await fetch(`${url}/api/v1/knowsecret/profiles`);
    const result = await resp.json();
    return result;
}

export async function getProfileById(id = "") {
    const resp = await fetch(`${url}/api/v1/knowsecret/profile/${id}`);
    const result = await resp.json();
    return result;
}


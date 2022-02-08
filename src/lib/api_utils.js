const ip = import.meta.env.VITE_BACKEND

let get_user_id = () => {
    let requestOptions = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        redirect: "follow",
    };

    return fetch(`${ip}/users/id`, requestOptions)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('user_id', res.user_id)
            return res
        })
        .catch((error) => console.log(`error ${error}`));
}

const login = (e) => {
    e.preventDefault();
    let username = document.querySelector("#login-username");
    let password = document.querySelector("#login-password");

    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.value, password: password.value }),
        redirect: "follow",
    };

    fetch(`${ip}/accounts/login/`, requestOptions)
        .then((res) => res.json())
        .then(async (res) => {
            if (res["non_field_errors"] !== undefined) {
                alert("Wrong username or password");
                return;
            }
            localStorage.setItem("token", res.access_token);
            await get_user_id();
            alert("logged in!");
            location.reload();

            // let btnOptions = document.querySelector(".options-btn");
            // btnOptions.classList.remove("hidden");
        })
        .catch((error) => alert(`Error ${error}`));
}

const register = (e) => {
    e.preventDefault();

    let username = document.querySelector("#register-username");
    let password1 = document.querySelector("#register-password1");
    let password2 = document.querySelector("#register-password2");
    let email = document.querySelector("#register-email");
    let first_name = document.querySelector("#register-first-name");
    let last_name = document.querySelector("#register-last-name");
    let payload = {
        username: username.value,
        password1: password1.value,
        password2: password2.value,
        email: email.value,
        first_name: first_name.value,
        last_name: last_name.value,
    };
    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
    };

    fetch(`${ip}/accounts/registration/`, requestOptions)
        .then((res) => res.json())
        .then(async (res) => {
            if (res["password1"] !== undefined && res["pass"] !== undefined) {
                alert(res["password2"])
                return;

            }else {
                if (res["password1"] !== undefined) {
                    alert(res["password1"])
                    return;

                }
            }
            if (res["email"] !== undefined) {
                alert(res["email"])
                return;

            }

            if (res["username"] !== undefined) {
                alert(res["username"])
                return;

            }
          
            if (res["non_field_errors"] !== undefined) {
                alert("not Registered");
                return;
            }
            localStorage.setItem("token", res.access_token);
            await get_user_id();
            alert("registered");
            location.reload();
        })
        .catch((error) => alert("Error registering", error));
}

const update = (e) => {

    e.preventDefault();
    let firstnameInput = document.querySelector(".fname-input").value;
    let lastnameInput = document.querySelector(".lname-input").value;
    let emailInput = document.querySelector(".email-input").value;

    let body = {}
    if (firstnameInput != "") {
        body["first_name"] = firstnameInput
    }

    if (lastnameInput != "") {
        body["last_name"] = lastnameInput
    }

    if (emailInput != "") {
        body["email"] = emailInput
    }

    if (Object.keys(body).length === 0) {
        alert("Nothing to modify!")
        return
    }

    let requestOptions = {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        redirect: "follow",
    };

    let id = localStorage.getItem("user_id")
    fetch(`${ip}/users/${id}/`, requestOptions)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        .catch((error) => alert(`Error ${error}`));
}

const delete_ = (e) => {
    e.preventDefault();
    let requestOptions = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        redirect: "follow",
    };

    let id = localStorage.getItem("user_id")
    fetch(`${ip}/users/${id}/`, requestOptions)
        .then((res) => res.json())
        .then((res) => {
            if (res.code == "token_not_valid") {
                alert("your token has expired, login and try again")
            }
        })
        .catch((error) => alert(`Error ${error}`));
}

const getProducts = () => {

    let requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
    };

    return fetch(`${ip}/products/`, requestOptions)
        .then((res) => res.json())
        .catch((error) => console.log(`error ${error}`));
}
const getProduct = (id) => {

    let requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
    };

    return fetch(`${ip}/products/${id}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => console.log(`error ${error}`));
}

const buy = (id) => {

    let requestOptions = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: id }),
        redirect: "follow",
    };

    console.log(`${id}`)
    console.log(`${ip}/users/buy/`)
    return fetch(`${ip}/users/buy/`, requestOptions)
        .then((res) => res.json())
        .then((res) => {

            if (res.code == "token_not_valid") {
                alert("your token has expired, login and try again")
            }
            else {

                alert("buy completed")
            }
        })
        .catch((error) => console.log(`error ${error}`));
}
export { login, register, update, delete_, getProducts, getProduct, get_user_id, buy }



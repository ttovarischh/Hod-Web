import { apiUrl } from "../const";

export async function getCurrentUser() {
    const value = localStorage.getItem("@AuthData");
    return JSON.parse(value!);
}

export async function signUp(params: { email: string; password: string; password_confirmation: string;}) {
    try {
        const response = await fetch(apiUrl + "signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              email: params.email,
              password: params.password,
              password_confirmation: params.password_confirmation,
            },
          }),
        });
        const json = await response.json();
        console.log(json);
        if (typeof json["user"] !== "undefined") {
        localStorage.setItem("@AuthData", JSON.stringify(json));
          alert(
            'You are successfully signed up as a user "' + json.user.email + '"'
          );
        } else if (typeof json["message"] !== "undefined") {
          alert(json.message);
        } else console.log(json);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Signup");
      }
}

// export async function getCurrentUser(): Promise<User> {
//   const response = await redaxios.get("/api/user");
//   return response.data.data;
// }

// export async function signUp(params: { email: string; name: string; password: string;}): Promise<User> {
//   const response = await redaxios.post("/api/user", { user: params });

//   return response.data.data;
// }

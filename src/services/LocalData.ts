function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export namespace LocalData {
  export function clearAll() {
    window.localStorage.clear();
    deleteAllCookies();
  }

  export function setAccessToken(token: string) {
    // document.cookie = `accessToken=${token}`;
    window.localStorage.setItem("accessToken", token);
  }

  export function setRefreshToken(token: string) {
    // document.cookie = `refreshToken=${token}`;
    window.localStorage.setItem("refreshToken", token);
  }

  // export function setUser(user: User) {
  //   window.localStorage.setItem("user", JSON.stringify(user));
  // }

  export function getUser() {
    const user = window.localStorage.getItem("user");
    console.log(user);
    return undefined;
    // return user ? JSON.parse(user) : undefined;
  }
}
export default LocalData;

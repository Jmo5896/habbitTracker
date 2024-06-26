// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // console.log(decoded);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  isAdmin() {
    const currentToken =
      localStorage.getItem("id_token") &&
      decode(localStorage.getItem("id_token"));
    return currentToken ? currentToken.data.admin : false;
  }

  login(idToken, navigate, setStatus) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
    setStatus(this.loggedIn());
    navigate("/dashboard");
  }

  logout(navigate, setStatus) {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    setStatus(this.loggedIn());
    navigate("/");
  }
}

export default new AuthService();

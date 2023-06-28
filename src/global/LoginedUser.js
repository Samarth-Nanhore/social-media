const encodedToken = localStorage.getItem("token");
const userDetail = JSON.parse(localStorage.getItem("foundUser"));

export { encodedToken, userDetail };

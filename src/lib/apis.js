const base_url = "http://localhost:8000/api/v1/auth/";

export const apis = {
  register: `${base_url}register`,
  verifyEmail: `${base_url}verify-email`,
  login: `${base_url}login`,
  profile: `${base_url}profile`,
  requestPasswordReset: `${base_url}request-password-reset`,
  confirmPasswordReset: `${base_url}confirm-password-reset/<uidb64>/<token>`,
  setNewPassword: `${base_url}set-new-password`,
  logout: `${base_url}logout`,
  googleLogin: `${base_url}google-login`
};

export async function getRequest({ endpoint, errorCallback, successCallback }) {
  await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          successCallback(res);
        });
      } else {
        response.json().then((res) => {
          errorCallback(-1, res);
        });
      }
    })
    .catch((error) => {
      errorCallback(0, error);
    });
}

export async function postRequest({
  endpoint,
  method,
  payload,
  errorCallback,
  successCallback,
}) {
  await fetch(endpoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        successCallback(response.body);
      } else {
        errorCallback(-1, response.body);
      }
    })
    .catch((error) => {
      errorCallback(0, error);
    });
}

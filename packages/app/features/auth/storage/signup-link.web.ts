// https://github.com/showtime-xyz/showtime-frontend/blob/ee30a3123adbc0c78cdb25008592b496e46bcf17/packages/app/lib/access-token.web.ts
// Stores the email the user want the signup link to be sent to

const SIGNUP_LINK_EMAIL_KEY = "signup-link-email";

export async function setSignupLinkEmail(email: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SIGNUP_LINK_EMAIL_KEY, email);
  }
}

export async function getSignupLinkEmail() {
if (typeof window !== "undefined") {
    return localStorage.getItem(SIGNUP_LINK_EMAIL_KEY);
  }
}

export async function deleteSignupLinkEmail() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SIGNUP_LINK_EMAIL_KEY);
  }
}

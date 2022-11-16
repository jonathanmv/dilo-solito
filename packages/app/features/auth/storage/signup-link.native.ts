// https://github.com/showtime-xyz/showtime-frontend/blob/ee30a3123adbc0c78cdb25008592b496e46bcf17/packages/app/lib/access-token.ts
// Stores the email the user want the signup link to be sent to

import AsyncStorage from '@react-native-async-storage/async-storage';

const SIGNUP_LINK_EMAIL_KEY = "signup-link-email";

export async function setSignupLinkEmail(token: string) {
  return AsyncStorage.setItem(SIGNUP_LINK_EMAIL_KEY, token);
}

export async function getSignupLinkEmail() {
  return AsyncStorage.getItem(SIGNUP_LINK_EMAIL_KEY);
}

export async function deleteSignupLinkEmail() {
  return AsyncStorage.removeItem(SIGNUP_LINK_EMAIL_KEY);
}

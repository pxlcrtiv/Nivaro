# Development Login System Instructions

This document explains the simple password protection system added to the website for development purposes.

## How it works

1. When visiting the site, users are redirected to `login.html` unless they've already authenticated.
2. The login page uses a simple JavaScript check against a hardcoded password.
3. Upon successful login, a flag is stored in `localStorage` to remember the authentication status.
4. All other pages check for this flag and redirect to login if it's not present.

## Current Password

The default password is: `development123`

You can change this in the `login.html` file by modifying the `correctPassword` variable.

## How to Remove the Login System (After Development)

To revert the site to its normal state, follow these steps:

1. **Remove the authentication check script** from `index.html`:
   - Open `index.html`
   - Delete the script block that contains: `if (localStorage.getItem('siteAuthenticated') !== 'true') { window.location.href = 'login.html'; }`

2. **Remove the login page exception** from `firebase.json`:
   - Open `firebase.json`
   - Delete the rewrite rule for `login.html`

3. **Delete the login file**:
   - Remove `login.html` from the project

4. **Delete this instructions file** (optional)

After completing these steps, the website will function normally without any password protection.

## Additional Notes

- This is a very basic client-side authentication system and should not be used for production security.
- It's designed solely for development purposes to prevent unauthorized access to an incomplete website.
- The authentication status is stored in the browser's localStorage and will persist until cleared or the browser data is deleted.
// Set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax; Secure`;
}

// Read a cookie
function getCookie(name) {
  const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
  return match ? decodeURIComponent(match.split('=')[1]) : null;
}

// Show banner only if the user hasn't chosen yet
window.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  if (!getCookie('cookie_consent')) {
    banner.style.display = 'block';
  }

  document.getElementById('accept-cookies').addEventListener('click', () => {
    setCookie('cookie_consent', 'accepted', 365);
    setCookie('sample_cookie', 'HelloCookie', 30); // sample cookie
    banner.style.display = 'none';
  });

  document.getElementById('decline-cookies').addEventListener('click', () => {
    setCookie('cookie_consent', 'declined', 365);
    banner.style.display = 'none';
  });
});

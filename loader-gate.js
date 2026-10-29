// Runs before the page paints: skip the intro loader after the first page view in a visit.
try {
  if (sessionStorage.getItem('aa-intro-seen')) document.documentElement.classList.add('aa-intro-seen');
  sessionStorage.setItem('aa-intro-seen', '1');
} catch (e) { /* storage blocked: show the loader every time */ }

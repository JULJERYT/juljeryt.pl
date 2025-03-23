if (document.startViewTransition) {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.href;
  
        document.startViewTransition(() => {
          return fetch(url)
            .then(response => response.text())
            .then(html => {
              document.documentElement.innerHTML = html;
              window.history.pushState({}, '', url);
            });
        });
      });
    });
  } else {
    console.warn('View Transitions API is not supported in this browser.');
  }
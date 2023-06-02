window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted')) {
      alert('Form submitted successfully!');
    }
  });
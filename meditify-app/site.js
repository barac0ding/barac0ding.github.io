document.addEventListener("DOMContentLoaded", () => {
  const email = String.fromCharCode(
    112, 114, 105, 109, 101, 95, 108, 97, 98, 95, 115, 116, 117, 100, 105, 111,
    64, 105, 99, 108, 111, 117, 100, 46, 99, 111, 109
  );

  document.querySelectorAll("[data-email-slot]").forEach((node) => {
    node.innerHTML = `<a class="mail-link button" href="mailto:${email}">${email}</a>`;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".info-card, .work-card, .contact-panel, .hero-card").forEach((element) => {
  observer.observe(element);
});

const form = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(form).get("name") || "there";
    formMessage.textContent = `Thanks, ${name}. We will be in touch soon.`;
    form.reset();
  });
}

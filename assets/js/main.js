(function () {
  /*=====================================
    Sticky Navbar
  ======================================= */
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-to-top button
    const backToTop = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Smooth scrolling for navigation links
  const pageLinks = document.querySelectorAll(".page-scroll");

  pageLinks.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // Section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  // Close navbar when clicking a link
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // FAQ Toggle Logic
  document.addEventListener("DOMContentLoaded", function () {
    const faqToggles = document.querySelectorAll(".faq-toggle");

    faqToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const contentId = toggle.getAttribute("data-id");
        const content = document.getElementById(contentId);
        const icon = toggle.querySelector("i");

        if (content) {
          content.classList.toggle("hidden");
          icon.classList.toggle("rotate-180");
        }

        // Close other FAQs when opening a new one
        faqToggles.forEach((otherToggle) => {
          const otherContentId = otherToggle.getAttribute("data-id");
          if (otherContentId !== contentId) {
            const otherContent = document.getElementById(otherContentId);
            if (otherContent) {
              otherContent.classList.add("hidden");
              otherToggle.querySelector("i").classList.remove("rotate-180");
            }
          }
        });
      });
    });
  });

  // ======= Form Validation and Submission ======= //
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameField   = document.getElementById("name");
    const emailField  = document.getElementById("email");
    const phoneField  = document.getElementById("phone");
    const messageField= document.getElementById("message");
    const formMessage = document.querySelector(".form-message");

    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        // Limpiar mensajes previos
        formMessage.innerHTML = "";
        formMessage.style.color = "red";

        // Expresiones regulares básicas
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9()+\- ]{7,20}$/;  // Permite dígitos y algunos símbolos típicos

        // Variables para verificar errores
        let hasError = false;
        let errors = [];

        // Validar nombre (requerido, mínimo 3 caracteres)
        if (!nameField.value.trim() || nameField.value.trim().length < 3) {
          hasError = true;
          errors.push("Por favor, ingresa tu nombre (mínimo 3 caracteres).");
        }

        // Validar email
        if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
          hasError = true;
          errors.push("Por favor, ingresa un correo electrónico válido.");
        }

        // Validar teléfono
        if (!phoneField.value.trim() || !phoneRegex.test(phoneField.value.trim())) {
          hasError = true;
          errors.push("Por favor, ingresa un número de teléfono válido (solo dígitos y/o símbolos +, -, ()).");
        }

        // Validar mensaje (requerido, mínimo 10 caracteres)
        if (!messageField.value.trim() || messageField.value.trim().length < 10) {
          hasError = true;
          errors.push("Por favor, ingresa un mensaje con al menos 10 caracteres.");
        }

        // Si hay errores, prevenir envío y mostrar mensajes
        if (hasError) {
          e.preventDefault();
          let errorText = errors.join("<br>");
          formMessage.innerHTML = errorText;
        } else {
          // Sin errores, puede enviar el formulario
          // Opcional: Mostrar un mensaje de "Procesando..." o similar
        }
      });
    }
  });
})();

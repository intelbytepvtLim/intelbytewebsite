
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.main-navbar');
    const scrollTrigger = 100; // Adjust this value as needed

    if (window.scrollY > scrollTrigger) {
      navbar.classList.add('fixed-navbar');
    } else {
      navbar.classList.remove('fixed-navbar');
    }
  });


  // On click, mark the clicked nav-link as active and remove from others
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Same for dropdown items
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
 const form = document.getElementById("contactForm");
  const message = document.getElementById("responseMessage");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.textContent = "";
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result.success) {
        message.textContent = "✅ Message sent successfully!";
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "❌ Failed to send message. Try again.";
        message.style.color = "red";
      }
    } catch (error) {
      message.textContent = "❌ Network error. Please try later.";
      message.style.color = "red";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send";
  });

  //  const form = document.getElementById("contactForm");
  // const message = document.getElementById("responseMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await res.json();

    if (result.success) {
      message.textContent = "✅ Message sent successfully!";
      message.style.color = "green";
      form.reset();
    } else {
      message.textContent = "❌ Failed to send message. Try again.";
      message.style.color = "red";
    }
  });

  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


   const monthlyBtn = document.getElementById('monthlyBtn');
  const yearlyBtn = document.getElementById('yearlyBtn');
  const prices = document.querySelectorAll('.price');

  monthlyBtn.addEventListener('click', () => {
    prices.forEach(p => {
      p.textContent = p.dataset.month;
    });
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
  });

  yearlyBtn.addEventListener('click', () => {
    prices.forEach(p => {
      p.textContent = p.dataset.year;
    });
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
  });


// ========== Nav Link Active Toggle ==========
document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Highlight active dropdown items
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ========== Tab Switching for WebDevelopment Page ==========
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  if (tabs.length > 0 && contents.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('active');
      });
    });
  }

  // ========== Web3Forms Contact Form Submission ==========
  const form = document.getElementById("contactForm");
  const message = document.getElementById("responseMessage");
  const submitBtn = document.getElementById("submitBtn");

  if (form && message && submitBtn) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      message.textContent = "";
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      const formData = new FormData(form);

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await res.json();

        if (result.success) {
          message.textContent = "✅ Message sent successfully!";
          message.style.color = "green";
          form.reset();
        } else {
          message.textContent = "❌ Failed to send message. Try again.";
          message.style.color = "red";
        }
      } catch (error) {
        message.textContent = "❌ Network error. Please try later.";
        message.style.color = "red";
      }

      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    });
  }
});


// digitalmarketing

  document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
      const percent = parseInt(circle.dataset.percentage);
      const angle = (percent / 100) * 360;
      let current = 0;
      const percentageText = circle.querySelector('.percentage');

      const interval = setInterval(() => {
        if (current >= percent) clearInterval(interval);
        else {
          current++;
          const currentAngle = (current / 100) * 360;
          circle.style.background = `conic-gradient(#28a745 ${currentAngle}deg, #e9ecef ${currentAngle}deg)`;
          percentageText.textContent = `${current}%`;
        }
      }, 20);
    });
  });

  // package

       // Initialize with monthly view
            document.querySelector('.validity-option.active').click();
            
            // Download brochure buttons
            const downloadButtons = document.querySelectorAll('.btn-outline');
            downloadButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Brochure download will be available soon!');
                });
            });
      
  

            //app development

  const steps = document.querySelectorAll('.waterfall-step');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('animate__fadeInUp');
    });
  }, { threshold: 0.1 });

  steps.forEach(step => observer.observe(step));

 
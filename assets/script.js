// بسيط: فتح/إغلاق قائمة الموبايل، تنظيف الفورم، وتأكيد إرسال بسيط
document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });
  }

  const clearBtn = document.getElementById("clearBtn");
  const contactForm = document.getElementById("contactForm");
  if (clearBtn && contactForm) {
    clearBtn.addEventListener("click", () => contactForm.reset());
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // بسيط: لا نمنع الإرسال لأن action=mailto، لكن نعرض تأكيد للمستخدم
      const name = contactForm.querySelector("[name=name]").value || "";
      if (!confirm(`سيتم إرسال رسالة بالاسم: ${name}\nهل ترغب بالمتابعة؟`)) {
        e.preventDefault();
      }
    });
  }
});

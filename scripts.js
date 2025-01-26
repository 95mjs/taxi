const translations = {
  en: {
      "page-title": "Main Page",
      "main-text": "Here is the Airport Taxi Booking"
  },
  ar: {
      "page-title": "الصفحة الرئيسية",
      "main-text": "هنا حجز تكسي المطار"
  }
};

// تغيير اللغة بناءً على اللغة
function changeLanguage(language) {
  document.getElementById("page-title").textContent = translations[language]["page-title"];
  document.getElementById("main-text").textContent = translations[language]["main-text"];
}

// تغيير اللغة بشكل مستمر ودوري
function autoChangeLanguage() {
  let currentLanguage = 'ar'; // بدأ اللغة العربية
  setInterval(() => {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar'; // التبديل بين العربية والإنجليزية
    changeLanguage(currentLanguage);
  }, 3000); // التبديل كل 3 ثوانٍ (يمكنك تعديل الوقت حسب رغبتك)
}

// استدعاء الدالة لتغيير اللغة بشكل مستمر عند تحميل الصفحة
window.onload = autoChangeLanguage;

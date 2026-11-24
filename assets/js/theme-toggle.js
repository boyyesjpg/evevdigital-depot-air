/**
 * EvEvDigital Dual Theme Engine (Dark & Light Mode + Anti-FOUC Sync)
 * Sektor 09: Depot Air Minum Isi Ulang & Galon Delivery (evevdepot)
 */
(function () {
  var STORAGE_KEY_PRIMARY = "evev_theme";
  var STORAGE_KEY_LEGACY = "evevdepot_theme";

  function getSavedTheme() {
    try {
      var saved =
        localStorage.getItem(STORAGE_KEY_PRIMARY) ||
        localStorage.getItem(STORAGE_KEY_LEGACY);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (e) {
      // Abaikan jika storage dibatasi browser
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY_PRIMARY, theme);
      localStorage.setItem(STORAGE_KEY_LEGACY, theme);
    } catch (e) {
      // Abaikan jika storage dibatasi browser
    }
  }

  function updateToggleUI(theme) {
    var isDark = theme === "dark";
    var buttons = document.querySelectorAll(
      "#theme-toggle, #themeToggleBtn, [data-theme-toggle]"
    );

    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
      btn.setAttribute(
        "title",
        isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"
      );
      btn.setAttribute(
        "aria-label",
        isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"
      );
      var icon = btn.querySelector("i");
      if (icon) {
        icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
      }
    });
  }

  function applyThemeMode(theme, options) {
    var mode = theme === "dark" ? "dark" : "light";
    var opts = options || {};
    var root = document.documentElement;

    if (opts.disableTransition) {
      root.classList.add("no-theme-transition");
    }

    root.setAttribute("data-theme", mode);
    if (document.body) {
      document.body.classList.toggle("dark-mode", mode === "dark");
    }

    if (opts.persist !== false) {
      saveTheme(mode);
    }

    updateToggleUI(mode);

    if (opts.disableTransition) {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          root.classList.remove("no-theme-transition");
        });
      });
    }
  }

  function toggleThemeMode() {
    var current =
      document.documentElement.getAttribute("data-theme") || getSavedTheme();
    var next = current === "dark" ? "light" : "dark";
    applyThemeMode(next, { persist: true });
    return next;
  }

  // Terapkan tema sedini mungkin untuk mencegah kedipan (FOUC)
  var initialTheme = getSavedTheme();
  applyThemeMode(initialTheme, { persist: false, disableTransition: true });

  document.addEventListener("DOMContentLoaded", function () {
    applyThemeMode(getSavedTheme(), { persist: false, disableTransition: true });

    var buttons = document.querySelectorAll(
      "#theme-toggle, #themeToggleBtn, [data-theme-toggle]"
    );
    buttons.forEach(function (btn) {
      if (btn.getAttribute("data-theme-bound") === "true") return;
      // Jika sudah memiliki inline onclick="toggleThemeMode()", hindari double toggle
      var inlineClick = btn.getAttribute("onclick") || "";
      if (inlineClick.indexOf("toggleThemeMode") === -1) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          toggleThemeMode();
        });
      }
      btn.setAttribute("data-theme-bound", "true");
    });
  });

  // Expose secara global agar kompatibel dengan pemanggilan dari HTML/JS lain
  window.applyThemeMode = applyThemeMode;
  window.toggleThemeMode = toggleThemeMode;
})();

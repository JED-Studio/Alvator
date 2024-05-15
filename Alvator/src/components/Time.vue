<template>
    <div class="flex">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span></span>
        <span></span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const initUserTheme = this.getTheme() || this.getMediaPreference();
      this.setTheme(initUserTheme);
    },
  
    data() {
      return {
        userTheme: "light-theme",
      };
    },
  
    methods: {
      toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
          this.setTheme("dark-theme");
        } else {
          this.setTheme("light-theme");
        }
      },
  
      getTheme() {
        return localStorage.getItem("user-theme");
      },
  
      setTheme(theme) {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
      },
  
      getMediaPreference() {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
          return "dark-theme";
        } else {
          return "light-theme";
        }
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .switch-checkbox {
    display: none;
  }
  
  .switch-label {
    align-items: center;
    background: var(--text-primary-color);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    border-radius: var(--element-size);
    cursor: pointer;
    display: flex;
    font-size: calc(var(--element-size) * 0.3);
    height: 30px;
    position: relative;
    padding: calc(var(--element-size) * 0.1);
    transition: background 0.5s ease;
    justify-content: center;
    width: var(--element-size);
    z-index: 1;
  }
  
  .switch-toggle {
    
    position: absolute;
    content: url(/public/moon-svgrepo-com.svg);
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: 2,5px;
    left: 0px;
    height: 22px;
    width: 22px;
    transform: translateX(3px);
    transition: transform 0.3s ease, background-color 0.5s ease;
  }
  
  .switch-toggle-checked {
    transform: translateX(37px) !important;
  }
  </style>
  
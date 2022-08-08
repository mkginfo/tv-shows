<template>
  <div class="container">
    <span id="spinner"></span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-height: 200px;
  justify-content: center;
  align-items: center;
}

#spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #d2d2d2;
  border-radius: 50%;
  border-top-color: var(--color-background-alternative);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>

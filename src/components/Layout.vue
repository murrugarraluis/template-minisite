<template>
  <main class="layout d-flex flex-nowrap w-100">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style="width: 280px"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <!--        <svg class="bi pe-none me-2" width="40" height="32">-->
        <!--          <use xlink:href="#bootstrap" />-->
        <!--        </svg>-->
        <span class="fs-4">EMEMSA</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active text-start" aria-current="page">
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#home" />-->
            <!--            </svg>-->
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white text-start">
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#speedometer2" />-->
            <!--            </svg>-->
            Gestión Imagenes
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white text-start">
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#speedometer2" />-->
            <!--            </svg>-->
            Gestión Stock
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white text-start">
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#speedometer2" />-->
            <!--            </svg>-->
            Gestión Precios
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white text-start">
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#speedometer2" />-->
            <!--            </svg>-->
            Gestión Cantidad Vendida
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

    <div class="b-example-divider b-example-vr"></div>
    <div class="w-100 p-4">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "LayoutComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  min-height: 100vh;
}
.dropdown-toggle {
  outline: 0;
}
.btn-toggle-nav a {
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}
</style>

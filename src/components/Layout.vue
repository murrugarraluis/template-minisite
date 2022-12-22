<template>
  <main class="layout d-flex flex-nowrap w-100">
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style="width: 280px"
    >
      <a
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        @click="redirect('/')"
      >
        <!--        <svg class="bi pe-none me-2" width="40" height="32">-->
        <!--          <use xlink:href="#bootstrap" />-->
        <!--        </svg>-->
        <span class="fs-4">EMEMSA</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a
            class="nav-link text-white text-start"
            :class="{ active: page === '/' }"
            @click="redirect('/')"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
              />
              <path
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"
              />
            </svg>
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#home" />-->
            <!--            </svg>-->
            Home
          </a>
        </li>
        <li>
          <a
            class="nav-link text-white text-start"
            :class="{ active: page === '/gestion-imagenes' }"
            @click="redirect('/gestion-imagenes')"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-image-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"
              />
            </svg>
            <!--            <svg class="bi pe-none me-2" width="16" height="16">-->
            <!--              <use xlink:href="#speedometer2" />-->
            <!--            </svg>-->
            Gestión Imagenes
          </a>
        </li>
        <li>
          <a
            class="nav-link text-white text-start"
            :class="{ active: page === '/gestion-stock' }"
            @click="redirect('/gestion-stock')"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard2-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
              />
              <path
                d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"
              />
            </svg>
            Gestión Stock
          </a>
        </li>
        <li>
          <a
            class="nav-link text-white text-start"
            :class="{ active: page === '/gestion-precios' }"
            @click="redirect('/gestion-precios')"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-currency-exchange me-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"
              />
            </svg>
            Gestión Precios
          </a>
        </li>
        <li>
          <a
            class="nav-link text-white text-start"
            :class="{ active: page === '/gestion-cantidad-vendida' }"
            @click="redirect('/gestion-cantidad-vendida')"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag-check-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
            Cantidad Vendida
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
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" @click="logout" style="cursor: pointer"
              >Sign out</a
            >
          </li>
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
import AuthService from "@/services/AuthService";

export default {
  name: "LayoutComponent",
  data() {
    return {
      page: "/",
      authService: null,
    };
  },
  created() {
    this.authService = new AuthService();
  },
  mounted() {
    this.page = this.$route.fullPath;
  },
  methods: {
    redirect(path) {
      this.page = path;
      this.$router.push({ path: path });
    },
    logout() {
      this.authService.logout().then((res) => {
        if (res) {
          localStorage.removeItem("token");
          this.$router.push({ name: "login" });
        }
      });
    },
  },
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

<template>
  <div id="header">
    <header
      class="
        bg-primary
        inline-block
        md:flex md:justify-between
        w-full
        top-0
        left-0
        z-10
        items-center
        py-3
        md:py-4
        lg:px-[120px]
        font-sen
      "
    >
      <div
        class="
          px-4
          text-white
          flex
          justify-between
          border-b border-blue-900
          md:border-none
        "
      >
        <div class="flex items-center py-2">
          <img
            src="@/assets/img/logo-putih.png"
            alt="logo senada"
            class="w-10"
          />
        </div>
        <button class="md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>

      <nav id="nav-menu" class="pt-3 md:pt-0">
        <ul class="md:flex md:space-x-3 block px-4 md:px-0 md:py-0">
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            <nuxt-link to="/">
              <a
                href="#"
                class="
                  py-2
                  w-full
                  rounded-lg
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Beranda</a
              >
            </nuxt-link>
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            <a
              href="#"
              class="
                py-2
                w-full
                rounded-lg
                text-white text-sm
                md:text-base md:px-4
              "
              >Pelatihan</a
            >
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            <nuxt-link to="/lowongan-kerja">
              <span
                class="
                  py-2
                  w-full
                  rounded-lg
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Lowongan Kerja</span
              >
            </nuxt-link>
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            <nuxt-link to="/jobfair">
              <span
                class="
                  py-2
                  w-full
                  rounded-lg
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Job Fair</span
              >
            </nuxt-link>
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            <a
              href="#"
              class="
                py-2
                w-full
                rounded-lg
                text-white text-sm
                md:text-base md:px-4
              "
              >Perusahaan</a
            >
          </li>
        </ul>
      </nav>
      <div class="px-4 block md:flex md:flex-shrink-0 md:space-x-2">
        <div class="my-1 md:my-0">
          <button
            class="
              py-2
              px-4
              w-full
              md:pr-2
              text-white text-sm
              md:text-base
              hover:shadow-xl hover:outline hover:outline-1 hover:outline-white
              rounded-lg
            "
          >
            Log In
          </button>
        </div>
        <div>
          <button
            class="
              py-2
              px-4
              bg-secondary
              w-full
              rounded-lg
              text-white text-sm
              md:text-base
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
}
</script>
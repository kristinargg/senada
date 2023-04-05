<template>
  <div id="header">
    <nav
      class="bg-primary border-primary sm:px-4 py-2.5 dark:bg-primary px-4 lg:px-[120px] font-sen"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <nuxt-link to="/" class="flex items-center">
          <img
            src="@/assets/img/logo-putih.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </nuxt-link>
        <div class="flex md:order-2 items-center justify-between">
          <div class="hidden md:block cursor-pointer">
            <nuxt-link to="/wishlist/" class="text-white">
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
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="my-1 md:my-0 flex items-center">
            <button
              class="hidden md:block py-2 ml-5 md:ml-1 lg:ml-5 px-4 md:px-2 lg:px-4 w-full bg-secondary text-white text-sm md:text-sm hover:shadow-xl hover:outline hover:outline-1 hover:outline-white rounded-lg"
            >
              <a href="https://kemnaker.go.id/"> Log In </a>
            </button>
          </div>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 rounded dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            @click="isOpen = !isOpen"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="navbar-cta"
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 md:p-4 lg:p-4 mt-4 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-base text-white"
          >
            <li
              class="py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/">
                <span class="block py-2 pl-3 pr-4 md:p-0" aria-current="page">
                  Beranda
                </span>
              </nuxt-link>
            </li>
            <li
              class="py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/pelatihan">
                <span class="block py-2 pl-3 pr-4 md:p-0">Pelatihan</span>
              </nuxt-link>
            </li>
            <li
              class="py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/lowongan-kerja">
                <span class="block py-2 pl-3 pr-4 md:p-0">Lowongan Kerja</span>
              </nuxt-link>
            </li>
            <li
              class="py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/jobfair">
                <span class="block py-2 pl-3 pr-4 md:p-0">Job Fair</span>
              </nuxt-link>
            </li>
            <li
              class="py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/perusahaan">
                <span class="block py-2 pl-3 pr-4 md:p-0">Perusahaan</span>
              </nuxt-link>
            </li>
            <li
              class="md:hidden py-2 px-4 hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg"
            >
              <nuxt-link to="/wishlist">
                <span class="block py-2 pl-3 pr-4 md:p-0">Wish List</span>
              </nuxt-link>
            </li>
            <li
              class="md:hidden hover:shadow-xl hover:outline hover:outline-1 hover:outline-white hover:rounded-lg bg-secondary rounded-md font-bold text-center"
            >
              <a href="https://kemnaker.go.id/">
                <span class="block py-2 pl-3 pr-4 md:p-0">Log in</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
<template>
  <div id="header">
    <nav
      class="
        bg-primary
        border-primary
        sm:px-4
        py-2.5
        dark:bg-primary
        px-4
        lg:px-[120px]
        font-sen
      "
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
          <div
            class="hidden md:block cursor-pointer"
            @click="isOpen === !isOpen"
          >
            <nuxt-link to="/wishlist" class="text-white">
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
            <!-- <div
              v-if="isOpen"
              id="dropdownNotification"
              class="
                z-20
                hidden
                w-full
                max-w-sm
                bg-white
                divide-y divide-gray-100
                rounded-lg
                shadow
                dark:bg-gray-800 dark:divide-gray-700
              "
              aria-labelledby="dropdownNotificationButton"
            >
              <div
                class="
                  block
                  px-4
                  py-2
                  font-medium
                  text-center text-gray-700
                  rounded-t-lg
                  bg-gray-50
                  dark:bg-gray-800 dark:text-white
                "
              >
                Notifications
              </div>
              <div class="divide-y divide-gray-100 dark:divide-gray-700">
                <a
                  href="#"
                  class="
                    flex
                    px-4
                    py-3
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full w-11 h-11"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    <div
                      class="
                        absolute
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        ml-6
                        -mt-5
                        bg-blue-600
                        border border-white
                        rounded-full
                        dark:border-gray-800
                      "
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                        ></path>
                        <path
                          d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-full pl-3">
                    <div
                      class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                    >
                      New message from
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >Jese Leos</span
                      >: "Hey, what's up? All set for the presentation?"
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="
                    flex
                    px-4
                    py-3
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full w-11 h-11"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Joseph image"
                    />
                    <div
                      class="
                        absolute
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        ml-6
                        -mt-5
                        bg-gray-900
                        border border-white
                        rounded-full
                        dark:border-gray-800
                      "
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-full pl-3">
                    <div
                      class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                    >
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >Joseph Mcfall</span
                      >
                      and
                      <span class="font-medium text-gray-900 dark:text-white"
                        >5 others</span
                      >
                      started following you.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="
                    flex
                    px-4
                    py-3
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full w-11 h-11"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                    <div
                      class="
                        absolute
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        ml-6
                        -mt-5
                        bg-red-600
                        border border-white
                        rounded-full
                        dark:border-gray-800
                      "
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-full pl-3">
                    <div
                      class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                    >
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >Bonnie Green</span
                      >
                      and
                      <span class="font-medium text-gray-900 dark:text-white"
                        >141 others</span
                      >
                      love your story. See it and view more stories.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="
                    flex
                    px-4
                    py-3
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full w-11 h-11"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Leslie image"
                    />
                    <div
                      class="
                        absolute
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        ml-6
                        -mt-5
                        bg-green-400
                        border border-white
                        rounded-full
                        dark:border-gray-800
                      "
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-full pl-3">
                    <div
                      class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                    >
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >Leslie Livingston</span
                      >
                      mentioned you in a comment:
                      <span class="font-medium text-blue-500" href="#"
                        >@bonnie.green</span
                      >
                      what do you say?
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      1 hour ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="
                    flex
                    px-4
                    py-3
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                  "
                >
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full w-11 h-11"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Robert image"
                    />
                    <div
                      class="
                        absolute
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        ml-6
                        -mt-5
                        bg-purple-500
                        border border-white
                        rounded-full
                        dark:border-gray-800
                      "
                    >
                      <svg
                        class="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-full pl-3">
                    <div
                      class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                    >
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >Robert Brown</span
                      >
                      posted a new video: Glassmorphism - learn how to implement
                      the new design trend.
                    </div>
                    <div class="text-xs text-blue-600 dark:text-blue-500">
                      3 hours ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                class="
                  block
                  py-2
                  text-sm
                  font-medium
                  text-center text-gray-900
                  rounded-b-lg
                  bg-gray-50
                  hover:bg-gray-100
                  dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white
                "
              >
                <div class="inline-flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  View all
                </div>
              </a>
            </div> -->
          </div>
          <div class="my-1 md:my-0 flex items-center">
            <a href="https://kemnaker.go.id/">
              <button
                class="
                  hidden
                  md:block
                  py-2
                  ml-5
                  md:ml-1
                  lg:ml-5
                  px-4
                  md:px-2
                  lg:px-4
                  w-full
                  bg-secondary
                  text-white text-sm
                  md:text-sm
                  hover:shadow-xl
                  hover:outline
                  hover:outline-1
                  hover:outline-white
                  rounded-lg
                "
              >
                Log In
              </button>
            </a>
          </div>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              text-sm text-gray-500
              md:hidden
              focus:outline-none focus:ring-2 focus:ring-gray-200
              rounded
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
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
          class="
            items-center
            justify-between
            hidden
            w-full
            md:flex md:w-auto md:order-1
          "
        >
          <ul
            class="
              flex flex-col
              p-4
              md:p-4
              lg:p-4
              mt-4
              md:flex-row md:space-x-2
              lg:space-x-8
              md:mt-0 md:text-sm md:font-medium
              lg:text-base
              text-white
            "
          >
            <li
              class="
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/">
                <p class="block py-2 pl-3 pr-4 md:p-0" aria-current="page">
                  Beranda
                </p>
              </nuxt-link>
            </li>
            <li
              class="
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/pelatihan">
                <p class="block py-2 pl-3 pr-4 md:p-0">Pelatihan</p>
              </nuxt-link>
            </li>
            <li
              class="
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/lowongan-kerja">
                <p class="block py-2 pl-3 pr-4 md:p-0">Lowongan Kerja</p>
              </nuxt-link>
            </li>
            <li
              class="
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/jobfair">
                <p class="block py-2 pl-3 pr-4 md:p-0">Job Fair</p>
              </nuxt-link>
            </li>
            <li
              class="
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/perusahaan">
                <p class="block py-2 pl-3 pr-4 md:p-0">Perusahaan</p>
              </nuxt-link>
            </li>
            <li
              class="
                md:hidden
                py-2
                px-4
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
              "
            >
              <nuxt-link to="/wishlist">
                <p class="block py-2 pl-3 pr-4 md:p-0">Wish List</p>
              </nuxt-link>
            </li>
            <li
              class="
                md:hidden
                hover:shadow-xl
                hover:outline
                hover:outline-1
                hover:outline-white
                hover:rounded-lg
                bg-secondary
                rounded-md
                font-bold
                text-center
              "
            >
              <a href="https://kemnaker.go.id/">
                <p class="block py-2 pl-3 pr-4 md:p-0">Log in</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <header
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
          <nuxt-link to="/">
            <img
              src="@/assets/img/logo-putih.png"
              alt="logo senada"
              class="w-10"
            />
          </nuxt-link>
        </div>
        <div class="md:hidden flex items-center">
          <nuxt-link to="/wishlist" class="text-white">
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
              px-4
              hover:shadow-xl hover:outline hover:outline-1 hover:outline-white
              active:outline
              active:outline-1
              active:outline-white
              active:text-black
            "
          >
            <nuxt-link to="/" aria-current="page">
              <span
                class="
                  py-2
                  w-full
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Beranda</span
              >
            </nuxt-link>
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              active:outline active:outline-1 active:outline-white
            "
          >
            <nuxt-link to="/pelatihan">
              <span
                class="
                  py-2
                  w-full
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Pelatihan</span
              >
            </nuxt-link>
          </li>
          <li
            class="
              py-2
              hover:shadow-xl hover:outline
              px-4
              hover:outline-1 hover:outline-white
              active:outline active:outline-1 active:outline-white
            "
          >
            <nuxt-link to="/lowongan-kerja">
              <span
                class="
                  py-2
                  w-full
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
              active:outline active:outline-1 active:outline-white
            "
          >
            <nuxt-link to="/jobfair">
              <span
                class="
                  py-2
                  w-full
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
              active:outline active:outline-1 active:outline-white
            "
          >
            <nuxt-link to="/perusahaan">
              <span
                href="#"
                class="
                  py-2
                  w-full
                  text-white text-sm
                  md:text-base md:px-4
                "
                >Perusahaan</span
              >
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="hidden md:block">
        <nuxt-link to="/wishlist" class="text-white">
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
      <div class="px-4 block md:flex md:flex-shrink-0 md:space-x-2">
        <div class="my-1 md:my-0 flex items-center">
          <button
            class="
              py-2
              px-4
              w-full
              bg-secondary
              text-white text-sm
              md:text-base
              hover:shadow-xl hover:outline hover:outline-1 hover:outline-white
            "
          >
            Log In
          </button>
        </div>
        <div>
          <button
            class="
              hidden
              py-2
              px-4
              bg-secondary
              w-full
              text-white text-sm
              md:text-base
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </header> -->
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
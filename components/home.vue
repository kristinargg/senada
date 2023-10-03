<template>
  <div id="home" class="font-poppins py-20 bg-gradient-to-b from-blue-200">
    <!-- <div
      class="px-4 pb-10 md:py-0 md:flex md:flex-shrink-0 md:px-[70px] lg:px-[150px] md:justify-between"
    > -->
    <div
      class="px-4 pb-10 md:py-0 md:grid md:px-[70px] lg:px-[150px] md:grid-cols-2 items-center justify-center"
    >
      <div class="md:hidden flex justify-center">
        <img
          src="@/assets/img/slides/1.png"
          alt="content"
          class="w-[100%] md:w-96"
        />
      </div>
      <div>
        <p class="md:text-[2rem] text-2xl leading-tight">
          Menyediakan sumber daya dan informasi yang relevan untuk membantu Anda
          meraih kesempatan karier yang gemilang.
        </p>
        <h1 class="md:text-l py-4">
          Temukan Peluang Karier Terbaik dengan SiapKerja
        </h1>
        <a href="https://kemnaker.go.id/" target="_blank">
          <button
            class="py-2 px-8 bg-secondary rounded text-white mt-4 hover:bg-opacity-90 shadow-md"
          >
            Pelajari Selanjutnya
          </button>
        </a>
      </div>
      <div class="hidden md:flex justify-center">
        <img
          src="@/assets/img/slides/1.png"
          alt="content"
          class="w-[100%] md:w-[25rem]"
        />
      </div>
    </div>

    <div class="px-4 md:px-[70px] lg:px-[150px] mt-20">
      <div class="block">
        <div class="rounded-2xl py-6 px-4">
          <div class="mt-20">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
              Tentang SiapKerja
            </h1>
            <div class="rounded-2xl py-6 px-4 mt-4 grid md:grid-cols-2">
              <div
                class="md:hidden float-right flex items-center justify-center mb-5"
              >
                <img
                  src="@/assets/img/logo-siapkerja.png"
                  alt="content"
                  class="animate__animated animate__bounce w-[100%] md:w-80"
                />
              </div>
              <div>
                <p class="text-base md:text-lg lg:text-xl text-justify">
                  Fokus utama kami adalah memberikan sumber daya dan informasi
                  yang relevan, praktis, dan terpercaya, untuk membantu Anda
                  membangun karier yang sukses dan memuaskan. Di sini, Anda akan
                  menemukan cerita inspiratif tim yang berkontribusi pada
                  keberhasilan SiapKerja, serta nilai-nilai inti yang membimbing
                  setiap tindakan kami. Di SiapKerja, kami bertekad menjembatani
                  kesenjangan antara impian karier dan kenyataan, membantu Anda
                  mencapai potensi penuh Anda di dunia kerja yang kompetitif.
                </p>
              </div>
              <div
                class="hidden float-right md:flex items-center justify-center"
              >
                <img
                  src="@/assets/img/logo-siapkerja.png"
                  alt="content"
                  class="animate__animated animate__bounce w-[100%] md:w-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-[70px] lg:px-[150px] mt-20">
      <div
        class="bg-gradient-to-r from-info1 p-3 rounded md:flex md:justify-between md:items-center"
      >
        <div>
          <img
            src="@/assets/img/1.png"
            alt="content"
            class="animate__animated animate__bounce"
          />
        </div>
        <div>
          <p class="text-sm md:text-base font-bold pt-3 md:pt-0 md:pl-3">
            Yuk, Upgrade Skillmu melalui pelatihan yang telah disediakan!
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-20">
        <p class="text-center text-lg font-bold">Tools yang digunakan</p>
        <div
          class="px-4 md:px-0 py-6 flex flex-wrap items-center justify-center space-x-14"
        >
          <img
            src="@/assets/img/logos_visual-studio-code.png"
            alt="csc"
            class="w-[15%] md:w-16"
          />
          <img
            src="@/assets/img/logos_nuxt-icon.png"
            alt="nuxt"
            class="w-[15%] md:w-16"
          />
          <img
            src="@/assets/img/logos_figma.png"
            alt="figma"
            class="w-[15%] md:w-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Pada komponen HomeComp.vue
export default {
  name: 'HomeComp',
}
</script>
<template>
  <div id="footer" class="font-sen">
    <div class="bottom-0">
      <div class="bg-info px-4 py-10 lg:px-[150px] lg:py-[100px] bottom-0">
        <div class="block md:grid md:grid-cols-3 space-y-4">
          <div class="flex justify-center">
            <img src="@/assets/img/logo-biru.png" alt="logo biru" />
          </div>
          <div>
            <p class="text-md font-bold">Navigasi</p>
            <ul>
              <li>
                <nuxt-link to="/"> Beranda </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/pelatihan"> Pelatihan</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/lowongan-kerja"> Lowongan Kerja </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/jobfair">Job Fair</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/perusahaan">Perusahaan</nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-md font-bold">Alamat</p>
            <!-- <span class="font-medium text-base">(021)0984134894</span> -->
            <p class="font-medium text-base">
              Jl. Gatot Subroto No.51, RT.5/4, Kuningan Tim., Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp',
}
</script>
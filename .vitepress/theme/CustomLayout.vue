<script setup>
import DefaultTheme from 'vitepress/theme'
import Contributors from "./Contributors.vue";
import SupportedServices from "./SupportedServices.vue";

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="container">
        <div>
          <p><strong>Spring Cloud AWS</strong> simplifies using <strong>AWS</strong> managed services in a <strong>Spring Framework</strong> and <strong>Spring Boot</strong> applications. It offers a convenient way to interact with AWS provided services using well-known Spring idioms and APIs.</p>
        </div>

        <SupportedServices />

        <div style="margin-top: 25px">
          <p><strong>Note that Spring Cloud AWS is developed and maintained by the community and is not affiliated with Amazon and VMWare.</strong></p>
        </div>
        <div style="margin-top: 50px">
          <h2>Contributors</h2>
          <Contributors/>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    width: 100%;
    padding: 0 64px;
  }
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 16px 0;
}

p {
  font-size: 1.1em;
  line-height: 1.8em;
}
</style>

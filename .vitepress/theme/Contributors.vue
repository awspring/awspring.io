<script>
import contributors from "./Contributors.vue";

export default {
  data() {
    return {
      contributors: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      for (let i = 1; i <= 4; i++) {
        fetch('https://api.github.com/repos/awspring/spring-cloud-aws/contributors?page=' + i)
            .then(response => response.json()
                .then(data => {
                  this.contributors.push(...data);
                }));
      }
    }
  },
  computed: {
    sortedContributors: function() {
      function compare(a, b) {
        if (a.contributions < b.contributions)
          return 1;
        if (a.contributions > b.contributions)
          return -1;
        return 0;
      }

      return this.contributors.sort(compare);
    }
  }
}
</script>

<template>
  <div id="contributors">
    <ul>
      <li v-for="c in sortedContributors">
        <a :href="c.html_url" :title="c.login"><img :src="c.avatar_url" :alt="c.login" /></a>
      </li>

    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 5px;
}
img {
  border-radius: 50%;
  width: 50px;
}
img:hover {
  box-sizing:border-box;
  outline: solid 2px var(--vp-c-brand-1);
  outline-offset: -2px;
}
</style>

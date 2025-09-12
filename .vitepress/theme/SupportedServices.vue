<script>
export default {
  data() {
    return {
      services: [
        { name: 'S3', image: '/S3.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-s3'},
        { name: 'SQS', image: '/SQS.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#sqs-integration'},
        { name: 'SNS', image: '/SNS.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-sns'},
        { name: 'DynamoDb', image: '/DynamoDb.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-dynamoDb'},
        { name: 'CloudWatch', image: '/CloudWatch.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#cloudwatch-metrics'},
        { name: 'Parameter Store', image: '/Parameter-Store.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-parameter-store'},
        { name: 'Secrets Manager', image: '/Secrets-Manager.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-secrets-manager'},
        { name: 'SES', image: '/SES.png', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html#spring-cloud-aws-ses'}
      ]
    }
  }
}
</script>

<template>
  <div class="supported-services">
    <ul>
      <li v-for="c in services">
        <a :href="c.link"><img :src="c.image" :alt="c.name" />
        {{ c.name }}
        </a>
      </li>

    </ul>
  </div>
</template>

<style scoped>
.supported-services {
  margin-top: 32px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

li {
  margin: 5px;
  width: 100px;
}
img {
  border-radius: 10%;
  width: 80px;
  margin: auto;
  margin-bottom: 5px;
}
img:hover {
  box-sizing:border-box;
  outline: solid 4px var(--vp-c-brand-2);
  outline-offset: -2px;
}
</style>

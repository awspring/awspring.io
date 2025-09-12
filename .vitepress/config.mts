import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spring Cloud AWS",
  description: "Spring Boot & Spring Cloud integration with AWS Cloud",
  head: [
    ['meta', {name: 'theme-color', content: '#1B1B1F'}],
    ['script', {
      defer: 'true',
      'data-domain': 'awspring.io',
      src: 'https://plausible.io/js/script.js'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guides', link: '/what-is-spring-cloud-aws' },
      { text: 'Reference Docs', link: 'https://docs.awspring.io/spring-cloud-aws/docs/3.4.0/reference/html/index.html' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Spring Cloud AWS?', link: '/what-is-spring-cloud-aws' },
          { text: 'How to contribute?', link: '/contributing' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Messaging with SQS', link: '/markdown-examples' },
          { text: 'Publishing notifications with SNS', link: '/api-examples' },
          { text: 'File storage with S3', link: '/api-examples' },
          { text: 'Persistence with DynamoDb', link: '/api-examples' },
          { text: 'Configuration with Secrets Manager', link: '/guides/secrets-manager' },
          { text: 'Configuration with Parameter Store', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awspring/spring-cloud-aws' }
    ]
  }
})

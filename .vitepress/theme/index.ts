// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import './style.css'

export default {
  extends: Theme,
  Layout:  CustomLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

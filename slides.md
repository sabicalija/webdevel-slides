---
title: Full-Stack Web Development
titleTemplate: 'AK - %s'
author: Alija Sabic, MSc.
keywords: Web Development, HTTP, HTML, CSS, JavaScript, Vue.js, Node.js
download: true
exportFilename: full-stack-web-development
export:
  format: pdf
  timetout: 30000
  dark: false
  withClicks: false
  withToc: false
colorSchema: light
themeConfig:
  primary: '#ff0000'
fonts:
  sans: 'Ubuntu'
  serif: 'Ubuntu'
  mono: 'Ubuntu Mono'
htmlAttrs:
  lang: en
layout: cover
background: /src/ci/fhtw-noir.webp
---

<style src="./src/styles/main.scss"></style>

# Full-Stack Web Development

<div class="info">

Alija Sabic, MSc.  
sabic@technikum-wien.at  
Smart Homes & Assistive Technologies

<p>
<time :datetime="new Date().toISOString()">{{ new Date().toDateString() }}</time>
</p>

</div>


---

## Table of Contents

1. [Introduction to Web Technologies](#lecture-1-introduction-to-web-technologies)
2. [Front-End Fundamentals](#lecture-2-front-end-fundamentals)
3. [APIs and Web Services](#lecture-3-apis-and-web-services)
4. [Building Web Applications](#lecture-4-building-web-applications)
5. [Back-End Development](#lecture-5-back-end-development)
6. [Deployment and Best Practices](#lecture-6-deployment-and-best-practices)


<!-- Include Lecture 1 -->
---
src: "./src/pages/lecture1.md"
---
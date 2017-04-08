<template>
  <div id="app">
    <header class="header">
      <h1 class="rainbow-text">md2html</h1>
    </header>
    <div class="main">
      <textarea class="input" v-model="input" placeholder="Markdown goes here..."></textarea>
      <div class="raw-html">
        <pre><code v-html="rawHtml"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
  import highlight from '@/utils/highlight'
  import mmark from 'mmark'

  export default {
    data() {
      return {
        input: ''
      }
    },
    computed: {
      rawHtml() {
        return highlight(mmark(this.input))
      }
    }
  }
</script>

<style src="highlight.js/styles/github.css"></style>
<style>
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
    font-size: 14px;
  }
  * {
    box-sizing: border-box;
  }
  html, body, #app {
    height: 100%;
  }
</style>
<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 10%;
  }
  .header h1 {
    margin: 0;
    font-weight: normal;
  }
  .main {
    display: flex;
    height: 90%;
    border-top: 1px solid #f0f0f0;
  }
  .input {
    width: 50%;
    height: 100%;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 14px;
  }
  .raw-html {
    width: 50%;
    height: 100%;
    background-color: #f9f9f9;
  }
  .raw-html pre {
    height: 100%;
    margin: 0;
    padding: 20px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .rainbow-text {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: -webkit-gradient(linear,  left top,  right top, 
      color-stop(0.00, red), 
      color-stop(16%, orange),
      color-stop(32%, yellow),
      color-stop(48%, green),
      color-stop(60%, blue),
      color-stop(76%, indigo),
      color-stop(1.00, violet));
  }
</style>

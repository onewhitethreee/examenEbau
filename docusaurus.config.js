// @ts-check
const path = require('path')
const beian = ' '

const announcementBarContent = `RECOMIENDO USAR ORDENADOR O TABLE PARA VER `

///** @type {import('@docusaurus/types').Config} */不知道干啥的
const config = {
  title: 'EXAMEN EBAU',
  titleDelimiter: '-',
  url: 'https://onewhitethreee.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'onewhitethreee',
  projectName: 'examenEbau',

  themeConfig: {
      //...
      googleAdsense: {
        dataAdClient: "",//adsence
      },
    plugins: [
      'docusaurus-plugin-google-adsense',
    ],
    image: 'img/logo.png',//logo图片
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    navbar: {
      items: [
        // {
        //   type: "localeDropdown",
        //   position: "left",
        // },
        {
          to: "/",
          label: "ÍNDICE",
          position: "right",
        },
        {
          label: "EXAMEN POR COMUNIDAD",
          position: "right",
          items: [
            {
              label: "ARAGÓN",
              to: "docs/ARAGON/",//MD文件里的slug标签是关键词
            },
            {
              label: "ANDALUCÍA",
              to: "docs/ANDALUCÍA/",
            },
            {
              label: "ASTURIAS",
              to: "docs/ASTURIAS/",
            },
            {
              label: "CANTABRIA",
              to: "docs/CANTABRIA/",
            },
            {
              label: "CASTILLA LA MANCHA",
              to: "docs/CASTILLA LA MANCHA/",
            },
            {
              label: "CASTILLA Y LEÓN",
              to: "docs/CASTILLA Y LEÓN/",
            },
            {
              label: "CATALUÑA",
              // position: "right",
              to: "docs/CATALUÑA/",
            },
            {
              label: "COMUNIDAD VALENCIANA",
              // position: "right",
              to: "docs/COMUNIDAD VALENCIANA/",
            },
            {
              label: "EXTREMADURA",
              // position: "right",
              to: "docs/EXTREMADURA/",
            },
            {
              label: "GALICIA",
              // position: "right",
              to: "docs/GALICIA/",
            },
            {
              label: "ISLAS BALEARES",
              // position: "right",
              to: "docs/ISLAS BALEARES/",
            },
            {
              label: "ISLAS CANARIAS",
              // position: "right",
              to: "docs/ISLAS CANARIAS/",
            },
            {
              label: "LA RIOJA",
              // position: "right",
              to: "docs/LA RIOJA/",
            },
            {
              label: "MADRID",
              // position: "right",
              to: "docs/MADRID/",
            },
            {
              label: "MURCIA",
              // position: "right",
              to: "docs/MURCIA/",
            },
            {
              label: "NAVARRA",
              // position: "right",
              to: "docs/NAVARRA/",
            },
            {
              label: "PAÍS VASCO",
              // position: "right",
              to: "docs/PAÍS VASCO/",
            },
          ],
        },

        {
          label: "FECHA DE EBAU",
          position: "right",
          items: [
            {
              label: "fecha de ebau",
              to: "docs/fecha/",
            },
          ],
        },

        {
          label: "CONTACTO CONMIGO",
          position: "right",
          to: "docs/contactar/",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Estudiar",
          items: [
            {
              label: "Lengua",
              to: "docs/estudir/Lengua",
            },
            {
              label: "Matemática",
              to: "docs/estudir/Matemática",
            },
            {
              label: "Historia de España",
              to: "docs/estudir/Historia de España",
            },
            {
              label: "Filosofía",
              to: "docs/estudiar/Filosofía",
            },
            {
              label: "Ingles",
              to: "docs/Ingles/Ingles",
            },
            {
              label: "Física",
              to: "docs/estudiar/Física",
            },
            {
              label: "Biología",
              to: "docs/estudiar/Biología",
            },
            {
              label: "Cultura audiovisual",
              to: "docs/estudiar/Cultura audiovisual",
            },
          ],
        },
        {
          title: "En blanco",
          items: [
            // {
            //   label: "首页",
            //   to: "/",
            // },
            {
              label: "BLANCO",
              href: "BLANCO",//这是一个超链接，可以添加外部的也可以添加内部的网站链接
            },
            {
              label: "BLANCO",
              href: "BLANCO",
            },
            {
              label: "BLANCO",
              href: "BLANCO",
            },
            {
              label: "BLANCO",
              href: "blanco",
            },
          ],
        },
        {
          title: "Enlace de interés",
          items: [
            {
              label: "Minijuego",
              to: "BLANCO",
            },
            {
              label: "BLANCO",
              to: "BLANCO",
            },
            {
              label: "BLANCO",
              to: "BLANCO",
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} examenEbau Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/okaidia'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      // defaultLanguage: "javascript",
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: '5PNRAXR50O',
      apiKey: '8797669080a5cd1e21d4a5372acae899',
      indexName: 'docsearch',//配置algoria的索引名称
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        // debug: true,
        googleAnalytics: {
        trackingID: 'G-DV31TK53KV',
        anonymizeIP: true,
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-DV31TK53KV',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }
      ),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/onewhitethreee/examenEbau/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarTitle: 'Reciente',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '',
          copyright: `Copyright © ${new Date().getFullYear()} examenEbau Built with Docusaurus.`,
        },
      }
    ],
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  onBrokenLinks: 'ignore',
}

module.exports = config
// @ts-check
const path = require('path')
const beian = ' '

const announcementBarContent = ` `

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EXAMEN EBAU',
  titleDelimiter: '-',
  url: 'https://kuizuo.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'onewhitethreee',
  projectName: 'examenEbau',

  themeConfig: {
    image: 'img/logo.png',
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
          items: [
            {
              label: "apuntes",
              to: "lifestyle",//文件夹名，aputes
            },
            {
              label: "职业",
              to: "tags/职业",
            },
            {
            label: "健康",
            to: "tags/健康",
            },
          ],
        },
        {
          label: "COMUNIDAD",
          position: "right",
          items: [
            {
              label: "ARAGÓN",
              to: "docs/ARAGÓN/",//MD文件里的slug标签是关键词
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
          label: "FFECHA DE EBAU",
          position: "right",
          items: [
            {
              label: "ARAGÓN",
              to: "docs/fecha/ARAGÓN/",
            },
            {
              label: "ANDALUCÍA",
              to: "docs/fecha/ANDALUCÍA/",
            },
            {
              label: "ASTURIAS",
              to: "docs/fecha/ASTURIAS/",
            },
            {
              label: "CANTABRIA",
              to: "docs/fecha/CANTABRIA/",
            },
            {
              label: "CASTILLA LA MANCHA",
              to: "docs/fecha/CASTILLA LA MANCHA",
            },
            {
              label: "CASTILLA Y LEÓN",
              to: "docs/fecha/CASTILLA Y LEÓN/",
            },
            {
              label: "CATALUÑA",
              // position: "right",
              to: "docs/fecha/CATALUÑA/",
            },
            {
              label: "COMUNIDAD VALENCIANA",
              // position: "right",
              to: "docs/fecha/COMUNIDAD VALENCIANA/",
            },
            {
              label: "EXTREMADURA",
              // position: "right",
              to: "docs/fecha/EXTREMADURA/",
            },
            {
              label: "GALICIA",
              // position: "right",
              to: "docs/fecha/GALICIA/",
            },
            {
              label: "ISLAS BALEARES",
              // position: "right",
              to: "docs/fecha/ISLAS BALEARES/",
            },
            {
              label: "ISLAS CANARIAS",
              // position: "right",
              to: "docs/fecha/ISLAS CANARIAS/",
            },
            {
              label: "LA RIOJA",
              // position: "right",
              to: "docs/fecha/LA RIOJA/",
            },
            {
              label: "MADRID",
              // position: "right",
              to: "docs/fecha/MADRID/",
            },
            {
              label: "MURCIA",
              // position: "right",
              to: "docs/fecha/MURCIA/",
            },
            {
              label: "NAVARRA",
              // position: "right",
              to: "docs/fecha/NAVARRA/",
            },
            {
              label: "PAÍS VASCO",
              // position: "right",
              to: "docs/fecha/PAÍS VASCO/",
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
      copyright: `<p>Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" >${beian}</a></p>`,
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
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/kuizuo',
      twitter: 'https://twitter.com/kuizuo',
      juejin: 'https://juejin.cn/user/1565318510545901',
      csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
      cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
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
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarTitle: '近期文章',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '愧怍',
          copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    path.resolve(__dirname, './src/plugin/plugin-baidu-analytics'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
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

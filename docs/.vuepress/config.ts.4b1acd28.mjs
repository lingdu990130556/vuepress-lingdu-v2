// docs/.vuepress/config.ts
import { defaultTheme } from "@vuepress/theme-default";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

// docs/.vuepress/configs/head.ts
var head = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `/images/icons/favicon-16x16.png`
    }
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `/images/icons/favicon-32x32.png`
    }
  ],
  ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ["meta", { name: "application-name", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/images/icons/safari-pinned-tab.svg",
      color: "#3eaf7c"
    }
  ],
  ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
  ["meta", { name: "theme-color", content: "#3eaf7c" }]
];

// docs/.vuepress/configs/meta.ts
import { createRequire } from "node:module";
import { fs } from "@vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///D:/%E9%A1%B9%E7%9B%AE%E7%A9%BA%E9%97%B4/%E5%8D%9A%E5%AE%A2/vuepress-lingdu-v2/docs/.vuepress/configs/meta.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var version = fs.readJsonSync(
  require2.resolve("@vuepress/core/package.json")
).version;

// docs/.vuepress/configs/navbar/en.ts
var navbarEn = [
  {
    text: "Guide",
    link: "/guide/"
  },
  {
    text: "Reference",
    children: [
      {
        text: "VuePress",
        children: [
          {
            text: "CLI",
            link: "/reference/cli.html"
          },
          "/reference/config.md",
          "/reference/frontmatter.md",
          "/reference/components.md",
          "/reference/plugin-api.md",
          "/reference/theme-api.md",
          "/reference/client-api.md",
          "/reference/node-api.md"
        ]
      },
      {
        text: "Bundlers",
        children: [
          "/reference/bundler/vite.md",
          "/reference/bundler/webpack.md"
        ]
      },
      {
        text: "Default Theme",
        children: [
          "/reference/default-theme/config.md",
          "/reference/default-theme/frontmatter.md",
          "/reference/default-theme/components.md",
          "/reference/default-theme/markdown.md",
          "/reference/default-theme/styles.md",
          "/reference/default-theme/extending.md"
        ]
      }
    ]
  },
  {
    text: "Plugins",
    children: [
      {
        text: "Common Features",
        children: [
          "/reference/plugin/back-to-top.md",
          "/reference/plugin/container.md",
          "/reference/plugin/external-link-icon.md",
          "/reference/plugin/google-analytics.md",
          "/reference/plugin/medium-zoom.md",
          "/reference/plugin/nprogress.md",
          "/reference/plugin/register-components.md"
        ]
      },
      {
        text: "Content Search",
        children: [
          "/reference/plugin/docsearch.md",
          "/reference/plugin/search.md"
        ]
      },
      {
        text: "PWA",
        children: [
          "/reference/plugin/pwa.md",
          "/reference/plugin/pwa-popup.md"
        ]
      },
      {
        text: "Syntax Highlighting",
        children: [
          "/reference/plugin/prismjs.md",
          "/reference/plugin/shiki.md"
        ]
      },
      {
        text: "Theme Development",
        children: [
          "/reference/plugin/active-header-links.md",
          "/reference/plugin/git.md",
          "/reference/plugin/palette.md",
          "/reference/plugin/theme-data.md",
          "/reference/plugin/toc.md"
        ]
      }
    ]
  },
  {
    text: "Learn More",
    children: [
      {
        text: "Advanced",
        children: [
          "/advanced/architecture.md",
          "/advanced/plugin.md",
          "/advanced/theme.md",
          {
            text: "Cookbook",
            link: "/advanced/cookbook/"
          }
        ]
      },
      {
        text: "Resources",
        children: [
          "/contributing.md",
          {
            text: "Awesome VuePress",
            link: "https://github.com/vuepress/awesome-vuepress"
          }
        ]
      }
    ]
  },
  {
    text: `v${version}`,
    children: [
      {
        text: "Changelog",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
      },
      {
        text: "v1.x",
        link: "https://v1.vuepress.vuejs.org"
      },
      {
        text: "v0.x",
        link: "https://v0.vuepress.vuejs.org"
      }
    ]
  }
];

// docs/.vuepress/configs/navbar/zh.ts
var navbarZh = [
  {
    text: "\u6307\u5357",
    link: "/zh/guide/"
  },
  {
    text: "\u53C2\u8003",
    children: [
      {
        text: "VuePress",
        children: [
          "/zh/reference/cli.md",
          "/zh/reference/config.md",
          "/zh/reference/frontmatter.md",
          "/zh/reference/components.md",
          "/zh/reference/plugin-api.md",
          "/zh/reference/theme-api.md",
          "/zh/reference/client-api.md",
          "/zh/reference/node-api.md"
        ]
      },
      {
        text: "\u6253\u5305\u5DE5\u5177",
        children: [
          "/zh/reference/bundler/vite.md",
          "/zh/reference/bundler/webpack.md"
        ]
      },
      {
        text: "\u9ED8\u8BA4\u4E3B\u9898",
        children: [
          "/zh/reference/default-theme/config.md",
          "/zh/reference/default-theme/frontmatter.md",
          "/zh/reference/default-theme/components.md",
          "/zh/reference/default-theme/markdown.md",
          "/zh/reference/default-theme/styles.md",
          "/zh/reference/default-theme/extending.md"
        ]
      }
    ]
  },
  {
    text: "\u63D2\u4EF6",
    children: [
      {
        text: "\u5E38\u7528\u529F\u80FD",
        children: [
          "/zh/reference/plugin/back-to-top.md",
          "/zh/reference/plugin/container.md",
          "/zh/reference/plugin/external-link-icon.md",
          "/zh/reference/plugin/google-analytics.md",
          "/zh/reference/plugin/medium-zoom.md",
          "/zh/reference/plugin/nprogress.md",
          "/zh/reference/plugin/register-components.md"
        ]
      },
      {
        text: "\u5185\u5BB9\u641C\u7D22",
        children: [
          "/zh/reference/plugin/docsearch.md",
          "/zh/reference/plugin/search.md"
        ]
      },
      {
        text: "PWA",
        children: [
          "/zh/reference/plugin/pwa.md",
          "/zh/reference/plugin/pwa-popup.md"
        ]
      },
      {
        text: "\u8BED\u6CD5\u9AD8\u4EAE",
        children: [
          "/zh/reference/plugin/prismjs.md",
          "/zh/reference/plugin/shiki.md"
        ]
      },
      {
        text: "\u4E3B\u9898\u5F00\u53D1",
        children: [
          "/zh/reference/plugin/active-header-links.md",
          "/zh/reference/plugin/git.md",
          "/zh/reference/plugin/palette.md",
          "/zh/reference/plugin/theme-data.md",
          "/zh/reference/plugin/toc.md"
        ]
      }
    ]
  },
  {
    text: "\u4E86\u89E3\u66F4\u591A",
    children: [
      {
        text: "\u6DF1\u5165",
        children: [
          "/zh/advanced/architecture.md",
          "/zh/advanced/plugin.md",
          "/zh/advanced/theme.md",
          {
            text: "Cookbook",
            link: "/zh/advanced/cookbook/"
          }
        ]
      },
      {
        text: "\u5176\u4ED6\u8D44\u6E90",
        children: [
          "/zh/contributing.md",
          {
            text: "Awesome VuePress",
            link: "https://github.com/vuepress/awesome-vuepress"
          }
        ]
      }
    ]
  },
  {
    text: `v${version}`,
    children: [
      {
        text: "\u66F4\u65B0\u65E5\u5FD7",
        link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md"
      },
      {
        text: "v1.x",
        link: "https://v1.vuepress.vuejs.org/zh/"
      },
      {
        text: "v0.x",
        link: "https://v0.vuepress.vuejs.org/zh/"
      }
    ]
  }
];

// docs/.vuepress/configs/navbar/my.ts
var navbarMy = [
  { text: "\u9996\u9875", link: "/" },
  // {
  //     text: "文档", children: [
  //         {
  //             text: "书签", children: [
  //                 '/bookmark/index.html',
  //             ]
  //         },
  //     ]
  // },
  {
    text: "\u672C\u7AD9\u5EFA\u8BBE",
    children: [
      {
        text: "\u6587\u6863\u7F51\u7AD9\u5EFA\u8BBE",
        children: [
          { text: "vuepresss", link: "/docs/boke/" },
          { text: "markdown", link: "/docs/boke/markdown/" },
          { text: "Markdown \u589E\u5F3A", link: "https://plugin-md-enhance.vuejs.press/zh/" }
        ]
      }
    ]
  },
  {
    text: "Java\u5468\u8FB9",
    children: [
      {
        text: "\u57FA\u7840",
        children: [
          { text: "\u5F00\u53D1", link: "/docs/kaifa/\u5DE5\u5177\u6559\u7A0B.md" },
          { text: "Java", link: "/docs/kaifa/java/" },
          { text: "IDEA", link: "/docs/kaifa/idea/" },
          { text: "\u6570\u636E\u5E93", link: "/docs/kaifa/db/" },
          { text: "maven", link: "/docs/kaifa/maven/" },
          { text: "node", link: "/docs/kaifa/node/" },
          { text: "vue", link: "/docs/kaifa/vue/" },
          { text: "http", link: "/docs/kaifa/http/" },
          { text: "webservice", link: "/docs/kaifa/webservice/" },
          { text: "activiti", link: "/docs/kaifa/activiti/" }
        ]
      },
      {
        text: "\u7B2C\u4E09\u65B9\u63D2\u4EF6",
        children: [
          { text: "nginx", link: "/docs/kaifa/nginx/" },
          { text: "nacos", link: "/docs/kaifa/nacos/" },
          { text: "redis", link: "/docs/kaifa/redis/" },
          { text: "seata", link: "/docs/kaifa/seata/" },
          { text: "sentinel", link: "/docs/kaifa/sentinel/" },
          { text: "skywalking", link: "/docs/kaifa/skywalking/" },
          { text: "Kafka", link: "/docs/kaifa/kafka/" },
          { text: "NiFi", link: "/docs/kaifa/nifi/" },
          { text: "OGG", link: "/docs/kaifa/ogg/" },
          { text: "Canal", link: "/docs/kaifa/canal/" },
          { text: "zookeeper", link: "/docs/kaifa/zookeeper/" }
        ]
      },
      {
        text: "\u7CFB\u7EDF",
        children: [
          { text: "\u64CD\u4F5C\u7CFB\u7EDF", link: "/docs/kaifa/basics/\u64CD\u4F5C\u7CFB\u7EDF.md" },
          { text: "Docker", link: "/docs/kaifa/docker/" },
          { text: "linux", link: "/docs/kaifa/linux/" },
          { text: "Windows", link: "/docs/kaifa/window/" }
        ]
      }
    ]
  },
  {
    text: "\u7248\u672Cv2.x",
    children: [
      { text: "\u7248\u672Cv1.x", link: "http://lingdu990130556.gitee.io/lingdu/" },
      { text: "\u7248\u672Cv2.x", link: "/" }
    ]
  },
  // {text: 'TimeLine', link: '/timeline/'},
  { text: "\u7559\u8A00\u677F", link: "/plugin/\u7559\u8A00\u677F.md" },
  { text: "\u6211", link: "/docs/me/" },
  {
    text: "\u76F8\u5173\u5B98\u65B9\u6587\u6863",
    children: [
      { text: "\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E", link: "https://v2.vuepress.vuejs.org/zh/" },
      { text: "\u8BC4\u8BBA\u63D2\u4EF6", link: "https://vssue.js.org/zh/" },
      { text: "\u82E5\u4F9D", link: "http://doc.ruoyi.vip/" }
      // {text: "评论无法使用相关说明", link: "https://www.zhihu.com/question/392358467"},
    ]
  },
  {
    text: "\u53CB\u60C5\u94FE\u63A5",
    children: [
      { text: "\u6C49\u683C\u745E", link: "http://linchenggu.gitee.io/blog/" },
      { text: "Mr.\u7406", link: "https://itwangxl.gitee.io/" },
      { text: "\u963F\u865A\u540C\u5B66\u7684\u50A8\u7269\u95F4", link: "https://axutongxue.com/" },
      { text: "zhoukaishun", link: "https://zhoukaishun.gitee.io/" },
      { text: "TiAmo\u{1F6B6}", link: "https://www.yuque.com/tiamo-f7tfy/xr139y/id1u7g" },
      { text: "\u4E00\u679A\u524D\u7AEF\u7A0B\u5E8F\u5A9B\u7684blog", link: "https://panjingyi.top/" },
      { text: "yyshino", link: "https://v-blog.yyshino.top/" },
      { text: " _\u9E45\u4E0D\u98DF\u8349_", link: "https://haveyuan.github.io/" },
      { text: "\u5C71\u6708\u884C", link: "https://shanyue.tech/" },
      { text: "\u7A0B\u5E8F\u5458\u5BFC\u822A", link: "https://cxy521.com/index.html" },
      { text: "\u5F00\u6E90\u5C0F\u5206\u961F", link: "https://sourceteam.gitee.io/blog/" },
      { text: "\u524D\u7AEF\u5B9E\u9A8C\u5BA4", link: "https://frontlab.gitee.io/blog/" },
      { text: "Java\u6280\u672F\u6307\u5317", link: "https://www.javanorth.cn/" },
      { text: "python\u6280\u672F", link: "http://www.justdopython.com/" },
      { text: "\u6280\u672F\u535A\u5BA2\u8054\u76DF", link: "http://techblog.pub/" },
      { text: "spring boot\u4E2D\u6587\u5BFC\u822A", link: "http://springboot.fun/" },
      { text: "spring cloud\u4E2D\u6587\u5BFC\u822A", link: "http://springcloud.fun/" },
      { text: "NiFi\u4E2D\u6587\u6587\u6863", link: "https://nifichina.gitee.io/" }
    ]
  }
  //******************************************************************************************************************
  // {
  //     text: '参考',
  //     children: [
  //         {
  //             text: 'VuePress',
  //             children: [
  //                 '/zh/reference/cli.md',
  //                 '/zh/reference/config.md',
  //                 '/zh/reference/frontmatter.md',
  //                 '/zh/reference/components.md',
  //                 '/zh/reference/plugin-api.md',
  //                 '/zh/reference/theme-api.md',
  //                 '/zh/reference/client-api.md',
  //                 '/zh/reference/node-api.md',
  //             ],
  //         },
  //         {
  //             text: '打包工具',
  //             children: [
  //                 '/zh/reference/bundler/vite.md',
  //                 '/zh/reference/bundler/webpack.md',
  //             ],
  //         },
  //         {
  //             text: '默认主题',
  //             children: [
  //                 '/zh/reference/default-theme/config.md',
  //                 '/zh/reference/default-theme/frontmatter.md',
  //                 '/zh/reference/default-theme/components.md',
  //                 '/zh/reference/default-theme/markdown.md',
  //                 '/zh/reference/default-theme/styles.md',
  //                 '/zh/reference/default-theme/extending.md',
  //             ],
  //         },
  //     ],
  // },
  // {
  //     text: '插件',
  //     children: [
  //         {
  //             text: '常用功能',
  //             children: [
  //                 '/zh/reference/plugin/back-to-top.md',
  //                 '/zh/reference/plugin/container.md',
  //                 '/zh/reference/plugin/external-link-icon.md',
  //                 '/zh/reference/plugin/google-analytics.md',
  //                 '/zh/reference/plugin/medium-zoom.md',
  //                 '/zh/reference/plugin/nprogress.md',
  //                 '/zh/reference/plugin/register-components.md',
  //             ],
  //         },
  //         {
  //             text: '内容搜索',
  //             children: [
  //                 '/zh/reference/plugin/docsearch.md',
  //                 '/zh/reference/plugin/search.md',
  //             ],
  //         },
  //         {
  //             text: 'PWA',
  //             children: [
  //                 '/zh/reference/plugin/pwa.md',
  //                 '/zh/reference/plugin/pwa-popup.md',
  //             ],
  //         },
  //         {
  //             text: '语法高亮',
  //             children: [
  //                 '/zh/reference/plugin/prismjs.md',
  //                 '/zh/reference/plugin/shiki.md',
  //             ],
  //         },
  //         {
  //             text: '主题开发',
  //             children: [
  //                 '/zh/reference/plugin/active-header-links.md',
  //                 '/zh/reference/plugin/git.md',
  //                 '/zh/reference/plugin/palette.md',
  //                 '/zh/reference/plugin/theme-data.md',
  //                 '/zh/reference/plugin/toc.md',
  //             ],
  //         },
  //     ],
  // },
  // {
  //     text: '了解更多',
  //     children: [
  //         {
  //             text: '深入',
  //             children: [
  //                 '/zh/advanced/architecture.md',
  //                 '/zh/advanced/plugin.md',
  //                 '/zh/advanced/theme.md',
  //                 {
  //                     text: 'Cookbook',
  //                     link: '/zh/advanced/cookbook/',
  //                 },
  //             ],
  //         },
  //         {
  //             text: '其他资源',
  //             children: [
  //                 '/zh/contributing.md',
  //                 {
  //                     text: 'Awesome VuePress',
  //                     link: 'https://github.com/vuepress/awesome-vuepress',
  //                 },
  //             ],
  //         },
  //     ],
  // },
  // {
  //     text: `v${version}`,
  //     children: [
  //         {
  //             text: '更新日志',
  //             link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
  //         },
  //         {
  //             text: 'v1.x',
  //             link: 'https://v1.vuepress.vuejs.org/zh/',
  //         },
  //         {
  //             text: 'v0.x',
  //             link: 'https://v0.vuepress.vuejs.org/zh/',
  //         },
  //     ],
  // },
];

// docs/.vuepress/util.js
import path from "path";
import glob from "glob";
function getChildren(dirName) {
  const names = [];
  let globPath = path.resolve(`./docs/${dirName}*.md`);
  console.log("globPath:");
  console.log(globPath);
  glob.sync(globPath).forEach((file) => {
    const name = path.parse(file).base;
    if (name.indexOf("qiuzhaoxin") < 0) {
      let lingdu = "";
      lingdu = dirName + name;
      names.push(lingdu);
    }
  });
  console.log("///////////////////////////////////////////////////////////////////////////");
  console.log(dirName);
  console.log(names);
  return names;
}

// docs/.vuepress/configs/sidebar/my.ts
var sidebarMy = {
  "/docs/basics/": [{ text: "\u57FA\u7840", children: getChildren("/docs/basics/") }],
  "/bookmark/": [{ text: "\u4E66\u7B7E", children: getChildren("/bookmark/") }],
  "/docs/boke/": [
    { text: "\u535A\u5BA2", collapsible: true, children: getChildren("/docs/boke/") },
    { text: "markdown", collapsible: true, children: getChildren("/docs/boke/markdown/") }
  ],
  // 开发相关
  "/docs/kaifa/": [
    { text: "\u5DE5\u4F5C\u6D41activiti", collapsible: true, children: getChildren("/docs/kaifa/activiti/") },
    { text: "\u64CD\u4F5C\u7CFB\u7EDF", collapsible: true, children: getChildren("/docs/kaifa/basics/") },
    { text: "canal", collapsible: true, children: getChildren("/docs/kaifa/canal/") },
    { text: "\u6570\u636E\u5E93", collapsible: true, children: getChildren("/docs/kaifa/db/") },
    { text: "docker", collapsible: true, children: getChildren("/docs/kaifa/docker/") },
    { text: "http", collapsible: true, children: getChildren("/docs/kaifa/http/") },
    { text: "idea", collapsible: true, children: getChildren("/docs/kaifa/idea/") },
    { text: "java", collapsible: true, children: getChildren("/docs/kaifa/java/") },
    // {text: 'kaika',collapsible: true, children: getChildren('/docs/kaifa/kaika/')},
    { text: "\u6D88\u606F\u4E2D\u95F4\u4EF6kafka", collapsible: true, children: getChildren("/docs/kaifa/kafka/") },
    { text: "linux", collapsible: true, children: getChildren("/docs/kaifa/linux/") },
    { text: "maven", collapsible: true, children: getChildren("/docs/kaifa/maven/") },
    { text: "\u6CE8\u518C\u3001\u914D\u7F6E\u4E2D\u5FC3nacos", collapsible: true, children: getChildren("/docs/kaifa/nacos/") },
    { text: "nginx", collapsible: true, children: getChildren("/docs/kaifa/nginx/") },
    { text: "nifi", collapsible: true, children: getChildren("/docs/kaifa/nifi/") },
    { text: "node", collapsible: true, children: getChildren("/docs/kaifa/node/") },
    { text: "ogg", collapsible: true, children: getChildren("/docs/kaifa/ogg/") },
    { text: "redis", collapsible: true, children: getChildren("/docs/kaifa/redis/") },
    { text: "seata", collapsible: true, children: getChildren("/docs/kaifa/seata/") },
    { text: "\u7194\u65AD\u964D\u7EA7sentinel", collapsible: true, children: getChildren("/docs/kaifa/sentinel/") },
    { text: "\u94FE\u8DEF\u8FFD\u8E2Askywalking", collapsible: true, children: getChildren("/docs/kaifa/skywalking/") },
    { text: "vue", collapsible: true, children: getChildren("/docs/kaifa/vue/") },
    { text: "webservice", collapsible: true, children: getChildren("/docs/kaifa/webservice/") },
    { text: "window", collapsible: true, children: getChildren("/docs/kaifa/window/") },
    { text: "zookeeper", collapsible: true, children: getChildren("/docs/kaifa/zookeeper/") }
  ],
  "/docs/me/": [{ text: "\u5173\u4E8E\u6211", children: ["/docs/me/README.md"] }]
  //********************************************************************************************************************
  // '/zh/guide/': [
  //     {
  //         text: '指南',
  //         children: [
  //             '/zh/guide/README.md',
  //             '/zh/guide/getting-started.md',
  //             '/zh/guide/configuration.md',
  //             '/zh/guide/page.md',
  //             '/zh/guide/markdown.md',
  //             '/zh/guide/assets.md',
  //             '/zh/guide/i18n.md',
  //             '/zh/guide/deployment.md',
  //             '/zh/guide/theme.md',
  //             '/zh/guide/plugin.md',
  //             '/zh/guide/bundler.md',
  //             '/zh/guide/migration.md',
  //         ],
  //     },
  // ],
  // '/zh/advanced/': [
  //     {
  //         text: '深入',
  //         children: [
  //             '/zh/advanced/architecture.md',
  //             '/zh/advanced/plugin.md',
  //             '/zh/advanced/theme.md',
  //         ],
  //     },
  //     {
  //         text: 'Cookbook',
  //         children: [
  //             '/zh/advanced/cookbook/README.md',
  //             '/zh/advanced/cookbook/usage-of-client-config.md',
  //             '/zh/advanced/cookbook/adding-extra-pages.md',
  //             '/zh/advanced/cookbook/making-a-theme-extendable.md',
  //             '/zh/advanced/cookbook/passing-data-to-client-code.md',
  //             '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
  //         ],
  //     },
  // ],
  // '/zh/reference/': [
  //     {
  //         text: 'VuePress 参考',
  //         collapsible: true,
  //         children: [
  //             '/zh/reference/cli.md',
  //             '/zh/reference/config.md',
  //             '/zh/reference/frontmatter.md',
  //             '/zh/reference/components.md',
  //             '/zh/reference/plugin-api.md',
  //             '/zh/reference/theme-api.md',
  //             '/zh/reference/client-api.md',
  //             '/zh/reference/node-api.md',
  //         ],
  //     },
  //     {
  //         text: '打包工具参考',
  //         collapsible: true,
  //         children: [
  //             '/zh/reference/bundler/vite.md',
  //             '/zh/reference/bundler/webpack.md',
  //         ],
  //     },
  //     {
  //         text: '默认主题参考',
  //         collapsible: true,
  //         children: [
  //             '/zh/reference/default-theme/config.md',
  //             '/zh/reference/default-theme/frontmatter.md',
  //             '/zh/reference/default-theme/components.md',
  //             '/zh/reference/default-theme/markdown.md',
  //             '/zh/reference/default-theme/styles.md',
  //             '/zh/reference/default-theme/extending.md',
  //         ],
  //     },
  //     {
  //         text: '官方插件参考',
  //         collapsible: true,
  //         children: [
  //             {
  //                 text: '常用功能',
  //                 children: [
  //                     '/zh/reference/plugin/back-to-top.md',
  //                     '/zh/reference/plugin/container.md',
  //                     '/zh/reference/plugin/external-link-icon.md',
  //                     '/zh/reference/plugin/google-analytics.md',
  //                     '/zh/reference/plugin/medium-zoom.md',
  //                     '/zh/reference/plugin/nprogress.md',
  //                     '/zh/reference/plugin/register-components.md',
  //                 ],
  //             },
  //             {
  //                 text: '内容搜索',
  //                 children: [
  //                     '/zh/reference/plugin/docsearch.md',
  //                     '/zh/reference/plugin/search.md',
  //                 ],
  //             },
  //             {
  //                 text: 'PWA',
  //                 children: [
  //                     '/zh/reference/plugin/pwa.md',
  //                     '/zh/reference/plugin/pwa-popup.md',
  //                 ],
  //             },
  //             {
  //                 text: '语法高亮',
  //                 children: [
  //                     '/zh/reference/plugin/prismjs.md',
  //                     '/zh/reference/plugin/shiki.md',
  //                 ],
  //             },
  //             {
  //                 text: '主题开发',
  //                 children: [
  //                     '/zh/reference/plugin/active-header-links.md',
  //                     '/zh/reference/plugin/git.md',
  //                     '/zh/reference/plugin/palette.md',
  //                     '/zh/reference/plugin/theme-data.md',
  //                     '/zh/reference/plugin/toc.md',
  //                 ],
  //             },
  //         ],
  //     },
  // ],
};

// docs/.vuepress/config.ts
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { bgmMusicPlayer } from "@anyfork/vuepress-plugin-bgm-player-next";
var config_default = {
  head,
  description: "vuepress-lingdu-v2",
  // 目的地
  dest: "./dist",
  base: "/vuepress-lingdu-v2/",
  plugins: [
    bgmMusicPlayer({
      audios: [
        //本地音乐4首
        {
          name: "\u4E00\u751F\u6240\u7231.mp3",
          artist: "\u4E00\u751F\u6240\u7231.mp3",
          url: "/bgm/\u4E00\u751F\u6240\u7231.mp3",
          cover: "/img/logo.png"
        },
        {
          name: "\u5361\u519C",
          artist: "\u5361\u519C\u94A2\u7434\u7248",
          url: "/music/canon/canon.mp3",
          cover: "/music/canon/canon.jpg"
        },
        {
          name: "Victory(\u80DC\u5229)",
          artist: "Two Steps From Hell",
          url: "/music/victory/victory.mp3",
          cover: "/music/victory/victory.jpg"
        },
        {
          name: "\u98CE\u5C45\u4F4F\u7684\u8857\u9053",
          artist: "\u98CE\u5C45\u4F4F\u7684\u8857\u9053 \u94A2\u7434\u7248 - \u94A2\u7434\u66F2",
          url: "/music/wind/wind.mp3",
          cover: "/music/wind/wind.jpg"
        },
        {
          name: "\u591C\u7684\u94A2\u7434\u66F2",
          artist: "\u591C\u7684\u94A2\u7434\u66F2\u4E94 - \u77F3\u8FDB",
          url: "/music/night/night.mp3",
          cover: "/music/night/night.jpg"
        }
      ]
    }),
    mdEnhancePlugin({
      // 开启卡片支持
      card: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true
    }),
    // 代码块复制
    copyCodePlugin({
      fancy: true,
      showInMobile: true,
      locales: {
        "/": {
          copy: "\u590D\u5236",
          copied: "\u590D\u5236\u6210\u529F",
          hint: "<b>\u590D&nbsp\u5236&nbsp\u6210&nbsp\u529F<b><BR>@\u2B55\xB0  " + currentTime()
        }
      }
    })
    // 本地搜索
    // searchPlugin({
    //     locales: {
    //         '/': {
    //             placeholder: '搜索',
    //         },
    //         '/zh/': {
    //             placeholder: '搜索',
    //         },
    //         '/en/': {
    //             placeholder: 'Search',
    //         },
    //     },
    // }),
  ],
  theme: defaultTheme({
    // 是否启用切换颜色模式的功能。如果设置为 true ，将会在导航栏展示一个切换颜色模式的按钮。
    colorModeSwitch: true,
    colorMode: "auto",
    // 首页路径
    home: "/",
    // Public 文件路径
    logo: "/img/logo.png",
    // URL
    // logo: 'https://vuejs.org/images/logo.png',
    // 如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。
    // logoDark: '/img/logo.png',
    // 如果你按照 `organization/repository` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库 源码地址
    // repo: 'vuejs/vuepress',
    // 你也可以直接将它设置为一个 URL
    repo: "https://gitee.com/lingdu_dou/lingdu",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "\u67E5\u770B\u6E90\u7801",
    // 导航栏
    navbar: navbarMy,
    // 侧边栏
    sidebar: sidebarMy,
    sidebarDepth: 3,
    // 嵌套的标题链接（这里设置为3层）[全局设置]
    /// 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "https://gitee.com/lingdu_dou/vuepress-lingdu-v2",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "../../tree/master/",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLink: true,
    // 默认为 "Edit this page"
    editLinkText: "\u5E2E\u52A9\u6211\u4EEC\u6539\u5584\u6B64\u9875\u9762\uFF01",
    // 显示最后更新时间
    lastUpdatedText: "\u6700\u540E\u66F4\u65B0\u65F6\u95F4",
    // string | boolean
    // 显示贡献者列表
    contributorsText: "\u8D21\u732E\u8005\u5217\u8868",
    // tip
    tip: "\u63D0\u793A",
    // warning
    warning: "\u8B66\u544A",
    // danger
    danger: "\u5371\u9669",
    // 当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。
    notFound: ["\u672A\u627E\u5230\u9875\u9762", "\u9875\u9762\u4E0D\u5B58\u5728", "\u9875\u9762\u4E22\u5931", "\u9875\u9762\u672A\u627E\u5230", "Not Found", "\u627E\u4E0D\u5230\u9875\u9762\u4E86"],
    // 404 页面中 返回首页 链接的文字。
    backToHome: "\u56DE\u5230\u9996\u9875",
    // 切换颜色模式按钮的标题文字。
    toggleColorMode: "\u5207\u6362\u989C\u8272\u6A21\u5F0F"
  })
};
function currentTime() {
  var date = /* @__PURE__ */ new Date();
  var year = date.getFullYear();
  let month = date.getMonth();
  console.log("month", month);
  var dateArr = [
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
  for (var i = 0; i < dateArr.length; i++) {
    if (dateArr[i] >= 1 && dateArr[i] <= 9) {
      dateArr[i] = "0" + dateArr[i];
    }
  }
  var strDate = year + "-" + dateArr[0] + "-" + dateArr[1] + " " + dateArr[2] + ":" + dateArr[3] + ":" + dateArr[4];
  console.log("strDate", strDate);
  return strDate;
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL21ldGEudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvZW4udHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvemgudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvbXkudHMiLCAiZG9jcy8udnVlcHJlc3MvdXRpbC5qcyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvbXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjsvLyBcdTlFRDhcdThCQTRcdTRFM0JcdTk4OThcclxuaW1wb3J0IHtkZWZhdWx0VGhlbWV9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0JztcclxuLy8gXHU1OTBEXHU1MjM2XHJcbmltcG9ydCB7Y29weUNvZGVQbHVnaW59IGZyb20gJ3Z1ZXByZXNzLXBsdWdpbi1jb3B5LWNvZGUyJztcclxuLy8gXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXHJcbi8vIGltcG9ydCB7c2VhcmNoUGx1Z2lufSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaCc7XHJcbi8vIFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQge2hlYWQsIG5hdmJhck15LCBzaWRlYmFyTXl9IGZyb20gJy4vY29uZmlncyc7XHJcbi8vIG1hcmtkb3duIFx1NTg5RVx1NUYzQVxyXG5pbXBvcnQgeyBtZEVuaGFuY2VQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLW1kLWVuaGFuY2VcIjtcclxuXHJcbmltcG9ydCB7IGJnbU11c2ljUGxheWVyIH0gZnJvbSBcIkBhbnlmb3JrL3Z1ZXByZXNzLXBsdWdpbi1iZ20tcGxheWVyLW5leHRcIjtcclxuXHJcblxyXG5cclxuLypcclxuICAgIFwiQHZ1ZXByZXNzL2NsaWVudFwiOiBcIjIuMC4wLWJldGEuNjJcIixcclxuICAgIFwidnVlXCI6IFwiXjMuMy40XCIsXHJcbiAgICBcInZ1ZXByZXNzXCI6IFwiMi4wLjAtYmV0YS42MlwiLFxyXG5cclxuICAgIFwiZ2xvYlwiOiBcIl43LjIuM1wiLFxyXG4gICAgXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiOiBcIl4yLjAuMC1iZXRhLjYyXCIsXHJcbiAgICBcIkB2dWVwcmVzcy9zaGFyZWRcIjogXCJeMi4wLjAtYmV0YS42MlwiLFxyXG4gICAgXCJAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdFwiOiBcIl4yLjAuMC1iZXRhLjYyXCIsXHJcbiAgICBcIkB2dWVwcmVzcy9jb3JlXCI6IFwiXjIuMC4wLWJldGEuNjJcIixcclxuICAgIFwiQHZ1ZXByZXNzL3V0aWxzXCI6IFwiXjIuMC4wLWJldGEuNjJcIixcclxuICAgIFwidnVlcHJlc3MtcGx1Z2luLWNvcHktY29kZTJcIjogXCJeMi4wLjAtYmV0YS42MlwiXHJcbiAqL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcblxyXG4gICAgaGVhZCxcclxuICAgIGRlc2NyaXB0aW9uOiAndnVlcHJlc3MtbGluZ2R1LXYyJyxcclxuICAgIC8vIFx1NzZFRVx1NzY4NFx1NTczMFxyXG4gICAgZGVzdDogJy4vZGlzdCcsXHJcbiAgICBiYXNlOiAnL3Z1ZXByZXNzLWxpbmdkdS12Mi8nLFxyXG5cclxuICAgIHBsdWdpbnM6IFtcclxuXHJcbiAgICAgICAgYmdtTXVzaWNQbGF5ZXIoe1xyXG4gICAgICAgICAgICBhdWRpb3M6IFtcclxuICAgICAgICAgICAgICAgIC8vXHU2NzJDXHU1NzMwXHU5N0YzXHU0RTUwNFx1OTk5NlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdcdTRFMDBcdTc1MUZcdTYyNDBcdTcyMzEubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6ICdcdTRFMDBcdTc1MUZcdTYyNDBcdTcyMzEubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYmdtL1x1NEUwMFx1NzUxRlx1NjI0MFx1NzIzMS5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnL2ltZy9sb2dvLnBuZydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1x1NTM2MVx1NTE5QycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0OiAnXHU1MzYxXHU1MTlDXHU5NEEyXHU3NDM0XHU3MjQ4JyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbXVzaWMvY2Fub24vY2Fub24ubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy9tdXNpYy9jYW5vbi9jYW5vbi5qcGcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdWaWN0b3J5KFx1ODBEQ1x1NTIyOSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogJ1R3byBTdGVwcyBGcm9tIEhlbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9tdXNpYy92aWN0b3J5L3ZpY3RvcnkubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy9tdXNpYy92aWN0b3J5L3ZpY3RvcnkuanBnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnXHU5OENFXHU1QzQ1XHU0RjRGXHU3Njg0XHU4ODU3XHU5MDUzJyxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6ICdcdTk4Q0VcdTVDNDVcdTRGNEZcdTc2ODRcdTg4NTdcdTkwNTMgXHU5NEEyXHU3NDM0XHU3MjQ4IC0gXHU5NEEyXHU3NDM0XHU2NkYyJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbXVzaWMvd2luZC93aW5kLm1wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICcvbXVzaWMvd2luZC93aW5kLmpwZydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1x1NTkxQ1x1NzY4NFx1OTRBMlx1NzQzNFx1NjZGMicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0OiAnXHU1OTFDXHU3Njg0XHU5NEEyXHU3NDM0XHU2NkYyXHU0RTk0IC0gXHU3N0YzXHU4RkRCJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvbXVzaWMvbmlnaHQvbmlnaHQubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy9tdXNpYy9uaWdodC9uaWdodC5qcGcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbWRFbmhhbmNlUGx1Z2luKHtcclxuICAgICAgICAgICAgLy8gXHU1RjAwXHU1NDJGXHU1MzYxXHU3MjQ3XHU2NTJGXHU2MzAxXHJcbiAgICAgICAgICAgIGNhcmQ6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggZmlndXJlXHJcbiAgICAgICAgICAgIGZpZ3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU2MUQyXHU1MkEwXHU4RjdEXHJcbiAgICAgICAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTY4MDdcdThCQjBcclxuICAgICAgICAgICAgaW1nTWFyazogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU1OTI3XHU1QzBGXHJcbiAgICAgICAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIC8vIFx1NEVFM1x1NzgwMVx1NTc1N1x1NTkwRFx1NTIzNlxyXG4gICAgICAgIGNvcHlDb2RlUGx1Z2luKHtcclxuICAgICAgICAgICAgZmFuY3k6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dJbk1vYmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9jYWxlczoge1xyXG4gICAgICAgICAgICAgICAgJy8nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weTogJ1x1NTkwRFx1NTIzNicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29waWVkOiAnXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGJyxcclxuICAgICAgICAgICAgICAgICAgICBoaW50OiAnPGI+XHU1OTBEJm5ic3BcdTUyMzYmbmJzcFx1NjIxMCZuYnNwXHU1MjlGPGI+PEJSPkBcdTJCNTVcdTAwQjAgICcrY3VycmVudFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxyXG4gICAgICAgIC8vIHNlYXJjaFBsdWdpbih7XHJcbiAgICAgICAgLy8gICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAvLyAgICAgICAgICcvJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAnL3poLyc6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMicsXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgJy9lbi8nOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyB9KSxcclxuICAgIF0sXHJcblxyXG4gICAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XHJcblxyXG4gICAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NTIwN1x1NjM2Mlx1OTg5Q1x1ODI3Mlx1NkEyMVx1NUYwRlx1NzY4NFx1NTI5Rlx1ODBGRFx1MzAwMlx1NTk4Mlx1Njc5Q1x1OEJCRVx1N0Y2RVx1NEUzQSB0cnVlIFx1RkYwQ1x1NUMwNlx1NEYxQVx1NTcyOFx1NUJGQ1x1ODIyQVx1NjgwRlx1NUM1NVx1NzkzQVx1NEUwMFx1NEUyQVx1NTIwN1x1NjM2Mlx1OTg5Q1x1ODI3Mlx1NkEyMVx1NUYwRlx1NzY4NFx1NjMwOVx1OTRBRVx1MzAwMlxyXG4gICAgICAgIGNvbG9yTW9kZVN3aXRjaDogdHJ1ZSxcclxuICAgICAgICBjb2xvck1vZGU6IFwiYXV0b1wiLFxyXG4gICAgICAgIC8vIFx1OTk5Nlx1OTg3NVx1OERFRlx1NUY4NFxyXG4gICAgICAgIGhvbWU6IFwiL1wiLFxyXG4gICAgICAgIC8vIFB1YmxpYyBcdTY1ODdcdTRFRjZcdThERUZcdTVGODRcclxuICAgICAgICBsb2dvOiAnL2ltZy9sb2dvLnBuZycsXHJcbiAgICAgICAgLy8gVVJMXHJcbiAgICAgICAgLy8gbG9nbzogJ2h0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZycsXHJcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU0RjYwXHU2MEYzXHU1NzI4XHU1OTFDXHU5NUY0XHU2QTIxXHU1RjBGXHU0RTJEXHU0RjdGXHU3NTI4XHU0RTBEXHU1NDBDXHU3Njg0IExvZ28gXHU1NkZFXHU3MjQ3XHVGRjBDXHU1QzMxXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4XHU4QkU1XHU5MTREXHU3RjZFXHU5ODc5XHUzMDAyXHJcbiAgICAgICAgLy8gbG9nb0Rhcms6ICcvaW1nL2xvZ28ucG5nJyxcclxuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTYzMDlcdTcxNjcgYG9yZ2FuaXphdGlvbi9yZXBvc2l0b3J5YCBcdTc2ODRcdTY4M0NcdTVGMEZcdThCQkVcdTdGNkVcdTVCODNcclxuICAgICAgICAvLyBcdTYyMTFcdTRFRUNcdTRGMUFcdTVDMDZcdTVCODNcdTRGNUNcdTRFM0FcdTRFMDBcdTRFMkEgR2l0SHViIFx1NEVEM1x1NUU5MyBcdTZFOTBcdTc4MDFcdTU3MzBcdTU3NDBcclxuICAgICAgICAvLyByZXBvOiAndnVlanMvdnVlcHJlc3MnLFxyXG4gICAgICAgIC8vIFx1NEY2MFx1NEU1Rlx1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NUMwNlx1NUI4M1x1OEJCRVx1N0Y2RVx1NEUzQVx1NEUwMFx1NEUyQSBVUkxcclxuICAgICAgICByZXBvOiAnaHR0cHM6Ly9naXRlZS5jb20vbGluZ2R1X2RvdS9saW5nZHUnLFxyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NEVEM1x1NUU5M1x1OTRGRVx1NjNBNVx1NjU4N1x1NUI1N1x1MzAwMlx1OUVEOFx1OEJBNFx1NEVDRSBgdGhlbWVDb25maWcucmVwb2AgXHU0RTJEXHU4MUVBXHU1MkE4XHU2M0E4XHU2NUFEXHU0RTNBXHJcbiAgICAgICAgLy8gXCJHaXRIdWJcIi9cIkdpdExhYlwiL1wiQml0YnVja2V0XCIgXHU1MTc2XHU0RTJEXHU0RTRCXHU0RTAwXHVGRjBDXHU2MjE2XHU2NjJGIFwiU291cmNlXCJcdTMwMDJcclxuICAgICAgICByZXBvTGFiZWw6ICdcdTY3RTVcdTc3MEJcdTZFOTBcdTc4MDEnLFxyXG4gICAgICAgIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlxyXG4gICAgICAgIG5hdmJhcjogbmF2YmFyTXksXHJcbiAgICAgICAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgICAgICAgc2lkZWJhcjogc2lkZWJhck15LFxyXG4gICAgICAgIHNpZGViYXJEZXB0aDogMywgLy8gXHU1RDRDXHU1OTU3XHU3Njg0XHU2ODA3XHU5ODk4XHU5NEZFXHU2M0E1XHVGRjA4XHU4RkQ5XHU5MUNDXHU4QkJFXHU3RjZFXHU0RTNBM1x1NUM0Mlx1RkYwOVtcdTUxNjhcdTVDNDBcdThCQkVcdTdGNkVdXHJcbiAgICAgICAgLy8vIFx1NEVFNVx1NEUwQlx1NEUzQVx1NTNFRlx1OTAwOVx1NzY4NFx1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVx1OTAwOVx1OTg3OVxyXG4gICAgICAgIC8vIFx1NTA0N1x1NTk4Mlx1NEY2MFx1NzY4NFx1NjU4N1x1Njg2M1x1NEVEM1x1NUU5M1x1NTQ4Q1x1OTg3OVx1NzZFRVx1NjcyQ1x1OEVBQlx1NEUwRFx1NTcyOFx1NEUwMFx1NEUyQVx1NEVEM1x1NUU5M1x1RkYxQVxyXG4gICAgICAgIGRvY3NSZXBvOiAnaHR0cHM6Ly9naXRlZS5jb20vbGluZ2R1X2RvdS92dWVwcmVzcy1saW5nZHUtdjInLFxyXG4gICAgICAgIC8vIFx1NTA0N1x1NTk4Mlx1NjU4N1x1Njg2M1x1NEUwRFx1NjYyRlx1NjUzRVx1NTcyOFx1NEVEM1x1NUU5M1x1NzY4NFx1NjgzOVx1NzZFRVx1NUY1NVx1NEUwQlx1RkYxQVxyXG4gICAgICAgIGRvY3NEaXI6ICcuLi8uLi90cmVlL21hc3Rlci8nLFxyXG4gICAgICAgIC8vIFx1NTA0N1x1NTk4Mlx1NjU4N1x1Njg2M1x1NjUzRVx1NTcyOFx1NEUwMFx1NEUyQVx1NzI3OVx1NUI5QVx1NzY4NFx1NTIwNlx1NjUyRlx1NEUwQlx1RkYxQVxyXG4gICAgICAgIGRvY3NCcmFuY2g6ICdtYXN0ZXInLFxyXG4gICAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NjYyRiBmYWxzZSwgXHU4QkJFXHU3RjZFXHU0RTNBIHRydWUgXHU2NzY1XHU1NDJGXHU3NTI4XHJcbiAgICAgICAgZWRpdExpbms6IHRydWUsXHJcbiAgICAgICAgLy8gXHU5RUQ4XHU4QkE0XHU0RTNBIFwiRWRpdCB0aGlzIHBhZ2VcIlxyXG4gICAgICAgIGVkaXRMaW5rVGV4dDogJ1x1NUUyRVx1NTJBOVx1NjIxMVx1NEVFQ1x1NjUzOVx1NTU4NFx1NkI2NFx1OTg3NVx1OTc2Mlx1RkYwMScsXHJcbiAgICAgICAgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcbiAgICAgICAgbGFzdFVwZGF0ZWRUZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JywgLy8gc3RyaW5nIHwgYm9vbGVhblxyXG4gICAgICAgIC8vIFx1NjYzRVx1NzkzQVx1OEQyMVx1NzMyRVx1ODAwNVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIGNvbnRyaWJ1dG9yc1RleHQ6ICdcdThEMjFcdTczMkVcdTgwMDVcdTUyMTdcdTg4NjgnLFxyXG5cclxuICAgICAgICAvLyB0aXBcclxuICAgICAgICB0aXA6ICdcdTYzRDBcdTc5M0EnLFxyXG4gICAgICAgIC8vIHdhcm5pbmdcclxuICAgICAgICB3YXJuaW5nOiAnXHU4QjY2XHU1NDRBJyxcclxuICAgICAgICAvLyBkYW5nZXJcclxuICAgICAgICBkYW5nZXI6ICdcdTUzNzFcdTk2NjknLFxyXG4gICAgICAgIC8vIFx1NUY1M1x1NzUyOFx1NjIzN1x1OEZEQlx1NTE2NSA0MDQgXHU5ODc1XHU5NzYyXHU2NUY2XHVGRjBDXHU0RjFBXHU0RUNFXHU2NTcwXHU3RUM0XHU0RTJEXHU5NjhGXHU2NzNBXHU5MDA5XHU1M0Q2XHU0RTAwXHU2NzYxXHU0RkUxXHU2MDZGXHU4RkRCXHU4ODRDXHU1QzU1XHU3OTNBXHUzMDAyXHJcbiAgICAgICAgbm90Rm91bmQ6IFsnXHU2NzJBXHU2MjdFXHU1MjMwXHU5ODc1XHU5NzYyJywgJ1x1OTg3NVx1OTc2Mlx1NEUwRFx1NUI1OFx1NTcyOCcsICdcdTk4NzVcdTk3NjJcdTRFMjJcdTU5MzEnLCAnXHU5ODc1XHU5NzYyXHU2NzJBXHU2MjdFXHU1MjMwJywgJ05vdCBGb3VuZCcsICdcdTYyN0VcdTRFMERcdTUyMzBcdTk4NzVcdTk3NjJcdTRFODYnXSxcclxuICAgICAgICAvLyA0MDQgXHU5ODc1XHU5NzYyXHU0RTJEIFx1OEZENFx1NTZERVx1OTk5Nlx1OTg3NSBcdTk0RkVcdTYzQTVcdTc2ODRcdTY1ODdcdTVCNTdcdTMwMDJcclxuICAgICAgICBiYWNrVG9Ib21lOiAnXHU1NkRFXHU1MjMwXHU5OTk2XHU5ODc1JyxcclxuICAgICAgICAvLyBcdTUyMDdcdTYzNjJcdTk4OUNcdTgyNzJcdTZBMjFcdTVGMEZcdTYzMDlcdTk0QUVcdTc2ODRcdTY4MDdcdTk4OThcdTY1ODdcdTVCNTdcdTMwMDJcclxuICAgICAgICB0b2dnbGVDb2xvck1vZGU6ICdcdTUyMDdcdTYzNjJcdTk4OUNcdTgyNzJcdTZBMjFcdTVGMEYnLFxyXG5cclxuICAgIH0pLFxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NjVGNlx1OTVGNFxyXG4gKi9cclxuZnVuY3Rpb24gY3VycmVudFRpbWUoKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgLy9cdTY3MDhcdTRFRkRcdTRFQ0UwfjExXHVGRjBDXHU2MjQwXHU0RUU1XHU1MkEwXHU0RTAwXHJcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1vbnRoXCIsbW9udGgpO1xyXG4gICAgdmFyIGRhdGVBcnIgPSBbXHJcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpICsgMSxcclxuICAgICAgICBkYXRlLmdldERhdGUoKSxcclxuICAgICAgICBkYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgZGF0ZS5nZXRNaW51dGVzKCksXHJcbiAgICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXHJcbiAgICBdO1xyXG4gICAgLy9cdTU5ODJcdTY3OUNcdTY4M0NcdTVGMEZcdTY2MkZNTVx1NTIxOVx1OTcwMFx1ODk4MVx1NkI2NFx1NkI2NVx1OUFBNFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NjYyRk1cdTY4M0NcdTVGMEZcdTUyMTlcdTZCNjRcdTVGQUFcdTczQUZcdTZDRThcdTkxQ0FcdTYzODlcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0ZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChkYXRlQXJyW2ldID49IDEgJiYgZGF0ZUFycltpXSA8PSA5KSB7XHJcbiAgICAgICAgICAgIGRhdGVBcnJbaV0gPSBcIjBcIiArIGRhdGVBcnJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHN0ckRhdGUgPVxyXG4gICAgICAgIHllYXIgK1xyXG4gICAgICAgIFwiLVwiICtcclxuICAgICAgICBkYXRlQXJyWzBdICtcclxuICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgZGF0ZUFyclsxXSArXHJcbiAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgIGRhdGVBcnJbMl0gK1xyXG4gICAgICAgIFwiOlwiICtcclxuICAgICAgICBkYXRlQXJyWzNdICtcclxuICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgZGF0ZUFycls0XTtcclxuICAgIC8vXHU2QjY0XHU1OTA0XHU1M0VGXHU0RUU1XHU2MkZGXHU1OTE2XHU5MEU4XHU3Njg0XHU1M0Q4XHU5MUNGXHU2M0E1XHU2NTM2ICBzdHJEYXRlOjIwMjItMDUtMDEgMTM6MjU6MzBcclxuICAgIC8vdGhpcy5kYXRlID0gc3RyRGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwic3RyRGF0ZVwiLHN0ckRhdGUpO1xyXG4gICAgcmV0dXJuIHN0ckRhdGU7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjRcXFxcXHU1MzVBXHU1QkEyXFxcXHZ1ZXByZXNzLWxpbmdkdS12MlxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXGhlYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFOSVBMSVCOSVFNyU5QiVBRSVFNyVBOSVCQSVFOSU5NyVCNC8lRTUlOEQlOUElRTUlQUUlQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC50c1wiO2ltcG9ydCB0eXBlIHsgSGVhZENvbmZpZyB9IGZyb20gJ0B2dWVwcmVzcy9jb3JlJ1xuXG5leHBvcnQgY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xuICBbXG4gICAgJ2xpbmsnLFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIGhyZWY6IGAvaW1hZ2VzL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nYCxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgJ2xpbmsnLFxuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgIGhyZWY6IGAvaW1hZ2VzL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nYCxcbiAgICB9LFxuICBdLFxuICBbJ2xpbmsnLCB7IHJlbDogJ21hbmlmZXN0JywgaHJlZjogJy9tYW5pZmVzdC53ZWJtYW5pZmVzdCcgfV0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ2FwcGxpY2F0aW9uLW5hbWUnLCBjb250ZW50OiAnVnVlUHJlc3MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScsIGNvbnRlbnQ6ICdWdWVQcmVzcycgfV0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUnLCBjb250ZW50OiAnYmxhY2snIH1dLFxuICBbXG4gICAgJ2xpbmsnLFxuICAgIHsgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsIGhyZWY6IGAvaW1hZ2VzL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nYCB9LFxuICBdLFxuICBbXG4gICAgJ2xpbmsnLFxuICAgIHtcbiAgICAgIHJlbDogJ21hc2staWNvbicsXG4gICAgICBocmVmOiAnL2ltYWdlcy9pY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmcnLFxuICAgICAgY29sb3I6ICcjM2VhZjdjJyxcbiAgICB9LFxuICBdLFxuICBbJ21ldGEnLCB7IG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAndGhlbWUtY29sb3InLCBjb250ZW50OiAnIzNlYWY3YycgfV0sXG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNFxcXFxcdTUzNUFcdTVCQTJcXFxcdnVlcHJlc3MtbGluZ2R1LXYyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbWV0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9tZXRhLnRzXCI7aW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJ1xuaW1wb3J0IHsgZnMgfSBmcm9tICdAdnVlcHJlc3MvdXRpbHMnXG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybClcblxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSBmcy5yZWFkSnNvblN5bmMoXG4gIHJlcXVpcmUucmVzb2x2ZSgnQHZ1ZXByZXNzL2NvcmUvcGFja2FnZS5qc29uJylcbikudmVyc2lvblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFOSVBMSVCOSVFNyU5QiVBRSVFNyVBOSVCQSVFOSU5NyVCNC8lRTUlOEQlOUElRTUlQUUlQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyL2VuLnRzXCI7aW1wb3J0IHR5cGUgeyBOYXZiYXJDb25maWcgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9tZXRhLmpzJ1xuXG5leHBvcnQgY29uc3QgbmF2YmFyRW46IE5hdmJhckNvbmZpZyA9IFtcbiAge1xuICAgIHRleHQ6ICdHdWlkZScsXG4gICAgbGluazogJy9ndWlkZS8nLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1JlZmVyZW5jZScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Z1ZVByZXNzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQ0xJJyxcbiAgICAgICAgICAgIGxpbms6ICcvcmVmZXJlbmNlL2NsaS5odG1sJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICcvcmVmZXJlbmNlL2NvbmZpZy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZnJvbnRtYXR0ZXIubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL2NvbXBvbmVudHMubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi1hcGkubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3RoZW1lLWFwaS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvY2xpZW50LWFwaS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2Uvbm9kZS1hcGkubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0J1bmRsZXJzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9idW5kbGVyL3ZpdGUubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL2J1bmRsZXIvd2VicGFjay5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRGVmYXVsdCBUaGVtZScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb25maWcubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZnJvbnRtYXR0ZXIubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50cy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9tYXJrZG93bi5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9zdHlsZXMubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZXh0ZW5kaW5nLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdQbHVnaW5zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ29tbW9uIEZlYXR1cmVzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vYmFjay10by10b3AubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9jb250YWluZXIubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9leHRlcm5hbC1saW5rLWljb24ubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9nb29nbGUtYW5hbHl0aWNzLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vbWVkaXVtLXpvb20ubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9ucHJvZ3Jlc3MubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9yZWdpc3Rlci1jb21wb25lbnRzLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDb250ZW50IFNlYXJjaCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2RvY3NlYXJjaC5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL3NlYXJjaC5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUFdBJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vcHdhLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vcHdhLXBvcHVwLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdTeW50YXggSGlnaGxpZ2h0aW5nJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vcHJpc21qcy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL3NoaWtpLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdUaGVtZSBEZXZlbG9wbWVudCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2FjdGl2ZS1oZWFkZXItbGlua3MubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9naXQubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9wYWxldHRlLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vdGhlbWUtZGF0YS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL3RvYy5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnTGVhcm4gTW9yZScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0FkdmFuY2VkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL2FkdmFuY2VkL2FyY2hpdGVjdHVyZS5tZCcsXG4gICAgICAgICAgJy9hZHZhbmNlZC9wbHVnaW4ubWQnLFxuICAgICAgICAgICcvYWR2YW5jZWQvdGhlbWUubWQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb29rYm9vaycsXG4gICAgICAgICAgICBsaW5rOiAnL2FkdmFuY2VkL2Nvb2tib29rLycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdSZXNvdXJjZXMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvY29udHJpYnV0aW5nLm1kJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQXdlc29tZSBWdWVQcmVzcycsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL2F3ZXNvbWUtdnVlcHJlc3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBgdiR7dmVyc2lvbn1gLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL3Z1ZXByZXNzLW5leHQvYmxvYi9tYWluL0NIQU5HRUxPRy5tZCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAndjEueCcsXG4gICAgICAgIGxpbms6ICdodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAndjAueCcsXG4gICAgICAgIGxpbms6ICdodHRwczovL3YwLnZ1ZXByZXNzLnZ1ZWpzLm9yZycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjRcXFxcXHU1MzVBXHU1QkEyXFxcXHZ1ZXByZXNzLWxpbmdkdS12MlxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvemgudHNcIjtpbXBvcnQgdHlwZSB7IE5hdmJhckNvbmZpZyB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL21ldGEuanMnXG5cbmV4cG9ydCBjb25zdCBuYXZiYXJaaDogTmF2YmFyQ29uZmlnID0gW1xuICB7XG4gICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXG4gICAgbGluazogJy96aC9ndWlkZS8nLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NTNDMlx1ODAwMycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Z1ZVByZXNzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jbGkubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NvbmZpZy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZnJvbnRtYXR0ZXIubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NvbXBvbmVudHMubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi1hcGkubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3RoZW1lLWFwaS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvY2xpZW50LWFwaS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2Uvbm9kZS1hcGkubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjI1M1x1NTMwNVx1NURFNVx1NTE3NycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvYnVuZGxlci92aXRlLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3dlYnBhY2subWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb25maWcubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZnJvbnRtYXR0ZXIubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50cy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9tYXJrZG93bi5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9zdHlsZXMubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZXh0ZW5kaW5nLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdcdTYzRDJcdTRFRjYnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUyOUZcdTgwRkQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9iYWNrLXRvLXRvcC5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2NvbnRhaW5lci5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2V4dGVybmFsLWxpbmstaWNvbi5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2dvb2dsZS1hbmFseXRpY3MubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9tZWRpdW0tem9vbS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL25wcm9ncmVzcy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3JlZ2lzdGVyLWNvbXBvbmVudHMubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTE4NVx1NUJCOVx1NjQxQ1x1N0QyMicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2RvY3NlYXJjaC5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3NlYXJjaC5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnUFdBJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHdhLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHdhLXBvcHVwLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdThCRURcdTZDRDVcdTlBRDhcdTRFQUUnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wcmlzbWpzLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2hpa2kubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NEUzQlx1OTg5OFx1NUYwMFx1NTNEMScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2FjdGl2ZS1oZWFkZXItbGlua3MubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9naXQubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wYWxldHRlLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vdGhlbWUtZGF0YS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3RvYy5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU0RTg2XHU4OUUzXHU2NkY0XHU1OTFBJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL2FkdmFuY2VkL2FyY2hpdGVjdHVyZS5tZCcsXG4gICAgICAgICAgJy96aC9hZHZhbmNlZC9wbHVnaW4ubWQnLFxuICAgICAgICAgICcvemgvYWR2YW5jZWQvdGhlbWUubWQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb29rYm9vaycsXG4gICAgICAgICAgICBsaW5rOiAnL3poL2FkdmFuY2VkL2Nvb2tib29rLycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTUxNzZcdTRFRDZcdThENDRcdTZFOTAnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvY29udHJpYnV0aW5nLm1kJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnQXdlc29tZSBWdWVQcmVzcycsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL2F3ZXNvbWUtdnVlcHJlc3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBgdiR7dmVyc2lvbn1gLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTY2RjRcdTY1QjBcdTY1RTVcdTVGRDcnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL3Z1ZXByZXNzLW5leHQvYmxvYi9tYWluL0NIQU5HRUxPRy5tZCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAndjEueCcsXG4gICAgICAgIGxpbms6ICdodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ3YwLngnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly92MC52dWVwcmVzcy52dWVqcy5vcmcvemgvJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0L1x1NTM1QVx1NUJBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNFxcXFxcdTUzNUFcdTVCQTJcXFxcdnVlcHJlc3MtbGluZ2R1LXYyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbmF2YmFyXFxcXG15LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci9teS50c1wiO2ltcG9ydCB0eXBlIHtOYXZiYXJDb25maWd9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICcuLi9tZXRhLmpzJ1xuLy8gXHU2MjExXHU3Njg0XHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFXG5leHBvcnQgY29uc3QgbmF2YmFyTXk6IE5hdmJhckNvbmZpZyA9IFtcbiAgICB7dGV4dDogXCJcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvXCJ9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGV4dDogXCJcdTY1ODdcdTY4NjNcIiwgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiBcIlx1NEU2Nlx1N0I3RVwiLCBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL2Jvb2ttYXJrL2luZGV4Lmh0bWwnLFxuICAgIC8vICAgICAgICAgICAgIF1cbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF1cbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjcyQ1x1N0FEOVx1NUVGQVx1OEJCRScsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1NjU4N1x1Njg2M1x1N0Y1MVx1N0FEOVx1NUVGQVx1OEJCRScsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInZ1ZXByZXNzc1wiLCBsaW5rOiBcIi9kb2NzL2Jva2UvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJtYXJrZG93blwiLCBsaW5rOiBcIi9kb2NzL2Jva2UvbWFya2Rvd24vXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJNYXJrZG93biBcdTU4OUVcdTVGM0FcIiwgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL3poL1wifSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogJ0phdmFcdTU0NjhcdThGQjknLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTU3RkFcdTc4NDAnLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTVGMDBcdTUzRDFcIiwgbGluazogXCIvZG9jcy9rYWlmYS9cdTVERTVcdTUxNzdcdTY1NTlcdTdBMEIubWRcIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIkphdmFcIiwgbGluazogXCIvZG9jcy9rYWlmYS9qYXZhL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiSURFQVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2lkZWEvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTY1NzBcdTYzNkVcdTVFOTNcIiwgbGluazogXCIvZG9jcy9rYWlmYS9kYi9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIm1hdmVuXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvbWF2ZW4vXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJub2RlXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvbm9kZS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInZ1ZVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3Z1ZS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcImh0dHBcIiwgbGluazogXCIvZG9jcy9rYWlmYS9odHRwL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwid2Vic2VydmljZVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3dlYnNlcnZpY2UvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJhY3Rpdml0aVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2FjdGl2aXRpL1wifSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTdCMkNcdTRFMDlcdTY1QjlcdTYzRDJcdTRFRjYnLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJuZ2lueFwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL25naW54L1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwibmFjb3NcIiwgbGluazogXCIvZG9jcy9rYWlmYS9uYWNvcy9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInJlZGlzXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvcmVkaXMvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJzZWF0YVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3NlYXRhL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwic2VudGluZWxcIiwgbGluazogXCIvZG9jcy9rYWlmYS9zZW50aW5lbC9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInNreXdhbGtpbmdcIiwgbGluazogXCIvZG9jcy9rYWlmYS9za3l3YWxraW5nL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiS2Fma2FcIiwgbGluazogXCIvZG9jcy9rYWlmYS9rYWZrYS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIk5pRmlcIiwgbGluazogXCIvZG9jcy9rYWlmYS9uaWZpL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiT0dHXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvb2dnL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiQ2FuYWxcIiwgbGluazogXCIvZG9jcy9rYWlmYS9jYW5hbC9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInpvb2tlZXBlclwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3pvb2tlZXBlci9cIn0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU3Q0ZCXHU3RURGJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvYmFzaWNzL1x1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERi5tZFwifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiRG9ja2VyXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvZG9ja2VyL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwibGludXhcIiwgbGluazogXCIvZG9jcy9rYWlmYS9saW51eC9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIldpbmRvd3NcIiwgbGluazogXCIvZG9jcy9rYWlmYS93aW5kb3cvXCJ9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnXHU3MjQ4XHU2NzJDdjIueCcsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dGV4dDogXCJcdTcyNDhcdTY3MkN2MS54XCIsIGxpbms6IFwiaHR0cDovL2xpbmdkdV9kb3UuZ2l0ZWUuaW8vbGluZ2R1L1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NzI0OFx1NjcyQ3YyLnhcIiwgbGluazogXCIvXCJ9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICAvLyB7dGV4dDogJ1RpbWVMaW5lJywgbGluazogJy90aW1lbGluZS8nfSxcbiAgICB7dGV4dDogXCJcdTc1NTlcdThBMDBcdTY3N0ZcIiwgbGluazogXCIvcGx1Z2luL1x1NzU1OVx1OEEwMFx1Njc3Ri5tZFwifSxcbiAgICB7dGV4dDogXCJcdTYyMTFcIiwgbGluazogXCIvZG9jcy9tZS9cIn0sXG4gICAge1xuICAgICAgICB0ZXh0OiBcIlx1NzZGOFx1NTE3M1x1NUI5OFx1NjVCOVx1NjU4N1x1Njg2M1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge3RleHQ6IFwiXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXCIsIGxpbms6IFwiaHR0cHM6Ly92Mi52dWVwcmVzcy52dWVqcy5vcmcvemgvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU4QkM0XHU4QkJBXHU2M0QyXHU0RUY2XCIsIGxpbms6IFwiaHR0cHM6Ly92c3N1ZS5qcy5vcmcvemgvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU4MkU1XHU0RjlEXCIsIGxpbms6IFwiaHR0cDovL2RvYy5ydW95aS52aXAvXCJ9LFxuICAgICAgICAgICAgLy8ge3RleHQ6IFwiXHU4QkM0XHU4QkJBXHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XHU3NkY4XHU1MTczXHU4QkY0XHU2NjBFXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3F1ZXN0aW9uLzM5MjM1ODQ2N1wifSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1OTRGRVx1NjNBNVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge3RleHQ6IFwiXHU2QzQ5XHU2ODNDXHU3NDVFXCIsIGxpbms6IFwiaHR0cDovL2xpbmNoZW5nZ3UuZ2l0ZWUuaW8vYmxvZy9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJNci5cdTc0MDZcIiwgbGluazogXCJodHRwczovL2l0d2FuZ3hsLmdpdGVlLmlvL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1OTYzRlx1ODY1QVx1NTQwQ1x1NUI2Nlx1NzY4NFx1NTBBOFx1NzI2OVx1OTVGNFwiLCBsaW5rOiBcImh0dHBzOi8vYXh1dG9uZ3h1ZS5jb20vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiemhvdWthaXNodW5cIiwgbGluazogXCJodHRwczovL3pob3VrYWlzaHVuLmdpdGVlLmlvL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlRpQW1vXHVEODNEXHVERUI2XCIsIGxpbms6IFwiaHR0cHM6Ly93d3cueXVxdWUuY29tL3RpYW1vLWY3dGZ5L3hyMTM5eS9pZDF1N2dcIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdTRFMDBcdTY3OUFcdTUyNERcdTdBRUZcdTdBMEJcdTVFOEZcdTVBOUJcdTc2ODRibG9nXCIsIGxpbms6IFwiaHR0cHM6Ly9wYW5qaW5neWkudG9wL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcInl5c2hpbm9cIiwgbGluazogXCJodHRwczovL3YtYmxvZy55eXNoaW5vLnRvcC9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCIgX1x1OUU0NVx1NEUwRFx1OThERlx1ODM0OV9cIiwgbGluazogXCJodHRwczovL2hhdmV5dWFuLmdpdGh1Yi5pby9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdTVDNzFcdTY3MDhcdTg4NENcIiwgbGluazogXCJodHRwczovL3NoYW55dWUudGVjaC9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdTdBMEJcdTVFOEZcdTU0NThcdTVCRkNcdTgyMkFcIiwgbGluazogXCJodHRwczovL2N4eTUyMS5jb20vaW5kZXguaHRtbFwifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NUYwMFx1NkU5MFx1NUMwRlx1NTIwNlx1OTYxRlwiLCBsaW5rOiBcImh0dHBzOi8vc291cmNldGVhbS5naXRlZS5pby9ibG9nL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NTI0RFx1N0FFRlx1NUI5RVx1OUE4Q1x1NUJBNFwiLCBsaW5rOiBcImh0dHBzOi8vZnJvbnRsYWIuZ2l0ZWUuaW8vYmxvZy9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJKYXZhXHU2MjgwXHU2NzJGXHU2MzA3XHU1MzE3XCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuamF2YW5vcnRoLmNuL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcInB5dGhvblx1NjI4MFx1NjcyRlwiLCBsaW5rOiBcImh0dHA6Ly93d3cuanVzdGRvcHl0aG9uLmNvbS9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdTYyODBcdTY3MkZcdTUzNUFcdTVCQTJcdTgwNTRcdTc2REZcIiwgbGluazogXCJodHRwOi8vdGVjaGJsb2cucHViL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcInNwcmluZyBib290XHU0RTJEXHU2NTg3XHU1QkZDXHU4MjJBXCIsIGxpbms6IFwiaHR0cDovL3NwcmluZ2Jvb3QuZnVuL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcInNwcmluZyBjbG91ZFx1NEUyRFx1NjU4N1x1NUJGQ1x1ODIyQVwiLCBsaW5rOiBcImh0dHA6Ly9zcHJpbmdjbG91ZC5mdW4vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiTmlGaVx1NEUyRFx1NjU4N1x1NjU4N1x1Njg2M1wiLCBsaW5rOiBcImh0dHBzOi8vbmlmaWNoaW5hLmdpdGVlLmlvL1wifSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyB7XG4gICAgLy8gICAgIHRleHQ6ICdcdTUzQzJcdTgwMDMnLFxuICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdWdWVQcmVzcycsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY2xpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY29uZmlnLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZnJvbnRtYXR0ZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jb21wb25lbnRzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3RoZW1lLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NsaWVudC1hcGkubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9ub2RlLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NjI1M1x1NTMwNVx1NURFNVx1NTE3NycsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvYnVuZGxlci92aXRlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvYnVuZGxlci93ZWJwYWNrLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4JyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2NvbmZpZy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZnJvbnRtYXR0ZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudHMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL21hcmtkb3duLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9zdHlsZXMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2V4dGVuZGluZy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRleHQ6ICdcdTYzRDJcdTRFRjYnLFxuICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUyOUZcdTgwRkQnLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9iYWNrLXRvLXRvcC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9jb250YWluZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZXh0ZXJuYWwtbGluay1pY29uLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2dvb2dsZS1hbmFseXRpY3MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vbWVkaXVtLXpvb20ubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vbnByb2dyZXNzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3JlZ2lzdGVyLWNvbXBvbmVudHMubWQnLFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTUxODVcdTVCQjlcdTY0MUNcdTdEMjInLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9kb2NzZWFyY2gubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2VhcmNoLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnUFdBJyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHdhLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3B3YS1wb3B1cC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1OEJFRFx1NkNENVx1OUFEOFx1NEVBRScsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3ByaXNtanMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2hpa2kubWQnLFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTRFM0JcdTk4OThcdTVGMDBcdTUzRDEnLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9hY3RpdmUtaGVhZGVyLWxpbmtzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2dpdC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wYWxldHRlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3RoZW1lLWRhdGEubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vdG9jLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGV4dDogJ1x1NEU4Nlx1ODlFM1x1NjZGNFx1NTkxQScsXG4gICAgLy8gICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NkRGMVx1NTE2NScsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9hZHZhbmNlZC9hcmNoaXRlY3R1cmUubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL3BsdWdpbi5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvdGhlbWUubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29va2Jvb2snLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGluazogJy96aC9hZHZhbmNlZC9jb29rYm9vay8nLFxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTUxNzZcdTRFRDZcdThENDRcdTZFOTAnLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvY29udHJpYnV0aW5nLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0F3ZXNvbWUgVnVlUHJlc3MnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVwcmVzcy9hd2Vzb21lLXZ1ZXByZXNzJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGV4dDogYHYke3ZlcnNpb259YCxcbiAgICAvLyAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUU1XHU1RkQ3JyxcbiAgICAvLyAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL3Z1ZXByZXNzLW5leHQvYmxvYi9tYWluL0NIQU5HRUxPRy5tZCcsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICd2MS54JyxcbiAgICAvLyAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvemgvJyxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ3YwLngnLFxuICAgIC8vICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3YwLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC8nLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyB9LFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdXRpbC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvdXRpbC5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InICAvLyBcImdsb2JcIjogXCJeNy4yLjNcIlxyXG4vLyBjb25zdCBnbG9iID0gcmVxdWlyZSgnZ2xvYicpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcdTgzQjdcdTUzRDZcdTRGQTdcdThGQjlcdTY4MEZcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICogQHJldHVybnMge3t9fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuU2lkZWJhckNvbmZpZygpIHtcclxuICAgIHJldHVybiBnZW5TaWRlYmFyQ29uZmlnMigpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5TaWRlYmFyQ29uZmlnMigpIHtcclxuICAgIGxldCBzaWRlQmFyRGF0YSA9IHt9XHJcbiAgICBsZXQgYWFhID0gW11cclxuXHJcbiAgICBnZXROYXZiYXIoKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBsaW5rID0gaXRlbS5saW5rOy8vIFx1OERFRlx1NzUzMVxyXG4gICAgICAgIGxldCBjaCA9IGl0ZW0uY2hpbGRyZW47Ly8gXHU1QjUwXHU5NkM2XHJcblxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGdldENoaWxkcmVuKGxpbmspO1xyXG5cclxuICAgICAgICBpZihjaCE9bnVsbCl7XHJcbiAgICAgICAgICAgIC8vIHNpZGVCYXJEYXRhW2Ake2xpbmt9YF09YWEoY2gpO1xyXG4gICAgICAgICAgICBhYShjaCxzaWRlQmFyRGF0YSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaWRlQmFyRGF0YVtgJHtsaW5rfWBdID0gW3t0ZXh0OiAnXHUzMDA3XHUwMEIwJywgY2hpbGRyZW59XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGluayE9bnVsbCl7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJylcclxuICAgIC8vIHNpZGVCYXJEYXRhLmZvckVhY2goaXRlbT0+e1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5jaGlsZHJlbilcclxuICAgIC8vXHJcbiAgICAvLyB9KVxyXG4gICAgY29uc29sZS5sb2coc2lkZUJhckRhdGEpXHJcbiAgICByZXR1cm4gc2lkZUJhckRhdGFcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFhKHQsc2lkZUJhckRhdGEpe1xyXG4gICAgdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBhICA9IFtdXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oaXRlbS5saW5rKTtcclxuICAgICAgICBhLnB1c2goe1xyXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzaWRlQmFyRGF0YVtgJHtpdGVtLmxpbmt9YF0gPSBhO1xyXG4gICAgfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGEuYXQoMSkpXHJcbiAgICAvLyByZXR1cm4gYTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcdTkwMTJcdTVGNTJcdTgzQjdcdTUzRDZcdTVCRkNcdTgyMkFcdTY4MEZcdTRFMkRcdTc2ODRcdThERUZcdTc1MzFcdTU3MzBcdTU3NDBcclxuICogQHBhcmFtIG5hdlxyXG4gKiBAcGFyYW0gYVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0TmF2S2V5cyhuYXYsIGEpIHtcclxuICAgIG5hdi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmxpbmsgIT0gbnVsbCAmJiBpdGVtLmxpbmsuaW5kZXhPZignLy8nKSA8IDAgJiYgaXRlbS5saW5rICE9PSAnLycpIHtcclxuICAgICAgICAgICAgYS5wdXNoKGl0ZW0ubGluayk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0TmF2S2V5cyhpdGVtLmNoaWxkcmVuLCBhKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qXHJcbiAqIFx1ODNCN1x1NTNENlx1NjU4N1x1NEVGNlx1NTkzOVx1NEUwQlx1NjI0MFx1NjcwOSBtZCBcdTY1ODdcdTRFRjZcdTU0MERcdTUyMTdcdTg4NjhcclxuICogaW5wdXQgXHU3NkVFXHU1RjU1XHU1NDBEXHJcbiAqIHJldHVybiBBcnJhcnlcclxuICovXHJcbmZ1bmN0aW9uIGdldENoaWxkcmVuKGRpck5hbWUpIHtcclxuICAgIGNvbnN0IG5hbWVzID0gW11cclxuICAgIGxldCBnbG9iUGF0aCA9IHBhdGgucmVzb2x2ZShgLi9kb2NzLyR7ZGlyTmFtZX0qLm1kYClcclxuICAgIGNvbnNvbGUubG9nKCdnbG9iUGF0aDonKVxyXG4gICAgY29uc29sZS5sb2coZ2xvYlBhdGgpXHJcbiAgICBnbG9iLnN5bmMoZ2xvYlBhdGgpLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHBhdGgucGFyc2UoZmlsZSkuYmFzZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lOicpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSlcclxuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCdxaXV6aGFveGluJykgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5nZHUgPSAnJztcclxuICAgICAgICAgICAgLy8gaWYgKG5hbWUuaW5kZXhPZignUkVBRE1FJykgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsaW5nZHUgPSBuYW1lLnNwbGl0KCcubWQnKVswXTtcclxuICAgICAgICAgICAgLy8gICAgIGxpbmdkdSA9IG5hbWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbGluZ2R1ID0gZGlyTmFtZStuYW1lO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsaW5nZHUpXHJcbiAgICAgICAgICAgIG5hbWVzLnB1c2gobGluZ2R1KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZygnLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vJylcclxuICAgIGNvbnNvbGUubG9nKGRpck5hbWUpXHJcbiAgICBjb25zb2xlLmxvZyhuYW1lcylcclxuICAgIHJldHVybiBuYW1lc1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Z2VuU2lkZWJhckNvbmZpZyxnZXRDaGlsZHJlbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNFxcXFxcdTUzNUFcdTVCQTJcXFxcdnVlcHJlc3MtbGluZ2R1LXYyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcc2lkZWJhclxcXFxteS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9zaWRlYmFyL215LnRzXCI7aW1wb3J0IHR5cGUge1NpZGViYXJDb25maWd9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0JztcblxuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cblxuLy8gXHU2MjExXHU3Njg0XHU0RkE3XHU4RkI5XHU2ODBGXHU5MTREXHU3RjZFXG5leHBvcnQgY29uc3Qgc2lkZWJhck15OiBTaWRlYmFyQ29uZmlnID0ge1xuICAgICcvZG9jcy9iYXNpY3MvJzogW3t0ZXh0OiAnXHU1N0ZBXHU3ODQwJywgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9iYXNpY3MvJyksfV0sXG4gICAgJy9ib29rbWFyay8nOiBbe3RleHQ6ICdcdTRFNjZcdTdCN0UnLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9ib29rbWFyay8nKSx9XSxcbiAgICAnL2RvY3MvYm9rZS8nOltcbiAgICAgICAge3RleHQ6ICdcdTUzNUFcdTVCQTInLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2Jva2UvJyl9LFxuICAgICAgICB7dGV4dDogJ21hcmtkb3duJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9ib2tlL21hcmtkb3duLycpfSxcbiAgICBdLFxuICAgIC8vIFx1NUYwMFx1NTNEMVx1NzZGOFx1NTE3M1xuICAgICcvZG9jcy9rYWlmYS8nOltcbiAgICAgICAge3RleHQ6ICdcdTVERTVcdTRGNUNcdTZENDFhY3Rpdml0aScsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvYWN0aXZpdGkvJyl9LFxuICAgICAgICB7dGV4dDogJ1x1NjRDRFx1NEY1Q1x1N0NGQlx1N0VERicsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvYmFzaWNzLycpfSxcbiAgICAgICAge3RleHQ6ICdjYW5hbCcsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvY2FuYWwvJyl9LFxuICAgICAgICB7dGV4dDogJ1x1NjU3MFx1NjM2RVx1NUU5MycsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvZGIvJyl9LFxuICAgICAgICB7dGV4dDogJ2RvY2tlcicsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvZG9ja2VyLycpfSxcbiAgICAgICAge3RleHQ6ICdodHRwJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9odHRwLycpfSxcbiAgICAgICAge3RleHQ6ICdpZGVhJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9pZGVhLycpfSxcbiAgICAgICAge3RleHQ6ICdqYXZhJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9qYXZhLycpfSxcbiAgICAgICAgLy8ge3RleHQ6ICdrYWlrYScsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEva2Fpa2EvJyl9LFxuICAgICAgICB7dGV4dDogJ1x1NkQ4OFx1NjA2Rlx1NEUyRFx1OTVGNFx1NEVGNmthZmthJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9rYWZrYS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnbGludXgnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL2xpbnV4LycpfSxcbiAgICAgICAge3RleHQ6ICdtYXZlbicsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvbWF2ZW4vJyl9LFxuICAgICAgICB7dGV4dDogJ1x1NkNFOFx1NTE4Q1x1MzAwMVx1OTE0RFx1N0Y2RVx1NEUyRFx1NUZDM25hY29zJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9uYWNvcy8nKX0sXG4gICAgICAgIHt0ZXh0OiAnbmdpbngnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL25naW54LycpfSxcbiAgICAgICAge3RleHQ6ICduaWZpJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9uaWZpLycpfSxcbiAgICAgICAge3RleHQ6ICdub2RlJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9ub2RlLycpfSxcbiAgICAgICAge3RleHQ6ICdvZ2cnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL29nZy8nKX0sXG4gICAgICAgIHt0ZXh0OiAncmVkaXMnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL3JlZGlzLycpfSxcbiAgICAgICAge3RleHQ6ICdzZWF0YScsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvc2VhdGEvJyl9LFxuICAgICAgICB7dGV4dDogJ1x1NzE5NFx1NjVBRFx1OTY0RFx1N0VBN3NlbnRpbmVsJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9zZW50aW5lbC8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU5NEZFXHU4REVGXHU4RkZEXHU4RTJBc2t5d2Fsa2luZycsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvc2t5d2Fsa2luZy8nKX0sXG4gICAgICAgIHt0ZXh0OiAndnVlJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS92dWUvJyl9LFxuICAgICAgICB7dGV4dDogJ3dlYnNlcnZpY2UnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL3dlYnNlcnZpY2UvJyl9LFxuICAgICAgICB7dGV4dDogJ3dpbmRvdycsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvd2luZG93LycpfSxcbiAgICAgICAge3RleHQ6ICd6b29rZWVwZXInLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL3pvb2tlZXBlci8nKX0sXG4gICAgXSxcbiAgICAnL2RvY3MvbWUvJzpbe3RleHQ6J1x1NTE3M1x1NEU4RVx1NjIxMScsY2hpbGRyZW46WycvZG9jcy9tZS9SRUFETUUubWQnXX1dLFxuXG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gJy96aC9ndWlkZS8nOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRleHQ6ICdcdTYzMDdcdTUzNTcnLFxuICAgIC8vICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL1JFQURNRS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9nZXR0aW5nLXN0YXJ0ZWQubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvY29uZmlndXJhdGlvbi5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9wYWdlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL21hcmtkb3duLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL2Fzc2V0cy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9pMThuLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL2RlcGxveW1lbnQubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvdGhlbWUubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvcGx1Z2luLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL2J1bmRsZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvbWlncmF0aW9uLm1kJyxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gXSxcbiAgICAvLyAnL3poL2FkdmFuY2VkLyc6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogJ1x1NkRGMVx1NTE2NScsXG4gICAgLy8gICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvYXJjaGl0ZWN0dXJlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL3BsdWdpbi5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9hZHZhbmNlZC90aGVtZS5tZCcsXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiAnQ29va2Jvb2snLFxuICAgIC8vICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL1JFQURNRS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9hZHZhbmNlZC9jb29rYm9vay91c2FnZS1vZi1jbGllbnQtY29uZmlnLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL2FkZGluZy1leHRyYS1wYWdlcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9hZHZhbmNlZC9jb29rYm9vay9tYWtpbmctYS10aGVtZS1leHRlbmRhYmxlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL3Bhc3NpbmctZGF0YS10by1jbGllbnQtY29kZS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9hZHZhbmNlZC9jb29rYm9vay9tYXJrZG93bi1hbmQtdnVlLXNmYy5tZCcsXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICB9LFxuICAgIC8vIF0sXG4gICAgLy8gJy96aC9yZWZlcmVuY2UvJzogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiAnVnVlUHJlc3MgXHU1M0MyXHU4MDAzJyxcbiAgICAvLyAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIC8vICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jbGkubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NvbmZpZy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZnJvbnRtYXR0ZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NvbXBvbmVudHMubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi1hcGkubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3RoZW1lLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY2xpZW50LWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2Uvbm9kZS1hcGkubWQnLFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogJ1x1NjI1M1x1NTMwNVx1NURFNVx1NTE3N1x1NTNDMlx1ODAwMycsXG4gICAgLy8gICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvYnVuZGxlci92aXRlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3dlYnBhY2subWQnLFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogJ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1NTNDMlx1ODAwMycsXG4gICAgLy8gICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb25maWcubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZnJvbnRtYXR0ZXIubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50cy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9tYXJrZG93bi5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9zdHlsZXMubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZXh0ZW5kaW5nLm1kJyxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRleHQ6ICdcdTVCOThcdTY1QjlcdTYzRDJcdTRFRjZcdTUzQzJcdTgwMDMnLFxuICAgIC8vICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgLy8gICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NUUzOFx1NzUyOFx1NTI5Rlx1ODBGRCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vYmFjay10by10b3AubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2NvbnRhaW5lci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZXh0ZXJuYWwtbGluay1pY29uLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9nb29nbGUtYW5hbHl0aWNzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9tZWRpdW0tem9vbS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vbnByb2dyZXNzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9yZWdpc3Rlci1jb21wb25lbnRzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NTE4NVx1NUJCOVx1NjQxQ1x1N0QyMicsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZG9jc2VhcmNoLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9zZWFyY2gubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiAnUFdBJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wd2EubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3B3YS1wb3B1cC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRleHQ6ICdcdThCRURcdTZDRDVcdTlBRDhcdTRFQUUnLFxuICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3ByaXNtanMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3NoaWtpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NEUzQlx1OTg5OFx1NUYwMFx1NTNEMScsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vYWN0aXZlLWhlYWRlci1saW5rcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZ2l0Lm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wYWxldHRlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi90aGVtZS1kYXRhLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi90b2MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICB9LFxuICAgIC8vIF0sXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUSxvQkFBbUI7QUFFM0IsU0FBUSxzQkFBcUI7OztBQ0R0QixJQUFNLE9BQXFCO0FBQUEsRUFDaEM7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLENBQUMsUUFBUSxFQUFFLEtBQUssWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBQUEsRUFDM0QsQ0FBQyxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsU0FBUyxXQUFXLENBQUM7QUFBQSxFQUMxRCxDQUFDLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixTQUFTLFdBQVcsQ0FBQztBQUFBLEVBQ3BFLENBQUMsUUFBUSxFQUFFLE1BQU0seUNBQXlDLFNBQVMsUUFBUSxDQUFDO0FBQUEsRUFDNUU7QUFBQSxJQUNFO0FBQUEsSUFDQSxFQUFFLEtBQUssb0JBQW9CLE1BQU0scUNBQXFDO0FBQUEsRUFDeEU7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsU0FBUyxVQUFVLENBQUM7QUFBQSxFQUNoRSxDQUFDLFFBQVEsRUFBRSxNQUFNLGVBQWUsU0FBUyxVQUFVLENBQUM7QUFDdEQ7OztBQ3ZDd1gsU0FBUyxxQkFBcUI7QUFDdFosU0FBUyxVQUFVO0FBRDZMLElBQU0sMkNBQTJDO0FBR2pRLElBQU1BLFdBQVUsY0FBYyx3Q0FBZTtBQUV0QyxJQUFNLFVBQVUsR0FBRztBQUFBLEVBQ3hCQSxTQUFRLFFBQVEsNkJBQTZCO0FBQy9DLEVBQUU7OztBQ0pLLElBQU0sV0FBeUI7QUFBQSxFQUNwQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTSxJQUFJO0FBQUEsSUFDVixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FDeElPLElBQU0sV0FBeUI7QUFBQSxFQUNwQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFB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

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvaGVhZC50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL21ldGEudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvZW4udHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvemgudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvbXkudHMiLCAiZG9jcy8udnVlcHJlc3MvdXRpbC5qcyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvbXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjsvLyBcdTlFRDhcdThCQTRcdTRFM0JcdTk4OThcclxuaW1wb3J0IHtkZWZhdWx0VGhlbWV9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0JztcclxuLy8gXHU1OTBEXHU1MjM2XHJcbmltcG9ydCB7Y29weUNvZGVQbHVnaW59IGZyb20gJ3Z1ZXByZXNzLXBsdWdpbi1jb3B5LWNvZGUyJztcclxuLy8gXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXHJcbi8vIGltcG9ydCB7c2VhcmNoUGx1Z2lufSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaCc7XHJcbi8vIFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQge2hlYWQsIG5hdmJhck15LCBzaWRlYmFyTXl9IGZyb20gJy4vY29uZmlncyc7XHJcbi8vIG1hcmtkb3duIFx1NTg5RVx1NUYzQVxyXG5pbXBvcnQgeyBtZEVuaGFuY2VQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLW1kLWVuaGFuY2VcIjtcclxuXHJcbmltcG9ydCB7IGJnbU11c2ljUGxheWVyIH0gZnJvbSBcIkBhbnlmb3JrL3Z1ZXByZXNzLXBsdWdpbi1iZ20tcGxheWVyLW5leHRcIjtcclxuXHJcblxyXG4vKlxyXG4gICAgXCJAdnVlcHJlc3MvY2xpZW50XCI6IFwiMi4wLjAtYmV0YS42MlwiLFxyXG4gICAgXCJ2dWVcIjogXCJeMy4zLjRcIixcclxuICAgIFwidnVlcHJlc3NcIjogXCIyLjAuMC1iZXRhLjYyXCIsXHJcblxyXG4gICAgXCJnbG9iXCI6IFwiXjcuMi4zXCIsXHJcbiAgICBcIkB2dWVwcmVzcy9wbHVnaW4tc2VhcmNoXCI6IFwiXjIuMC4wLWJldGEuNjJcIixcclxuICAgIFwiQHZ1ZXByZXNzL3NoYXJlZFwiOiBcIl4yLjAuMC1iZXRhLjYyXCIsXHJcbiAgICBcIkB2dWVwcmVzcy90aGVtZS1kZWZhdWx0XCI6IFwiXjIuMC4wLWJldGEuNjJcIixcclxuICAgIFwiQHZ1ZXByZXNzL2NvcmVcIjogXCJeMi4wLjAtYmV0YS42MlwiLFxyXG4gICAgXCJAdnVlcHJlc3MvdXRpbHNcIjogXCJeMi4wLjAtYmV0YS42MlwiLFxyXG4gICAgXCJ2dWVwcmVzcy1wbHVnaW4tY29weS1jb2RlMlwiOiBcIl4yLjAuMC1iZXRhLjYyXCJcclxuICovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuXHJcbiAgICBoZWFkLFxyXG4gICAgZGVzY3JpcHRpb246ICd2dWVwcmVzcy1saW5nZHUtdjInLFxyXG4gICAgLy8gXHU3NkVFXHU3Njg0XHU1NzMwXHJcbiAgICBkZXN0OiAnLi9kaXN0JyxcclxuICAgIGJhc2U6ICcvdnVlcHJlc3MtbGluZ2R1LXYyLycsXHJcblxyXG4gICAgcGx1Z2luczogW1xyXG5cclxuICAgICAgICBiZ21NdXNpY1BsYXllcih7XHJcbiAgICAgICAgICAgIGF1ZGlvczogW1xyXG4gICAgICAgICAgICAgICAgLy9cdTY3MkNcdTU3MzBcdTk3RjNcdTRFNTA0XHU5OTk2XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1x1NEUwMFx1NzUxRlx1NjI0MFx1NzIzMS5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogJ1x1NEUwMFx1NzUxRlx1NjI0MFx1NzIzMS5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9iZ20vXHU0RTAwXHU3NTFGXHU2MjQwXHU3MjMxLm1wMycsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6ICcvaW1nL2xvZ28ucG5nJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnXHU1MzYxXHU1MTlDJyxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6ICdcdTUzNjFcdTUxOUNcdTk0QTJcdTc0MzRcdTcyNDgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9tdXNpYy9jYW5vbi9jYW5vbi5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnL211c2ljL2Nhbm9uL2Nhbm9uLmpwZydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZpY3RvcnkoXHU4MERDXHU1MjI5KScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0OiAnVHdvIFN0ZXBzIEZyb20gSGVsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL211c2ljL3ZpY3RvcnkvdmljdG9yeS5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnL211c2ljL3ZpY3RvcnkvdmljdG9yeS5qcGcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdcdTk4Q0VcdTVDNDVcdTRGNEZcdTc2ODRcdTg4NTdcdTkwNTMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogJ1x1OThDRVx1NUM0NVx1NEY0Rlx1NzY4NFx1ODg1N1x1OTA1MyBcdTk0QTJcdTc0MzRcdTcyNDggLSBcdTk0QTJcdTc0MzRcdTY2RjInLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9tdXNpYy93aW5kL3dpbmQubXAzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjogJy9tdXNpYy93aW5kL3dpbmQuanBnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnXHU1OTFDXHU3Njg0XHU5NEEyXHU3NDM0XHU2NkYyJyxcclxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6ICdcdTU5MUNcdTc2ODRcdTk0QTJcdTc0MzRcdTY2RjJcdTRFOTQgLSBcdTc3RjNcdThGREInLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9tdXNpYy9uaWdodC9uaWdodC5tcDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOiAnL211c2ljL25pZ2h0L25pZ2h0LmpwZydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBtZEVuaGFuY2VQbHVnaW4oe1xyXG4gICAgICAgICAgICAvLyBcdTVGMDBcdTU0MkZcdTUzNjFcdTcyNDdcdTY1MkZcdTYzMDFcclxuICAgICAgICAgICAgY2FyZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBmaWd1cmVcclxuICAgICAgICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTYxRDJcdTUyQTBcdThGN0RcclxuICAgICAgICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OEJCMFxyXG4gICAgICAgICAgICBpbWdNYXJrOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTU5MjdcdTVDMEZcclxuICAgICAgICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8gXHU0RUUzXHU3ODAxXHU1NzU3XHU1OTBEXHU1MjM2XHJcbiAgICAgICAgY29weUNvZGVQbHVnaW4oe1xyXG4gICAgICAgICAgICBmYW5jeTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd0luTW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAnLyc6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5OiAnXHU1OTBEXHU1MjM2JyxcclxuICAgICAgICAgICAgICAgICAgICBjb3BpZWQ6ICdcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpbnQ6ICc8Yj5cdTU5MEQmbmJzcFx1NTIzNiZuYnNwXHU2MjEwJm5ic3BcdTUyOUY8Yj48QlI+QFx1MkI1NVx1MDBCMCAgJytjdXJyZW50VGltZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8gXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXHJcbiAgICAgICAgLy8gc2VhcmNoUGx1Z2luKHtcclxuICAgICAgICAvLyAgICAgbG9jYWxlczoge1xyXG4gICAgICAgIC8vICAgICAgICAgJy8nOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICcvemgvJzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAnL2VuLyc6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIH0pLFxyXG4gICAgXSxcclxuXHJcbiAgICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcclxuXHJcbiAgICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MjA3XHU2MzYyXHU5ODlDXHU4MjcyXHU2QTIxXHU1RjBGXHU3Njg0XHU1MjlGXHU4MEZEXHUzMDAyXHU1OTgyXHU2NzlDXHU4QkJFXHU3RjZFXHU0RTNBIHRydWUgXHVGRjBDXHU1QzA2XHU0RjFBXHU1NzI4XHU1QkZDXHU4MjJBXHU2ODBGXHU1QzU1XHU3OTNBXHU0RTAwXHU0RTJBXHU1MjA3XHU2MzYyXHU5ODlDXHU4MjcyXHU2QTIxXHU1RjBGXHU3Njg0XHU2MzA5XHU5NEFFXHUzMDAyXHJcbiAgICAgICAgY29sb3JNb2RlU3dpdGNoOiB0cnVlLFxyXG4gICAgICAgIGNvbG9yTW9kZTogXCJhdXRvXCIsXHJcbiAgICAgICAgLy8gXHU5OTk2XHU5ODc1XHU4REVGXHU1Rjg0XHJcbiAgICAgICAgaG9tZTogXCIvXCIsXHJcbiAgICAgICAgLy8gUHVibGljIFx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gICAgICAgIGxvZ286ICcvaW1nL2xvZ28ucG5nJyxcclxuICAgICAgICAvLyBVUkxcclxuICAgICAgICAvLyBsb2dvOiAnaHR0cHM6Ly92dWVqcy5vcmcvaW1hZ2VzL2xvZ28ucG5nJyxcclxuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTYwRjNcdTU3MjhcdTU5MUNcdTk1RjRcdTZBMjFcdTVGMEZcdTRFMkRcdTRGN0ZcdTc1MjhcdTRFMERcdTU0MENcdTc2ODQgTG9nbyBcdTU2RkVcdTcyNDdcdUZGMENcdTVDMzFcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjhcdThCRTVcdTkxNERcdTdGNkVcdTk4NzlcdTMwMDJcclxuICAgICAgICAvLyBsb2dvRGFyazogJy9pbWcvbG9nby5wbmcnLFxyXG4gICAgICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1NjMwOVx1NzE2NyBgb3JnYW5pemF0aW9uL3JlcG9zaXRvcnlgIFx1NzY4NFx1NjgzQ1x1NUYwRlx1OEJCRVx1N0Y2RVx1NUI4M1xyXG4gICAgICAgIC8vIFx1NjIxMVx1NEVFQ1x1NEYxQVx1NUMwNlx1NUI4M1x1NEY1Q1x1NEUzQVx1NEUwMFx1NEUyQSBHaXRIdWIgXHU0RUQzXHU1RTkzIFx1NkU5MFx1NzgwMVx1NTczMFx1NTc0MFxyXG4gICAgICAgIC8vIHJlcG86ICd2dWVqcy92dWVwcmVzcycsXHJcbiAgICAgICAgLy8gXHU0RjYwXHU0RTVGXHU1M0VGXHU0RUU1XHU3NkY0XHU2M0E1XHU1QzA2XHU1QjgzXHU4QkJFXHU3RjZFXHU0RTNBXHU0RTAwXHU0RTJBIFVSTFxyXG4gICAgICAgIHJlcG86ICdodHRwczovL2dpdGVlLmNvbS9saW5nZHVfZG91L2xpbmdkdScsXHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RUQzXHU1RTkzXHU5NEZFXHU2M0E1XHU2NTg3XHU1QjU3XHUzMDAyXHU5RUQ4XHU4QkE0XHU0RUNFIGB0aGVtZUNvbmZpZy5yZXBvYCBcdTRFMkRcdTgxRUFcdTUyQThcdTYzQThcdTY1QURcdTRFM0FcclxuICAgICAgICAvLyBcIkdpdEh1YlwiL1wiR2l0TGFiXCIvXCJCaXRidWNrZXRcIiBcdTUxNzZcdTRFMkRcdTRFNEJcdTRFMDBcdUZGMENcdTYyMTZcdTY2MkYgXCJTb3VyY2VcIlx1MzAwMlxyXG4gICAgICAgIHJlcG9MYWJlbDogJ1x1NjdFNVx1NzcwQlx1NkU5MFx1NzgwMScsXHJcbiAgICAgICAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXHJcbiAgICAgICAgbmF2YmFyOiBuYXZiYXJNeSxcclxuICAgICAgICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcclxuICAgICAgICBzaWRlYmFyOiBzaWRlYmFyTXksXHJcbiAgICAgICAgc2lkZWJhckRlcHRoOiAzLCAvLyBcdTVENENcdTU5NTdcdTc2ODRcdTY4MDdcdTk4OThcdTk0RkVcdTYzQTVcdUZGMDhcdThGRDlcdTkxQ0NcdThCQkVcdTdGNkVcdTRFM0EzXHU1QzQyXHVGRjA5W1x1NTE2OFx1NUM0MFx1OEJCRVx1N0Y2RV1cclxuICAgICAgICAvLy8gXHU0RUU1XHU0RTBCXHU0RTNBXHU1M0VGXHU5MDA5XHU3Njg0XHU3RjE2XHU4RjkxXHU5NEZFXHU2M0E1XHU5MDA5XHU5ODc5XHJcbiAgICAgICAgLy8gXHU1MDQ3XHU1OTgyXHU0RjYwXHU3Njg0XHU2NTg3XHU2ODYzXHU0RUQzXHU1RTkzXHU1NDhDXHU5ODc5XHU3NkVFXHU2NzJDXHU4RUFCXHU0RTBEXHU1NzI4XHU0RTAwXHU0RTJBXHU0RUQzXHU1RTkzXHVGRjFBXHJcbiAgICAgICAgZG9jc1JlcG86ICdodHRwczovL2dpdGVlLmNvbS9saW5nZHVfZG91L3Z1ZXByZXNzLWxpbmdkdS12MicsXHJcbiAgICAgICAgLy8gXHU1MDQ3XHU1OTgyXHU2NTg3XHU2ODYzXHU0RTBEXHU2NjJGXHU2NTNFXHU1NzI4XHU0RUQzXHU1RTkzXHU3Njg0XHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCXHVGRjFBXHJcbiAgICAgICAgZG9jc0RpcjogJy4uLy4uL3RyZWUvbWFzdGVyLycsXHJcbiAgICAgICAgLy8gXHU1MDQ3XHU1OTgyXHU2NTg3XHU2ODYzXHU2NTNFXHU1NzI4XHU0RTAwXHU0RTJBXHU3Mjc5XHU1QjlBXHU3Njg0XHU1MjA2XHU2NTJGXHU0RTBCXHVGRjFBXHJcbiAgICAgICAgZG9jc0JyYW5jaDogJ21hc3RlcicsXHJcbiAgICAgICAgLy8gXHU5RUQ4XHU4QkE0XHU2NjJGIGZhbHNlLCBcdThCQkVcdTdGNkVcdTRFM0EgdHJ1ZSBcdTY3NjVcdTU0MkZcdTc1MjhcclxuICAgICAgICBlZGl0TGluazogdHJ1ZSxcclxuICAgICAgICAvLyBcdTlFRDhcdThCQTRcdTRFM0EgXCJFZGl0IHRoaXMgcGFnZVwiXHJcbiAgICAgICAgZWRpdExpbmtUZXh0OiAnXHU1RTJFXHU1MkE5XHU2MjExXHU0RUVDXHU2NTM5XHU1NTg0XHU2QjY0XHU5ODc1XHU5NzYyXHVGRjAxJyxcclxuICAgICAgICAvLyBcdTY2M0VcdTc5M0FcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcclxuICAgICAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjQnLCAvLyBzdHJpbmcgfCBib29sZWFuXHJcbiAgICAgICAgLy8gXHU2NjNFXHU3OTNBXHU4RDIxXHU3MzJFXHU4MDA1XHU1MjE3XHU4ODY4XHJcbiAgICAgICAgY29udHJpYnV0b3JzVGV4dDogJ1x1OEQyMVx1NzMyRVx1ODAwNVx1NTIxN1x1ODg2OCcsXHJcblxyXG4gICAgICAgIC8vIHRpcFxyXG4gICAgICAgIHRpcDogJ1x1NjNEMFx1NzkzQScsXHJcbiAgICAgICAgLy8gd2FybmluZ1xyXG4gICAgICAgIHdhcm5pbmc6ICdcdThCNjZcdTU0NEEnLFxyXG4gICAgICAgIC8vIGRhbmdlclxyXG4gICAgICAgIGRhbmdlcjogJ1x1NTM3MVx1OTY2OScsXHJcbiAgICAgICAgLy8gXHU1RjUzXHU3NTI4XHU2MjM3XHU4RkRCXHU1MTY1IDQwNCBcdTk4NzVcdTk3NjJcdTY1RjZcdUZGMENcdTRGMUFcdTRFQ0VcdTY1NzBcdTdFQzRcdTRFMkRcdTk2OEZcdTY3M0FcdTkwMDlcdTUzRDZcdTRFMDBcdTY3NjFcdTRGRTFcdTYwNkZcdThGREJcdTg4NENcdTVDNTVcdTc5M0FcdTMwMDJcclxuICAgICAgICBub3RGb3VuZDogWydcdTY3MkFcdTYyN0VcdTUyMzBcdTk4NzVcdTk3NjInLCAnXHU5ODc1XHU5NzYyXHU0RTBEXHU1QjU4XHU1NzI4JywgJ1x1OTg3NVx1OTc2Mlx1NEUyMlx1NTkzMScsICdcdTk4NzVcdTk3NjJcdTY3MkFcdTYyN0VcdTUyMzAnLCAnTm90IEZvdW5kJywgJ1x1NjI3RVx1NEUwRFx1NTIzMFx1OTg3NVx1OTc2Mlx1NEU4NiddLFxyXG4gICAgICAgIC8vIDQwNCBcdTk4NzVcdTk3NjJcdTRFMkQgXHU4RkQ0XHU1NkRFXHU5OTk2XHU5ODc1IFx1OTRGRVx1NjNBNVx1NzY4NFx1NjU4N1x1NUI1N1x1MzAwMlxyXG4gICAgICAgIGJhY2tUb0hvbWU6ICdcdTU2REVcdTUyMzBcdTk5OTZcdTk4NzUnLFxyXG4gICAgICAgIC8vIFx1NTIwN1x1NjM2Mlx1OTg5Q1x1ODI3Mlx1NkEyMVx1NUYwRlx1NjMwOVx1OTRBRVx1NzY4NFx1NjgwN1x1OTg5OFx1NjU4N1x1NUI1N1x1MzAwMlxyXG4gICAgICAgIHRvZ2dsZUNvbG9yTW9kZTogJ1x1NTIwN1x1NjM2Mlx1OTg5Q1x1ODI3Mlx1NkEyMVx1NUYwRicsXHJcblxyXG4gICAgfSksXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU2NUY2XHU5NUY0XHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJyZW50VGltZSgpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOyAvL1x1NjcwOFx1NEVGRFx1NEVDRTB+MTFcdUZGMENcdTYyNDBcdTRFRTVcdTUyQTBcdTRFMDBcclxuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibW9udGhcIixtb250aCk7XHJcbiAgICB2YXIgZGF0ZUFyciA9IFtcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgIGRhdGUuZ2V0SG91cnMoKSxcclxuICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICBkYXRlLmdldFNlY29uZHMoKSxcclxuICAgIF07XHJcbiAgICAvL1x1NTk4Mlx1Njc5Q1x1NjgzQ1x1NUYwRlx1NjYyRk1NXHU1MjE5XHU5NzAwXHU4OTgxXHU2QjY0XHU2QjY1XHU5QUE0XHVGRjBDXHU1OTgyXHU2NzlDXHU2NjJGTVx1NjgzQ1x1NUYwRlx1NTIxOVx1NkI2NFx1NUZBQVx1NzNBRlx1NkNFOFx1OTFDQVx1NjM4OVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGRhdGVBcnJbaV0gPj0gMSAmJiBkYXRlQXJyW2ldIDw9IDkpIHtcclxuICAgICAgICAgICAgZGF0ZUFycltpXSA9IFwiMFwiICsgZGF0ZUFycltpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgc3RyRGF0ZSA9XHJcbiAgICAgICAgeWVhciArXHJcbiAgICAgICAgXCItXCIgK1xyXG4gICAgICAgIGRhdGVBcnJbMF0gK1xyXG4gICAgICAgIFwiLVwiICtcclxuICAgICAgICBkYXRlQXJyWzFdICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgZGF0ZUFyclsyXSArXHJcbiAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgIGRhdGVBcnJbM10gK1xyXG4gICAgICAgIFwiOlwiICtcclxuICAgICAgICBkYXRlQXJyWzRdO1xyXG4gICAgLy9cdTZCNjRcdTU5MDRcdTUzRUZcdTRFRTVcdTYyRkZcdTU5MTZcdTkwRThcdTc2ODRcdTUzRDhcdTkxQ0ZcdTYzQTVcdTY1MzYgIHN0ckRhdGU6MjAyMi0wNS0wMSAxMzoyNTozMFxyXG4gICAgLy90aGlzLmRhdGUgPSBzdHJEYXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJzdHJEYXRlXCIsc3RyRGF0ZSk7XHJcbiAgICByZXR1cm4gc3RyRGF0ZTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNFxcXFxcdTUzNUFcdTVCQTJcXFxcdnVlcHJlc3MtbGluZ2R1LXYyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAnQHZ1ZXByZXNzL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBoZWFkOiBIZWFkQ29uZmlnW10gPSBbXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMTZ4MTYnLFxuICAgICAgaHJlZjogYC9pbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdgLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemVzOiAnMzJ4MzInLFxuICAgICAgaHJlZjogYC9pbWFnZXMvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmdgLFxuICAgIH0sXG4gIF0sXG4gIFsnbGluaycsIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL21hbmlmZXN0LndlYm1hbmlmZXN0JyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGljYXRpb24tbmFtZScsIGNvbnRlbnQ6ICdWdWVQcmVzcycgfV0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ2FwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlJywgY29udGVudDogJ1Z1ZVByZXNzJyB9XSxcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScsIGNvbnRlbnQ6ICdibGFjaycgfV0sXG4gIFtcbiAgICAnbGluaycsXG4gICAgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgaHJlZjogYC9pbWFnZXMvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdgIH0sXG4gIF0sXG4gIFtcbiAgICAnbGluaycsXG4gICAge1xuICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgIGhyZWY6ICcvaW1hZ2VzL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycsXG4gICAgICBjb2xvcjogJyMzZWFmN2MnLFxuICAgIH0sXG4gIF0sXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJywgY29udGVudDogJyMzZWFmN2MnIH1dLFxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcbl1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0L1x1NTM1QVx1NUJBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxtZXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL21ldGEudHNcIjtpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnXG5pbXBvcnQgeyBmcyB9IGZyb20gJ0B2dWVwcmVzcy91dGlscydcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKVxuXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IGZzLnJlYWRKc29uU3luYyhcbiAgcmVxdWlyZS5yZXNvbHZlKCdAdnVlcHJlc3MvY29yZS9wYWNrYWdlLmpzb24nKVxuKS52ZXJzaW9uXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjRcXFxcXHU1MzVBXHU1QkEyXFxcXHZ1ZXByZXNzLWxpbmdkdS12MlxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXG5hdmJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFJUU3JUE5JUJBJUU5JTk3JUI0LyVFNSU4RCU5QSVFNSVBRSVBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgdHlwZSB7IE5hdmJhckNvbmZpZyB9IGZyb20gJ0B2dWVwcmVzcy90aGVtZS1kZWZhdWx0J1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL21ldGEuanMnXG5cbmV4cG9ydCBjb25zdCBuYXZiYXJFbjogTmF2YmFyQ29uZmlnID0gW1xuICB7XG4gICAgdGV4dDogJ0d1aWRlJyxcbiAgICBsaW5rOiAnL2d1aWRlLycsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnUmVmZXJlbmNlJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnVnVlUHJlc3MnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDTEknLFxuICAgICAgICAgICAgbGluazogJy9yZWZlcmVuY2UvY2xpLmh0bWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJy9yZWZlcmVuY2UvY29uZmlnLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9mcm9udG1hdHRlci5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvY29tcG9uZW50cy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luLWFwaS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvdGhlbWUtYXBpLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9jbGllbnQtYXBpLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9ub2RlLWFwaS5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQnVuZGxlcnMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvcmVmZXJlbmNlL2J1bmRsZXIvdml0ZS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvYnVuZGxlci93ZWJwYWNrLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdEZWZhdWx0IFRoZW1lJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2NvbmZpZy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9mcm9udG1hdHRlci5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb21wb25lbnRzLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL21hcmtkb3duLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL3N0eWxlcy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9leHRlbmRpbmcubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1BsdWdpbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdDb21tb24gRmVhdHVyZXMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9iYWNrLXRvLXRvcC5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2NvbnRhaW5lci5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2V4dGVybmFsLWxpbmstaWNvbi5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2dvb2dsZS1hbmFseXRpY3MubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9tZWRpdW0tem9vbS5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL25wcm9ncmVzcy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL3JlZ2lzdGVyLWNvbXBvbmVudHMubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NvbnRlbnQgU2VhcmNoJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vZG9jc2VhcmNoLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vc2VhcmNoLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQV0EnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9wd2EubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9wd2EtcG9wdXAubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1N5bnRheCBIaWdobGlnaHRpbmcnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi9wcmlzbWpzLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vc2hpa2kubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1RoZW1lIERldmVsb3BtZW50JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vYWN0aXZlLWhlYWRlci1saW5rcy5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL2dpdC5tZCcsXG4gICAgICAgICAgJy9yZWZlcmVuY2UvcGx1Z2luL3BhbGV0dGUubWQnLFxuICAgICAgICAgICcvcmVmZXJlbmNlL3BsdWdpbi90aGVtZS1kYXRhLm1kJyxcbiAgICAgICAgICAnL3JlZmVyZW5jZS9wbHVnaW4vdG9jLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdMZWFybiBNb3JlJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnQWR2YW5jZWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvYWR2YW5jZWQvYXJjaGl0ZWN0dXJlLm1kJyxcbiAgICAgICAgICAnL2FkdmFuY2VkL3BsdWdpbi5tZCcsXG4gICAgICAgICAgJy9hZHZhbmNlZC90aGVtZS5tZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0Nvb2tib29rJyxcbiAgICAgICAgICAgIGxpbms6ICcvYWR2YW5jZWQvY29va2Jvb2svJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Jlc291cmNlcycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy9jb250cmlidXRpbmcubWQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdBd2Vzb21lIFZ1ZVByZXNzJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MvYXdlc29tZS12dWVwcmVzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IGB2JHt2ZXJzaW9ufWAsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NoYW5nZWxvZycsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MvdnVlcHJlc3MtbmV4dC9ibG9iL21haW4vQ0hBTkdFTE9HLm1kJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICd2MS54JyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vdjEudnVlcHJlc3MudnVlanMub3JnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICd2MC54JyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vdjAudnVlcHJlc3MudnVlanMub3JnJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0L1x1NTM1QVx1NUJBMi92dWVwcmVzcy1saW5nZHUtdjIvZG9jcy8udnVlcHJlc3MvY29uZmlncy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNFxcXFxcdTUzNUFcdTVCQTJcXFxcdnVlcHJlc3MtbGluZ2R1LXYyXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZ3NcXFxcbmF2YmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci96aC50c1wiO2ltcG9ydCB0eXBlIHsgTmF2YmFyQ29uZmlnIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vbWV0YS5qcydcblxuZXhwb3J0IGNvbnN0IG5hdmJhclpoOiBOYXZiYXJDb25maWcgPSBbXG4gIHtcbiAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICBsaW5rOiAnL3poL2d1aWRlLycsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU1M0MyXHU4MDAzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnVnVlUHJlc3MnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NsaS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvY29uZmlnLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9mcm9udG1hdHRlci5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvY29tcG9uZW50cy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luLWFwaS5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvdGhlbWUtYXBpLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jbGllbnQtYXBpLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9ub2RlLWFwaS5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2MjUzXHU1MzA1XHU1REU1XHU1MTc3JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3ZpdGUubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL2J1bmRsZXIvd2VicGFjay5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2NvbmZpZy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9mcm9udG1hdHRlci5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb21wb25lbnRzLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL21hcmtkb3duLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL3N0eWxlcy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9leHRlbmRpbmcubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjNEMlx1NEVGNicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NUUzOFx1NzUyOFx1NTI5Rlx1ODBGRCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2JhY2stdG8tdG9wLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vY29udGFpbmVyLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZXh0ZXJuYWwtbGluay1pY29uLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZ29vZ2xlLWFuYWx5dGljcy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL21lZGl1bS16b29tLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vbnByb2dyZXNzLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcmVnaXN0ZXItY29tcG9uZW50cy5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU1MTg1XHU1QkI5XHU2NDFDXHU3RDIyJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZG9jc2VhcmNoLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2VhcmNoLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdQV0EnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wd2EubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wd2EtcG9wdXAubWQnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OEJFRFx1NkNENVx1OUFEOFx1NEVBRScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3ByaXNtanMubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9zaGlraS5tZCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU0RTNCXHU5ODk4XHU1RjAwXHU1M0QxJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vYWN0aXZlLWhlYWRlci1saW5rcy5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2dpdC5tZCcsXG4gICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3BhbGV0dGUubWQnLFxuICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi90aGVtZS1kYXRhLm1kJyxcbiAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vdG9jLm1kJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdcdTRFODZcdTg5RTNcdTY2RjRcdTU5MUEnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTZERjFcdTUxNjUnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICcvemgvYWR2YW5jZWQvYXJjaGl0ZWN0dXJlLm1kJyxcbiAgICAgICAgICAnL3poL2FkdmFuY2VkL3BsdWdpbi5tZCcsXG4gICAgICAgICAgJy96aC9hZHZhbmNlZC90aGVtZS5tZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0Nvb2tib29rJyxcbiAgICAgICAgICAgIGxpbms6ICcvemgvYWR2YW5jZWQvY29va2Jvb2svJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENlx1OEQ0NFx1NkU5MCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgJy96aC9jb250cmlidXRpbmcubWQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdBd2Vzb21lIFZ1ZVByZXNzJyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MvYXdlc29tZS12dWVwcmVzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IGB2JHt2ZXJzaW9ufWAsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MvdnVlcHJlc3MtbmV4dC9ibG9iL21haW4vQ0hBTkdFTE9HLm1kJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICd2MS54JyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vdjEudnVlcHJlc3MudnVlanMub3JnL3poLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAndjAueCcsXG4gICAgICAgIGxpbms6ICdodHRwczovL3YwLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC8nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9cdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjQvXHU1MzVBXHU1QkEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXZiYXJcXFxcbXkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFOSVBMSVCOSVFNyU5QiVBRSVFNyVBOSVCQSVFOSU5NyVCNC8lRTUlOEQlOUElRTUlQUUlQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3MvbmF2YmFyL215LnRzXCI7aW1wb3J0IHR5cGUge05hdmJhckNvbmZpZ30gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXG5pbXBvcnQge3ZlcnNpb259IGZyb20gJy4uL21ldGEuanMnXG4vLyBcdTYyMTFcdTc2ODRcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcbmV4cG9ydCBjb25zdCBuYXZiYXJNeTogTmF2YmFyQ29uZmlnID0gW1xuICAgIHt0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIn0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0ZXh0OiBcIlx1NjU4N1x1Njg2M1wiLCBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6IFwiXHU0RTY2XHU3QjdFXCIsIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvYm9va21hcmsvaW5kZXguaHRtbCcsXG4gICAgLy8gICAgICAgICAgICAgXVxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXVxuICAgIC8vIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnXHU2NzJDXHU3QUQ5XHU1RUZBXHU4QkJFJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2NTg3XHU2ODYzXHU3RjUxXHU3QUQ5XHU1RUZBXHU4QkJFJywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwidnVlcHJlc3NzXCIsIGxpbms6IFwiL2RvY3MvYm9rZS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIm1hcmtkb3duXCIsIGxpbms6IFwiL2RvY3MvYm9rZS9tYXJrZG93bi9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIk1hcmtkb3duIFx1NTg5RVx1NUYzQVwiLCBsaW5rOiBcImh0dHBzOi8vcGx1Z2luLW1kLWVuaGFuY2UudnVlanMucHJlc3MvemgvXCJ9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnSmF2YVx1NTQ2OFx1OEZCOScsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1NTdGQVx1Nzg0MCcsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIlx1NUYwMFx1NTNEMVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL1x1NURFNVx1NTE3N1x1NjU1OVx1N0EwQi5tZFwifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiSmF2YVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2phdmEvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJJREVBXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvaWRlYS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2RiL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwibWF2ZW5cIiwgbGluazogXCIvZG9jcy9rYWlmYS9tYXZlbi9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIm5vZGVcIiwgbGluazogXCIvZG9jcy9rYWlmYS9ub2RlL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwidnVlXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvdnVlL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiaHR0cFwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2h0dHAvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJ3ZWJzZXJ2aWNlXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvd2Vic2VydmljZS9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcImFjdGl2aXRpXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvYWN0aXZpdGkvXCJ9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1N0IyQ1x1NEUwOVx1NjVCOVx1NjNEMlx1NEVGNicsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIm5naW54XCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvbmdpbngvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJuYWNvc1wiLCBsaW5rOiBcIi9kb2NzL2thaWZhL25hY29zL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwicmVkaXNcIiwgbGluazogXCIvZG9jcy9rYWlmYS9yZWRpcy9cIn0sXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcInNlYXRhXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvc2VhdGEvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJzZW50aW5lbFwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3NlbnRpbmVsL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwic2t5d2Fsa2luZ1wiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3NreXdhbGtpbmcvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJLYWZrYVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2thZmthL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiTmlGaVwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL25pZmkvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJPR0dcIiwgbGluazogXCIvZG9jcy9rYWlmYS9vZ2cvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJDYW5hbFwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2NhbmFsL1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiem9va2VlcGVyXCIsIGxpbms6IFwiL2RvY3Mva2FpZmEvem9va2VlcGVyL1wifSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdcdTdDRkJcdTdFREYnLCBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTY0Q0RcdTRGNUNcdTdDRkJcdTdFREZcIiwgbGluazogXCIvZG9jcy9rYWlmYS9iYXNpY3MvXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGLm1kXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJEb2NrZXJcIiwgbGluazogXCIvZG9jcy9rYWlmYS9kb2NrZXIvXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7dGV4dDogXCJsaW51eFwiLCBsaW5rOiBcIi9kb2NzL2thaWZhL2xpbnV4L1wifSxcbiAgICAgICAgICAgICAgICAgICAge3RleHQ6IFwiV2luZG93c1wiLCBsaW5rOiBcIi9kb2NzL2thaWZhL3dpbmRvdy9cIn0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6ICdcdTcyNDhcdTY3MkN2Mi54JywgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NzI0OFx1NjcyQ3YxLnhcIiwgbGluazogXCJodHRwOi8vbGluZ2R1X2RvdS5naXRlZS5pby9saW5nZHUvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU3MjQ4XHU2NzJDdjIueFwiLCBsaW5rOiBcIi9cIn0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIC8vIHt0ZXh0OiAnVGltZUxpbmUnLCBsaW5rOiAnL3RpbWVsaW5lLyd9LFxuICAgIHt0ZXh0OiBcIlx1NzU1OVx1OEEwMFx1Njc3RlwiLCBsaW5rOiBcIi9wbHVnaW4vXHU3NTU5XHU4QTAwXHU2NzdGLm1kXCJ9LFxuICAgIHt0ZXh0OiBcIlx1NjIxMVwiLCBsaW5rOiBcIi9kb2NzL21lL1wifSxcbiAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU3NkY4XHU1MTczXHU1Qjk4XHU2NUI5XHU2NTg3XHU2ODYzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dGV4dDogXCJcdTlFRDhcdThCQTRcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcIiwgbGluazogXCJodHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdThCQzRcdThCQkFcdTYzRDJcdTRFRjZcIiwgbGluazogXCJodHRwczovL3Zzc3VlLmpzLm9yZy96aC9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJcdTgyRTVcdTRGOURcIiwgbGluazogXCJodHRwOi8vZG9jLnJ1b3lpLnZpcC9cIn0sXG4gICAgICAgICAgICAvLyB7dGV4dDogXCJcdThCQzRcdThCQkFcdTY1RTBcdTZDRDVcdTRGN0ZcdTc1MjhcdTc2RjhcdTUxNzNcdThCRjRcdTY2MEVcIiwgbGluazogXCJodHRwczovL3d3dy56aGlodS5jb20vcXVlc3Rpb24vMzkyMzU4NDY3XCJ9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1XCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dGV4dDogXCJcdTZDNDlcdTY4M0NcdTc0NUVcIiwgbGluazogXCJodHRwOi8vbGluY2hlbmdndS5naXRlZS5pby9ibG9nL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIk1yLlx1NzQwNlwiLCBsaW5rOiBcImh0dHBzOi8vaXR3YW5neGwuZ2l0ZWUuaW8vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU5NjNGXHU4NjVBXHU1NDBDXHU1QjY2XHU3Njg0XHU1MEE4XHU3MjY5XHU5NUY0XCIsIGxpbms6IFwiaHR0cHM6Ly9heHV0b25neHVlLmNvbS9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJ6aG91a2Fpc2h1blwiLCBsaW5rOiBcImh0dHBzOi8vemhvdWthaXNodW4uZ2l0ZWUuaW8vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiVGlBbW9cdUQ4M0RcdURFQjZcIiwgbGluazogXCJodHRwczovL3d3dy55dXF1ZS5jb20vdGlhbW8tZjd0ZnkveHIxMzl5L2lkMXU3Z1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NEUwMFx1Njc5QVx1NTI0RFx1N0FFRlx1N0EwQlx1NUU4Rlx1NUE5Qlx1NzY4NGJsb2dcIiwgbGluazogXCJodHRwczovL3Bhbmppbmd5aS50b3AvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwieXlzaGlub1wiLCBsaW5rOiBcImh0dHBzOi8vdi1ibG9nLnl5c2hpbm8udG9wL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIiBfXHU5RTQ1XHU0RTBEXHU5OERGXHU4MzQ5X1wiLCBsaW5rOiBcImh0dHBzOi8vaGF2ZXl1YW4uZ2l0aHViLmlvL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NUM3MVx1NjcwOFx1ODg0Q1wiLCBsaW5rOiBcImh0dHBzOi8vc2hhbnl1ZS50ZWNoL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1N0EwQlx1NUU4Rlx1NTQ1OFx1NUJGQ1x1ODIyQVwiLCBsaW5rOiBcImh0dHBzOi8vY3h5NTIxLmNvbS9pbmRleC5odG1sXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU1RjAwXHU2RTkwXHU1QzBGXHU1MjA2XHU5NjFGXCIsIGxpbms6IFwiaHR0cHM6Ly9zb3VyY2V0ZWFtLmdpdGVlLmlvL2Jsb2cvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwiXHU1MjREXHU3QUVGXHU1QjlFXHU5QThDXHU1QkE0XCIsIGxpbms6IFwiaHR0cHM6Ly9mcm9udGxhYi5naXRlZS5pby9ibG9nL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIkphdmFcdTYyODBcdTY3MkZcdTYzMDdcdTUzMTdcIiwgbGluazogXCJodHRwczovL3d3dy5qYXZhbm9ydGguY24vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwicHl0aG9uXHU2MjgwXHU2NzJGXCIsIGxpbms6IFwiaHR0cDovL3d3dy5qdXN0ZG9weXRob24uY29tL1wifSxcbiAgICAgICAgICAgIHt0ZXh0OiBcIlx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMlx1ODA1NFx1NzZERlwiLCBsaW5rOiBcImh0dHA6Ly90ZWNoYmxvZy5wdWIvXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwic3ByaW5nIGJvb3RcdTRFMkRcdTY1ODdcdTVCRkNcdTgyMkFcIiwgbGluazogXCJodHRwOi8vc3ByaW5nYm9vdC5mdW4vXCJ9LFxuICAgICAgICAgICAge3RleHQ6IFwic3ByaW5nIGNsb3VkXHU0RTJEXHU2NTg3XHU1QkZDXHU4MjJBXCIsIGxpbms6IFwiaHR0cDovL3NwcmluZ2Nsb3VkLmZ1bi9cIn0sXG4gICAgICAgICAgICB7dGV4dDogXCJOaUZpXHU0RTJEXHU2NTg3XHU2NTg3XHU2ODYzXCIsIGxpbms6IFwiaHR0cHM6Ly9uaWZpY2hpbmEuZ2l0ZWUuaW8vXCJ9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vIHtcbiAgICAvLyAgICAgdGV4dDogJ1x1NTNDMlx1ODAwMycsXG4gICAgLy8gICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1Z1ZVByZXNzJyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jbGkubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jb25maWcubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9mcm9udG1hdHRlci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NvbXBvbmVudHMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4tYXBpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvdGhlbWUtYXBpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY2xpZW50LWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL25vZGUtYXBpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnXHU2MjUzXHU1MzA1XHU1REU1XHU1MTc3JyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3ZpdGUubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3dlYnBhY2subWQnLFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTlFRDhcdThCQTRcdTRFM0JcdTk4OTgnLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvY29uZmlnLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9mcm9udG1hdHRlci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50cy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvbWFya2Rvd24ubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL3N0eWxlcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUvZXh0ZW5kaW5nLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGV4dDogJ1x1NjNEMlx1NEVGNicsXG4gICAgLy8gICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NUUzOFx1NzUyOFx1NTI5Rlx1ODBGRCcsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2JhY2stdG8tdG9wLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2NvbnRhaW5lci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9leHRlcm5hbC1saW5rLWljb24ubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZ29vZ2xlLWFuYWx5dGljcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9tZWRpdW0tem9vbS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9ucHJvZ3Jlc3MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcmVnaXN0ZXItY29tcG9uZW50cy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NTE4NVx1NUJCOVx1NjQxQ1x1N0QyMicsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2RvY3NlYXJjaC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9zZWFyY2gubWQnLFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdQV0EnLFxuICAgIC8vICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9wd2EubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHdhLXBvcHVwLm1kJyxcbiAgICAvLyAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnXHU4QkVEXHU2Q0Q1XHU5QUQ4XHU0RUFFJyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHJpc21qcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9zaGlraS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NEUzQlx1OTg5OFx1NUYwMFx1NTNEMScsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2FjdGl2ZS1oZWFkZXItbGlua3MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vZ2l0Lm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3BhbGV0dGUubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vdGhlbWUtZGF0YS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi90b2MubWQnLFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0ZXh0OiAnXHU0RTg2XHU4OUUzXHU2NkY0XHU1OTFBJyxcbiAgICAvLyAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1JyxcbiAgICAvLyAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2FyY2hpdGVjdHVyZS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvcGx1Z2luLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9hZHZhbmNlZC90aGVtZS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb29rYm9vaycsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3poL2FkdmFuY2VkL2Nvb2tib29rLycsXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENlx1OEQ0NFx1NkU5MCcsXG4gICAgLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgJy96aC9jb250cmlidXRpbmcubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQXdlc29tZSBWdWVQcmVzcycsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzL2F3ZXNvbWUtdnVlcHJlc3MnLFxuICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0ZXh0OiBgdiR7dmVyc2lvbn1gLFxuICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRleHQ6ICdcdTY2RjRcdTY1QjBcdTY1RTVcdTVGRDcnLFxuICAgIC8vICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MvdnVlcHJlc3MtbmV4dC9ibG9iL21haW4vQ0hBTkdFTE9HLm1kJyxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogJ3YxLngnLFxuICAgIC8vICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC8nLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiAndjAueCcsXG4gICAgLy8gICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vdjAudnVlcHJlc3MudnVlanMub3JnL3poLycsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vIH0sXG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcdTdBN0FcdTk1RjRcXFxcXHU1MzVBXHU1QkEyXFxcXHZ1ZXByZXNzLWxpbmdkdS12MlxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFx1dGlsLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy91dGlsLmpzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYicgIC8vIFwiZ2xvYlwiOiBcIl43LjIuM1wiXHJcbi8vIGNvbnN0IGdsb2IgPSByZXF1aXJlKCdnbG9iJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NEZBN1x1OEZCOVx1NjgwRlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKiBAcmV0dXJucyB7e319XHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5TaWRlYmFyQ29uZmlnKCkge1xyXG4gICAgcmV0dXJuIGdlblNpZGViYXJDb25maWcyKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlblNpZGViYXJDb25maWcyKCkge1xyXG4gICAgbGV0IHNpZGVCYXJEYXRhID0ge31cclxuICAgIGxldCBhYWEgPSBbXVxyXG5cclxuICAgIGdldE5hdmJhcigpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBpdGVtLmxpbms7Ly8gXHU4REVGXHU3NTMxXHJcbiAgICAgICAgbGV0IGNoID0gaXRlbS5jaGlsZHJlbjsvLyBcdTVCNTBcdTk2QzZcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4obGluayk7XHJcblxyXG4gICAgICAgIGlmKGNoIT1udWxsKXtcclxuICAgICAgICAgICAgLy8gc2lkZUJhckRhdGFbYCR7bGlua31gXT1hYShjaCk7XHJcbiAgICAgICAgICAgIGFhKGNoLHNpZGVCYXJEYXRhKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXJEYXRhW2Ake2xpbmt9YF0gPSBbe3RleHQ6ICdcdTMwMDdcdTAwQjAnLCBjaGlsZHJlbn1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsaW5rIT1udWxsKXtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionKVxyXG4gICAgLy8gc2lkZUJhckRhdGEuZm9yRWFjaChpdGVtPT57XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmNoaWxkcmVuKVxyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcbiAgICBjb25zb2xlLmxvZyhzaWRlQmFyRGF0YSlcclxuICAgIHJldHVybiBzaWRlQmFyRGF0YVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWEodCxzaWRlQmFyRGF0YSl7XHJcbiAgICB0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGEgID0gW11cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihpdGVtLmxpbmspO1xyXG4gICAgICAgIGEucHVzaCh7XHJcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgICAgY29sbGFwc2libGUgOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNpZGVCYXJEYXRhW2Ake2l0ZW0ubGlua31gXSA9IGE7XHJcbiAgICB9KVxyXG4gICAgLy8gY29uc29sZS5sb2coYS5hdCgxKSlcclxuICAgIC8vIHJldHVybiBhO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFx1OTAxMlx1NUY1Mlx1ODNCN1x1NTNENlx1NUJGQ1x1ODIyQVx1NjgwRlx1NEUyRFx1NzY4NFx1OERFRlx1NzUzMVx1NTczMFx1NTc0MFxyXG4gKiBAcGFyYW0gbmF2XHJcbiAqIEBwYXJhbSBhXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXROYXZLZXlzKG5hdiwgYSkge1xyXG4gICAgbmF2LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ubGluayAhPSBudWxsICYmIGl0ZW0ubGluay5pbmRleE9mKCcvLycpIDwgMCAmJiBpdGVtLmxpbmsgIT09ICcvJykge1xyXG4gICAgICAgICAgICBhLnB1c2goaXRlbS5saW5rKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXROYXZLZXlzKGl0ZW0uY2hpbGRyZW4sIGEpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLypcclxuICogXHU4M0I3XHU1M0Q2XHU2NTg3XHU0RUY2XHU1OTM5XHU0RTBCXHU2MjQwXHU2NzA5IG1kIFx1NjU4N1x1NEVGNlx1NTQwRFx1NTIxN1x1ODg2OFxyXG4gKiBpbnB1dCBcdTc2RUVcdTVGNTVcdTU0MERcclxuICogcmV0dXJuIEFycmFyeVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oZGlyTmFtZSkge1xyXG4gICAgY29uc3QgbmFtZXMgPSBbXVxyXG4gICAgbGV0IGdsb2JQYXRoID0gcGF0aC5yZXNvbHZlKGAuL2RvY3MvJHtkaXJOYW1lfSoubWRgKVxyXG4gICAgY29uc29sZS5sb2coJ2dsb2JQYXRoOicpXHJcbiAgICBjb25zb2xlLmxvZyhnbG9iUGF0aClcclxuICAgIGdsb2Iuc3luYyhnbG9iUGF0aCkuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5wYXJzZShmaWxlKS5iYXNlXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25hbWU6JylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJ3FpdXpoYW94aW4nKSA8IDApIHtcclxuICAgICAgICAgICAgbGV0IGxpbmdkdSA9ICcnO1xyXG4gICAgICAgICAgICAvLyBpZiAobmFtZS5pbmRleE9mKCdSRUFETUUnKSA8IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxpbmdkdSA9IG5hbWUuc3BsaXQoJy5tZCcpWzBdO1xyXG4gICAgICAgICAgICAvLyAgICAgbGluZ2R1ID0gbmFtZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBsaW5nZHUgPSBkaXJOYW1lK25hbWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxpbmdkdSlcclxuICAgICAgICAgICAgbmFtZXMucHVzaChsaW5nZHUpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKCcvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8nKVxyXG4gICAgY29uc29sZS5sb2coZGlyTmFtZSlcclxuICAgIGNvbnNvbGUubG9nKG5hbWVzKVxyXG4gICAgcmV0dXJuIG5hbWVzXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtnZW5TaWRlYmFyQ29uZmlnLGdldENoaWxkcmVufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1x1OTg3OVx1NzZFRVx1N0E3QVx1OTVGNC9cdTUzNUFcdTVCQTIvdnVlcHJlc3MtbGluZ2R1LXYyL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU5ODc5XHU3NkVFXHU3QTdBXHU5NUY0XFxcXFx1NTM1QVx1NUJBMlxcXFx2dWVwcmVzcy1saW5nZHUtdjJcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxzaWRlYmFyXFxcXG15LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTklQTElQjklRTclOUIlQUUlRTclQTklQkElRTklOTclQjQvJUU1JThEJTlBJUU1JUFFJUEyL3Z1ZXByZXNzLWxpbmdkdS12Mi9kb2NzLy52dWVwcmVzcy9jb25maWdzL3NpZGViYXIvbXkudHNcIjtpbXBvcnQgdHlwZSB7U2lkZWJhckNvbmZpZ30gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnO1xuXG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuLi8uLi91dGlsJztcblxuXG4vLyBcdTYyMTFcdTc2ODRcdTRGQTdcdThGQjlcdTY4MEZcdTkxNERcdTdGNkVcbmV4cG9ydCBjb25zdCBzaWRlYmFyTXk6IFNpZGViYXJDb25maWcgPSB7XG4gICAgJy9kb2NzL2Jhc2ljcy8nOiBbe3RleHQ6ICdcdTU3RkFcdTc4NDAnLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2Jhc2ljcy8nKSx9XSxcbiAgICAnL2Jvb2ttYXJrLyc6IFt7dGV4dDogJ1x1NEU2Nlx1N0I3RScsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2Jvb2ttYXJrLycpLH1dLFxuICAgICcvZG9jcy9ib2tlLyc6W1xuICAgICAgICB7dGV4dDogJ1x1NTM1QVx1NUJBMicsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3MvYm9rZS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnbWFya2Rvd24nLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2Jva2UvbWFya2Rvd24vJyl9LFxuICAgIF0sXG4gICAgLy8gXHU1RjAwXHU1M0QxXHU3NkY4XHU1MTczXG4gICAgJy9kb2NzL2thaWZhLyc6W1xuICAgICAgICB7dGV4dDogJ1x1NURFNVx1NEY1Q1x1NkQ0MWFjdGl2aXRpJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9hY3Rpdml0aS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU2NENEXHU0RjVDXHU3Q0ZCXHU3RURGJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9iYXNpY3MvJyl9LFxuICAgICAgICB7dGV4dDogJ2NhbmFsJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9jYW5hbC8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU2NTcwXHU2MzZFXHU1RTkzJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9kYi8nKX0sXG4gICAgICAgIHt0ZXh0OiAnZG9ja2VyJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9kb2NrZXIvJyl9LFxuICAgICAgICB7dGV4dDogJ2h0dHAnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL2h0dHAvJyl9LFxuICAgICAgICB7dGV4dDogJ2lkZWEnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL2lkZWEvJyl9LFxuICAgICAgICB7dGV4dDogJ2phdmEnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL2phdmEvJyl9LFxuICAgICAgICAvLyB7dGV4dDogJ2thaWthJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9rYWlrYS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU2RDg4XHU2MDZGXHU0RTJEXHU5NUY0XHU0RUY2a2Fma2EnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL2thZmthLycpfSxcbiAgICAgICAge3RleHQ6ICdsaW51eCcsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvbGludXgvJyl9LFxuICAgICAgICB7dGV4dDogJ21hdmVuJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9tYXZlbi8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU2Q0U4XHU1MThDXHUzMDAxXHU5MTREXHU3RjZFXHU0RTJEXHU1RkMzbmFjb3MnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL25hY29zLycpfSxcbiAgICAgICAge3RleHQ6ICduZ2lueCcsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvbmdpbngvJyl9LFxuICAgICAgICB7dGV4dDogJ25pZmknLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL25pZmkvJyl9LFxuICAgICAgICB7dGV4dDogJ25vZGUnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL25vZGUvJyl9LFxuICAgICAgICB7dGV4dDogJ29nZycsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvb2dnLycpfSxcbiAgICAgICAge3RleHQ6ICdyZWRpcycsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvcmVkaXMvJyl9LFxuICAgICAgICB7dGV4dDogJ3NlYXRhJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9zZWF0YS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnXHU3MTk0XHU2NUFEXHU5NjREXHU3RUE3c2VudGluZWwnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL3NlbnRpbmVsLycpfSxcbiAgICAgICAge3RleHQ6ICdcdTk0RkVcdThERUZcdThGRkRcdThFMkFza3l3YWxraW5nJyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS9za3l3YWxraW5nLycpfSxcbiAgICAgICAge3RleHQ6ICd2dWUnLGNvbGxhcHNpYmxlOiB0cnVlLCBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oJy9kb2NzL2thaWZhL3Z1ZS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnd2Vic2VydmljZScsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvd2Vic2VydmljZS8nKX0sXG4gICAgICAgIHt0ZXh0OiAnd2luZG93Jyxjb2xsYXBzaWJsZTogdHJ1ZSwgY2hpbGRyZW46IGdldENoaWxkcmVuKCcvZG9jcy9rYWlmYS93aW5kb3cvJyl9LFxuICAgICAgICB7dGV4dDogJ3pvb2tlZXBlcicsY29sbGFwc2libGU6IHRydWUsIGNoaWxkcmVuOiBnZXRDaGlsZHJlbignL2RvY3Mva2FpZmEvem9va2VlcGVyLycpfSxcbiAgICBdLFxuICAgICcvZG9jcy9tZS8nOlt7dGV4dDonXHU1MTczXHU0RThFXHU2MjExJyxjaGlsZHJlbjpbJy9kb2NzL21lL1JFQURNRS5tZCddfV0sXG5cblxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAnL3poL2d1aWRlLyc6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXG4gICAgLy8gICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvUkVBRE1FLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL2dldHRpbmctc3RhcnRlZC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9jb25maWd1cmF0aW9uLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL3BhZ2UubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvbWFya2Rvd24ubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvYXNzZXRzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2d1aWRlL2kxOG4ubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvZGVwbG95bWVudC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS90aGVtZS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9wbHVnaW4ubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvZ3VpZGUvYnVuZGxlci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9ndWlkZS9taWdyYXRpb24ubWQnLFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyBdLFxuICAgIC8vICcvemgvYWR2YW5jZWQvJzogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1JyxcbiAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgJy96aC9hZHZhbmNlZC9hcmNoaXRlY3R1cmUubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvcGx1Z2luLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL3RoZW1lLm1kJyxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRleHQ6ICdDb29rYm9vaycsXG4gICAgLy8gICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvY29va2Jvb2svUkVBRE1FLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL3VzYWdlLW9mLWNsaWVudC1jb25maWcubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvY29va2Jvb2svYWRkaW5nLWV4dHJhLXBhZ2VzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL21ha2luZy1hLXRoZW1lLWV4dGVuZGFibGUubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvYWR2YW5jZWQvY29va2Jvb2svcGFzc2luZy1kYXRhLXRvLWNsaWVudC1jb2RlLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL2FkdmFuY2VkL2Nvb2tib29rL21hcmtkb3duLWFuZC12dWUtc2ZjLm1kJyxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gXSxcbiAgICAvLyAnL3poL3JlZmVyZW5jZS8nOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRleHQ6ICdWdWVQcmVzcyBcdTUzQzJcdTgwMDMnLFxuICAgIC8vICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgLy8gICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2NsaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY29uZmlnLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9mcm9udG1hdHRlci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvY29tcG9uZW50cy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvdGhlbWUtYXBpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9jbGllbnQtYXBpLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9ub2RlLWFwaS5tZCcsXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiAnXHU2MjUzXHU1MzA1XHU1REU1XHU1MTc3XHU1M0MyXHU4MDAzJyxcbiAgICAvLyAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIC8vICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9idW5kbGVyL3ZpdGUubWQnLFxuICAgIC8vICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL2J1bmRsZXIvd2VicGFjay5tZCcsXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0ZXh0OiAnXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1M0MyXHU4MDAzJyxcbiAgICAvLyAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgIC8vICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL2NvbmZpZy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9mcm9udG1hdHRlci5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9jb21wb25lbnRzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL21hcmtkb3duLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lL3N0eWxlcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS9leHRlbmRpbmcubWQnLFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGV4dDogJ1x1NUI5OFx1NjVCOVx1NjNEMlx1NEVGNlx1NTNDMlx1ODAwMycsXG4gICAgLy8gICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU1MjlGXHU4MEZEJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9iYWNrLXRvLXRvcC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vY29udGFpbmVyLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9leHRlcm5hbC1saW5rLWljb24ubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL2dvb2dsZS1hbmFseXRpY3MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL21lZGl1bS16b29tLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9ucHJvZ3Jlc3MubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3JlZ2lzdGVyLWNvbXBvbmVudHMubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MTg1XHU1QkI5XHU2NDFDXHU3RDIyJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9kb2NzZWFyY2gubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3NlYXJjaC5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRleHQ6ICdQV0EnLFxuICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3B3YS5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHdhLXBvcHVwLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OEJFRFx1NkNENVx1OUFEOFx1NEVBRScsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vcHJpc21qcy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAnL3poL3JlZmVyZW5jZS9wbHVnaW4vc2hpa2kubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICBdLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU0RTNCXHU5ODk4XHU1RjAwXHU1M0QxJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9hY3RpdmUtaGVhZGVyLWxpbmtzLm1kJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICcvemgvcmVmZXJlbmNlL3BsdWdpbi9naXQubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3BhbGV0dGUubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3RoZW1lLWRhdGEubWQnLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJy96aC9yZWZlcmVuY2UvcGx1Z2luL3RvYy5tZCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gXSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFRLG9CQUFtQjtBQUUzQixTQUFRLHNCQUFxQjs7O0FDRHRCLElBQU0sT0FBcUI7QUFBQSxFQUNoQztBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFBQSxFQUMzRCxDQUFDLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixTQUFTLFdBQVcsQ0FBQztBQUFBLEVBQzFELENBQUMsUUFBUSxFQUFFLE1BQU0sOEJBQThCLFNBQVMsV0FBVyxDQUFDO0FBQUEsRUFDcEUsQ0FBQyxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsU0FBUyxRQUFRLENBQUM7QUFBQSxFQUM1RTtBQUFBLElBQ0U7QUFBQSxJQUNBLEVBQUUsS0FBSyxvQkFBb0IsTUFBTSxxQ0FBcUM7QUFBQSxFQUN4RTtBQUFBLEVBQ0E7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixTQUFTLFVBQVUsQ0FBQztBQUFBLEVBQ2hFLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFVBQVUsQ0FBQztBQUN0RDs7O0FDdkN3WCxTQUFTLHFCQUFxQjtBQUN0WixTQUFTLFVBQVU7QUFENkwsSUFBTSwyQ0FBMkM7QUFHalEsSUFBTUEsV0FBVSxjQUFjLHdDQUFlO0FBRXRDLElBQU0sVUFBVSxHQUFHO0FBQUEsRUFDeEJBLFNBQVEsUUFBUSw2QkFBNkI7QUFDL0MsRUFBRTs7O0FDSkssSUFBTSxXQUF5QjtBQUFBLEVBQ3BDO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNLElBQUk7QUFBQSxJQUNWLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUN4SU8sSUFBTSxXQUF5QjtBQUFBLEVBQ3BDO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFD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

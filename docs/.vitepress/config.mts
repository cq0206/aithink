import { defineConfig } from "vitepress";

export default defineConfig(() => {
  const gaId = process.env.VITEPRESS_GA_ID?.trim() || "G-L0D70NX8GR";

  return {
    title: "AI Think",
    description: "AI 高质量信息源精选：X/Twitter、播客、论文、研究机构",
    lang: "zh-CN",
    base: "/",
    cleanUrls: true,
    lastUpdated: true,
    head: gaId
      ? [
          [
            "script",
            {
              async: "",
              src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`
            }
          ],
          [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`
          ]
        ]
      : [],
    themeConfig: {
      outline: [2, 3],
      nav: [
        { text: "首页", link: "/" },
        { text: "来源导航", link: "/sources/x-twitter" },
        { text: "学习路径", link: "/learning/roadmap" },
        { text: "方法论", link: "/guide/overview" }
      ],
      sidebar: {
        "/sources/": [
          {
            text: "内容来源",
            items: [
              { text: "X / Twitter", link: "/sources/x-twitter" },
              {
                text: "DeRonin 文章点评",
                link: "/sources/deronin-2033587293064204349"
              },
              { text: "优秀播客", link: "/sources/podcasts" },
              { text: "经典论文", link: "/sources/papers" }
            ]
          }
        ],
        "/learning/": [
          {
            text: "学习路径",
            items: [{ text: "90 天路线", link: "/learning/roadmap" }]
          }
        ],
        "/guide/": [
          {
            text: "维护方法",
            items: [{ text: "内容筛选标准", link: "/guide/overview" }]
          }
        ]
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/cq0206/aithink" }
      ],
      search: {
        provider: "local"
      },
      footer: {
        message: "Built with VitePress",
        copyright: "Copyright © 2026"
      }
    }
  };
});

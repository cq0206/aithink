import { defineConfig } from "vitepress";

export default defineConfig(() => {
  const gaId = process.env.VITEPRESS_GA_ID?.trim() || "G-L0D70NX8GR";

  return {
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
    locales: {
      root: {
        label: "简体中文",
        lang: "zh-CN",
        title: "AI Think",
        description: "AI 高质量信息源精选：X/Twitter、播客、论文、研究机构",
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
                    text: "OpenAI 前端文章",
                    link: "/sources/openai-gpt54-frontends"
                  },
                  {
                    text: "Lenny 播客 Agent 式工程",
                    link: "/sources/lennys-podcast"
                  },
                  {
                    text: "模块，不是微服务",
                    link: "/sources/modules-not-microservices"
                  },
                  {
                    text: "DeRonin 文章点评",
                    link: "/sources/deronin-2033587293064204349"
                  },
                  { text: "优秀播客", link: "/sources/podcasts" },
                  { text: "经典论文", link: "/sources/papers" }
                ]
              },
              {
                text: "Claude Code 专题",
                items: [
                  {
                    text: "专题总览",
                    link: "/sources/claude-code"
                  },
                  {
                    text: "源码架构解析",
                    link: "/sources/claude-code-architecture-v2"
                  },
                  {
                    text: "Claude Code 设计指南",
                    link: "/sources/harness-book-claude-code-guide"
                  },
                  {
                    text: "精读 1：控制面",
                    link: "/sources/harness-claude-control-plane"
                  },
                  {
                    text: "精读 2：主循环与工具治理",
                    link: "/sources/harness-claude-query-loop"
                  },
                  {
                    text: "精读 3：恢复、验证与团队制度",
                    link: "/sources/harness-claude-recovery-and-team"
                  },
                  {
                    text: "Claude Code 与 Codex",
                    link: "/sources/harness-book-claude-code-vs-codex"
                  },
                  {
                    text: "精读 4：两种控制面",
                    link: "/sources/harness-compare-control-surfaces"
                  },
                  {
                    text: "精读 5：运行时治理",
                    link: "/sources/harness-compare-runtime-governance"
                  },
                  {
                    text: "精读 6：如何选型与自建",
                    link: "/sources/harness-compare-build-strategy"
                  },
                  {
                    text: "Harness 三维扩展框架",
                    link: "/sources/harness-engineering-scalability-20260330"
                  }
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
      },
      en: {
        label: "English",
        lang: "en-US",
        link: "/en/",
        title: "AI Think",
        description: "High-signal AI sources from X, podcasts, and papers",
        themeConfig: {
          outline: [2, 3],
          nav: [
            { text: "Home", link: "/en/" },
            { text: "Sources", link: "/en/sources/x-twitter" },
            { text: "Roadmap", link: "/en/learning/roadmap" },
            { text: "Method", link: "/en/guide/overview" }
          ],
          sidebar: {
            "/en/sources/": [
              {
                text: "Sources",
                items: [
                  { text: "X / Twitter", link: "/en/sources/x-twitter" },
                  {
                    text: "OpenAI Frontend Article",
                    link: "/en/sources/openai-gpt54-frontends"
                  },
                  {
                    text: "Lenny Podcast Agentic Engineering",
                    link: "/en/sources/lennys-podcast"
                  },
                  {
                    text: "DeRonin Article Note",
                    link: "/en/sources/deronin-2033587293064204349"
                  },
                  { text: "Podcasts", link: "/en/sources/podcasts" },
                  { text: "Papers", link: "/en/sources/papers" }
                ]
              },
              {
                text: "Claude Code",
                items: [
                  {
                    text: "Module Overview",
                    link: "/en/sources/claude-code"
                  },
                  {
                    text: "Claude Code Guide",
                    link: "/sources/harness-book-claude-code-guide"
                  },
                  {
                    text: "Claude Code vs Codex",
                    link: "/sources/harness-book-claude-code-vs-codex"
                  },
                  {
                    text: "Harness Scaling Framework",
                    link: "/sources/harness-engineering-scalability-20260330"
                  }
                ]
              }
            ],
            "/en/learning/": [
              {
                text: "Roadmap",
                items: [{ text: "90-Day Plan", link: "/en/learning/roadmap" }]
              }
            ],
            "/en/guide/": [
              {
                text: "Method",
                items: [{ text: "Curation Rules", link: "/en/guide/overview" }]
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
      }
    }
  };
});

"use strict";

const projects = [
  {
    "id": "qingming",
    "title": "清明上河",
    "category": "experience",
    "image": "assets/qingming-day.webp",
    "alt": "可漫游的宋代沿河街市画卷",
    "description": "可行走、乘船、切换昼夜与天气的宋代街市。",
    "featured": true,
    "detail": "以长卷为灵感，结合 AI 插画与网页开发，制作可漫游的宋代街市。",
    "points": [
      "设计行走、乘船、过桥和天气交互。",
      "组合原创生成插画、人物与动态效果。",
      "调整动作、遮挡和手机操作。"
    ],
    "links": [
      {
        "label": "在线体验",
        "url": "https://xianxie6.github.io/qingming-riverside/"
      },
      {
        "label": "项目源码",
        "url": "https://github.com/xianxie6/qingming-riverside"
      }
    ],
    "note": "2026.10.28：约 9,200 人体验，X 上线展示帖约 98K 浏览。"
  },
  {
    "id": "youjie",
    "title": "有解 · 数学实验室",
    "category": "experience",
    "image": "assets/math.webp",
    "alt": "数学实验室的题目目录、几何图形和参数控制",
    "description": "拖动参数，观察图形与数值同步变化。",
    "detail": "把数学知识点做成能操作的实验，帮助用户通过观察理解公式。",
    "points": [
      "设计选题、操作与推导流程。",
      "让参数、图形和结果便于对照。",
      "支持分步解释、重置与窄屏布局。"
    ],
    "links": [
      {
        "label": "项目源码",
        "url": "https://github.com/xianxie6/youjie-math-lab"
      },
      {
        "label": "查看演示",
        "url": "https://x.com/Xian0063/status/2096046406951903398"
      }
    ]
  },
  {
    "id": "museum",
    "title": "此刻在馆",
    "category": "experience",
    "image": "assets/museum.webp",
    "alt": "用户在虚拟艺术展厅里走近一幅画",
    "description": "在虚拟展厅里走动、看画，与别人相遇。",
    "detail": "围绕线上看展与交流，设计可漫游的艺术展厅。",
    "points": [
      "通过人物移动发现作品。",
      "靠近画作后呈现查看入口。",
      "加入主题馆、交流与协作改画。"
    ],
    "links": [
      {
        "label": "项目源码",
        "url": "https://github.com/xianxie6/now-at-museum"
      },
      {
        "label": "查看演示",
        "url": "https://x.com/Xian0063/status/2083462272811425866"
      }
    ]
  },
  {
    "id": "mochi",
    "title": "Mochi",
    "category": "product",
    "image": "assets/mochi.webp",
    "alt": "Mochi 宠物陪伴 App 的产品宣传图",
    "description": "独立设计、开发并上架的宠物陪伴 App。",
    "detail": "我的首款独立 App，提供电子宠物陪伴与助眠体验。",
    "points": [
      "独立完成需求、UX 与视觉设计。",
      "用 SwiftUI 和 AI 辅助完成开发。",
      "负责调试、测试与 App Store 上架。"
    ],
    "links": [
      {
        "label": "项目源码",
        "url": "https://github.com/xianxie6/Mochi"
      }
    ]
  },
  {
    "id": "stamp",
    "title": "邮票边缘 Skill",
    "category": "tool",
    "image": "assets/stamp.webp",
    "alt": "邮票边缘工具处理后的锯齿孔洞和透明背景效果",
    "description": "为图片添加邮票边缘，保留透明背景。",
    "detail": "把邮票边缘处理做成可重复使用的开源 Skill。",
    "points": [
      "沿原图边缘生成孔洞。",
      "保留透明背景，方便再次排版。",
      "整理工具与演示并开源。"
    ],
    "links": [
      {
        "label": "获取 Skill",
        "url": "https://github.com/xianxie6/stamp-edge-skill"
      },
      {
        "label": "查看演示",
        "url": "https://x.com/Xian0063/status/2089554762127810875"
      }
    ],
    "note": "图片为收集素材经 Skill 处理后的效果示例。"
  },
  {
    "id": "order",
    "title": "收好 · Little Order",
    "category": "experience",
    "image": "assets/little-order.webp",
    "alt": "收纳互动中打开的抽屉与可放置的小物件",
    "description": "打开抽屉、摆放物品的 3D 收纳互动。",
    "detail": "从日常收纳出发，制作可以摆放物品的浏览器互动。",
    "points": [
      "做通打开、放入、合上与撤回。",
      "用动画和反馈呈现物件状态。",
      "支持触控与键盘操作。"
    ],
    "links": [
      {
        "label": "项目源码",
        "url": "https://github.com/xianxie6/little-order"
      },
      {
        "label": "查看演示",
        "url": "https://x.com/Xian0063/status/2098107918390624751"
      }
    ]
  },
  {
    "id": "knowledge",
    "title": "行业知识体系工具",
    "category": "tool",
    "image": null,
    "description": "把行业资料整理成可复用的知识体系。",
    "detail": "将行业研究、竞品分析和知识整理封装为 Codex Skill。",
    "points": [
      "整理行业资料与竞品。",
      "生成知识结构和可更新材料。",
      "开源工作方法，便于复用。"
    ],
    "links": [
      {
        "label": "查看开源工具",
        "url": "https://github.com/xianxie6/build-industry-knowledge-system"
      }
    ]
  }
];

const grid = document.getElementById("project-grid");
const dialog = document.getElementById("project-dialog");
const dialogBody = document.getElementById("dialog-body");
let lastFocusedElement;
const escapeHTML = function(value) { return String(value).replace(/[&<>"']/g, function(c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); };
const knowledgeArt = '<div class="project-text-cover"><strong>读懂行业，<br>整理成体系。</strong></div>';

grid.innerHTML = projects.map(function(p) {
  const cover = p.image ? '<img src="' + p.image + '" alt="' + escapeHTML(p.alt) + '" loading="lazy" width="800" height="540">' : knowledgeArt;
  const meta = '<div class="project-meta"><h3>' + p.title + '</h3></div>';
  return '<article class="project-card' + (p.featured ? ' featured' : '') + '" data-category="' + p.category + '" data-id="' + p.id + '"><button class="project-cover" type="button" data-project="' + p.id + '" aria-label="查看' + escapeHTML(p.title) + '项目详情">' + cover + '<span class="cover-arrow" aria-hidden="true">↗</span></button><div class="project-content">' + meta + '<p class="project-description">' + p.description + '</p>' + (p.featured ? '<button class="project-open" type="button" data-project="' + p.id + '">查看项目 <span aria-hidden="true">↗</span></button>' : '') + '</div></article>';
}).join("");

document.querySelectorAll(".filter").forEach(function(button) {
  button.addEventListener("click", function() {
    const selected = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(function(item) { const active = item === button; item.classList.toggle("active",active); item.setAttribute("aria-pressed",String(active)); });
    let count = 0;
    document.querySelectorAll(".project-card").forEach(function(card) { const show = selected === "all" || card.dataset.category === selected; card.hidden = !show; if(show) count++; });
    document.getElementById("filter-result").textContent = count + " 件精选作品";
  });
});

function openProject(id, trigger) {
  const p = projects.find(function(item) { return item.id === id; });
  if(!p) return;
  lastFocusedElement = trigger || document.activeElement;
  dialogBody.innerHTML = (p.image ? '<img class="dialog-image" src="' + p.image + '" alt="' + escapeHTML(p.alt) + '">' : '<div class="dialog-art">' + knowledgeArt + '</div>') + '<div class="dialog-copy"><h2 id="dialog-title">' + p.title + '</h2><p>' + p.detail + '</p><h3>设计与实现</h3><ul class="case-points">' + p.points.map(function(point) { return '<li>' + point + '</li>'; }).join("") + '</ul><div class="dialog-actions">' + p.links.map(function(link, i) { return '<a class="button ' + (i === 0 ? 'primary' : 'quiet') + '" href="' + link.url + '" target="_blank" rel="noopener noreferrer">' + link.label + ' <span aria-hidden="true">↗</span></a>'; }).join("") + '</div>' + (p.note ? '<p class="dialog-caption">' + p.note + '</p>' : '') + '</div>';
  dialog.showModal();
  document.body.classList.add("modal-open");
  dialog.scrollTop = 0;
  dialog.querySelector(".dialog-close").focus();
}

document.querySelectorAll("[data-project]").forEach(function(button) { button.addEventListener("click", function() { openProject(button.dataset.project,button); }); });
dialog.querySelector(".dialog-close").addEventListener("click", function() { dialog.close(); });
dialog.addEventListener("click",function(event) { if(event.target !== dialog) return; const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); });
dialog.addEventListener("close", function() { document.body.classList.remove("modal-open"); if(lastFocusedElement) lastFocusedElement.focus(); });

const stage = document.querySelector(".hero-stage");
document.getElementById("scene-switch").addEventListener("click",function() {
  const night = stage.classList.toggle("night");
  this.setAttribute("aria-pressed",String(night));
  this.setAttribute("aria-label",night ? "切换到日间" : "切换到夜景");
  document.getElementById("stage-day").setAttribute("aria-hidden",String(night));
  document.getElementById("stage-night").setAttribute("aria-hidden",String(!night));
});

document.querySelectorAll(".print-action").forEach(function(button) { button.addEventListener("click",function() { window.print(); }); });
if("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if(entry.isIntersecting) { document.querySelectorAll("nav a").forEach(function(link) { link.classList.toggle("active",link.getAttribute("href") === "#" + entry.target.id); }); } });
  },{rootMargin:"-15% 0px -65% 0px",threshold:0});
  ["work","about","contact"].forEach(function(id) { observer.observe(document.getElementById(id)); });
}

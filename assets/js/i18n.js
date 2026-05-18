/**
 * i18n.js — Chinese/English translation dictionary
 */
const LANG_KEY = 'ai4next_lang';

const i18n = {
  zh: {
    'page.title': 'AI4Next — 以智能技术锚定未来趋势',
    'nav.mission': '使命',
    'nav.projects': '项目',
    'hero.tagline': '聚焦下一代人工智能产业落地的开源社区',
    'hero.sub': '',
    'mission.title': '使命',
    'mission.lead': '通过开源协作，连接产业需求、培育 AI 人才、共建开放生态，<br>推动下一代人工智能技术从概念走向落地。',
    'card.industry.title': '下一代产业',
    'card.industry.text': '以 AI 驱动产业智能化转型，重塑传统行业效率边界，构建智能经济新范式。',
    'card.talent.title': '下一代人才',
    'card.talent.text': '培养具备 AI 思维与跨学科能力的未来人才，打造人机协作的下一代劳动力。',
    'card.eco.title': '下一代生态',
    'card.eco.text': '构建开放、可持续的 AI 生态系统，推动技术成果普惠共享与社会价值创造。',
    'projects.title': '开源项目',
    'project.neobee': 'AI 原生头脑风暴工具',
    'project.iperson': '个人 IP 自动化运营系统',
    'project.reflector': 'AI 反思与推理引擎',
    'project.superman': '自主进化的 Agent',
    'project.troll-skill': '杠精.skill',
    'project.learn-openclaw': 'openclaw 开源学习教程',
    'project.datamind': '认知数据分析平台',
    'project.datarefiner': '智能数据清洗与精炼',
    'project.friction': '具有智能推理的批判性系统，质疑假设与决策，将分歧化为优势',
    'footer.copyright': '© 2026 AI4Next. 保留所有权利。',
    'footer.tagline': '以智能技术，赋能下一个时代',
    'lang.toggle': 'EN',
  },
  en: {
    'page.title': 'AI4Next — Anchor Intelligence for the Next Era',
    'nav.mission': 'Mission',
    'nav.projects': 'Projects',
    'hero.tagline': 'Open-Source Community for Next-Gen AI in Industry',
    'hero.sub': '',
    'mission.title': 'Mission',
    'mission.lead': 'Through open-source collaboration, we connect industry needs, nurture AI talent, and build an open ecosystem —<br>driving next-generation AI from concept to reality.',
    'card.industry.title': 'Next-Gen Industry',
    'card.industry.text': 'Driving industrial transformation with AI, reshaping efficiency boundaries, and building a new paradigm for the intelligent economy.',
    'card.talent.title': 'Next-Gen Talent',
    'card.talent.text': 'Cultivating future talent with AI literacy and cross-disciplinary skills, building the next-generation AI-collaborative workforce.',
    'card.eco.title': 'Next-Gen Ecosystem',
    'card.eco.text': 'Building an open, sustainable AI ecosystem, advancing the inclusive sharing of technological achievements and social value creation.',
    'projects.title': 'Open Source Projects',
    'project.neobee': 'AI-native brainstorming tool',
    'project.iperson': 'Personal brand automation system',
    'project.reflector': 'AI reflection and reasoning engine',
    'project.superman': 'Self-evolving agent',
    'project.troll-skill': 'Troll.skill',
    'project.learn-openclaw': 'OpenClaw learning tutorial',
    'project.datamind': 'Cognitive data analysis platform',
    'project.datarefiner': 'Intelligent data cleaning and refinement',
    'project.friction': 'A critical system with intelligent reasoning that challenges assumptions and turns dissent into advantage',
    'footer.copyright': '© 2026 AI4Next. All rights reserved.',
    'footer.tagline': 'Empowering the next era with intelligent technology',
    'lang.toggle': '中',
  },
};

function getSavedLang() {
  try { return localStorage.getItem(LANG_KEY) || 'zh'; } catch { return 'zh'; }
}

function saveLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch {}
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = dict['lang.toggle'];
}

function toggleLang() {
  const current = getSavedLang();
  const next = current === 'zh' ? 'en' : 'zh';
  saveLang(next);
  applyLanguage(next);
}
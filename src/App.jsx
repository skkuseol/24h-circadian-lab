import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { motion } from "framer-motion";
function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
const sanityClient = createClient({
  projectId: "hzkj8uhi",
  dataset: "production",
  apiVersion: "2026-05-04",
  useCdn: false,
  perspective: "published",
});

const completePublications = [
  "Cao Y, Lee J, Seol J, Tsunoda K, Shibuya K, Yoon J, Arai T, Okura T. Dose-response relationship between sleep regularity index and stage-specific Alzheimer’s Disease. Geriatrics, 2026;11(2):32.",
  "Ariyada K, Iwagami M, Yamagishi K, Seol J, Yanagisawa M. A review of sleep-related indicators measured in large population-based cohort studies in Japan. Environmental Health and Preventive Medicine, 2026;31:28.",
  "Uchiyama A, Kamimura H, Miida S, Maruyama H, Tonouchi T, Seol J, Kokubo T, Okura T, Watanabe Y, Kumura N, Abe H, Sakamaki A, Yokoo T, Terai S. Severe, unrecognized sleep disturbances in patients with cirrhosis diagnosed with a portable EEG device. BMJ Health & Care Informatics, 2026;33(1):e101526.",
  "Seol J, Iwagami M, Yanagisawa M. Association of Sleep Patterns Assessed by a Smartphone Application with Work Productivity Loss Among Japanese Employees. npj Digital Medicine, 2025;8:751.",
  "Cao Y, Lee J, Seol J, Shibuya K, Yoon J, Arai T, Yanagisawa M, Okura T. Sleep regularity is associated with cognitive function and shows an inverted U-shaped relationship with serum BDNF. Sleep Medicine, 2025;134:106688.",
  "Iwagami M, Seol J, Yanagisawa M. Temporal changes in sleep parameters and BMI after using a sleep-tracking app with gamification. Sleep Health, 2025;11(3):275-278.",
  "Lee J, Nagata K, Seol J, Park I, Tokuyama K, Yanagisawa M, Okura T. Multi-task exercise increases delta power in NREM sleep among older female adults. NeuroImage, 2025;310:121105.",
  "Seol J, Iwagami M, Kayamare M, Yanagisawa M. Relationship among macronutrients, dietary components, and objective sleep variables measured by smartphone applications. Journal of Medical Internet Research, 2025;27:e64749.",
  "Lim N, Tsunoda K, Seol J, Asano Y, Nagata K, Tsuji T, Fujii K, Fujii Y, Teraoka K, Okura T. Dose-response association between hand dexterity and functional disability. Annals of Geriatric Medicine and Research, 2025.",
  "Liu J, Fujii Y, Fujii K, Seol J, Nagata K, Okura T. Mediating role of frailty status on exercise participation and traffic crashes. BMC Geriatrics, 2025;25:341.",
  "Takahashi T, Seol J, Kokubo T, Goto K, Takanari J. Asparagus extract improves sleep quality and reduces sleepiness and fatigue on awakening. Functional Foods in Health and Disease, 2025;15(4):191-204.",
  "Masaki M, Tsumoto S, Tani A, Tominaga M, Seol J, Chiba S, Miyanishi K, Nishida K, Kawana F, Amemiya T, Hiei T, Kanbayashi T, Yanagisawa M. Discrepancies between subjective and objective sleep assessments revealed by in-home EEG. PNAS, 2025;122(3):e2412895121.",
  "So R, Murai F, Seol J, Matsuo T. Occupational sitting time, occupation, and cardiometabolic health in Japanese workers. International Archives of Occupational and Environmental Health, 2025;98(1):25-32.",
  "Tsumoto S, Seol J, Horie K, Kawana F, Tominaga M, Chiba S, Kondo H, Yoshimine H, Matsubara M, Morishima A, Yanagisawa M, Kitagawa H. Automatic sleep stage classification for sleep apnea patients using in-home sleep EEG. IEEE BigData, 2024:5082-5085.",
  "Seol J, So R, Murai F, Matsuo T. Physical activity patterns, social jetlag, depressive symptoms, and presenteeism. Journal of Occupational Health, 2024;66(1):uiae068.",
  "Seol J, Chiba S, Kawana F, Tsumoto S, Masaki M, Tominaga M, Amemiya T, Tani A, Hiei T, Yoshimine H, Kondo H, Yanagisawa M. Validation of in-home EEG sleep-staging accuracy. Scientific Reports, 2024;14:3533.",
  "Lim N, Tsunoda K, Nagata K, Asano Y, Seol J, Jindo T, Tsuji T, Okura T. Physical performance tests to predict functional disability in Japanese older adults. Geriatrics & Gerontology International, 2024;24(12):1343-1349.",
  "Nagata K, Shibuya K, Fujii Y, Seol J, Jindo T, Okura T. Optimal exercise types for cognitive function in older Japanese adults. Geriatrics & Gerontology International, 2024;24(11):1173-1180.",
  "Seol J, So R, Murai F, Matsuo T. Rest-activity rhythms and cardiorespiratory fitness in middle-aged workers. BMC Public Health, 2024;24:62.",
  "Tsumoto S, Kawana F, Horie K, Masaki M, Nishida K, Miyanishi K, Seol J, et al. Automated narrative sleep reports using portable EEG data through ChatGPT. IEEE ICHI, 2024:376-385.",
  "Yajima K, Chiba S, Park I, Ogata H, Kayaba M, Ishihara A, Tanaka Y, Zhang S, Seol J, Katakura M, Tokuyama K. Dietary palmitic acid to oleic acid ratio modulates energy metabolism and biological rhythms. British Journal of Nutrition, 2024;131(3):447-460.",
  "Iwagami M, Seol J, Hiei T, Kanbayashi T, Kondo H, Yanagisawa M. EEG-based sleep characteristics and physical health in middle-aged adults. Scientific Reports, 2023;13:21545.",
  "Seol J, Kokudo C, Park I, Zhang S, Yajima K, Okura T, Tokuyama K. Energy metabolism and thermoregulation during sleep in older female subjects. Scientific Reports, 2023;13:10416.",
  "Seol J, Lim N, Nagata K, Okura T. Home-based manual dexterity training and cognitive function among older adults. European Review of Aging and Physical Activity, 2023;20:9.",
  "Iwayama K, Seol J, Tokuyama K. Exercise timing matters for glycogen metabolism and accumulated fat oxidation over 24 h. Nutrients, 2023;15(5):1109.",
  "Seol J, Lee J, Park I, Tokuyama K, Fukusumi S, Kokubo T, Yanagisawa M, Okura T. Bidirectional associations between physical activity and sleep in older adults. Scientific Reports, 2022;12:15399.",
  "Park I, Kokudo C, Seol J, Ishihara A, Zhang S, Uchizawa A, Osumi H, Miyamoto R, Horie K, Chihiro S, Suzuki Y, Okura T, Diaz J, Vogt KE, Tokuyama K. Instability of NREM sleep in older women. Frontiers in Aging Neuroscience, 2022;14:1050648.",
  "Inoue T, Nagata K, Tateoka K, Seol J, Yoon J, Tsuji T, Okura T. Digital Trail Making Peg test and cognitive function in older adults. Geriatrics & Gerontology International, 2022;29(3):331-338.",
  "Kim M, Seol J, Sato T, Fukamizu Y, Sakurai T, Okura T. Nicotinamide mononucleotide intake, sleep quality, fatigue, and physical performance in older adults. Nutrients, 2022;14(4):755.",
  "Liu J, Fujii Y, Fujii K, Seol J, Kim M, Tateoka K, Nagata K, Zhang H, Okura T. Pre-frailty and traffic crashes in older drivers. Traffic Injury Prevention, 2022;23(2):73-78.",
  "Seol J, Lee J, Nagata K, Fujii Y, Joho K, Tateoka K, Inoue T, Liu J, Okura T. Daily physical activity, social relationships, and sleep disorder among older adults. BMC Geriatrics, 2021;21:623.",
  "Nagata K, Fujii Y, Seol J, Monma T, Okura T. Sedentary behavior, physical activity, and cognitive function among older Japanese adults. Japanese Journal of Physical Fitness and Sports Medicine, 2021;70(2):149-156.",
  "Seol J, Park I, Kokudo C, Zhang S, Suzuki C, Yajima K, Satoh M, Tokuyama K, Okura T. Low-intensity evening physical activity and sleep quality in older women. Experimental Gerontology, 2021;143:111165.",
  "Seol J, Fujii Y, Inoue T, Kitano N, Tsunoda K, Okura T. Morning versus evening home-based exercise and sleep parameters in older adults. Journal of Geriatric Psychiatry and Neurology, 2021.",
  "Fujii Y, Seol J, Joho K, Liu J, Inoue T, Nagata K, Okura T. Exercise with others and physical/cognitive functions among older adults. Journal of Physical Therapy Science, 2021;33(1):15-21.",
  "Joho K, Seol J, Inoue T, Sato A, Fujii K, Okura T. Static stretching guidance by older exercise volunteers and diary use. Japanese Journal of Health Promotion and Physical Therapy, 2021;10(4):163-172.",
  "Seol J, Abe T, Fujii Y, Joho K, Okura T. Sedentary behavior, physical activity, and sleep quality in older people. Nursing & Health Sciences, 2020;22(1):64-71.",
  "Tanaka Y, Ogata H, Park I, Ando A, Ishihara A, Kayaba M, Yajima K, Suzuki C, Araki A, Osumi H, Zhang S, Seol J, et al. Morning or afternoon exercise and glucose fluctuation. Physiological Reports, 2020;8(4):e14784.",
  "Zhang S, Takano J, Murayama N, Tominaga M, Abe T, Park I, Seol J, et al. Caffeine and oolong tea increase fat oxidation without affecting sleep architecture. Nutrients, 2020;12(12):3671.",
  "Liu J, Fujii Y, Seol J, Fujii K, Kim M, Tateoka K, Okura T. Frailty phenotype and traffic crashes among older drivers. Journal of Transport & Health, 2020;18:100909.",
  "Zhang S, Osumi H, Uchizawa A, Hamada H, Park I, Suzuki Y, Tanaka Y, Ishihara A, Yajima K, Seol J, et al. Sleeping energy metabolism and thermoregulation during menstrual cycle. Physiological Reports, 2020;8(2):e14353.",
  "Fujii Y, Fujii K, Jindo T, Kitano N, Seol J, Tsunoda K, Okura T. Exercising with others, functional disability, and all-cause mortality. International Journal of Environmental Research and Public Health, 2020;17(12):4329.",
  "Seol J, Fujii Y, Park I, Suzuki Y, Kawana F, Yajima K, Fukusumi S, Okura T, Satoh M, Tokuyama K, Kokubo T, Yanagisawa M. Orexin receptor antagonist and GABAA agonist effects after forced awakening. PNAS, 2019;116:24353-24358.",
  "Fujii K, Fujii Y, Kitano N, Jindo T, Sato A, Joho K, Seol J, Hotta K, Okura T. Exercise practice and depression among community-dwelling older adults. Japanese Journal of Health Promotion and Physical Therapy, 2019;8(4):153-162.",
  "Abe T, Fujii K, Seol J, Fujii Y, Joho K, Sato A, Kim M, Okura T. Driving frequency and physical function, dynamic vision, and physical activity in older adults. Journal of Transport & Health, 2018;9:282-287.",
  "Abe T, Seol J, Kim M, Okura T. Car driving, bicycle riding, physical activity, and social participation in Japanese rural areas. Journal of Transport & Health, 2018;10:315-321.",
  "Sato A, Jindo T, Fujii K, Kitano N, Abe T, Shen S, Seol J, Joho K, Fujii Y, Kim M, Okura T. Square-stepping exercise instructed by older volunteers. Journal of Education and Health Science, 2018;64(2):134-143.",
  "Seol J, Fujii Y, Kitano N, Osuka Y, Tanaka K, Okura T. Timing of habitual physical activity and sleep in older adults. Japanese Journal of Physical Fitness and Sports Medicine, 2017;66(6):417-426.",
  "Osuka Y, Fujita S, Kitano N, Kosaki K, Seol J, Sawano J, Shi H, Fujii Y, Maeda S, Okura T, Kobayashi H, Tanaka K. Aerobic and resistance training with fortified milk in older adults. Journal of Nutrition Health & Aging, 2017;21:1349-1357."
];

const copy = {
  en: {
    labName: "24h-Circadian & Health Promotion Lab",
    affiliation: "SKKU College of Sport Science",
    home: "Home",
    nav: {
      members: "Members",
      collaborators: "Collaborators",
      platform: "Platform",
      publications: "Publications",
      contact: "Contact"
    },
    theme: {
      day: {
        name: "Day",
        label: "Daytime Mode",
        hero: "Understanding Human Health Across the Day",
        desc: "We study how physical activity, sedentary behavior, light exposure, and daily routines shape health across waking hours."
      },
      night: {
        name: "Night",
        label: "Nighttime Mode",
        hero: "Decoding Sleep, Physical Activity, and Circadian Rhythm",
        desc: "We investigate sleep physiology, in-home EEG, recovery, and circadian rhythm in real-world environments."
      }
    },
    buttons: {
      explore: "Explore Platform",
      viewPublications: "View Publications",
      chooseConcept: "Choose your rhythm"
    },
    newsLabel: "Latest News",
    newsTitle: "Updates from the lab",
    newsItems: [
      {
        date: "May 2026",
        category: "Event",
        title: "The 24h-Circadian & Health Promotion Lab website is now live.",
        text: "Our lab website has officially launched with information on research platforms, publications, collaborators, and contact details."
      },
      {
        date: "May 2026",
        category: "Collaboration",
        title: "SKKU–FSU collaborative research proposal is in development.",
        text: "We are developing a joint research project using large-scale accelerometry and cardiometabolic health data."
      },
      {
        date: "May 2026",
        category: "Member",
        title: "Graduate students and research interns are welcome.",
        text: "We are open to motivated students interested in sleep, physical activity, circadian rhythm, digital health, and explainable AI."
      }
    ],
    homeResearchLabel: "What We Study",
    homeResearchTitle: "Research at the intersection of sleep, behavior, and data.",
    homeResearchIntro: "We study how daily movement behaviors, sleep physiology, and circadian rhythm interact across the 24-hour day to shape health, recovery, and human performance.",
    researchAreas: [
      { title: "Sleep Physiology", text: "EEG-derived sleep architecture, delta power, and sleep quality." },
      { title: "24-Hour Movement", text: "Sleep, sedentary behavior, and physical activity as one integrated system." },
      { title: "Explainable AI", text: "XGBoost, SHAP, and interpretable models for health behavior research." },
      { title: "Wearables", text: "Actigraphy, accelerometry, and smartphone-based real-world monitoring." },
      { title: "Population Data", text: "UK Biobank, cohort studies, and large-scale digital epidemiology." }
    ],
    membersTitle: "Members",
    membersIntro: "Our team brings together sleep science, physical activity epidemiology, digital health, and data science.",
    collaboratorsTitle: "Collaborators",
    collaboratorsIntro: "We collaborate internationally across sleep medicine, epidemiology, exercise science, and digital health.",
    collaborators: [
      { name: "Institute of Health and Sport Sciences", org: "University of Tsukuba", detail: "Collaborative research in health promotion, physical activity, sleep, and cohort studies." },
      { name: "International Institute for Integrative Sleep Medicine", org: "WPI-IIIS, University of Tsukuba", detail: "Collaboration in sleep medicine, sleep physiology, and real-world sleep research." },
      { name: "National Center for Geriatrics and Gerontology", org: "Japan", detail: "Collaboration in aging, gerontology, lifestyle, and population health research." },
      { name: "S'UIMIN Inc.", org: "Japan", detail: "Industry collaboration on digital sleep data and sleep technology." },
      { name: "Sleep Medicine and Chronobiology Lab", org: "Department of Neurology, Samsung Medical Center", detail: "Collaboration in sleep medicine, chronobiology, and clinical sleep research." }
    ],
    profileTitle: "Jaehoon Seol, Ph.D.",
    profileNameKo: "설재훈",
    profilePosition: "Principal Investigator",
    profileIntro: "Dr. Jaehoon Seol is an Assistant Professor at Sungkyunkwan University whose research bridges sleep medicine, 24-hour movement epidemiology, wearable sensing, and explainable AI.",
    profileHighlights: [
      "Assistant Professor, Sungkyunkwan University (2026–present)",
      "Assistant Professor, University of Tsukuba (2024–2026)",
      "Researcher, JNIOSH, Kawasaki, Japan (2023)",
      "JSPS Postdoctoral Fellow, Tokyo, Japan (2021–2023)",
      "Researcher, R&D Center for Tailor-Made QOL, University of Tsukuba (2020–2021)",
      "Published in npj Digital Medicine, PNAS, Scientific Reports, NeuroImage, Sleep Medicine, JMIR",
      "Principal Investigator of multiple JST and JSPS-funded projects",
      "Editorial Board Member, BMC Geriatrics"
    ],
    profileEducation: [
      "Ph.D., University of Tsukuba (2020)",
      "M.S., University of Tsukuba (2017)",
      "B.S., Myongji University (2013)"
    ],
    profileKeywords: ["Sleep", "Physical Activity", "Sedentary Behavior", "Circadian Rhythm", "Digital Health", "Wearables", "Explainable AI"],
    platformLabel: "Data Platform",
    platformTitle: "Wearable + EEG + AI",
    platformIntro: "Our platform integrates multimodal behavioral and physiological data to understand health across the 24-hour day.",
    platformText: "We analyze national surveys, large-scale biobanks, cohort studies, wearable data hubs, and real-world digital sleep data to understand daily health rhythms.",
    datasetsTitle: "Datasets & Data Hubs",
    datasetsIntro: "Our research platform brings together population-level epidemiology, cohort studies, wearable sensing, and real-world app-based sleep data.",
    datasets: [
      { name: "Korea National Health and Nutrition Examination Survey", short: "KNHANES", text: "Nationally representative health, nutrition, lifestyle, and clinical survey data from Korea." },
      { name: "UK Biobank", short: "UKB", text: "Large-scale biomedical database with accelerometer, biomarker, morbidity, and mortality data." },
      { name: "Tsukuba Happiness Lifestyle Study", short: "THLS", text: "Japanese cohort data for studying health, well-being, lifestyle, and aging-related outcomes." },
      { name: "SKKU 24-h Lifestyle Data Hub", short: "In development", text: "A planned SKKU-based data hub integrating sleep, sedentary behavior, physical activity, and wearable-derived rhythms." },
      { name: "Pokémon Sleep", short: "Real-world app data", text: "Large-scale digital sleep data from everyday users, enabling real-world sleep behavior research." }
    ],
    publicationsLabel: "Academic Portfolio",
    publicationsTitle: "Publications, Grants & Awards",
    publicationsIntro: "Publication list will be updated after final formatting. Research grants and selected awards are shown below.",
    publicationsSectionTitle: "Publications",
    publications: completePublications,
    publicationsPlaceholder: "Publication list is being updated.",
    grantsTitle: "Research Grants",
    awardsTitle: "Awards & Honors",
    grants: [
      "JST Next-Generation Human Resource Development Support",
      "ARIHHP, University of Tsukuba",
      "University of Tsukuba Research Continuation Grant",
      "JSPS Grant-in-Aid for JSPS Fellows",
      "JSPS Research Activity Start-up",
      "Univers Foundation",
      "Sasakawa Sports Foundation",
      "Meiji Yasuda Foundation"
    ],
    awards: [
      "BRIC Scientist of Korea (2025)",
      "Excellent Dissertation Award, Korean Academy of Kinesiology (2021)",
      "Global Leader, K-BioX (2020)",
      "Best Oral Presentation Award, Japan Society of Health Promotion (2020)",
      "President Award, University of Tsukuba (2020)",
      "BRIC Scientist of Korea (2019)"
    ],
    contactTitle: "Contact",
    contactIntro: "For collaboration, student opportunities, or research inquiries, please contact us.",
    contactLocation: "Sungkyunkwan University, College of Sport Science · Suwon, Korea"
  },
  ko: {
    labName: "24h-Circadian & Health Promotion Lab",
    affiliation: "성균관대학교 스포츠과학대학",
    home: "홈",
    nav: {
      members: "구성원",
      collaborators: "협력",
      platform: "플랫폼",
      publications: "논문/프로젝트",
      contact: "연락처"
    },
    theme: {
      day: {
        name: "낮",
        label: "낮 모드",
        hero: "하루 동안의 건강을 이해하다",
        desc: "신체활동, 좌식행동, 빛 노출, 일상 루틴이 깨어 있는 시간의 건강을 어떻게 형성하는지 연구합니다."
      },
      night: {
        name: "밤",
        label: "밤 모드",
        hero: "24시간의 생체리듬과 건강증진의 연결을 탐구하다",
        desc: "수면, 신체활동, 좌식행동을 포함한 24시간 생활행동과 생체리듬이 건강증진에 미치는 영향을 실제 생활 환경과 디지털 헬스 데이터 기반으로 연구합니다."
      }
    },
    buttons: {
      explore: "플랫폼 보기",
      viewPublications: "논문 보기",
      chooseConcept: "나의 리듬 선택하기"
    },
    newsLabel: "Latest News",
    newsTitle: "연구실 소식",
    newsItems: [
      {
        date: "2026년 5월",
        category: "Event",
        title: "24h-Circadian & Health Promotion Lab 홈페이지를 공개했습니다.",
        text: "연구 주제, 데이터 플랫폼, 논문 및 연구업적, 협력기관, 연락처 정보를 담은 연구실 홈페이지를 공식적으로 공개했습니다."
      },
      {
        date: "2026년 5월",
        category: "Collaboration",
        title: "SKKU–FSU 공동연구 제안서를 준비 중입니다.",
        text: "대규모 가속도계 자료와 심혈관대사 건강지표를 활용한 공동연구를 구상하고 있습니다."
      },
      {
        date: "2026년 5월",
        category: "Member",
        title: "대학원생 및 연구인턴을 모집합니다.",
        text: "수면, 신체활동, 생체리듬, 디지털 헬스, 설명가능한 AI에 관심 있는 학생들의 참여를 환영합니다."
      }
    ],
    homeResearchLabel: "주요 연구",
    homeResearchTitle: "수면, 행동, 데이터가 만나는 지점에서 연구합니다.",
    homeResearchIntro: "본 연구실은 24시간 하루 안에서 신체활동, 좌식행동, 수면생리, 생체리듬이 건강, 회복, 수행능력에 어떤 영향을 미치는지 연구합니다.",
    researchAreas: [
      { title: "수면생리", text: "EEG 기반 수면구조, 델타파워, 수면의 질을 분석합니다." },
      { title: "24시간 생활행동", text: "수면, 좌식행동, 신체활동을 하나의 통합 시스템으로 이해합니다." },
      { title: "설명가능한 AI", text: "XGBoost, SHAP 등 해석 가능한 모델을 건강행동 연구에 적용합니다." },
      { title: "웨어러블", text: "액티그래피, 가속도계, 스마트폰 데이터를 활용한 실제 환경 모니터링을 수행합니다." },
      { title: "인구집단 데이터", text: "UK Biobank와 코호트 데이터를 활용한 대규모 디지털 역학 연구를 수행합니다." }
    ],
    membersTitle: "구성원",
    membersIntro: "수면과학, 신체활동 역학, 디지털 헬스, 데이터과학을 연결하는 연구팀입니다.",
    collaboratorsTitle: "협력기관",
    collaboratorsIntro: "수면의학, 역학, 운동과학, 디지털 헬스 분야의 국내외 연구자 및 기관과 협력합니다.",
    collaborators: [
      { name: "Institute of Health and Sport Sciences", org: "University of Tsukuba / 츠쿠바대학교 체육계", detail: "건강증진, 신체활동, 수면, 코호트 연구 분야의 공동연구를 수행합니다." },
      { name: "International Institute for Integrative Sleep Medicine", org: "WPI-IIIS / 국제통합수면의과학연구기구", detail: "수면의학, 수면생리, 실제 생활 기반 수면 연구 분야에서 협력합니다." },
      { name: "National Center for Geriatrics and Gerontology", org: "일본국립장수연구소", detail: "노화, 장수, 생활습관, 인구집단 건강 연구 분야에서 협력합니다." },
      { name: "S'UIMIN Inc.", org: "주식회사 수이민", detail: "디지털 수면 데이터와 수면 테크놀로지 기반 공동연구를 수행합니다." },
      { name: "Sleep Medicine and Chronobiology Lab", org: "삼성서울병원 신경과", detail: "수면의학, 생체리듬, 임상 수면 연구 분야에서 협력합니다." }
    ],
    profileTitle: "설재훈 · Jaehoon Seol, Ph.D.",
    profileNameKo: "설재훈",
    profilePosition: "책임연구자 / Principal Investigator",
    profileIntro: "설재훈 교수는 수면의학, 24시간 생활행동 역학, 웨어러블 센싱, 설명가능한 AI를 연결하는 연구를 수행하고 있습니다.",
    profileHighlights: [
      "성균관대학교 스포츠과학대학 조교수 (2026–현재)",
      "츠쿠바대학교 조교수 (2024–2026)",
      "일본 JNIOSH 연구원 (2023)",
      "일본학술진흥회 JSPS Postdoctoral Fellow (2021–2023)",
      "츠쿠바대학교 Tailor-Made QOL 연구센터 연구원 (2020–2021)",
      "npj Digital Medicine, PNAS, Scientific Reports, Sleep Medicine, JMIR 등 게재",
      "JST 및 JSPS 연구비 다수 책임연구자 수행",
      "BMC Geriatrics Editorial Board Member"
    ],
    profileEducation: [
      "Ph.D., University of Tsukuba (2020)",
      "M.S., University of Tsukuba (2017)",
      "B.S., Myongji University (2013)"
    ],
    profileKeywords: ["Sleep", "Physical Activity", "Sedentary Behavior", "Circadian Rhythm", "Digital Health", "Wearables", "Explainable AI"],
    platformLabel: "데이터 플랫폼",
    platformTitle: "웨어러블 + EEG + AI",
    platformIntro: "24시간 하루를 이해하기 위해 행동 및 생리 데이터를 통합하는 데이터 플랫폼을 구축합니다.",
    platformText: "국가 단위 조사자료, 대규모 바이오뱅크, 코호트 연구, 웨어러블 데이터 허브, 실제 앱 기반 수면 데이터를 활용하여 일상 속 건강 리듬을 분석합니다.",
    datasetsTitle: "분석 데이터셋 및 데이터 허브",
    datasetsIntro: "본 연구실은 인구집단 역학자료, 코호트 연구, 웨어러블 센싱, 실제 앱 기반 수면 데이터를 연결하는 연구 플랫폼을 지향합니다.",
    datasets: [
      { name: "국민건강영양조사", short: "KNHANES", text: "한국인을 대표하는 건강, 영양, 생활습관, 임상지표 기반 국가 조사자료입니다." },
      { name: "UK Biobank", short: "UKB", text: "가속도계, 바이오마커, 질병 이환, 사망자료를 포함하는 대규모 바이오메디컬 데이터베이스입니다." },
      { name: "츠쿠바 해피니스 라이프스타일 연구", short: "THLS", text: "일본 지역사회 기반의 건강, 웰빙, 생활습관, 노화 관련 코호트 자료입니다." },
      { name: "SKKU 24-h Lifestyle Data Hub", short: "구상 중", text: "수면, 좌식행동, 신체활동, 웨어러블 기반 리듬 지표를 통합하는 성균관대 기반 데이터 허브를 구상 중입니다." },
      { name: "Pokémon Sleep", short: "실제 앱 기반 데이터", text: "일상 사용자들의 대규모 디지털 수면 데이터를 활용하여 실제 생활 속 수면행동을 연구합니다." }
    ],
    publicationsLabel: "전체 연구업적",
    publicationsTitle: "논문, 연구비 및 수상",
    publicationsIntro: "논문 목록은 최종 형식 정리 후 업데이트 예정입니다. 현재는 책임연구자로 수행한 연구비와 주요 수상 내역을 표시합니다.",
    publicationsSectionTitle: "논문 목록",
    publications: completePublications,
    publicationsPlaceholder: "논문 목록을 정리 중입니다.",
    grantsTitle: "연구비",
    awardsTitle: "수상 및 선정",
    grants: [
      "JST Next-Generation Human Resource Development Support",
      "ARIHHP, University of Tsukuba",
      "University of Tsukuba Research Continuation Grant",
      "JSPS Grant-in-Aid for JSPS Fellows",
      "JSPS Research Activity Start-up",
      "The Univers Foundation Research Grant",
      "Sasakawa Sports Foundation Research Grant",
      "Meiji Yasuda Foundation of Health and Welfare Research Grant"
    ],
    awards: [
      "한국을 빛내는 사람들, 한국생물학 연구정보센터 BRIC (2025)",
      "Excellent Dissertation Award, Korean Academy of Kinesiology (2021)",
      "Global Leader, K-BioX (2020)",
      "Best Oral Presentation Award, Japan Society of Health Promotion (2020)",
      "President Award, University of Tsukuba (2020)",
      "한국을 빛내는 사람들, 한국생물학 연구정보센터 BRIC (2019)"
    ],
    contactTitle: "연락처",
    contactIntro: "공동연구, 학생 연구참여, 기타 문의는 아래 연락처로 연락해 주세요.",
    contactLocation: "성균관대학교 스포츠과학대학 · 수원"
  }
};

const themes = {
  day: {
    bg: "bg-gradient-to-b from-amber-50 via-orange-50 to-sky-100",
    text: "text-slate-950",
    accent: "from-amber-500 via-orange-500 to-sky-500",
    card: "bg-white/75 border-amber-200/70 backdrop-blur",
    button: "bg-amber-500 hover:bg-amber-400 text-white",
    soft: "bg-amber-500/10",
    glow: "from-amber-300/60 to-orange-200/10",
    activeNav: "bg-amber-500/15 text-amber-700"
  },
  night: {
    bg: "bg-gradient-to-b from-slate-950 via-indigo-950 to-[#070816]",
    text: "text-indigo-50",
    accent: "from-indigo-200 via-sky-300 to-cyan-300",
    card: "bg-white/10 border-white/10 backdrop-blur",
    button: "bg-indigo-200 hover:bg-indigo-100 text-indigo-950",
    soft: "bg-indigo-300/10",
    glow: "from-indigo-300/40 to-cyan-200/5",
    activeNav: "bg-white/15 text-white"
  }
};

const pages = ["members", "collaborators", "platform", "publications", "contact"];

function IconBase({ children, className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
function SunIcon({ className }) {
  return <IconBase className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></IconBase>;
}
function MoonIcon({ className }) {
  return <IconBase className={className}><path d="M20.5 15.2A8.4 8.4 0 0 1 8.8 3.5 8.7 8.7 0 1 0 20.5 15.2Z" /></IconBase>;
}
function ActivityIcon({ className }) {
  return <IconBase className={className}><path d="M3 12h4l2.2-6 4.1 12 2.2-6H21" /></IconBase>;
}
function BrainIcon({ className }) {
  return <IconBase className={className}><path d="M9 4.5A3 3 0 0 0 6 7.5v.2A3.8 3.8 0 0 0 4.5 15a3.2 3.2 0 0 0 3.1 4H10V4.8c-.3-.2-.7-.3-1-.3Z" /><path d="M15 4.5a3 3 0 0 1 3 3v.2a3.8 3.8 0 0 1 1.5 7.3 3.2 3.2 0 0 1-3.1 4H14V4.8c.3-.2.7-.3 1-.3Z" /><path d="M10 9H7.5" /><path d="M14 9h2.5" /><path d="M10 14H7" /><path d="M14 14h3" /></IconBase>;
}
function WatchIcon({ className }) {
  return <IconBase className={className}><path d="M9 2h6l1 4H8l1-4Z" /><rect x="7" y="6" width="10" height="12" rx="3" /><path d="M8 18h8l-1 4H9l-1-4Z" /><path d="M12 10v3l2 1" /></IconBase>;
}
function DatabaseIcon({ className }) {
  return <IconBase className={className}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></IconBase>;
}
function ChevronRightIcon({ className }) {
  return <IconBase className={className}><path d="m9 18 6-6-6-6" /></IconBase>;
}

const icons = [MoonIcon, ActivityIcon, BrainIcon, WatchIcon, DatabaseIcon];

function runSmokeTests() {
  console.assert(Object.keys(themes).length === 2, "Expected day and night themes.");
  console.assert(copy.en && copy.ko, "Expected English and Korean content.");
  console.assert(copy.en.researchAreas.length === icons.length, "Research areas should match icon count.");
  console.assert(Array.isArray(copy.en.grants) && Array.isArray(copy.ko.grants), "Expected grants in both languages.");
  console.assert(Array.isArray(copy.en.awards) && Array.isArray(copy.ko.awards), "Expected awards in both languages.");
  console.assert(typeof ChevronRightIcon === "function", "Chevron icon should be local.");
}
runSmokeTests();

function AnimatedWave({ theme }) {
  const points = Array.from({ length: 80 }, (_, i) => i);
  return (
    <div className={`absolute inset-0 overflow-hidden ${theme === "night" ? "opacity-40" : "opacity-25"}`}>
      <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
        {[0, 1, 2].map((layer) => (
          <motion.path
            key={layer}
            d={"M 0 300 " + points.map((p) => `L ${p * 16} ${300 + Math.sin(p / 3 + layer) * (25 + layer * 16)}`).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4 + layer}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8 + layer, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>
    </div>
  );
}

function FloatingOrb({ theme }) {
  return (
    <motion.div className={`absolute right-10 top-24 h-64 w-64 rounded-full bg-gradient-to-br ${themes[theme].glow} blur-2xl`} animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
  );
}

function RhythmToggle({ theme, setTheme, t, s }) {
  return (
    <motion.div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] opacity-60">{t.buttons.chooseConcept}</p>
      <div className="relative flex rounded-full border border-white/20 bg-white/15 p-2 shadow-2xl backdrop-blur-xl">
        <motion.div className={`absolute bottom-2 top-2 w-[calc(50%-0.5rem)] rounded-full bg-gradient-to-r ${s.accent}`} animate={{ left: theme === "day" ? "0.5rem" : "50%" }} transition={{ type: "spring", stiffness: 260, damping: 26 }} />
        <button type="button" onClick={() => setTheme("day")} className={`relative z-10 flex min-w-32 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${theme === "day" ? "text-white" : "opacity-70"}`}>
          <SunIcon className="h-4 w-4" /> {t.theme.day.name}
        </button>
        <button type="button" onClick={() => setTheme("night")} className={`relative z-10 flex min-w-32 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${theme === "night" ? "text-slate-950" : "opacity-70"}`}>
          <MoonIcon className="h-4 w-4" /> {t.theme.night.name}
        </button>
      </div>
    </motion.div>
  );
}

function PageShell({ label, title, intro, children }) {
  return (
    <motion.section className="relative px-6 py-20 md:py-24" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] opacity-60">{label}</p>
        <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">{title}</h2>
        {intro && <p className="mt-5 max-w-3xl text-lg leading-8 opacity-75">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </motion.section>
  );
}
function NewsSection({ t, s, theme, lang }) {
  const [showAllNews, setShowAllNews] = useState(false);

  const visibleNews = showAllNews
    ? t.newsItems
    : t.newsItems.slice(0, 3);

  return (
    <motion.section
      className="mt-20 text-left"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.3em] ${
          theme === "night" ? "text-cyan-200" : "text-slate-600"
        }`}
      >
        {t.newsLabel}
      </p>

      <h3 className="mt-3 text-3xl font-extrabold md:text-5xl">
        {t.newsTitle}
      </h3>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {visibleNews.map((item) => (
          <Card
            key={item._id || `${item.date}-${item.title}`}
            className={`overflow-hidden rounded-2xl border ${s.card} shadow-xl ${
              theme === "night"
                ? "border-cyan-200/20 text-white"
                : "text-slate-900"
            }`}
          >
            {item.imageUrl && (
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title || "News"}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            )}

            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}
                >
                  {item.category}
                </span>

                <span className="text-xs opacity-70">
                  {item.date}
                </span>
              </div>

              <h4 className="text-lg font-extrabold leading-7">
                {item.title}
              </h4>

              {item.text && (
                <p className="mt-3 text-sm leading-6 opacity-80">
                  {item.text}
                </p>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-5 inline-flex rounded-md px-4 py-2 text-sm font-semibold ${s.button}`}
                >
                  {lang === "ko" ? "자세히 보기" : "View details"}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {t.newsItems.length > 3 && (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            onClick={() => setShowAllNews((previous) => !previous)}
            className={
              showAllNews
                ? "border border-white/20 bg-white/10 text-current hover:bg-white/20"
                : s.button
            }
          >
            {showAllNews
              ? lang === "ko"
                ? "접기"
                : "Show Less"
              : lang === "ko"
                ? "소식 더 보기"
                : "More News"}
          </Button>
        </div>
      )}
    </motion.section>
  );
}
function HomePage({ theme, setTheme, t, s, setPage, lang }) {
  const active = t.theme[theme];
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <AnimatedWave theme={theme} />
      <FloatingOrb theme={theme} />
      <div className="relative z-10 mx-auto max-w-6xl text-center md:text-left">
        <motion.div key={`${theme}-${t.labName}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl md:mx-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] opacity-70">{active.label}</p>
          <h2 className={`bg-gradient-to-r ${s.accent} bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl`}>{active.hero}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 opacity-80 md:mx-0">{active.desc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button type="button" onClick={() => setPage("platform")} className={s.button}>{t.buttons.explore} <ChevronRightIcon className="ml-1 h-4 w-4" /></Button>
            <Button type="button" onClick={() => setPage("publications")} className="bg-white/10 text-current hover:bg-white/20">{t.buttons.viewPublications}</Button>
          </div>
        </motion.div>
        <RhythmToggle theme={theme} setTheme={setTheme} t={t} s={s} />
        <NewsSection
         t={t}
         s={s}
         theme={theme}
         lang={lang}
        />
        <motion.div className="mt-20 text-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${theme === "night" ? "text-cyan-200" : "text-slate-600"}`}>{t.homeResearchLabel}</p>
          <h3 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-5xl">{t.homeResearchTitle}</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 opacity-75">{t.homeResearchIntro}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.researchAreas.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={item.title} whileHover={{ y: -6 }}>
                  <Card className={`h-full rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
                    <CardContent className={`p-6 ${theme === "night" ? "text-white" : "text-slate-900"}`}>
                      <Icon className={`mb-5 h-8 w-8 ${theme === "night" ? "text-cyan-200" : "text-slate-700"}`} />
                      <h4 className={`mb-2 text-xl font-bold ${theme === "night" ? "text-white" : "text-slate-900"}`}>{item.title}</h4>
                      <p className={`text-sm leading-6 ${theme === "night" ? "text-indigo-100 opacity-95" : "text-slate-700"}`}>{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MembersPage({ t, s, theme, setPage, members, lang, setSelectedMember }) {
  const recruitingText = t.home === "Home" ? "Open Positions · Graduate Students · Research Interns" : "대학원생 · 연구인턴 · 공동연구원 모집 중";
  return (
    <PageShell label={t.nav.members} title={t.membersTitle} intro={t.membersIntro}>
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div whileHover={{ y: -6 }}>

  <button type="button" onClick={() => setPage("profile")} className="block w-full text-left">

    <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full ${s.soft}`}>{theme === "day" ? <SunIcon className="h-10 w-10" /> : <MoonIcon className="h-10 w-10 text-cyan-200" />}</div>
                <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}>PI</div>
                <h3 className="text-2xl font-extrabold">설재훈</h3>
                <p className="mt-1 text-lg opacity-90">Jaehoon Seol</p>
                <p className="mt-1 text-sm opacity-70">Ph.D.</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] opacity-60">View Profile</p>
              </CardContent>
            </Card>

  </button>

</motion.div>

        {members && members.map((member) => (
  <motion.div key={member._id} whileHover={{ y: -6 }}>
    <button
      type="button"
      onClick={() => {
        setSelectedMember(member);
        setPage("memberProfile");
      }}
      className="block w-full text-left"
    >
      <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
              <CardContent className="p-8 text-center">

                <div className={`mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ${s.soft}`}>
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.nameEn}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      {theme === "day"
                        ? <SunIcon className="h-10 w-10" />
                        : <MoonIcon className="h-10 w-10 text-cyan-200" />}
                    </div>
                  )}
                </div>

                <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}>
                  {member.role || "Member"}
                </div>

                <h3 className="text-2xl font-extrabold">
                  {lang === "ko" ? member.nameKo : member.nameEn}
                </h3>

                <p className="mt-1 text-sm opacity-70">
                  {member.degree}
                </p>

                <p className="mt-4 text-sm leading-6 opacity-80">
                  {lang === "ko" ? member.bioKo : member.bioEn}
                </p>

                {member.email && (
                  <p className="mt-4 text-xs opacity-70">
                    {member.email}
                  </p>
                )}

              </CardContent>
            </Card>
          </button>
        </motion.div>
      ))}
        <motion.div whileHover={{ y: -6 }}>
          <Card className={`rounded-2xl border border-dashed ${s.card} ${theme === "night" ? "border-cyan-200/30 text-cyan-100" : "border-amber-400/40 text-slate-800"} shadow-xl`}>
            <CardContent className="flex h-full min-h-[260px] flex-col items-center justify-center p-8 text-center">
              <div className={`mb-4 rounded-full px-4 py-2 text-xs font-bold ${s.soft}`}>NOW RECRUITING</div>
              <h3 className="text-2xl font-extrabold">{t.home === "Home" ? "Join Our Lab" : "Join Our Research Team"}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 opacity-80">{recruitingText}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] opacity-60">Sleep · Physical Activity · AI · Digital Health</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageShell>
  );
}

function CollaboratorsPage({ t, s, theme }) {
  return (
    <PageShell label={t.nav.collaborators} title={t.collaboratorsTitle} intro={t.collaboratorsIntro}>
      <div className="grid gap-6 md:grid-cols-2">
        {t.collaborators.map((item) => (
          <Card key={item.name} className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
            <CardContent className={`p-6 ${theme === "night" ? "text-white" : "text-slate-900"}`}>
              <h4 className={`text-xl font-bold ${theme === "night" ? "text-white" : "text-slate-900"}`}>{item.name}</h4>
              <p className={`mt-1 text-sm font-semibold ${theme === "night" ? "text-cyan-200" : "text-amber-700"}`}>{item.org}</p>
              <p className={`mt-4 text-sm leading-6 ${theme === "night" ? "text-indigo-100 opacity-95" : "text-slate-700"}`}>{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function ProfilePage({ t, s, theme, setPage }) {
  return (
    <PageShell label={t.profilePosition} title={t.profileTitle} intro={t.profileIntro}>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className="p-6 text-center">
            <div className={`relative mx-auto mb-5 flex h-72 w-56 items-center justify-center overflow-hidden rounded-3xl border ${theme === "night" ? "border-cyan-200/20 bg-white/10" : "border-amber-200 bg-white/70"}`}>
              <img
  src={t.profilePhotoUrl || "/profile.jpg"}
  alt="Jaehoon Seol"
  className="h-full w-full object-cover"
  onError={(e) => { e.currentTarget.src = "/profile.jpg"; }}
/>
            </div>
            <h3 className="text-2xl font-extrabold">{t.profileNameKo}</h3>
            <p className="mt-1 text-lg opacity-90">Jaehoon Seol</p>
            <p className="mt-1 text-sm opacity-70">Ph.D.</p>
          </CardContent>
        </Card>
        <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold">Research Highlights</h3>
            <div className="mt-6 space-y-3">{t.profileHighlights.map((item) => <div key={item} className="flex items-start gap-3"><div className={`mt-2 h-2 w-2 rounded-full ${theme === "night" ? "bg-cyan-200" : "bg-amber-500"}`} /><p className="text-sm leading-7">{item}</p></div>)}</div>
            <h3 className="mt-10 text-2xl font-bold">Education</h3>
            <div className="mt-5 space-y-3">{t.profileEducation.map((item) => <div key={item} className="flex items-start gap-3"><div className={`mt-2 h-2 w-2 rounded-full ${theme === "night" ? "bg-cyan-200" : "bg-amber-500"}`} /><p className="text-sm leading-7">{item}</p></div>)}</div>
            <h3 className="mt-10 text-2xl font-bold">Research Interests</h3>
            <div className="mt-6 flex flex-wrap gap-3">{t.profileKeywords.map((keyword) => <span key={keyword} className={`rounded-full px-4 py-2 text-sm font-semibold ${s.soft}`}>{keyword}</span>)}</div>
            <p className={`mt-8 leading-8 ${theme === "night" ? "text-indigo-100" : "text-slate-700"}`}>{t.profileIntro}</p>
            <Button type="button" onClick={() => setPage("members")} className={`mt-8 ${s.button}`}>Back to Members</Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
function MemberProfilePage({ member, t, s, theme, setPage, lang }) {
  if (!member) {
    return (
      <PageShell label={t.nav.members} title="Member" intro="">
        <Button type="button" onClick={() => setPage("members")} className={s.button}>
          Back to Members
        </Button>
      </PageShell>
    );
  }

  return (
    <PageShell
      label={member.role || "Member"}
      title={lang === "ko" ? member.nameKo : member.nameEn}
      intro={member.degree}
    >
      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className="p-6 text-center">
            <div className={`relative mx-auto mb-5 flex h-72 w-56 items-center justify-center overflow-hidden rounded-3xl border ${theme === "night" ? "border-cyan-200/20 bg-white/10" : "border-amber-200 bg-white/70"}`}>
              {member.photoUrl ? (
                <img
                  src={member.photoUrl}
                  alt={member.nameEn || member.nameKo}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  {theme === "day"
                    ? <SunIcon className="h-12 w-12" />
                    : <MoonIcon className="h-12 w-12 text-cyan-200" />}
                </div>
              )}
            </div>

            <h3 className="text-2xl font-extrabold">
              {member.nameKo}
            </h3>
            <p className="mt-1 text-lg opacity-90">
              {member.nameEn}
            </p>
            <p className="mt-1 text-sm opacity-70">
              {member.degree}
            </p>
          </CardContent>
        </Card>

        <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className="p-8">
            <div className={`mb-4 inline-flex rounded-full px-4 py-2 text-xs font-bold ${s.soft}`}>
              {member.role || "Member"}
            </div>

            <h3 className="text-3xl font-bold">
              {lang === "ko" ? member.nameKo : member.nameEn}
            </h3>

            <p className={`mt-6 leading-8 ${theme === "night" ? "text-indigo-100" : "text-slate-700"}`}>
              {lang === "ko" ? member.bioKo : member.bioEn}
            </p>

            {member.email && (
              <p className="mt-6 text-sm opacity-80">
                Email: {member.email}
              </p>
            )}

            <Button type="button" onClick={() => setPage("members")} className={`mt-8 ${s.button}`}>
              Back to Members
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
function PlatformPage({ t, s, theme }) {
  return (
    <PageShell label={t.platformLabel} title={t.platformTitle} intro={t.platformIntro}>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className={`rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className={`p-8 ${theme === "night" ? "text-white" : "text-slate-900"}`}>
            <h3 className={`text-3xl font-bold ${theme === "night" ? "text-white" : "text-slate-900"}`}>{t.platformTitle}</h3>
            <p className={`mt-4 leading-7 ${theme === "night" ? "text-indigo-100 opacity-95" : "text-slate-700"}`}>{t.platformText}</p>
          </CardContent>
        </Card>
        <Card className={`relative overflow-hidden rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
          <CardContent className={`p-8 ${theme === "night" ? "text-white" : "text-slate-900"}`}>
            <p className={`text-sm uppercase tracking-[0.3em] ${theme === "night" ? "text-cyan-200" : "text-slate-600"}`}>{t.datasetsTitle}</p>
            <h3 className={`mt-3 text-3xl font-bold ${theme === "night" ? "text-white" : "text-slate-900"}`}>{t.datasetsIntro}</h3>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.datasets.map((dataset) => (
          <motion.div key={dataset.name} whileHover={{ y: -6 }}>
            <Card className={`h-full rounded-2xl border ${s.card} shadow-xl ${theme === "night" ? "text-white border-cyan-200/20" : "text-slate-900"}`}>
              <CardContent className={`p-6 ${theme === "night" ? "text-white" : "text-slate-900"}`}>
                <div className={`mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}>{dataset.short}</div>
                <h4 className="text-xl font-bold">{dataset.name}</h4>
                <p className="mt-3 text-sm leading-6 opacity-75">{dataset.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
function normalizeDoiUrl(doi) {
  if (!doi) return "";

  const cleanDoi = String(doi)
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "");

  return cleanDoi
    ? `https://doi.org/${cleanDoi}`
    : "";
}

function HighlightedAuthors({ authors }) {
  if (!authors) return null;

  /*
    다음 형태를 자동 강조:
    Seol J
    Seol JH
    Seol Jaehoon
    Jaehoon Seol
    설재훈
  */
  const namePattern =
    /(Jaehoon\s+Seol|Seol\s+J(?:H|aehoon)?|설재훈)/gi;

  const parts = String(authors).split(namePattern);

  return (
    <>
      {parts.map((part, index) => {
        const isMyName =
          /^(Jaehoon\s+Seol|Seol\s+J(?:H|aehoon)?|설재훈)$/i.test(
            part.trim()
          );

        return isMyName ? (
          <strong
            key={`${part}-${index}`}
            className="font-extrabold underline decoration-2 underline-offset-4"
          >
            {part}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        );
      })}
    </>
  );
}



function PublicationsPage({ t, s, theme }) {
  const publicationObjects = t.publications.filter(
    (publication) => typeof publication !== "string"
  );

  const years = [
    "All",
    ...Array.from(
      new Set(
        publicationObjects
          .map((publication) => publication.year)
          .filter(Boolean)
      )
    ).sort((a, b) => b - a),
  ];

  const [selectedYear, setSelectedYear] = useState("All");

  const filteredPublications =
    selectedYear === "All"
      ? t.publications
      : t.publications.filter(
          (publication) =>
            typeof publication !== "string" &&
            publication.year === selectedYear
        );

  return (
    <PageShell
      label={t.publicationsLabel}
      title={t.publicationsTitle}
      intro={t.publicationsIntro}
    >
      <h3 className="mb-5 text-2xl font-bold">
        {t.publicationsSectionTitle}
      </h3>
      <div className="mb-8 flex flex-wrap gap-3">
  {years.map((year) => (
    <button
      key={year}
      type="button"
      onClick={() => setSelectedYear(year)}
      className={`rounded-full px-4 py-2 text-sm font-bold transition ${
        selectedYear === year
          ? s.button
          : `${s.soft} hover:opacity-80`
      }`}
    >
      {year === "All"
        ? t.home === "Home"
          ? "All Years"
          : "전체 연도"
        : year}
    </button>
  ))}
</div>

      <div className="grid gap-4">
        {t.publications.length > 0 ? (
          filteredPublications.map((publication, index) => {
            /*
              Sanity 논문은 객체이고,
              completePublications fallback은 문자열입니다.
            */
            const isLegacyString = typeof publication === "string";

            if (isLegacyString) {
              return (
                <Card
                  key={`${index}-${publication}`}
                  className={`rounded-2xl border ${s.card} shadow-xl ${
                    theme === "night"
                      ? "border-cyan-200/20 text-white"
                      : "text-slate-900"
                  }`}
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <span
                      className={`mt-1 shrink-0 rounded-full px-2 py-1 text-xs font-bold ${s.soft}`}
                    >
                      {index + 1}
                    </span>

                    <p
                      className={`text-sm leading-7 ${
                        theme === "night"
                          ? "text-indigo-100"
                          : "text-slate-700"
                      }`}
                    >
                      {publication}
                    </p>
                  </CardContent>
                </Card>
              );
            }

            const doiUrl = normalizeDoiUrl(publication.doi);

            return (
              <motion.div
                key={publication._id || `${publication.title}-${index}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={`rounded-2xl border ${s.card} shadow-xl ${
                    theme === "night"
                      ? "border-cyan-200/20 text-white"
                      : "text-slate-900"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-1 shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${s.soft}`}
                      >
                        {index + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-sm leading-7 ${
                            theme === "night"
                              ? "text-indigo-100"
                              : "text-slate-700"
                          }`}
                        >
                          <HighlightedAuthors
                            authors={publication.authors}
                          />
                        </p>

                        <h4 className="mt-2 text-base font-semibold leading-7">
                          {publication.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7">
                          <span className="font-extrabold underline decoration-2 underline-offset-4">
                            {publication.journal}
                          </span>

                          {publication.year && (
                            <>
                              {", "}
                              <span>{publication.year}</span>
                            </>
                          )}

                          {publication.volumePages && (
                            <>
                              {"; "}
                              <span>{publication.volumePages}</span>
                            </>
                          )}

                          {"."}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          {publication.featured && (
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}
                            >
                              Featured
                            </span>
                          )}
                          {publication.authorRole && (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${s.soft}`}>
      {{
        first: "First Author",
        cofirst: "Co-first Author",
        corresponding: "Corresponding Author",
        cocorresponding: "Co-corresponding Author",
        senior: "Senior Author",
        coauthor: "Co-author",
      }[publication.authorRole]}
    </span>
  )}


                    

                          {doiUrl && (
                            <a
                              href={doiUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex rounded-md px-3 py-2 text-xs font-bold ${s.button}`}
                            >
                              DOI
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        ) : (
          <p className="text-sm opacity-70">
            {t.publicationsPlaceholder}
          </p>
        )}
      </div>

      <h3 className="mb-5 mt-14 text-2xl font-bold">
        {t.grantsTitle}
      </h3>

      <div className="space-y-3">
        {t.grants.map((item) => (
          <p
            key={item}
            className="text-sm leading-7 opacity-90"
          >
            • {item}
          </p>
        ))}
      </div>

      <h3 className="mb-5 mt-14 text-2xl font-bold">
        {t.awardsTitle}
      </h3>

      <div className="space-y-3">
        {t.awards.map((item) => (
          <p
            key={item}
            className="text-sm leading-7 opacity-90"
          >
            • {item}
          </p>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage({ t }) {
  return (
    <PageShell label={t.nav.contact} title={t.contactTitle} intro={t.contactIntro}>
      <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur">
        <p className="opacity-80">{t.contactLocation}</p>
        <p className="mt-2 opacity-80">seol.jaehoon@skku.edu</p>
      </div>
    </PageShell>
  );
}

export default function LabWebsite() {
  const [theme, setTheme] = useState("night");
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  const [sanityNews, setSanityNews] = useState([]);
  const [sanityMembers, setSanityMembers] = useState([]);
  const [sanityPublications, setSanityPublications] = useState([]);
  const [sanityProfile, setSanityProfile] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
  sanityClient
    .fetch(`*[_type == "news"] | order(date desc) {
      _id,
      date,
      category,
      titleEn,
      titleKo,
      textEn,
      textKo,
      link,
      "imageUrl": image.asset->url
    }`)
    .then(setSanityNews)
    .catch(console.error);

  sanityClient
  .fetch(`*[_type == "member"]{
    _id,
    nameKo,
    nameEn,
    role,
    degree,
    bioEn,
    bioKo,
    email,
    order,
    "photoUrl": photo.asset->url
  }`)
  .then((data) => {
    console.log("member fetch:", data);
    setSanityMembers(data);
  })
  .catch(console.error);

  sanityClient
    .fetch(`*[_type == "publication"] | order(year desc, featured desc, _createdAt desc) {
     _id,
     year,
     authors,
     title,
     journal,
     volumePages,
     doi,
     featured,
     authorRole
    }`)

    .then(setSanityPublications)
    .catch((error) => {
     console.error("Publication fetch error:", error);
    });

  sanityClient
    .fetch(`*[_type == "profile"][0] {
      titleEn, titleKo, introEn, introKo,
      highlightsEn, highlightsKo, education, keywords,
      "photoUrl": photo.asset->url
    }`)
    .then(setSanityProfile)
    .catch(console.error);
}, []);
console.log("sanityMembers:", sanityMembers);
  const t = {
  ...copy[lang],

  newsItems:
  sanityNews.length > 0
    ? sanityNews.map((item) => ({
        _id: item._id,
        date: item.date,
        category: item.category,
        title: lang === "ko" ? item.titleKo : item.titleEn,
        text: lang === "ko" ? item.textKo : item.textEn,
        imageUrl: item.imageUrl,
        link: item.link,
      }))
    : copy[lang].newsItems,

  publications:
     sanityPublications.length > 0
       ? sanityPublications
       : copy[lang].publications,

  profileTitle:
    sanityProfile
      ? lang === "ko"
        ? sanityProfile.titleKo
        : sanityProfile.titleEn
      : copy[lang].profileTitle,

  profileIntro:
    sanityProfile
      ? lang === "ko"
        ? sanityProfile.introKo
        : sanityProfile.introEn
      : copy[lang].profileIntro,

  profileHighlights:
    sanityProfile
      ? lang === "ko"
        ? sanityProfile.highlightsKo || copy[lang].profileHighlights
        : sanityProfile.highlightsEn || copy[lang].profileHighlights
      : copy[lang].profileHighlights,

  profileEducation:
    sanityProfile?.education || copy[lang].profileEducation,

  profileKeywords:
    sanityProfile?.keywords || copy[lang].profileKeywords,

  profilePhotoUrl:
    sanityProfile?.photoUrl || "/profile.jpg",
};

  const s = themes[theme] || themes.night;

  const renderPage = () => {
    if (page === "members") return (
  <MembersPage
    t={t}
    s={s}
    theme={theme}
    setPage={setPage}
    members={sanityMembers}
    lang={lang}
    setSelectedMember={setSelectedMember}
  />
);
    if (page === "profile") return <ProfilePage t={t} s={s} theme={theme} setPage={setPage} />;
    if (page === "memberProfile") return (
  <MemberProfilePage
    member={selectedMember}
    t={t}
    s={s}
    theme={theme}
    setPage={setPage}
    lang={lang}
  />
);
    if (page === "collaborators") return <CollaboratorsPage t={t} s={s} theme={theme} />;
    if (page === "platform") return <PlatformPage t={t} s={s} theme={theme} />;
    if (page === "publications") return <PublicationsPage t={t} s={s} theme={theme} />;
    if (page === "contact") return <ContactPage t={t} />;
    return <HomePage theme={theme} setTheme={setTheme} t={t} s={s} setPage={setPage} lang={lang} />;
  };

  return (
    <div className={`min-h-screen ${s.bg} ${s.text} transition-all duration-700`}>
      <header className="sticky top-0 z-30 border-b border-white/10 bg-inherit/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <button type="button" onClick={() => setPage("home")} className="text-left">
            <p className="text-xs uppercase tracking-[0.35em] opacity-60">{t.affiliation}</p>
            <h1 className="text-xl font-bold">{t.labName}</h1>
          </button>
          <nav className="hidden gap-2 text-sm opacity-90 md:flex">
            <button type="button" onClick={() => setPage("home")} className={`rounded-full px-3 py-2 transition ${page === "home" ? s.activeNav : "hover:bg-white/10"}`}>{t.home}</button>
            {pages.map((key) => (
              <button key={key} type="button" onClick={() => setPage(key)} className={`rounded-full px-3 py-2 transition ${page === key ? s.activeNav : "hover:bg-white/10"}`}>{t.nav[key]}</button>
            ))}
          </nav>
          <div className="flex gap-2">
            <Button type="button" onClick={() => setLang("en")} className={lang === "en" ? s.button : "bg-white/10 text-current hover:bg-white/20"}>EN</Button>
            <Button type="button" onClick={() => setLang("ko")} className={lang === "ko" ? s.button : "bg-white/10 text-current hover:bg-white/20"}>KO</Button>
          </div>
        </div>
        <div className="mx-auto mt-3 flex max-w-6xl gap-2 overflow-x-auto pb-1 md:hidden">
          <button type="button" onClick={() => setPage("home")} className={`shrink-0 rounded-full px-3 py-2 text-sm transition ${page === "home" ? s.activeNav : "bg-white/10"}`}>{t.home}</button>
          {pages.map((key) => (
            <button key={key} type="button" onClick={() => setPage(key)} className={`shrink-0 rounded-full px-3 py-2 text-sm transition ${page === key ? s.activeNav : "bg-white/10"}`}>{t.nav[key]}</button>
          ))}
        </div>
      </header>
      <main className="relative overflow-hidden">
        <AnimatedWave theme={theme} />
        <FloatingOrb theme={theme} />
        <div className="relative z-10">{renderPage()}</div>
      </main>
    </div>
  );
}

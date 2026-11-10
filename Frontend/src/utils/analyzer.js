// ScamShield AI - Detection Engine Simulation

export const PRESET_SAMPLES = [
  {
    id: 'sample-genuine',
    title: 'Google Software Engineering Intern 2026',
    url: 'https://careers.google.com/jobs/results/1289472910-software-engineer-intern-summer-2026',
    type: 'url',
    label: 'Official Tech Internship (Genuine)',
    tag: 'Safe',
    color: 'emerald'
  },
  {
    id: 'sample-scam',
    title: 'Work from Home Data Entry - Pay ₹499 Security Deposit',
    url: 'https://bit.ly/telegram-instant-hiring-daily-payment-guaranteed',
    type: 'url',
    label: 'Telegram Fee Scam (Fake)',
    tag: 'High Scam Risk',
    color: 'rose'
  },
  {
    id: 'sample-uncertain',
    title: 'Growth Marketing Intern at Stealth AI Labs',
    url: 'https://angel-stealth-talents.notion.site/internship-apply-2026',
    type: 'url',
    label: 'Unverified Startup Offer (Uncertain)',
    tag: 'Manual Review',
    color: 'amber'
  }
];

export const SAMPLE_IMAGES = [
  {
    id: 'img-whatsapp-scam',
    name: 'whatsapp_recruitment_scam.png',
    company: 'Global Digital Solutions HR (WhatsApp)',
    type: 'image',
    scenario: 'scam',
    badge: 'Telegram / Upfront Fee Scam',
    description: 'WhatsApp screenshot offering ₹35,000/week for liking YouTube videos with ₹500 joining fee.',
    // Sleek SVG data URI for demo image
    preview: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380" fill="%230b1329"><rect width="600" height="380" fill="%230b1329" rx="12"/><rect x="20" y="20" width="560" height="340" fill="%23075e54" rx="8" opacity="0.15"/><text x="40" y="60" fill="%2325D366" font-family="sans-serif" font-weight="bold" font-size="20">WhatsApp Recruitment Scam Advertisement</text><rect x="40" y="85" width="520" height="250" fill="%231e293b" rx="8"/><text x="60" y="125" fill="%23f87171" font-family="sans-serif" font-weight="bold" font-size="16">⚠️ URGENT HIRING: Part-time / Remote Internship</text><text x="60" y="155" fill="%23e2e8f0" font-family="sans-serif" font-size="14">• Earn ₹2,500 - ₹5,000 Daily just by typing and rating!</text><text x="60" y="185" fill="%23e2e8f0" font-family="sans-serif" font-size="14">• No interview, no resume required! Immediate joining.</text><text x="60" y="215" fill="%23fbbf24" font-family="sans-serif" font-size="14">• Contact HR on Telegram: @quick_easy_money_hr</text><text x="60" y="245" fill="%23f87171" font-family="sans-serif" font-weight="bold" font-size="14">• Refundable laptop security deposit ₹999 required via UPI.</text><rect x="60" y="275" width="220" height="36" fill="%23e11d48" rx="6"/><text x="80" y="298" fill="white" font-family="sans-serif" font-weight="bold" font-size="13">🚨 HIGH SCAM INDICATORS</text></svg>`
  },
  {
    id: 'img-official-offer',
    name: 'microsoft_offer_letter_sample.png',
    company: 'Microsoft Corporation',
    type: 'image',
    scenario: 'genuine',
    badge: 'Enterprise Verified Offer',
    description: 'Corporate internship offer letter from official Microsoft Careers domain with zero fee requests.',
    preview: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380" fill="%230b1329"><rect width="600" height="380" fill="%230b1329" rx="12"/><rect x="20" y="20" width="560" height="340" fill="%230078d4" rx="8" opacity="0.12"/><text x="40" y="60" fill="%2338bdf8" font-family="sans-serif" font-weight="bold" font-size="20">Microsoft Careers – Summer Internship 2026</text><rect x="40" y="85" width="520" height="250" fill="%231e293b" rx="8"/><text x="60" y="125" fill="%2334d399" font-family="sans-serif" font-weight="bold" font-size="16">✓ Official Software Engineering Intern Program</text><text x="60" y="155" fill="%23e2e8f0" font-family="sans-serif" font-size="14">• Location: Hyderabad / Bangalore / Remote Eligible</text><text x="60" y="185" fill="%23e2e8f0" font-family="sans-serif" font-size="14">• Domain: microsoft.com/careers (Authenticated SSL/TLS)</text><text x="60" y="215" fill="%23e2e8f0" font-family="sans-serif" font-size="14">• Rigorous technical screening rounds; No fees ever asked.</text><text x="60" y="245" fill="%2338bdf8" font-family="sans-serif" font-size="14">• Contact: universityrecruiting@microsoft.com</text><rect x="60" y="275" width="220" height="36" fill="%23059669" rx="6"/><text x="75" y="298" fill="white" font-family="sans-serif" font-weight="bold" font-size="13">🛡️ VERIFIED ENTERPRISE</text></svg>`
  }
];

export function analyzeOffer({ type, input, fileName, imageMeta }) {
  const textToScan = ((type === 'url' ? input : (fileName || '')) + ' ' + (imageMeta?.description || '')).toLowerCase();

  // Known Scam Flags
  const hasFeeWords = /fee|deposit|pay|charge|money|upi|refundable|₹|rs\.?|dollar|\$499|\$999|999|499/.test(textToScan);
  const hasChatRedirect = /telegram|whatsapp|wa\.me|bit\.ly|tinyurl|t\.me|goo\.gl|shorturl/.test(textToScan);
  const hasUnrealisticOffer = /data entry|typing|form filling|daily earn|hourly pay|no interview|immediate join|guaranteed 5000/.test(textToScan);
  const hasFreeEmailDomain = /@gmail\.com|@yahoo\.com|@hotmail\.com|@outlook\.com/.test(textToScan);

  // Known Trusted Flags
  const hasTrustedDomain = /google\.com|microsoft\.com|amazon\.com|apple\.com|linkedin\.com|github\.com|tcs\.com|infosys\.com|accenture\.com|wipro\.com|meta\.com|netflix\.com|adobe\.com|salesforce\.com|intel\.com|ibm\.com/.test(textToScan);

  let scenario = 'uncertain';

  if (hasTrustedDomain && !hasFeeWords && !hasChatRedirect) {
    scenario = 'genuine';
  } else if (hasFeeWords || hasChatRedirect || hasUnrealisticOffer || textToScan.includes('scam') || textToScan.includes('fake')) {
    scenario = 'scam';
  } else if (textToScan.includes('official') || textToScan.includes('verified') || textToScan.includes('careers')) {
    scenario = 'genuine';
  } else if (type === 'image' && imageMeta?.scenario) {
    scenario = imageMeta.scenario;
  } else {
    // Deterministic pseudo-variation based on hash of input string
    let hash = 0;
    for (let i = 0; i < textToScan.length; i++) {
      hash = (hash << 5) - hash + textToScan.charCodeAt(i);
      hash |= 0;
    }
    const mod = Math.abs(hash) % 3;
    if (mod === 0) scenario = 'genuine';
    else if (mod === 1) scenario = 'scam';
    else scenario = 'uncertain';
  }

  const timestamp = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  if (scenario === 'genuine') {
    const trustScore = 88 + (Math.abs(textToScan.length * 3) % 10); // 88 - 97
    const riskPercentage = 100 - trustScore;

    return {
      id: 'analysis-' + Date.now(),
      companyName: extractCompanyName(input, fileName) || 'Verified Tech Organization',
      inputType: type === 'url' ? 'URL Verification' : 'Screenshot OCR Scan',
      target: type === 'url' ? input : (fileName || 'Uploaded Advertisement Image'),
      date: timestamp,
      status: 'Likely Genuine',
      riskLevel: 'Low Risk',
      statusColor: 'green', // 'green' | 'red' | 'yellow'
      trustScore,
      riskPercentage,
      chartData: [
        { name: 'Genuine Indicators', value: trustScore, fill: '#10b981' },
        { name: 'Suspicious Indicators', value: riskPercentage, fill: '#ef4444' }
      ],
      categories: [
        {
          name: 'Company Information',
          status: 'safe',
          title: 'Registered Enterprise Entity',
          desc: 'Verified domain identity matches registered corporate trademarks and valid active SSL certificate.'
        },
        {
          name: 'Recruitment Email Verification',
          status: 'safe',
          title: 'Official Corporate Domain Email',
          desc: 'Communication originates from an authentic corporate domain rather than a free email provider.'
        },
        {
          name: 'Job Description Authenticity',
          status: 'safe',
          title: 'Structured & Realistic Responsibilities',
          desc: 'Technical requirements, qualification criteria, and project roadmap conform to industry standards.'
        },
        {
          name: 'Payment Request Detection',
          status: 'safe',
          title: 'Zero Upfront Fees Requested',
          desc: 'No requests for training charges, refundable deposits, equipment fees, or registration costs.'
        },
        {
          name: 'Suspicious URL Detection',
          status: 'safe',
          title: 'Direct Official Career Portal',
          desc: 'Domain uses HTTPS, lacks URL-shortener redirects, and has a strong domain reputation history.'
        },
        {
          name: 'Contact Information',
          status: 'safe',
          title: 'Corporate Headquarters & HR Registry',
          desc: 'Physical headquarters address and verified professional recruiter LinkedIn profiles found.'
        },
        {
          name: 'Salary and Benefits Verification',
          status: 'safe',
          title: 'Realistic Industry-Standard Stipend',
          desc: 'Compensation package aligns with market benchmarks for college interns and entry-level talent.'
        }
      ],
      explanation:
        'Our simulated heuristic inspection verified valid enterprise domain infrastructure, transparent interview milestones, and an absence of upfront monetary requests. The posting exhibits characteristics of an authentic corporate recruitment initiative.',
      recommendations: [
        'Apply directly through the official career portal rather than unverified third-party aggregators.',
        'Keep records of job application IDs and verify the recruiter identity via professional networks (LinkedIn).',
        'Ensure that any formal interview invitations are delivered from official @company.com email addresses.',
        'Never disclose confidential credentials like bank OTPs, even during legitimate onboarding processes.'
      ]
    };
  } else if (scenario === 'scam') {
    const trustScore = 8 + (Math.abs(textToScan.length * 2) % 10); // 8 - 17
    const riskPercentage = 100 - trustScore;

    return {
      id: 'analysis-' + Date.now(),
      companyName: extractCompanyName(input, fileName) || 'Unregistered Suspicious Recruiter',
      inputType: type === 'url' ? 'URL Verification' : 'Screenshot OCR Scan',
      target: type === 'url' ? input : (fileName || 'Uploaded Advertisement Image'),
      date: timestamp,
      status: 'Potential Scam Detected',
      riskLevel: 'High Risk',
      statusColor: 'red',
      trustScore,
      riskPercentage,
      chartData: [
        { name: 'Genuine Indicators', value: trustScore, fill: '#10b981' },
        { name: 'Suspicious Indicators', value: riskPercentage, fill: '#ef4444' }
      ],
      categories: [
        {
          name: 'Company Information',
          status: 'suspicious',
          title: 'No Verified Corporate Registry',
          desc: 'The entity lacks verifiable registration numbers, physical headquarters, or active LinkedIn company page.'
        },
        {
          name: 'Recruitment Email Verification',
          status: 'suspicious',
          title: 'Free Webmail or Masked Sender',
          desc: 'Recruiter uses free Gmail/Telegram accounts or misspelled domain lookalikes (e.g., typosquatting).'
        },
        {
          name: 'Job Description Authenticity',
          status: 'suspicious',
          title: 'Vague Tasks & Immediate Hiring',
          desc: 'Offers "Guaranteed selection without technical interview" or generic tasks like simple copy-paste.'
        },
        {
          name: 'Payment Request Detection',
          status: 'suspicious',
          title: 'Monetary Demand Detected ⚠️',
          desc: 'Demands upfront registration fee, training kit charges, refundable laptop security, or UPI transfer.'
        },
        {
          name: 'Suspicious URL Detection',
          status: 'suspicious',
          title: 'High-Risk Redirect or Shortlink',
          desc: 'Uses bit.ly, t.me, wa.me, or newly registered disposable domains flagged in scam databases.'
        },
        {
          name: 'Contact Information',
          status: 'suspicious',
          title: 'Solely Anonymous Chat Channels',
          desc: 'Communication restricted entirely to WhatsApp or Telegram direct messages without corporate contacts.'
        },
        {
          name: 'Salary and Benefits Verification',
          status: 'suspicious',
          title: 'Unrealistically Inflated Pay Rates',
          desc: 'Promises disproportionate compensation (e.g. ₹5,000/day for 1 hour of casual work) targeting vulnerable students.'
        }
      ],
      explanation:
        'Multiple critical scam signatures were flagged: recruitment rerouted to unmonitored chat apps (WhatsApp/Telegram), suspicious demands for upfront monetary fees or deposits, and unrealistically inflated compensation for minimal qualifications.',
      recommendations: [
        'DO NOT send any money, UPI payments, or registration fees under any circumstances.',
        'Cease communication immediately on WhatsApp or Telegram and block the suspicious sender.',
        'Do not share your Aadhaar, PAN card, banking details, or one-time passwords (OTPs).',
        'Report the posting or link to the National Cyber Crime Reporting Portal (cybercrime.gov.in) and college placement cell.',
        'Warn your peers and batchmates so they do not fall victim to this fraudulent campaign.'
      ]
    };
  } else {
    // Uncertain
    const trustScore = 48 + (Math.abs(textToScan.length) % 10); // 48 - 57
    const riskPercentage = 100 - trustScore;

    return {
      id: 'analysis-' + Date.now(),
      companyName: extractCompanyName(input, fileName) || 'Unverified Early-Stage Venture',
      inputType: type === 'url' ? 'URL Verification' : 'Screenshot OCR Scan',
      target: type === 'url' ? input : (fileName || 'Uploaded Advertisement Image'),
      date: timestamp,
      status: 'Needs Manual Verification',
      riskLevel: 'Medium Risk',
      statusColor: 'yellow',
      trustScore,
      riskPercentage,
      chartData: [
        { name: 'Genuine Indicators', value: trustScore, fill: '#10b981' },
        { name: 'Suspicious Indicators', value: riskPercentage, fill: '#ef4444' }
      ],
      categories: [
        {
          name: 'Company Information',
          status: 'uncertain',
          title: 'Limited Online Footprint',
          desc: 'The employer appears to be a very recent startup or stealth agency with limited verified reviews.'
        },
        {
          name: 'Recruitment Email Verification',
          status: 'uncertain',
          title: 'Third-Party Form / Notion Link',
          desc: 'Submissions are accepted via Google Forms or Notion page rather than an integrated applicant tracking system.'
        },
        {
          name: 'Job Description Authenticity',
          status: 'safe',
          title: 'Plausible Technical Scope',
          desc: 'The role description outlines standard engineering or marketing duties without glaring red flags.'
        },
        {
          name: 'Payment Request Detection',
          status: 'safe',
          title: 'No Overt Fee Demands Found',
          desc: 'No explicit upfront fees requested so far, but remain vigilant during subsequent interview stages.'
        },
        {
          name: 'Suspicious URL Detection',
          status: 'uncertain',
          title: 'Shared Hosting or Subdomain',
          desc: 'The link points to a document workspace or third-party portfolio without a dedicated corporate root domain.'
        },
        {
          name: 'Contact Information',
          status: 'uncertain',
          title: 'Informal Contact Channels',
          desc: 'Only one recruiter contact identified. Independent verification through official registrar recommended.'
        },
        {
          name: 'Salary and Benefits Verification',
          status: 'uncertain',
          title: 'Performance / Equity Based Stipend',
          desc: 'Uncertain stipend model or unpaid evaluation trial. Clarify written employment terms before accepting.'
        }
      ],
      explanation:
        'The submission displays neither overt fraudulent fee demands nor robust corporate validation. This pattern is common in very early-stage startups or community gigs; secondary manual verification is strongly advised before accepting.',
      recommendations: [
        'Request an official offer letter on letterhead with complete GST / CIN corporate identification numbers.',
        'Schedule a face-to-face video interview with the team before executing any formal agreements.',
        'Never transfer funds for equipment or background verification if asked at a later stage.',
        'Consult your college training and placement officer (TPO) to confirm if this startup is recognized.'
      ]
    };
  }
}

function extractCompanyName(urlOrText, fileName) {
  if (urlOrText) {
    try {
      const parsed = new URL(urlOrText);
      const host = parsed.hostname.replace('www.', '').replace('careers.', '');
      const parts = host.split('.');
      if (parts.length > 0 && parts[0].length > 2) {
        return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      }
    } catch {
      // Not a valid URL, check keyword
      if (urlOrText.toLowerCase().includes('google')) return 'Google LLC';
      if (urlOrText.toLowerCase().includes('microsoft')) return 'Microsoft';
      if (urlOrText.toLowerCase().includes('amazon')) return 'Amazon';
      if (urlOrText.toLowerCase().includes('telegram')) return 'Unverified Telegram Channel';
      if (urlOrText.toLowerCase().includes('whatsapp')) return 'WhatsApp Recruitment Group';
    }
  }
  if (fileName) {
    const clean = fileName.split('.')[0].replace(/[-_]/g, ' ');
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  }
  return null;
}

export const INITIAL_HISTORY = [
  {
    id: 'hist-1',
    companyName: 'Infosys Springboard Internship',
    inputType: 'URL Verification',
    target: 'https://infyspringboard.onwingspan.com/web/en/page/internship',
    trustScore: 94,
    riskPercentage: 6,
    status: 'Likely Genuine',
    riskLevel: 'Low Risk',
    statusColor: 'green',
    date: 'Nov 10, 2026, 04:30 PM'
  },
  {
    id: 'hist-2',
    companyName: 'Daily ₹4000 Typing Job (Telegram)',
    inputType: 'Screenshot OCR Scan',
    target: 'telegram_hiring_post_ad.png',
    trustScore: 12,
    riskPercentage: 88,
    status: 'Potential Scam Detected',
    riskLevel: 'High Risk',
    statusColor: 'red',
    date: 'Nov 10, 2026, 02:15 PM'
  },
  {
    id: 'hist-3',
    companyName: 'Frontend Intern @ Stealth AI Labs',
    inputType: 'URL Verification',
    target: 'https://stealth-ai.notion.site/careers-2026',
    trustScore: 52,
    riskPercentage: 48,
    status: 'Needs Manual Verification',
    riskLevel: 'Medium Risk',
    statusColor: 'yellow',
    date: 'Nov 9, 2026, 08:45 PM'
  }
];

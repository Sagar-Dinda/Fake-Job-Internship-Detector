// Download Report Generator Utility for ScamShield AI

export function downloadReport(result) {
  if (!result) return;

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ScamShield AI - Security Audit Report (${result.companyName})</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #0f172a;
      background: #f8fafc;
      margin: 0;
      padding: 40px 20px;
    }
    .report-card {
      max-width: 800px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
    }
    .header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 20px;
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }
    .subtitle {
      font-size: 13px;
      color: #64748b;
      margin-top: 4px;
    }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 14px;
    }
    .badge-green { background: #dcfce7; color: #15803d; border: 1px solid #86efac; }
    .badge-red { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
    .badge-yellow { background: #fef3c7; color: #b45309; border: 1px solid #fcd34d; }
    .score-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 25px 0;
    }
    .score-box {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    .score-value {
      font-size: 36px;
      font-weight: 800;
      margin-top: 5px;
    }
    .score-green { color: #16a34a; }
    .score-red { color: #dc2626; }
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .meta-table td {
      padding: 10px 14px;
      border-bottom: 1px solid #e2e8f0;
      font-size: 14px;
    }
    .meta-table td.label {
      font-weight: 600;
      color: #475569;
      width: 35%;
    }
    .section-title {
      font-size: 17px;
      font-weight: 700;
      color: #1e293b;
      margin: 25px 0 12px;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 6px;
    }
    .category-item {
      padding: 10px 0;
      border-bottom: 1px dashed #e2e8f0;
      font-size: 14px;
    }
    .category-title {
      font-weight: 600;
      color: #1e293b;
    }
    .category-desc {
      color: #64748b;
      font-size: 13px;
      margin-top: 2px;
    }
    .recommendations-list {
      padding-left: 20px;
      color: #334155;
      font-size: 14px;
    }
    .recommendations-list li {
      margin-bottom: 6px;
    }
    .disclaimer {
      margin-top: 35px;
      padding: 15px;
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-radius: 6px;
      font-size: 12px;
      color: #92400e;
    }
  </style>
</head>
<body>
  <div class="report-card">
    <div class="header">
      <div>
        <h1 class="title">ScamShield AI Audit Report</h1>
        <div class="subtitle">Heuristic Job & Internship Risk Verification</div>
      </div>
      <div>
        <span class="badge ${
          result.statusColor === 'green'
            ? 'badge-green'
            : result.statusColor === 'red'
            ? 'badge-red'
            : 'badge-yellow'
        }">${result.status} • ${result.riskLevel}</span>
      </div>
    </div>

    <table class="meta-table">
      <tr>
        <td class="label">Target Entity</td>
        <td><strong>${result.companyName}</strong></td>
      </tr>
      <tr>
        <td class="label">Verification Type</td>
        <td>${result.inputType}</td>
      </tr>
      <tr>
        <td class="label">Input Reference</td>
        <td style="word-break: break-all;">${result.target}</td>
      </tr>
      <tr>
        <td class="label">Timestamp</td>
        <td>${result.date}</td>
      </tr>
    </table>

    <div class="score-grid">
      <div class="score-box">
        <div style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Trust Score</div>
        <div class="score-value ${result.trustScore >= 70 ? 'score-green' : 'score-red'}">${result.trustScore}%</div>
      </div>
      <div class="score-box">
        <div style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">Calculated Risk Level</div>
        <div class="score-value ${result.riskPercentage > 40 ? 'score-red' : 'score-green'}">${result.riskPercentage}%</div>
      </div>
    </div>

    <div class="section-title">Automated Analysis Summary</div>
    <p style="font-size: 14px; color: #334155;">${result.explanation}</p>

    <div class="section-title">Evaluation Breakdown (7 Categories)</div>
    ${result.categories
      .map(
        (cat) => `
      <div class="category-item">
        <div class="category-title">
          ${cat.status === 'safe' ? '✅ [SAFE]' : cat.status === 'suspicious' ? '❌ [SUSPICIOUS]' : '⚠️ [UNCERTAIN]'} 
          ${cat.name}: ${cat.title}
        </div>
        <div class="category-desc">${cat.desc}</div>
      </div>
    `
      )
      .join('')}

    <div class="section-title">Security Recommendations</div>
    <ul class="recommendations-list">
      ${result.recommendations.map((rec) => `<li>${rec}</li>`).join('')}
    </ul>

    <div class="disclaimer">
      <strong>Disclaimer:</strong> ScamShield AI is an educational demonstration project. Results are simulated and should not be considered a guarantee of authenticity or fraud detection. Always independently verify job offers before sharing personal information or making payments.
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const sanitizedName = (result.companyName || 'analysis')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_');
  a.download = `ScamShield_Report_${sanitizedName}_${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

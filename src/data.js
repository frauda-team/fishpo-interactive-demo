// ── Clean emails (the deal thread + others) ──────────────────
export const initialEmails = [
  {
    id: 1,
    unread: false,
    from: 'James Miller',
    fromEmail: 'james.miller@contosopartners.com',
    initials: 'JM',
    avatarBg: '#0f6cbd',
    subject: 'Partnership Agreement — Ready to Move Forward',
    preview: "Hi, I wanted to follow up on our discussions from last week. Our legal team has reviewed the terms and we're ready to proceed. I'll have the contract prepared shortly.",
    time: 'Jun 5',
    date: 'Thu 6/5/2026 2:14 PM',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',       pass: true,  detail: 'james.miller@contosopartners.com matches your known contact. Domain is legitimate.' },
        { id: 'urgency',     label: 'No pressure tactics',   pass: true,  detail: 'No urgency or high-pressure language detected.' },
        { id: 'attachments', label: 'No suspicious files',   pass: true,  detail: 'No attachments in this email.' },
        { id: 'language',    label: 'Natural language',      pass: true,  detail: 'Writing style consistent with previous correspondence.' },
      ],
    },
    body: `
      <p>Hi,</p>
      <p>I wanted to follow up on our discussions from last week. Our legal team has reviewed the proposed terms and we're ready to move forward with the partnership.</p>
      <p>We're very excited about the potential here. I've asked our contracts team to prepare the formal partnership agreement document. Once it's ready I'll send it over for your review — shouldn't take more than a couple of days.</p>
      <p>In the meantime, let me know if there's anything else you'd like to clarify before we get to the signing stage.</p>
      <p class="sig">
        James Miller<br/>
        Head of Business Development · Contoso Partners<br/>
        james.miller@contosopartners.com · +1 (312) 555-0174
      </p>
    `,
  },
  {
    id: 2,
    unread: false,
    from: 'James Miller',
    fromEmail: 'james.miller@contosopartners.com',
    initials: 'JM',
    avatarBg: '#0f6cbd',
    subject: 'RE: Partnership Agreement — Contract Is Ready',
    preview: "Great news — our legal team has finalised the contract. I'll be sending the PDF over shortly for your review and signature. The deadline for both parties is end of next week.",
    time: 'Yesterday',
    date: 'Sun 6/7/2026 11:08 AM',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',       pass: true,  detail: 'james.miller@contosopartners.com — consistent with thread history.' },
        { id: 'urgency',     label: 'No pressure tactics',   pass: true,  detail: 'Deadline mentioned in context, not as a pressure tactic.' },
        { id: 'attachments', label: 'No suspicious files',   pass: true,  detail: 'No attachments — PDF will be sent in a follow-up.' },
        { id: 'language',    label: 'Natural language',      pass: true,  detail: 'Tone and phrasing match prior emails from this sender.' },
      ],
    },
    body: `
      <p>Hi,</p>
      <p>Great news — our legal team finalised the contract this morning. I'll be sending the PDF across shortly for your review.</p>
      <p>Once you've had a chance to look it over, if everything looks good, we just need your signature and we can get this moving. Our internal deadline for both parties to sign is <strong>end of next week</strong>, so there's no rush — plenty of time to read through carefully.</p>
      <p>Looking forward to getting this wrapped up. Let me know if you have any questions before the document arrives.</p>
      <p class="sig">
        James Miller<br/>
        Head of Business Development · Contoso Partners<br/>
        james.miller@contosopartners.com · +1 (312) 555-0174
      </p>
    `,
  },
  {
    id: 3,
    unread: true,
    from: 'Sarah Johnson',
    fromEmail: 'sarah.johnson@meridiangroup.com',
    initials: 'SJ',
    avatarBg: '#ca5010',
    subject: 'Q3 Strategy Review — Thursday at 2:00 PM',
    preview: "Hi team, I'm writing to confirm our Q3 strategy review session. Your attendance is important as we'll be setting priorities for the next quarter.",
    time: '9:41 AM',
    date: 'Mon 6/8/2026 9:41 AM',
    to: 'Product Team',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',       pass: true,  detail: 'sarah.johnson@meridiangroup.com is an internal address.' },
        { id: 'urgency',     label: 'No pressure tactics',   pass: true,  detail: 'Meeting invite with reasonable notice period.' },
        { id: 'attachments', label: 'No suspicious files',   pass: true,  detail: 'No attachments detected.' },
        { id: 'language',    label: 'Natural language',      pass: true,  detail: 'Consistent with internal communications.' },
      ],
    },
    body: `
      <p>Hi team,</p>
      <p>I'm writing to confirm our upcoming <strong>Q3 Strategy Review</strong> session. Your attendance is important — we'll be aligning on priorities and resource allocation for the next quarter.</p>
      <div class="callout">
        <strong>📅 Meeting Details</strong><br/>
        Date: <strong>Thursday, June 11, 2026</strong><br/>
        Time: 2:00 PM – 3:30 PM (ET)<br/>
        Location: Conference Room B &nbsp;·&nbsp; Teams link in calendar invite
      </div>
      <h3>Agenda</h3>
      <ul>
        <li>Q2 performance recap and KPI review <em>(20 min)</em></li>
        <li>Q3 roadmap priorities and resource allocation <em>(30 min)</em></li>
        <li>Budget approval for upcoming initiatives <em>(20 min)</em></li>
        <li>Open discussion and team questions <em>(20 min)</em></li>
      </ul>
      <p>If you cannot attend, let me know by <strong>Wednesday EOD</strong> so we can arrange a recording or a catch-up.</p>
      <p class="sig">
        Sarah Johnson<br/>
        Head of Product Strategy · Meridian Group<br/>
        sarah.johnson@meridiangroup.com
      </p>
    `,
  },
  {
    id: 4,
    unread: false,
    from: 'Billing',
    fromEmail: 'billing@meridiangroup.com',
    initials: 'BI',
    avatarBg: '#881798',
    subject: 'Invoice #INV-2026-0847 Awaiting Your Approval',
    preview: 'A new invoice has been submitted and requires your review before the payment deadline. Invoice total: $14,750.00.',
    time: 'Jun 2',
    date: 'Mon 6/2/2026 11:23 AM',
    to: 'Finance Approvers',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',       pass: true,  detail: 'billing@meridiangroup.com is an internal billing address.' },
        { id: 'urgency',     label: 'No pressure tactics',   pass: true,  detail: 'Standard invoice with a reasonable due date.' },
        { id: 'attachments', label: 'No suspicious files',   pass: true,  detail: 'No file attachments in this notification.' },
        { id: 'language',    label: 'Natural language',      pass: true,  detail: 'Formal billing language, consistent with finance templates.' },
      ],
    },
    body: `
      <p>Hello,</p>
      <p>An invoice has been submitted through the billing system and requires your approval.</p>
      <div class="callout">
        <strong>Invoice #INV-2026-0847</strong><br/>
        Vendor: CloudStack Solutions Ltd.<br/>
        Amount: <strong>$14,750.00 USD</strong><br/>
        Due Date: June 20, 2026
      </div>
      <h3>Line Items</h3>
      <table>
        <thead><tr><th>Description</th><th>Qty</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>Managed Kubernetes Cluster (Q2)</td><td>1</td><td>$9,500.00</td></tr>
          <tr><td>Object Storage — 5 TB</td><td>5</td><td>$1,600.00</td></tr>
          <tr><td>Enterprise Support Plan</td><td>1</td><td>$3,650.00</td></tr>
          <tr><td colspan="2"><strong>Total</strong></td><td><strong>$14,750.00</strong></td></tr>
        </tbody>
      </table>
      <p class="sig">
        Meridian Group · Billing &amp; Finance<br/>
        billing@meridiangroup.com · Ext. 4400
      </p>
    `,
  },
  {
    id: 5,
    unread: true,
    from: 'IT Helpdesk',
    fromEmail: 'helpdesk@meridiangroup.com',
    initials: 'IT',
    avatarBg: '#c43e1c',
    subject: '[Ticket #84721] VPN Access Request — Confirmed',
    preview: 'Your VPN access request has been received and assigned to the network security team. Estimated resolution: within 24 business hours.',
    time: 'Jun 4',
    date: 'Thu 6/4/2026 2:57 PM',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',       pass: true,  detail: 'helpdesk@meridiangroup.com is a known internal IT address.' },
        { id: 'urgency',     label: 'No pressure tactics',   pass: true,  detail: 'Standard ticket confirmation with no coercive language.' },
        { id: 'attachments', label: 'No suspicious files',   pass: true,  detail: 'No attachments.' },
        { id: 'language',    label: 'Natural language',      pass: true,  detail: 'Automated helpdesk tone, consistent with internal IT communications.' },
      ],
    },
    body: `
      <p>Hello,</p>
      <p>This email confirms we have received your VPN access request. Your ticket has been logged and assigned to the network security team.</p>
      <div class="callout">
        <strong>Ticket #84721 — VPN Access Request</strong><br/>
        Status: <strong>In Progress</strong><br/>
        Priority: Normal<br/>
        Estimated Resolution: Within 24 business hours
      </div>
      <h3>What Happens Next</h3>
      <ol>
        <li>The network team will review your access scope</li>
        <li>Your manager will receive an approval request</li>
        <li>Once approved, you'll receive VPN credentials and setup instructions</li>
      </ol>
      <p class="sig">
        IT Helpdesk · Meridian Group<br/>
        helpdesk@meridiangroup.com · Ext. 9000
      </p>
    `,
  },
]

// ── Scam email — injected after 1 s ──────────────────────────
export const scamEmail = {
  id: 6,
  unread: true,
  isNew: true,
  from: 'James Miiller',                          // ← typo: double 'i'
  fromEmail: 'james.miiller@contosopartners.com', // ← typo domain
  initials: 'JM',
  avatarBg: '#0f6cbd',
  subject: 'RE: Partnership Agreement — Please Sign PDF Before Tomorrow EOD',
  preview: 'Hi, please find the final contract PDF attached. We need your signature by tomorrow end of day — the deadline cannot be moved. This is urgent.',
  time: 'Just now',
  date: 'Mon 6/8/2026 10:03 AM',
  to: 'me',
  attachments: [
    { name: 'Partnership_Final_Signature_v3.pdf', malicious: true },
  ],
  scamCheck: {
    verdict: 'scam',
    checks: [
      {
        id: 'sender',
        label: 'Suspicious sender address',
        pass: false,
        detail: '"james.miiller@contosopartners.com" — double \'i\' in "miiller". Likely impersonating james.miller@contosopartners.com.',
      },
      {
        id: 'urgency',
        label: 'High-pressure language',
        pass: false,
        detail: 'Phrases detected: "by tomorrow end of day", "deadline cannot be moved", "this is urgent" — classic pressure tactics used in phishing.',
      },
      {
        id: 'attachments',
        label: 'Malicious attachment',
        pass: false,
        detail: 'Partnership_Final_Signature_v3.pdf contains embedded JavaScript and an obfuscated executable payload. Do not open.',
      },
      {
        id: 'language',
        label: 'Natural language',
        pass: true,
        detail: 'Writing style partially mimics the legitimate contact, but is more terse and pressuring than previous messages.',
      },
    ],
  },
  body: `
    <p>Hi,</p>
    <p>Please find the final partnership contract PDF attached to this email.</p>
    <p>We need your signature returned by <strong>tomorrow, end of day</strong> — our legal team has confirmed the deadline cannot be moved. This is urgent.</p>
    <p>Simply sign page 7 and email the document back, or use the DocuSign link on the last page.</p>
    <p>Please treat this as a priority — the deal cannot proceed without your signed copy.</p>
    <p class="sig">
      James Miiller<br/>
      Head of Business Development · Contoso Partners<br/>
      james.miiller@contosopartners.com
    </p>
  `,
}

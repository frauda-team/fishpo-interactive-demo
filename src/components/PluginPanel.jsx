import { useEffect, useState } from 'react'
import { DismissRegular } from '@fluentui/react-icons'

// ── Icons ──────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" fill="#107c10" fillOpacity=".12"/>
      <path d="M4.5 7.5 6.5 9.5 10.5 5.5" stroke="#107c10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" fill="#c50f1f" fillOpacity=".1"/>
      <path d="M5 5 10 10M10 5 5 10" stroke="#c50f1f" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function ShieldSafe() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 3L4 8v8c0 7 5.3 13.5 12 15 6.7-1.5 12-8 12-15V8L16 3z" fill="#107c10" fillOpacity=".12" stroke="#107c10" strokeWidth="1.5"/>
      <path d="M10 16l4 4 8-8" stroke="#107c10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ShieldScam() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 3L4 8v8c0 7 5.3 13.5 12 15 6.7-1.5 12-8 12-15V8L16 3z" fill="#c50f1f" fillOpacity=".1" stroke="#c50f1f" strokeWidth="1.5"/>
      <path d="M16 11v6M16 21v1" stroke="#c50f1f" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

// ── Scanning animation ─────────────────────────────────────────
function ScanningView() {
  const [progress, setProgress] = useState(0)
  const steps = ['Reading sender address…', 'Checking language patterns…', 'Scanning attachments…', 'Verifying domain…']
  const stepIndex = Math.min(Math.floor(progress / 25), steps.length - 1)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => Math.min(p + 4, 98))
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fp-scanning">
      <div className="fp-scan-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="fp-scan-pulse">
          <path d="M20 4L6 10v10c0 8.8 6 16 14 18 8-2 14-9.2 14-18V10L20 4z"
            fill="#0078d4" fillOpacity=".1" stroke="#0078d4" strokeWidth="1.5"/>
          <path d="M8 20h24" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round" className="fp-scan-line"/>
        </svg>
      </div>
      <p className="fp-scan-label">Analyzing email…</p>
      <p className="fp-scan-step">{steps[stepIndex]}</p>
      <div className="fp-progress-track">
        <div className="fp-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

// ── Result view ────────────────────────────────────────────────
function ResultView({ result }) {
  const isScam = result.verdict === 'scam'
  const failCount = result.checks.filter(c => !c.pass).length

  return (
    <div className="fp-result">
      {/* Verdict banner */}
      <div className={`fp-verdict ${isScam ? 'fp-verdict--scam' : 'fp-verdict--clean'}`}>
        <div className="fp-verdict-icon">
          {isScam ? <ShieldScam /> : <ShieldSafe />}
        </div>
        <div className="fp-verdict-text">
          <div className="fp-verdict-title">
            {isScam ? 'Scam Detected' : 'Email Looks Safe'}
          </div>
          <div className="fp-verdict-sub">
            {isScam
              ? `${failCount} threat${failCount > 1 ? 's' : ''} found`
              : 'All checks passed'}
          </div>
        </div>
      </div>

      {/* Checks */}
      <div className="fp-checks">
        {result.checks.map((check, i) => (
          <div
            key={check.id}
            className={`fp-check ${check.pass ? 'fp-check--pass' : 'fp-check--fail'}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="fp-check-header">
              <span className="fp-check-icon">
                {check.pass ? <CheckIcon /> : <XIcon />}
              </span>
              <span className="fp-check-label">{check.label}</span>
            </div>
            {!check.pass && (
              <div className="fp-check-detail">{check.detail}</div>
            )}
            {check.pass && (
              <div className="fp-check-detail fp-check-detail--muted">{check.detail}</div>
            )}
          </div>
        ))}
      </div>

      {isScam && (
        <div className="fp-warning-box">
          <strong>Do not</strong> open attachments, click links, or reply to this email.
          Report it to your IT security team.
        </div>
      )}
    </div>
  )
}

// ── Empty state ────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="fp-empty">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity=".25">
        <path d="M20 4L6 10v10c0 8.8 6 16 14 18 8-2 14-9.2 14-18V10L20 4z"
          stroke="#424242" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="19" r="1.5" fill="#424242"/>
        <path d="M20 13v5" stroke="#424242" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <p>Open an email to<br/>start the analysis</p>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────
export default function PluginPanel({ email, open, onClose, onAnalysisDone }) {
  const [phase, setPhase] = useState('empty') // 'empty' | 'scanning' | 'result'
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!email) {
      setPhase('empty')
      setResult(null)
      return
    }
    setPhase('scanning')
    setResult(null)
    const t = setTimeout(() => {
      setResult(email.scamCheck)
      setPhase('result')
      onAnalysisDone?.(email.scamCheck.verdict)
    }, 500)
    return () => clearTimeout(t)
  }, [email?.id])

  return (
    <div className={`plugin-panel${open ? ' open' : ''}`}>
      <div className="plugin-inner">
        {/* Header */}
        <div className="plugin-header">
          <div className="plugin-brand">
            <span className="plugin-logo">F</span>
            <div className="plugin-brand-text">
              <span className="plugin-name">Fishpo</span>
              <span className="plugin-tagline">Email Security</span>
            </div>
          </div>
          <button className="plugin-close" onClick={onClose} title="Close panel">
            <DismissRegular fontSize={16} />
          </button>
        </div>

        {/* Body */}
        <div className="plugin-body">
          {phase === 'empty'    && <EmptyState />}
          {phase === 'scanning' && <ScanningView key={email?.id} />}
          {phase === 'result'   && result && <ResultView result={result} />}
        </div>
      </div>
    </div>
  )
}

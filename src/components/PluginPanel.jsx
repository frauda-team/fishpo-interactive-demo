import { DismissRegular } from '@fluentui/react-icons'

const placeholders = [
  { label: 'Summary', lines: [{ w: '100%', h: 56 }, { w: '85%', h: 14 }, { w: '60%', h: 14 }] },
  { label: 'Key details', lines: [{ w: '100%', h: 36 }, { w: '100%', h: 36 }] },
  { label: 'Related', lines: [{ w: '70%', h: 28 }, { w: '90%', h: 28 }, { w: '50%', h: 28 }] },
  { label: 'Actions', lines: [{ w: '100%', h: 32 }, { w: '100%', h: 32 }] },
]

function Shimmer({ width, height }) {
  return (
    <div
      className="ph-shimmer"
      style={{ width, height, borderRadius: height <= 16 ? 4 : 6 }}
    />
  )
}

export default function PluginPanel({ open, onClose }) {
  return (
    <div className={`plugin-panel${open ? ' open' : ''}`}>
      <div className="plugin-inner">
        <div className="plugin-header">
          <div className="plugin-brand">
            <span className="plugin-logo">F</span>
            <span className="plugin-name">Fishpo</span>
          </div>
          <button className="plugin-close" onClick={onClose} title="Close panel">
            <DismissRegular fontSize={16} />
          </button>
        </div>

        <div className="plugin-body">
          {placeholders.map((group, gi) => (
            <div key={gi} className="ph-group">
              <div className="ph-label">
                <Shimmer width="55%" height={11} />
              </div>
              <div className="ph-lines">
                {group.lines.map((line, li) => (
                  <Shimmer key={li} width={line.w} height={line.h} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import { ProjectScreenshot } from '../types';
import { 
  Maximize2, 
  Layers, 
  Sparkles, 
  Activity, 
  Server, 
  FileText, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Clock, 
  Database,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Code,
  Sliders,
  BarChart3,
  Globe,
  Radio
} from 'lucide-react';

interface ProjectMockScreenshotsProps {
  screenshots: ProjectScreenshot[];
  projectId: string;
  onOpenLightbox: (screenshot: ProjectScreenshot, index: number) => void;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
}

export const ProjectMockScreenshots: React.FC<ProjectMockScreenshotsProps> = ({
  screenshots,
  projectId,
  onOpenLightbox,
  activeImageIndex,
  setActiveImageIndex,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // If 3 screenshots exist, render the layered collage matching sample.png
  if (screenshots.length === 3) {
    const shot1 = screenshots[0];
    const shot2 = screenshots[1];
    const shot3 = screenshots[2];

    return (
      <div id={`project-screenshots-${projectId}`} className="w-full flex flex-col gap-3">
        {/* Layered Collage Container on sm+ screens */}
        <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[430px] rounded-2xl bg-gradient-to-br from-[#FAF5FA] via-[#FCE7F3] to-[#FDF4FF] border border-pink-200/80 p-3 sm:p-4 overflow-hidden shadow-sm select-none">
          
          {/* Subtle Grid / Pattern Background Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0abfc25_1px,transparent_1px),linear-gradient(to_bottom,#f0abfc25_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Screenshot 1: Upper-Left */}
          <div
            id={`screenshot-layer-${projectId}-0`}
            onClick={() => onOpenLightbox(shot1, 0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group absolute top-3 left-3 w-[72%] sm:w-[68%] rounded-xl bg-white border border-pink-200/90 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
              hoveredIndex === 0 
                ? 'z-40 scale-[1.03] shadow-xl ring-2 ring-[#D946EF] shadow-fuchsia-500/20 -translate-y-1' 
                : hoveredIndex === null && activeImageIndex === 0 
                  ? 'z-30 ring-2 ring-[#D946EF]/80 shadow-lg' 
                  : 'z-10 hover:z-40 opacity-95 hover:opacity-100'
            }`}
            title={`Click to inspect: ${shot1.title}`}
          >
            <WindowHeader title={shot1.title} index={0} total={3} />
            <div className="relative w-full aspect-[16/10] bg-white p-2 sm:p-3 overflow-hidden">
              {renderRealisticMockUI(projectId, shot1.id, shot1.viewType)}
              <HoverBadge label="Image 1 (Top Left) — Click to Enlarge" />
            </div>
          </div>

          {/* Screenshot 2: Center-Right (Layered / Overlapping with higher default elevation) */}
          <div
            id={`screenshot-layer-${projectId}-1`}
            onClick={() => onOpenLightbox(shot2, 1)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group absolute top-[20%] sm:top-[22%] right-3 w-[72%] sm:w-[68%] rounded-xl bg-white border border-pink-200/90 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              hoveredIndex === 1 
                ? 'z-40 scale-[1.03] shadow-xl ring-2 ring-[#D946EF] shadow-fuchsia-500/20 -translate-y-1' 
                : hoveredIndex === null && activeImageIndex === 1 
                  ? 'z-35 ring-2 ring-[#D946EF] shadow-lg' 
                  : 'z-20 hover:z-40 opacity-95 hover:opacity-100'
            }`}
            title={`Click to inspect: ${shot2.title}`}
          >
            <WindowHeader title={shot2.title} index={1} total={3} />
            <div className="relative w-full aspect-[16/10] bg-white p-2 sm:p-3 overflow-hidden">
              {renderRealisticMockUI(projectId, shot2.id, shot2.viewType)}
              <HoverBadge label="Image 2 (Center Right) — Click to Enlarge" />
            </div>
          </div>

          {/* Screenshot 3: Lower-Left */}
          <div
            id={`screenshot-layer-${projectId}-2`}
            onClick={() => onOpenLightbox(shot3, 2)}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group absolute bottom-3 left-3 w-[72%] sm:w-[68%] rounded-xl bg-white border border-pink-200/90 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
              hoveredIndex === 2 
                ? 'z-40 scale-[1.03] shadow-xl ring-2 ring-[#D946EF] shadow-fuchsia-500/20 -translate-y-1' 
                : hoveredIndex === null && activeImageIndex === 2 
                  ? 'z-30 ring-2 ring-[#D946EF]/80 shadow-lg' 
                  : 'z-15 hover:z-40 opacity-95 hover:opacity-100'
            }`}
            title={`Click to inspect: ${shot3.title}`}
          >
            <WindowHeader title={shot3.title} index={2} total={3} />
            <div className="relative w-full aspect-[16/10] bg-white p-2 sm:p-3 overflow-hidden">
              {renderRealisticMockUI(projectId, shot3.id, shot3.viewType)}
              <HoverBadge label="Image 3 (Lower Left) — Click to Enlarge" />
            </div>
          </div>
        </div>

        {/* Multi-Screenshot Thumbnail Selector Strip */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {screenshots.map((shot, idx) => {
            const isActive = idx === activeImageIndex;
            return (
              <button
                key={shot.id}
                id={`thumb-${projectId}-${shot.id}`}
                type="button"
                onClick={() => {
                  setActiveImageIndex(idx);
                  onOpenLightbox(shot, idx);
                }}
                className={`flex items-center gap-2 p-2 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#FDF4FF] border-[#D946EF] shadow-xs ring-2 ring-[#F0ABFC]/60'
                    : 'bg-white border-pink-200/80 hover:border-[#D946EF]'
                }`}
              >
                <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white' 
                    : 'bg-[#FDF4FF] text-[#A21CAF]'
                }`}>
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`text-[11px] font-semibold truncate ${
                    isActive ? 'text-[#A21CAF]' : 'text-slate-700'
                  }`}>
                    {shot.title.split('—')[0] || shot.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate capitalize">
                    {shot.viewType.replace('-', ' ')}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // If 2 screenshots exist, render staggered composition
  if (screenshots.length === 2) {
    const shot1 = screenshots[0];
    const shot2 = screenshots[1];

    return (
      <div id={`project-screenshots-${projectId}`} className="w-full flex flex-col gap-3">
        <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-br from-[#FAF5FA] via-[#FCE7F3] to-[#FDF4FF] border border-pink-200/80 p-3 sm:p-4 overflow-hidden shadow-sm select-none">
          {/* Staggered Shot 1: Upper-Left */}
          <div
            id={`screenshot-stagger-${projectId}-0`}
            onClick={() => onOpenLightbox(shot1, 0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group absolute top-3 left-3 w-[78%] rounded-xl bg-white border border-pink-200/90 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
              hoveredIndex === 0 
                ? 'z-40 scale-[1.03] shadow-xl ring-2 ring-[#D946EF]' 
                : 'z-10 hover:z-40'
            }`}
          >
            <WindowHeader title={shot1.title} index={0} total={2} />
            <div className="relative w-full aspect-[16/10] bg-white p-2 sm:p-3 overflow-hidden">
              {renderRealisticMockUI(projectId, shot1.id, shot1.viewType)}
              <HoverBadge label="Image 1 — Click to Enlarge" />
            </div>
          </div>

          {/* Staggered Shot 2: Lower-Right */}
          <div
            id={`screenshot-stagger-${projectId}-1`}
            onClick={() => onOpenLightbox(shot2, 1)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group absolute bottom-3 right-3 w-[78%] rounded-xl bg-white border border-pink-200/90 shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              hoveredIndex === 1 
                ? 'z-40 scale-[1.03] shadow-xl ring-2 ring-[#D946EF]' 
                : 'z-20 hover:z-40'
            }`}
          >
            <WindowHeader title={shot2.title} index={1} total={2} />
            <div className="relative w-full aspect-[16/10] bg-white p-2 sm:p-3 overflow-hidden">
              {renderRealisticMockUI(projectId, shot2.id, shot2.viewType)}
              <HoverBadge label="Image 2 — Click to Enlarge" />
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {screenshots.map((shot, idx) => (
            <button
              key={shot.id}
              id={`thumb-${projectId}-${shot.id}`}
              type="button"
              onClick={() => {
                setActiveImageIndex(idx);
                onOpenLightbox(shot, idx);
              }}
              className="flex items-center gap-2 p-2 rounded-xl text-left bg-white border border-pink-200/80 hover:border-[#D946EF] transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-[#FDF4FF] text-[#A21CAF] flex items-center justify-center text-xs font-mono font-bold">
                {idx + 1}
              </div>
              <div className="min-w-0 flex-1 text-[11px] font-medium text-slate-700 truncate">
                {shot.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Single Screenshot (Larger, Centered)
  const currentScreenshot = screenshots[0];
  return (
    <div id={`project-screenshots-${projectId}`} className="w-full flex flex-col gap-3">
      <div 
        id={`screenshot-canvas-${projectId}`}
        className="group relative w-full rounded-2xl bg-white border border-pink-200/80 shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#D946EF] hover:shadow-xl"
        onClick={() => onOpenLightbox(currentScreenshot, 0)}
      >
        <WindowHeader title={currentScreenshot.title} index={0} total={1} />
        <div className="relative w-full aspect-[16/10] bg-white p-3 sm:p-4 overflow-hidden">
          {renderRealisticMockUI(projectId, currentScreenshot.id, currentScreenshot.viewType)}
          <HoverBadge label="Click to Enlarge Lightbox" />
        </div>
        <div className="px-3.5 py-2.5 bg-pink-50/70 border-t border-pink-100 text-[11px] text-[#A21CAF] flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D946EF] mt-1 shrink-0" />
          <p className="line-clamp-2 leading-relaxed text-slate-700">
            <strong className="text-slate-900 font-semibold">{currentScreenshot.title}: </strong>
            {currentScreenshot.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

// Window Chrome Header Helper
function WindowHeader({ title, index, total }: { title: string; index: number; total: number }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 bg-pink-50/90 border-b border-pink-100 backdrop-blur-sm select-none">
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-mono text-[#A21CAF] font-semibold truncate max-w-[140px] sm:max-w-[200px] ml-1">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-[#A21CAF] border border-pink-200">
          {index + 1}/{total}
        </span>
        <Maximize2 className="w-3 h-3 text-[#D946EF]" />
      </div>
    </div>
  );
}

// Hover badge overlay
function HoverBadge({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px] z-30">
      <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white text-[11px] font-medium font-mono border border-pink-200/80 shadow-xl flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
        <Maximize2 className="w-3 h-3 text-white" />
        <span>{label}</span>
      </div>
    </div>
  );
}

// Realistic UI Mock Renderer for each specific Project Screenshot
function renderRealisticMockUI(projectId: string, shotId: string, _viewType: string) {
  switch (projectId) {
    case 'nexus-ai':
      return renderNexusMock(shotId);
    case 'omni-cloud':
      return renderOmniMock(shotId);
    case 'prompt-ops':
      return renderPromptOpsMock(shotId);
    case 'fleet-stream':
      return renderFleetMock(shotId);
    case 'devflow-mock':
      return renderDevFlowMock(shotId);
    default:
      return renderDefaultMock();
  }
}

// 1. NexusAI Mock Screenshots
function renderNexusMock(shotId: string) {
  if (shotId === 'nexus-2') {
    // Structured extraction
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Extraction: BalanceSheet_Q3.pdf</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 font-medium">
            99.2% Acc
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1.5 flex-1 min-h-0">
          <div className="col-span-7 bg-slate-50 rounded-lg border border-slate-200 p-1.5 overflow-hidden flex flex-col font-mono text-[9px]">
            <div className="text-slate-500 text-[8px] mb-0.5 font-bold">PARSED JSON SCHEMA</div>
            <div className="text-emerald-700">{"{"}</div>
            <div className="pl-2 text-slate-700">"qtr": <span className="text-amber-700 font-semibold">"Q3 2025"</span>,</div>
            <div className="pl-2 text-slate-700">"rev_usd": <span className="text-sky-700 font-semibold">48200000</span>,</div>
            <div className="pl-2 text-slate-700">"ebitda": <span className="text-sky-700 font-semibold">0.284</span>,</div>
            <div className="pl-2 text-slate-700">"audit": <span className="text-fuchsia-700 font-semibold">"0x9f8b"</span></div>
            <div className="text-emerald-700">{"}"}</div>
            <div className="mt-auto pt-1 flex items-center justify-between text-slate-500 text-[8px] border-t border-slate-200">
              <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                <CheckCircle2 className="w-2.5 h-2.5" /> Validated
              </span>
            </div>
          </div>
          <div className="col-span-5 bg-pink-50/40 rounded-lg border border-pink-100 p-1.5 flex flex-col justify-between">
            <div>
              <div className="text-[9px] font-semibold text-slate-800 mb-1">ERP Dispatch</div>
              <div className="space-y-1 text-[8px]">
                <div className="flex items-center justify-between p-1 rounded bg-white border border-pink-100 text-slate-700 shadow-xs">
                  <span>SAP S/4HANA</span>
                  <span className="text-emerald-600 font-mono font-bold">200 OK</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded bg-white border border-pink-100 text-slate-700 shadow-xs">
                  <span>pgvector</span>
                  <span className="text-emerald-600 font-mono font-bold">Indexed</span>
                </div>
              </div>
            </div>
            <div className="p-1 rounded bg-fuchsia-50 border border-fuchsia-200 text-[8px] text-[#A21CAF] font-medium">
              Vector synced.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (shotId === 'nexus-3') {
    // Analytics & Batch
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-pink-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Async Worker Pool</span>
          </div>
          <span className="text-[9px] text-slate-500 font-mono font-medium">P95: 1.42s</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-1.5">
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[8px] text-slate-500 font-medium">DOCS TODAY</div>
            <div className="text-xs font-bold text-slate-900">1,428</div>
          </div>
          <div className="p-1.5 rounded-lg bg-emerald-50/60 border border-emerald-200">
            <div className="text-[8px] text-emerald-700 font-medium">ACCURACY</div>
            <div className="text-xs font-bold text-emerald-700">98.4%</div>
          </div>
          <div className="p-1.5 rounded-lg bg-pink-50/60 border border-pink-200">
            <div className="text-[8px] text-[#A21CAF] font-medium">WORKERS</div>
            <div className="text-xs font-bold text-[#A21CAF]">8 / 8 Active</div>
          </div>
        </div>
        <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 p-1.5 overflow-hidden flex flex-col font-mono text-[8px]">
          <div className="text-slate-500 mb-0.5 font-semibold">INGESTION LOGS</div>
          <div className="text-emerald-700 truncate font-medium">[14:22:01] OCR parsed 14 tables, 128 paras.</div>
          <div className="text-pink-700 truncate font-medium">[14:22:02] Generated 1,536-dim embeddings.</div>
        </div>
      </div>
    );
  }

  // Default: Interactive Workspace with split view
  return (
    <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D946EF] shrink-0" />
          <span className="font-semibold text-slate-800 truncate">Contract_Q3_Lease.pdf</span>
        </div>
        <span className="text-[9px] text-emerald-700 font-mono bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-medium">
          Gemini Active
        </span>
      </div>
      <div className="grid grid-cols-12 gap-1.5 flex-1 min-h-0">
        <div className="col-span-6 bg-slate-50 rounded-lg border border-slate-200 p-1.5 relative flex flex-col justify-between overflow-hidden">
          <div className="text-[8px] text-slate-500 flex items-center justify-between">
            <span>Page 4 / 32</span>
            <span>Sec 8.2</span>
          </div>
          <div className="my-1 p-1 rounded bg-white border border-pink-300 relative shadow-xs">
            <div className="text-[7px] font-bold text-[#A21CAF] uppercase">
              Citation Box [140, 220, 480, 85]
            </div>
            <p className="text-[8px] text-slate-700 line-clamp-2 mt-0.5 leading-snug">
              "...Tenant shall indemnify and hold harmless Landlord against liabilities..."
            </p>
          </div>
          <div className="text-[7px] text-slate-400 font-mono">Mapped coordinates</div>
        </div>
        <div className="col-span-6 bg-pink-50/40 rounded-lg border border-pink-200/80 p-1.5 flex flex-col justify-between">
          <div>
            <div className="text-[8px] text-slate-500 font-bold mb-0.5">AI CITATION STREAM</div>
            <div className="p-1 rounded bg-white text-[8px] text-slate-800 leading-tight border border-pink-100 shadow-xs">
              <strong className="text-[#A21CAF]">Clause 8.2:</strong> Structural liability strictly transfers to tenant.
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-pink-200/80 text-[8px]">
            <span className="text-slate-500">99.8% Grounded</span>
            <span className="text-[#A21CAF] font-semibold flex items-center gap-0.5">
              Source <ArrowUpRight className="w-2 h-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. OmniCloud Mock Screenshots
function renderOmniMock(shotId: string) {
  if (shotId === 'omni-2') {
    // DLQ Replay
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">DLQ Message Inspector</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-50 text-amber-800 border border-amber-200 font-medium">
            3 Pending Replays
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1.5 flex-1 min-h-0">
          <div className="col-span-5 space-y-1 overflow-hidden">
            <div className="p-1 rounded-lg bg-amber-50/50 border border-amber-200 text-[9px]">
              <div className="text-amber-800 font-mono text-[8px] font-bold">MSG-89214</div>
              <div className="text-slate-800 font-medium truncate">PaymentTimeout</div>
            </div>
            <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 text-[9px]">
              <div className="text-slate-500 font-mono text-[8px]">MSG-89215</div>
              <div className="text-slate-600 truncate">InventoryConflict</div>
            </div>
          </div>
          <div className="col-span-7 bg-slate-50 rounded-lg border border-slate-200 p-1.5 flex flex-col justify-between font-mono text-[8px]">
            <div>
              <div className="text-slate-500 mb-0.5 font-bold">REDIS DISTRIBUTED LOCK</div>
              <div className="text-slate-700 truncate">key: <span className="text-fuchsia-700 font-semibold">"lock:order:99120"</span></div>
              <div className="text-slate-500 mt-0.5">Status: Target service healthy</div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-200">
              <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                <ShieldCheck className="w-2.5 h-2.5" /> Idempotent
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#C026D3] text-white font-medium text-[8px]">
                Replay
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (shotId === 'omni-3') {
    // RBAC & Audit Trail
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Audit Trail & RBAC</span>
          </div>
          <span className="text-[9px] text-slate-500 font-mono font-medium">SOC2 / ISO-27001</span>
        </div>
        <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 p-1.5 flex flex-col font-mono text-[8px] overflow-hidden space-y-1">
          <div className="p-1 rounded bg-white border border-slate-200 flex items-center justify-between shadow-xs">
            <span className="text-slate-700 truncate">USR-09: CircuitBreaker:OPEN on PaymentService</span>
            <span className="text-emerald-700 font-semibold shrink-0 ml-1">2FA Auth</span>
          </div>
          <div className="p-1 rounded bg-white border border-slate-200 flex items-center justify-between shadow-xs">
            <span className="text-slate-700 truncate">USR-14: Scaled Worker-Pool to 8 instances</span>
            <span className="text-slate-500 shrink-0 ml-1">Logged</span>
          </div>
          <div className="p-1 rounded bg-white border border-slate-200 flex items-center justify-between shadow-xs">
            <span className="text-slate-700 truncate">USR-09: Replayed 14 DLQ items to Kafka</span>
            <span className="text-emerald-700 font-semibold shrink-0 ml-1">100% OK</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Service Topology
  return (
    <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="font-semibold text-slate-800 truncate">Live Topology Map</span>
        </div>
        <span className="text-[9px] text-emerald-700 font-mono font-medium">32 Services OK</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1 min-h-0">
        <div className="p-1.5 rounded-lg bg-slate-50 border border-emerald-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[9px] font-semibold text-slate-800">
              <span className="truncate">Gateway</span>
              <span className="text-[8px] text-emerald-600 font-bold">CLOSED</span>
            </div>
            <div className="text-[8px] text-slate-500 mt-0.5">14.2k req/s</div>
            <div className="text-[8px] text-slate-500">P99: 18ms</div>
          </div>
          <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[98%]" />
          </div>
        </div>

        <div className="p-1.5 rounded-lg bg-slate-50 border border-pink-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[9px] font-semibold text-slate-800">
              <span className="truncate">Auth Svc</span>
              <span className="text-[8px] text-[#A21CAF] font-bold">HEALTHY</span>
            </div>
            <div className="text-[8px] text-slate-500 mt-0.5">Redis: 99.4%</div>
            <div className="text-[8px] text-slate-500">42k JWTs</div>
          </div>
          <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
            <div className="bg-[#D946EF] h-full w-[94%]" />
          </div>
        </div>

        <div className="p-1.5 rounded-lg bg-slate-50 border border-purple-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[9px] font-semibold text-slate-800">
              <span className="truncate">Billing</span>
              <span className="text-[8px] text-purple-700 font-bold">SYNCED</span>
            </div>
            <div className="text-[8px] text-slate-500 mt-0.5">Queue: 0</div>
            <div className="text-[8px] text-slate-500">DB: 12/50</div>
          </div>
          <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. PromptOps Mock Screenshots
function renderPromptOpsMock(shotId: string) {
  if (shotId === 'prompt-2') {
    // Scorecard & Cost
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-pink-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">CI/CD Regression Scorecard</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            PASSED
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-1.5 font-mono">
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-[8px] text-slate-500 font-medium">SIMILARITY</div>
            <div className="text-xs font-bold text-emerald-700">0.968</div>
          </div>
          <div className="p-1.5 rounded-lg bg-pink-50/60 border border-pink-200">
            <div className="text-[8px] text-[#A21CAF] font-medium">COST CHG</div>
            <div className="text-xs font-bold text-[#A21CAF]">-32.4%</div>
          </div>
          <div className="p-1.5 rounded-lg bg-emerald-50/60 border border-emerald-200">
            <div className="text-[8px] text-emerald-700 font-medium">VALIDITY</div>
            <div className="text-xs font-bold text-emerald-700">100.0%</div>
          </div>
        </div>
        <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 p-1.5 font-mono text-[8px] text-slate-700 space-y-0.5 overflow-hidden">
          <div className="text-emerald-700 font-semibold truncate">✓ 120/120 Golden baselines validated</div>
          <div className="text-[#A21CAF] font-medium truncate">ℹ Projected savings: $1,420/mo</div>
        </div>
      </div>
    );
  }

  if (shotId === 'prompt-3') {
    // Leaderboard
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-[#D946EF] shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Optimization Leaderboard</span>
          </div>
          <span className="text-[9px] text-[#A21CAF] font-mono font-medium">Top Candidate: v3.0</span>
        </div>
        <div className="space-y-1 flex-1 min-h-0 font-mono text-[8px]">
          <div className="p-1 rounded-lg bg-emerald-50/60 border border-emerald-300 flex items-center justify-between">
            <span className="text-emerald-800 font-bold">1. Candidate v3.0 (Compact JSON)</span>
            <span className="text-slate-600">418 tok | 480ms | $0.0021</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-slate-600">2. Candidate v2.8 (Zero-Shot)</span>
            <span className="text-slate-500">540 tok | 610ms | $0.0029</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-slate-600">3. Prod Baseline v2.4</span>
            <span className="text-slate-500">642 tok | 720ms | $0.0035</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Prompt Matrix
  return (
    <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="font-semibold text-slate-800 truncate">Prompt Diff Matrix</span>
        </div>
        <span className="text-[9px] text-slate-500 font-mono">v2.4 vs v3.0</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0 font-mono text-[8px]">
        <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-slate-500 text-[7px] mb-0.5 font-semibold">BASELINE (v2.4)</div>
            <div className="text-slate-700 line-clamp-2">
              "You are an assistant. Extract entity names, emails..."
            </div>
          </div>
          <div className="pt-1 border-t border-slate-200 text-[7px] text-slate-500 flex items-center justify-between">
            <span>642 tok</span>
            <span>720ms</span>
          </div>
        </div>
        <div className="p-1.5 rounded-lg bg-pink-50/60 border border-pink-300 flex flex-col justify-between">
          <div>
            <div className="text-[#A21CAF] text-[7px] mb-0.5 font-bold">CANDIDATE (v3.0)</div>
            <div className="text-slate-900 line-clamp-2 font-medium">
              "Task: Extract schema &#123;entities, emails&#125;. Compact JSON."
            </div>
          </div>
          <div className="pt-1 border-t border-pink-200 text-[7px] text-[#A21CAF] flex items-center justify-between font-bold">
            <span>418 tok (-35%)</span>
            <span>480ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. FleetStream Mock Screenshots
function renderFleetMock(shotId: string) {
  if (shotId === 'fleet-2') {
    // OpenAPI Swagger
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">OpenAPI 3.0 Gateway</span>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            Swagger UI
          </span>
        </div>
        <div className="space-y-1 flex-1 min-h-0 font-mono text-[8px]">
          <div className="p-1 rounded-lg bg-slate-50 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="px-1 py-0.2 rounded bg-emerald-600 text-white font-bold text-[7px]">POST</span>
              <span className="text-slate-800 font-medium">/api/v1/telemetry/ingest</span>
            </div>
            <span className="text-emerald-700 font-bold">202 Accepted</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-pink-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="px-1 py-0.2 rounded bg-[#C026D3] text-white font-bold text-[7px]">GET</span>
              <span className="text-slate-800 font-medium">/api/v1/fleet/&#123;id&#125;/timeseries</span>
            </div>
            <span className="text-slate-500">P99: 34ms</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="px-1 py-0.2 rounded bg-amber-600 text-white font-bold text-[7px]">POST</span>
              <span className="text-slate-800 font-medium">/api/v1/rules/geofence</span>
            </div>
            <span className="text-amber-800 font-medium">Webhook</span>
          </div>
        </div>
      </div>
    );
  }

  if (shotId === 'fleet-3') {
    // Alert rules
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Threshold & Alert Matrix</span>
          </div>
          <span className="text-[9px] text-amber-800 font-mono font-medium">Live Rule Engine</span>
        </div>
        <div className="space-y-1 flex-1 min-h-0 font-mono text-[8px]">
          <div className="p-1 rounded-lg bg-amber-50/60 border border-amber-200 flex items-center justify-between">
            <span className="text-slate-800 font-medium">Temp &gt; -15°C (Cold Chain Breach)</span>
            <span className="text-amber-700 font-bold">SMS + PagerDuty</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-slate-800">Geofence Boundary Exit (Zone 4)</span>
            <span className="text-[#A21CAF] font-bold">Webhook Dispatch</span>
          </div>
          <div className="p-1 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <span className="text-slate-800">Battery &lt; 15% Sensor Warning</span>
            <span className="text-slate-500">Slack #ops-alerts</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Stream Ingestion
  return (
    <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#D946EF] shrink-0" />
          <span className="font-semibold text-slate-800 truncate">Live IoT Telemetry Stream</span>
        </div>
        <span className="text-[9px] text-emerald-700 font-mono font-medium">4.8M Events/Day</span>
      </div>
      <div className="grid grid-cols-12 gap-1.5 flex-1 min-h-0 font-mono text-[8px]">
        <div className="col-span-7 bg-slate-50 rounded-lg border border-slate-200 p-1.5 space-y-0.5">
          <div className="text-slate-500 text-[7px] font-bold">SENSOR PACKETS</div>
          <div className="text-slate-700 truncate">[DEV-401] Temp: -18.2°C | GPS OK</div>
          <div className="text-slate-700 truncate">[DEV-402] Temp: -17.9°C | Batt: 89%</div>
          <div className="text-amber-700 truncate font-semibold">[DEV-403] ALERT: Sector 4 exit</div>
        </div>
        <div className="col-span-5 bg-pink-50/40 rounded-lg border border-pink-200 p-1.5 flex flex-col justify-between">
          <div>
            <div className="text-slate-500 text-[7px] font-bold">BUFFER</div>
            <div className="text-[#A21CAF] font-bold mt-0.5">PG Partition</div>
            <div className="text-slate-500 text-[7px]">Write Lag: 0ms</div>
          </div>
          <div className="text-emerald-700 text-[7px] font-semibold flex items-center gap-0.5">
            <CheckCircle2 className="w-2 h-2" /> 100% SLA
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. DevFlow Mock Screenshots
function renderDevFlowMock(shotId: string) {
  if (shotId === 'devflow-2') {
    // Mock Router
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#D946EF] shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Synthetic Mock Router</span>
          </div>
          <span className="text-[9px] text-[#A21CAF] font-mono font-medium">Edge Router Live</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0 font-mono text-[8px]">
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-slate-500 text-[7px] font-bold">SIMULATION SETTINGS</div>
              <div className="text-slate-700 mt-0.5">Latency: <span className="text-[#A21CAF] font-semibold">150ms</span></div>
              <div className="text-slate-700">Error: <span className="text-amber-700 font-semibold">5% (500)</span></div>
            </div>
            <div className="text-emerald-700 text-[7px] font-semibold">Pagination: ON</div>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="text-slate-500 text-[7px] font-bold">LIVE REQUEST</div>
              <div className="text-emerald-700 font-bold truncate">GET /users/me 200 OK</div>
              <div className="text-slate-500">154ms | 1.2 KB</div>
            </div>
            <div className="text-[#A21CAF] text-[7px] font-medium">TS types synced</div>
          </div>
        </div>
      </div>
    );
  }

  if (shotId === 'devflow-3') {
    // Client SDK
    return (
      <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
        <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-800 truncate">Client SDK & Diff Exporter</span>
          </div>
          <span className="text-[9px] text-indigo-700 font-mono font-medium">OpenAPI 3.0</span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex-1 min-h-0 font-mono text-[8px] space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="font-bold">EXPORT BUNDLE</span>
            <span className="text-emerald-700 font-bold">Generated in 12ms</span>
          </div>
          <div className="p-1 rounded bg-white border border-slate-200 text-slate-800 shadow-xs">
            <code>npm install @devflow/client-sdk</code>
          </div>
          <div className="text-emerald-700 text-[7px] font-semibold">
            ✓ Zero TypeScript contract drift detected across 18 endpoints
          </div>
        </div>
      </div>
    );
  }

  // Default: Visual Contract Builder
  return (
    <div className="h-full flex flex-col text-[10px] sm:text-[11px]">
      <div className="flex items-center justify-between pb-1.5 border-b border-pink-100 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-[#D946EF] shrink-0" />
          <span className="font-semibold text-slate-800 truncate">Visual Contract Designer</span>
        </div>
        <span className="text-[9px] text-[#A21CAF] font-mono font-medium">TS SDK Sync</span>
      </div>
      <div className="grid grid-cols-12 gap-1.5 flex-1 min-h-0 font-mono text-[8px]">
        <div className="col-span-6 bg-slate-50 rounded-lg border border-slate-200 p-1.5 space-y-0.5">
          <div className="text-slate-500 text-[7px] font-bold">POST /billing/invoices</div>
          <div className="text-slate-700">+ customerId: <span className="text-amber-700 font-semibold">string</span></div>
          <div className="text-slate-700">+ amount: <span className="text-sky-700 font-semibold">number</span></div>
          <div className="text-slate-700">+ items: <span className="text-fuchsia-700 font-semibold">Item[]</span></div>
        </div>
        <div className="col-span-6 bg-pink-50/40 rounded-lg border border-pink-200 p-1.5 flex flex-col justify-between">
          <div>
            <div className="text-[#A21CAF] text-[7px] font-bold">AUTOGEN TYPESCRIPT</div>
            <div className="text-slate-800">export interface Invoice &#123;</div>
            <div className="pl-1.5 text-slate-500">id: string; ...</div>
            <div className="text-slate-800">&#125;</div>
          </div>
          <div className="text-emerald-700 text-[7px] font-semibold">Ready for import</div>
        </div>
      </div>
    </div>
  );
}

function renderDefaultMock() {
  return (
    <div className="h-full flex items-center justify-center text-slate-500 font-mono text-xs">
      Application Screenshot Preview
    </div>
  );
}


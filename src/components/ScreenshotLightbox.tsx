import React, { useEffect, useCallback } from 'react';
import { ProjectScreenshot } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Maximize2,
  Minimize2,
  FileText,
  Activity,
  Server,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Code,
  Sparkles,
  Zap,
  ArrowUpRight
} from 'lucide-react';

interface ScreenshotLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ProjectScreenshot[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  projectTitle: string;
  projectId: string;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onSelectIndex,
  projectTitle,
  projectId,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    } else {
      onSelectIndex(screenshots.length - 1);
    }
  }, [currentIndex, screenshots.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < screenshots.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else {
      onSelectIndex(0);
    }
  }, [currentIndex, screenshots.length, onSelectIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !screenshots.length) return null;

  const currentScreenshot = screenshots[currentIndex] || screenshots[0];

  return (
    <div 
      id="screenshot-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white border border-pink-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-pink-50/80 via-white to-fuchsia-50/80 border-b border-pink-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-pink-100/80 border border-pink-300 flex items-center justify-center text-[#A21CAF] shrink-0 shadow-xs">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-mono text-[#A21CAF] font-semibold truncate">{projectTitle}</h4>
              <h3 className="text-sm font-semibold text-slate-800 truncate">{currentScreenshot.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Counter */}
            <span className="text-xs font-mono text-[#A21CAF] px-2.5 py-1 rounded-lg bg-pink-50 border border-pink-200 font-semibold">
              {currentIndex + 1} of {screenshots.length}
            </span>

            {/* Zoom toggle */}
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-pink-100/50 transition-colors"
              title={isZoomed ? 'Fit to window' : 'Enlarge view'}
            >
              {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-pink-100/50 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Screenshot Visual Stage */}
        <div className="relative flex-1 overflow-y-auto bg-slate-100/70 p-4 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[460px]">
          {/* Navigation Arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-pink-50 text-slate-700 hover:text-[#A21CAF] border border-pink-200 shadow-lg backdrop-blur-sm transition-all -translate-y-1/2 top-1/2 cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-pink-50 text-slate-700 hover:text-[#A21CAF] border border-pink-200 shadow-lg backdrop-blur-sm transition-all -translate-y-1/2 top-1/2 cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Screenshot Render Canvas in High-Res Container */}
          <div className={`w-full transition-all duration-300 ${isZoomed ? 'max-w-none scale-105' : 'max-w-4xl'}`}>
            <div className="rounded-xl bg-white border border-pink-200 shadow-xl overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="ml-2 text-slate-800 font-semibold">{currentScreenshot.title}</span>
                </div>
                <span className="text-[11px] text-[#A21CAF] font-mono font-semibold capitalize">
                  {currentScreenshot.viewType.replace('-', ' ')} view
                </span>
              </div>

              {/* High-Res View Area */}
              <div className="p-4 sm:p-6 bg-white text-slate-800 min-h-[320px] sm:min-h-[420px]">
                {renderHighResMock(projectId, currentScreenshot.id)}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Footer with Caption & Thumbnail Strip */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-pink-50/60 via-white to-fuchsia-50/60 border-t border-pink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-pink-100 text-[#A21CAF] border border-pink-300">
                {currentScreenshot.viewType.replace('-', ' ')}
              </span>
              <h4 className="text-sm font-semibold text-slate-800">{currentScreenshot.title}</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{currentScreenshot.caption}</p>
          </div>

          {/* Thumbnail strip */}
          {screenshots.length > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              {screenshots.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelectIndex(idx)}
                  className={`w-10 h-10 rounded-xl text-xs font-mono font-bold flex items-center justify-center transition-all border cursor-pointer ${
                    idx === currentIndex
                      ? 'bg-gradient-to-r from-[#C026D3] to-[#EC4899] text-white border-pink-300 shadow-md ring-2 ring-pink-400/60'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-pink-300 hover:text-[#A21CAF]'
                  }`}
                  title={s.title}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// High-Res Renderers for Lightbox
function renderHighResMock(projectId: string, shotId: string) {
  if (projectId === 'nexus-ai') {
    if (shotId === 'nexus-2') {
      return (
        <div className="space-y-4 font-sans text-xs">
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-emerald-600" />
              <div>
                <div className="font-semibold text-slate-800">BalanceSheet_Q3_Audited.pdf</div>
                <div className="text-[11px] text-slate-500 font-mono">MD5: 8f4a129d | 42 Pages | Tabular Extraction Complete</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-mono text-xs border border-emerald-200 font-bold">
              Extraction Quality: 99.4%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1">
              <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-200 font-bold">EXTRACTED STRUCTURED DATA (JSON)</div>
              <div className="text-emerald-700 font-semibold">{"{"}</div>
              <div className="pl-3 text-slate-700">"company": <span className="text-amber-700 font-semibold">"Acme Enterprise Corp"</span>,</div>
              <div className="pl-3 text-slate-700">"fiscal_period": <span className="text-amber-700 font-semibold">"Q3 2025"</span>,</div>
              <div className="pl-3 text-slate-700">"gross_revenue_usd": <span className="text-sky-700 font-semibold">48200000.00</span>,</div>
              <div className="pl-3 text-slate-700">"ebitda_adjusted_usd": <span className="text-sky-700 font-semibold">13680000.00</span>,</div>
              <div className="pl-3 text-slate-700">"line_items": [</div>
              <div className="pl-6 text-slate-600">&#123; "item": "Cloud Infrastructure", "amount": 1420000.00 &#125;,</div>
              <div className="pl-6 text-slate-600">&#123; "item": "R&D Software Engineering", "amount": 6800000.00 &#125;</div>
              <div className="pl-3 text-slate-700">],</div>
              <div className="pl-3 text-slate-700">"status": <span className="text-emerald-700 font-bold">"VALIDATED_BY_SCHEMA"</span></div>
              <div className="text-emerald-700 font-semibold">{"}"}</div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <h5 className="font-semibold text-slate-800 mb-2">Automated Schema Enforcement</h5>
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <span className="text-slate-700">Currency & Precision Check</span>
                    <span className="text-emerald-700 font-mono font-semibold">Passed (USD 2-dec)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <span className="text-slate-700">Sum Total Reconciliation</span>
                    <span className="text-emerald-700 font-mono font-semibold">Exact Match ($48.20M)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <span className="text-slate-700">pgvector Embedding Ingestion</span>
                    <span className="text-sky-700 font-mono font-semibold">1,536 dimensions indexed</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 text-xs">
                <strong>ERP Webhook:</strong> Dispatched schema payload to SAP S/4HANA endpoint in 142ms. Zero manual transcription errors.
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (shotId === 'nexus-3') {
      return (
        <div className="space-y-4 font-sans text-xs">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono text-slate-500 font-bold">TOTAL PROCESSED TODAY</div>
              <div className="text-xl font-bold text-slate-800 mt-1">1,428 docs</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">↑ 24% over yesterday</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono text-slate-500 font-bold">P95 INGESTION LATENCY</div>
              <div className="text-xl font-bold text-sky-700 mt-1">1.42 seconds</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Target SLA: &lt; 3.00s</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] font-mono text-slate-500 font-bold">EXTRACTION ACCURACY</div>
              <div className="text-xl font-bold text-emerald-700 mt-1">98.4%</div>
              <div className="text-[11px] text-slate-500 mt-0.5">0.02% false positive rate</div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1.5">
            <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-200 font-bold">ASYNC WORKER POOL EVENT STREAM</div>
            <div className="text-slate-700">[14:30:12] [Worker-1] Batch job #9021 completed. Ingested 12 PDF contracts.</div>
            <div className="text-emerald-700 font-semibold">[14:30:14] [Worker-2] OCR & spatial coordinate parser finished in 1.18s.</div>
            <div className="text-sky-700 font-semibold">[14:30:15] [Worker-3] Vector embeddings synced to PostgreSQL database.</div>
            <div className="text-slate-600">[14:30:16] [Worker-4] WebSocket pushed completion event to connected frontend clients.</div>
          </div>
        </div>
      );
    }

    // Default: Workspace
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-slate-500 text-xs border-b border-slate-200 pb-2">
            <span className="font-mono font-medium">PDF Preview: Master_Services_Agreement_2025.pdf</span>
            <span>Page 4 / 32</span>
          </div>
          <div className="p-3 rounded-lg bg-white border-2 border-sky-400 relative shadow-xs">
            <div className="absolute -top-2.5 left-3 px-2 py-0.5 rounded bg-sky-600 text-[9px] font-bold text-white uppercase tracking-wider shadow-xs">
              Visual Citation #1 [Coordinate Bounding Box: 140, 220, 480, 85]
            </div>
            <p className="text-slate-800 leading-relaxed mt-1 text-xs font-medium">
              "Clause 8.2 (Indemnification): The Provider shall defend, indemnify, and hold harmless the Client from and against any third-party claims alleging that the Software infringes any registered intellectual property rights..."
            </p>
          </div>
          <div className="text-[11px] text-slate-600 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D946EF]" />
            <span>AI extracted verbatim clause with 99.8% grounding confidence.</span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-mono text-slate-500 font-bold mb-2">STREAMING CONVERSATIONAL Q&A</div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed shadow-xs">
              <strong className="text-sky-700">User Query:</strong> "What are the specific IP indemnity obligations and limits?"
              <div className="mt-2 pt-2 border-t border-slate-100 text-slate-700">
                <strong className="text-emerald-700 font-bold">NexusAI Response:</strong> Based on <strong>Clause 8.2 (Page 4)</strong>, the Provider has uncapped indemnification obligations for third-party intellectual property infringement claims.
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded bg-white border border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono">Latent retrieval: 140ms</span>
            <span className="text-[#A21CAF] font-semibold flex items-center gap-1">
              Interactive Bounding Box Active <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'omni-cloud') {
    if (shotId === 'omni-2') {
      return (
        <div className="space-y-4 font-sans text-xs">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-slate-800">Dead-Letter Queue Transaction Inspector (DLQ)</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-mono text-xs border border-amber-200 font-bold">
              Target Service: billing-payment-consumer-v2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1">
              <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-200 font-bold">FAILED PAYLOAD JSON</div>
              <div className="text-amber-700 font-semibold">{"{"}</div>
              <div className="pl-3 text-slate-700">"transaction_id": <span className="text-sky-700 font-semibold">"tx_99104928"</span>,</div>
              <div className="pl-3 text-slate-700">"customer_id": <span className="text-sky-700 font-semibold">"cust_552"</span>,</div>
              <div className="pl-3 text-slate-700">"retry_count": <span className="text-amber-700 font-semibold">3</span>,</div>
              <div className="pl-3 text-slate-700">"error_code": <span className="text-rose-700 font-semibold">"HTTP_504_GATEWAY_TIMEOUT"</span>,</div>
              <div className="pl-3 text-slate-700">"idempotency_key": <span className="text-purple-700 font-semibold">"lock:tx:99104928"</span></div>
              <div className="text-amber-700 font-semibold">{"}"}</div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <h5 className="font-semibold text-slate-800 mb-2">Replay Safeguards & Idempotency</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Before triggering replay, OmniCloud validates that the Redis distributed lock has released and verifies the target microservice health check is returning 200 OK.
                </p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero duplicate payment guarantee via Redis distributed transaction locks.</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (shotId === 'omni-3') {
      return (
        <div className="space-y-4 font-sans text-xs">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span className="font-semibold text-slate-800">Role-Based Access Control & Immutable Audit Log</span>
            </div>
            <span className="text-xs font-mono text-slate-500 font-medium">Environment: Production Cluster-East</span>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <span className="text-slate-700">[2025-08-20 14:02:11] Lead Engineer executed CircuitBreaker:OPEN on PaymentService</span>
              <span className="text-emerald-700 font-semibold">Dual-Approval Verified</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <span className="text-slate-700">[2025-08-20 14:05:44] Operator flushed 14 dead-letter items to retry topic</span>
              <span className="text-emerald-700 font-semibold">Replayed with 0 errors</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
              <span className="text-slate-700">[2025-08-20 14:10:00] Auto-scaler scaled Kafka consumer nodes 4 → 8</span>
              <span className="text-slate-500">System Trigger</span>
            </div>
          </div>
        </div>
      );
    }

    // Default: Topology
    return (
      <div className="space-y-4 font-sans text-xs">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-800">Microservice Topology & Health Grid</span>
          </div>
          <span className="text-xs font-mono text-emerald-700 font-bold">32/32 Services Nominal (99.99% Uptime)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-slate-50 border border-emerald-300 space-y-2">
            <div className="flex items-center justify-between font-semibold text-slate-800">
              <span>API Gateway</span>
              <span className="text-xs text-emerald-700 font-bold">Nominal</span>
            </div>
            <div className="text-[11px] text-slate-600">Throughput: 14,200 req/s</div>
            <div className="text-[11px] text-slate-600">P99 Latency: 18ms</div>
            <div className="text-[11px] text-emerald-700 font-semibold">Circuit Breaker: CLOSED</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-sky-300 space-y-2">
            <div className="flex items-center justify-between font-semibold text-slate-800">
              <span>Auth & Session Service</span>
              <span className="text-xs text-sky-700 font-bold">Nominal</span>
            </div>
            <div className="text-[11px] text-slate-600">Redis Cache Hit: 99.4%</div>
            <div className="text-[11px] text-slate-600">Active JWTs: 42,190</div>
            <div className="text-[11px] text-sky-700 font-semibold">Cluster Replicas: 4/4</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-purple-300 space-y-2">
            <div className="flex items-center justify-between font-semibold text-slate-800">
              <span>Billing & Payments</span>
              <span className="text-xs text-purple-700 font-bold">Nominal</span>
            </div>
            <div className="text-[11px] text-slate-600">DLQ Queue Depth: 0</div>
            <div className="text-[11px] text-slate-600">DB Connection Pool: 12/50</div>
            <div className="text-[11px] text-purple-700 font-semibold">Idempotency Locks: Clean</div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for others
  return (
    <div className="space-y-4 font-sans text-xs">
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
        <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
          <Terminal className="w-4 h-4 text-[#A21CAF]" />
          <span>High-Resolution Architectural View & Execution Log</span>
        </div>
        <p className="text-slate-600 leading-relaxed">
          High-performance production telemetry and automated testing pipeline verifying zero latency regressions and strict contract schema validation.
        </p>
      </div>
    </div>
  );
}

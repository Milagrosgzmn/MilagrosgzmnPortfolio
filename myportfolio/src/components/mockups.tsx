import type { CSSProperties, ReactNode } from 'react';

type Image = { src: string; width: number; height: number; alt: string };

/**
 * Composición de dos dispositivos: una ventana de navegador detrás (inclinada) y un
 * teléfono delante. Los estilos de posición y movimiento viven en globals.css (.scene).
 */
function Scene({ browser, phone, reverse = false }: { browser: ReactNode; phone: ReactNode; reverse?: boolean }) {
    return (
        <div className={`scene ${reverse ? 'scene-reverse' : ''}`}>
            <div className="scene-browser" aria-hidden="true">
                <div className="mock-shadow overflow-hidden rounded-xl border border-line bg-surface">
                    <div className="flex gap-1.5 border-b border-line bg-bg px-3 py-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="p-4">{browser}</div>
                </div>
            </div>
            <div className="scene-phone">
                <div className="phone-frame">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">{phone}</div>
                </div>
            </div>
        </div>
    );
}

/** Auto visto desde arriba, para marcar posiciones en un mapa. */
function CarMarker({ x, y, rotate = 0, body = 'var(--ink)', accent = 'var(--accent)' }: {
    x: number; y: number; rotate?: number; body?: string; accent?: string;
}) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
            <circle r="15" fill={accent} opacity="0.18" />
            <rect x="-6" y="-11" width="12" height="22" rx="4" fill={body} />
            <rect x="-4" y="-6" width="8" height="5" rx="1.5" fill={accent} />
        </g>
    );
}

/* ---------- Veccino: captura real + dashboard abstracto ---------- */

const BRAND = { '--brand': '#E65C4F' } as CSSProperties;

function AbstractDashboard() {
    const bars = [45, 60, 40, 80, 50, 70];
    return (
        <div className="flex flex-col gap-3" style={BRAND}>
            <div className="flex gap-3">
                {[0, 1, 2].map(i => (
                    <div key={i} className="flex h-16 flex-1 flex-col justify-end gap-1.5 rounded-lg bg-bg p-3">
                        <div className="h-1.5 w-2/5 rounded bg-line" />
                        <div className="h-1.5 w-[70%] rounded bg-line" />
                    </div>
                ))}
            </div>
            <div className="flex h-28 items-end gap-2.5 rounded-lg bg-bg p-3">
                {bars.map((h, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-t ${i === 1 || i === 3 ? 'bg-[var(--brand)] opacity-80' : 'bg-line'}`}
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>
            <div className="flex h-20 flex-col justify-end gap-1.5 rounded-lg bg-bg p-3">
                <div className="h-1.5 w-2/5 rounded bg-line" />
                <div className="h-1.5 w-[70%] rounded bg-line" />
                <div className="h-1.5 w-1/3 rounded bg-line" />
            </div>
        </div>
    );
}

export function VeccinoScene({ image, reverse }: { image: Image; reverse?: boolean }) {
    return (
        <Scene
            reverse={reverse}
            browser={<AbstractDashboard />}
            phone={
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image.src} width={image.width} height={image.height} alt={image.alt} loading="lazy" className="block h-auto w-full" />
            }
        />
    );
}

/* ---------- First SRL: ilustración de seguimiento de flota ---------- */

function TrackingScreen() {
    const teal = '#0F766E';
    return (
        <svg viewBox="0 0 200 380" className="block h-auto w-full" aria-hidden="true">
            <rect width="200" height="380" fill="#E6EDEA" />
            {/* calles */}
            <g stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round">
                <path d="M0 70H200M0 150H200M0 230H200" />
                <path d="M50 0V270M130 0V270" />
                <path d="M0 200L90 110" strokeWidth="7" />
            </g>
            {/* recorrido */}
            <path d="M30 250V150H130V70" fill="none" stroke={teal} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="30" cy="250" r="6" fill="#FFFFFF" stroke={teal} strokeWidth="3" />
            <CarMarker x={130} y={70} body="#15211F" accent={teal} />
            {/* panel inferior */}
            <rect y="258" width="200" height="122" rx="18" fill="#FFFFFF" />
            <rect x="88" y="266" width="24" height="3" rx="1.5" fill="#D3DCD8" />
            {/* auto dibujado de costado */}
            <g transform="translate(22 288)">
                <path d="M2 28V22Q2 19 6 18L14 16L22 7Q24 5 27 5H45Q48 5 50 7L57 15L62 16Q66 17 66 21V28Z" fill="#15211F" />
                <path d="M19 15L25 8H33V15ZM36 8H45L52 15H36Z" fill="#9FD6CE" />
                <circle cx="16" cy="29" r="6" fill="#0E1615" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="52" cy="29" r="6" fill="#0E1615" stroke="#FFFFFF" strokeWidth="2" />
            </g>
            <rect x="106" y="294" width="68" height="6" rx="3" fill="#D3DCD8" />
            <rect x="106" y="306" width="46" height="6" rx="3" fill="#D3DCD8" />
            <rect x="22" y="340" width="156" height="6" rx="3" fill="#E1E8E5" />
            <rect x="22" y="340" width="98" height="6" rx="3" fill={teal} />
            <rect x="22" y="355" width="156" height="14" rx="7" fill={teal} />
        </svg>
    );
}

function FleetPortal() {
    return (
        <svg viewBox="0 0 380 210" className="block h-auto w-full">
            {/* lista de vehículos */}
            {[0, 1, 2, 3].map(i => (
                <g key={i} transform={`translate(0 ${i * 52})`}>
                    <rect width="108" height="42" rx="8" fill={i === 1 ? 'var(--accent-soft)' : 'var(--bg)'} />
                    <circle cx="16" cy="21" r="6" fill={i === 1 ? 'var(--accent)' : 'var(--line)'} />
                    <rect x="30" y="13" width="58" height="5" rx="2.5" fill="var(--line)" />
                    <rect x="30" y="24" width="38" height="5" rx="2.5" fill="var(--line)" />
                </g>
            ))}
            {/* mapa */}
            <rect x="120" width="260" height="210" rx="10" fill="var(--bg)" />
            <g stroke="var(--line)" strokeWidth="8" strokeLinecap="round">
                <path d="M120 60H380M120 140H380M190 0V210M300 0V210" />
            </g>
            <path d="M205 190V140H300V60H352" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <CarMarker x={352} y={60} rotate={90} />
            <CarMarker x={205} y={100} />
            <CarMarker x={245} y={170} rotate={90} accent="var(--muted)" />
        </svg>
    );
}

export function FleetScene({ reverse }: { reverse?: boolean }) {
    return <Scene reverse={reverse} browser={<FleetPortal />} phone={<TrackingScreen />} />;
}

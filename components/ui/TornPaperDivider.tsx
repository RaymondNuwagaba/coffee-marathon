interface TornPaperDividerProps {
  fillColor?: string
}

export function TornPaperDivider({ fillColor = '#FAF3E8' }: TornPaperDividerProps) {
  return (
    <div className="relative w-full overflow-hidden leading-none" style={{ height: '40px', marginBottom: '-2px' }}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d={`M0,40 L0,18 C20,28 40,8 60,20 C80,32 100,10 120,22
              C140,34 160,12 180,24 C200,36 220,6 240,18
              C260,30 280,8 300,20 C320,32 340,10 360,22
              C380,34 400,12 420,24 C440,36 460,6 480,18
              C500,30 520,8 540,20 C560,32 580,10 600,22
              C620,34 640,12 660,24 C680,36 700,6 720,18
              C740,30 760,8 780,20 C800,32 820,10 840,22
              C860,34 880,12 900,24 C920,36 940,6 960,18
              C980,30 1000,8 1020,20 C1040,32 1060,10 1080,22
              C1100,34 1120,12 1140,24 C1160,36 1180,14 1200,22
              L1200,40 Z`}
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

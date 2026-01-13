interface SectionDividerProps {
  height?: number
}

export function SectionDivider({ height = 10 }: SectionDividerProps) {
  return (
    <div
      className="absolute inset-x-0 top-0"
      style={{
        height: `${height}px`,
        background: 'linear-gradient(to right, transparent, #D4A000, transparent)',
      }}
    />
  )
}

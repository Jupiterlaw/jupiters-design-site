export interface NavLink {
  label: string
  href:  string
}

export interface Pillar {
  number: string
  headline: string
  subheadline: string
  body: string
  stats?: { value: string; label: string }[]
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

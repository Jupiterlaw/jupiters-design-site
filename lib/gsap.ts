import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export { gsap, ScrollTrigger, TextPlugin }

/**
 * Utility: manually split text into per-line spans for reveal animation.
 * Returns a NodeList of all .split-line elements.
 */
export function splitLines(el: HTMLElement): NodeListOf<Element> {
  const text = el.innerText
  const words = text.split(' ')
  el.innerHTML = ''

  const lines: string[][] = []
  let current: string[] = []

  el.style.visibility = 'hidden'

  words.forEach((word) => {
    current.push(word)
    el.innerHTML = current.join(' ')
    if (el.scrollHeight > el.clientHeight && current.length > 1) {
      current.pop()
      lines.push([...current])
      current = [word]
    }
  })

  if (current.length) lines.push(current)

  el.style.visibility = ''
  el.innerHTML = lines
    .map(
      (line) =>
        `<span class="split-line-wrapper"><span class="split-line">${line.join(' ')}</span></span>`
    )
    .join('')

  return el.querySelectorAll('.split-line')
}
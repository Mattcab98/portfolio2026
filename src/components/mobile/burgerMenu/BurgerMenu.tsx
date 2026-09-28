import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface BurgerButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export const BurgerButton = ({
  isOpen,
  onToggle,
}: BurgerButtonProps) => {
  const topLine = useRef<HTMLSpanElement>(null)
  const middleLine = useRef<HTMLSpanElement>(null)
  const bottomLine = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (
      !topLine.current ||
      !middleLine.current ||
      !bottomLine.current
    ) {
      return
    }

    const timeline = gsap.timeline()

    if (isOpen) {
      timeline.to(topLine.current, {
        y: 9,
        rotate: 45,
        duration: 0.5,
      })

      timeline.to(
        bottomLine.current,
        {
          y: -9,
          rotate: -45,
          duration: 0.4,
        },
        '<',
      )

      timeline.to(
        middleLine.current,
        {
          scaleX: 0,
          duration: 0.4,
        },
        '<',
      )
    } else {
      timeline.to(topLine.current, {
        y: 0,
        rotate: 0,
        duration: 0.4,
      })

      timeline.to(
        bottomLine.current,
        {
          y: 0,
          rotate: 0,
          duration: 0.4,
        },
        '<',
      )

      timeline.to(
        middleLine.current,
        {
          scaleX: 1,
          duration: 0.4,
        },
        '<',
      )
    }

    return () => {
      timeline.kill()
    }
  }, [isOpen])

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span
        ref={topLine}
        className="block h-0.5 w-7 rounded-full bg-white"
      />

      <span
        ref={middleLine}
        className="block h-0.5 w-7 rounded-full bg-white"
      />

      <span
        ref={bottomLine}
        className="block h-0.5 w-7 rounded-full bg-white"
      />
    </button>
  )
}
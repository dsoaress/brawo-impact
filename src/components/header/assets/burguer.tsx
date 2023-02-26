import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

function BurgerBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      width="37"
      height="32"
      viewBox="0 0 37 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M32.0578 7.83793H4.02938C1.80516 7.83793 0 6.08224 0 3.91897C0 1.7557 1.80516 0 4.02938 0H32.0578C34.282 0 36.0872 1.7557 36.0872 3.91897C36.0872 6.08224 34.282 7.83793 32.0578 7.83793Z"
        fill="white"
      />
      <path
        d="M32.0578 19.9214H4.02938C1.80516 19.9214 0 18.1657 0 16.0024C0 13.8392 1.80516 12.0835 4.02938 12.0835H32.0578C34.282 12.0835 36.0872 13.8392 36.0872 16.0024C36.0872 18.1657 34.282 19.9214 32.0578 19.9214Z"
        fill="white"
      />
      <rect x="19.105" y="24.167" width="16.9822" height="7.83303" rx="3.69" fill="white" />
    </svg>
  )
}

export const Burger = forwardRef(BurgerBase)

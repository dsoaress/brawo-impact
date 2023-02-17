import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

function LinkedinIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path
        d="M2.30759 4.61517C3.58203 4.61517 4.61517 3.58203 4.61517 2.30759C4.61517 1.03314 3.58203 0 2.30759 0C1.03314 0 0 1.03314 0 2.30759C0 3.58203 1.03314 4.61517 2.30759 4.61517Z"
        fill="currentColor"
      />
      <path
        d="M6.7941 6.36327V19.1657H10.7691V12.8346C10.7691 11.1641 11.0834 9.54622 13.1547 9.54622C15.1976 9.54622 15.2229 11.4562 15.2229 12.9401V19.1668H19.2V12.146C19.2 8.69723 18.4575 6.04688 14.4266 6.04688C12.4914 6.04688 11.1941 7.10891 10.6636 8.114H10.6098V6.36327H6.7941ZM0.316406 6.36327H4.29773V19.1657H0.316406V6.36327Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const LinkedinIcon = forwardRef(LinkedinIconBase)

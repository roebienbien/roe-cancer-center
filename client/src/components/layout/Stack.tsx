import { twMerge } from "tailwind-merge"


type StackDirection = 'row' | 'col'




type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const gapMap: Record<StackGap, string> = {
  xs: "gap-1",
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

const directionMap: Record<StackDirection, string> = {
  row: 'flex-row',
  col: 'flex-col',
}

type StackProps = {
  children: React.ReactNode
  direction?: StackDirection
  gap?: StackGap
  className?: string
}


const Stack = ({ direction = 'col', gap = 'md', children, className }: StackProps) => {
  return (
    <div className={
      twMerge(
        `flex`,
        directionMap[direction],
        gapMap[gap],
        className)}
    >
      {children}
    </div>
  )
}

export default Stack

import './Stack.scss'

type StackDirection = 'row' | 'col'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// const gapMap: Record<StackGap, string> = {
//   xs: "gap-1",
//   sm: 'gap-2',
//   md: 'gap-4',
//   lg: 'gap-6',
//   xl: 'gap-8',
// }
//
// const directionMap: Record<StackDirection, string> = {
//   row: 'flex-row',
//   col: 'flex-col',
// }


type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: StackDirection;
  gap?: StackGap;
}


const Stack = ({ children, gap = 'md', direction = 'col', className }: StackProps) => {
  return (
    <div className={`stack stack--${direction} stack--${gap} ${className}`}>
      {children}
    </div>
  )
}

export default Stack

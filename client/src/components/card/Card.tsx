import './Card.scss'

type CardVariant = 'default' | 'outlined'



type CardProps = {
  children: React.ReactNode;
  title?: string;
  variant?: CardVariant;
  className?: string
}

const Card = ({ title, children, variant = 'default', className }: CardProps) => {
  return (
    <div className={`card card--${variant} ${className}`}>
      {title && <h3 className="heading heading--3">{title}</h3>}

      <div className="card__body">{children}</div>
    </div>
  )
}
export default Card

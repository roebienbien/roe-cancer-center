import './Card.scss'

type CardVariant = 'default' | 'outlined'



type CardProps = {
  children: React.ReactNode;
  title?: string;
  variant?: CardVariant;
}

const Card = ({ title, children, variant = 'default' }: CardProps) => {
  return (
    <div className={`card card--${variant}`}>
      {title && <h3 className="heading heading--3">{title}</h3>}

      <div className="card__body">{children}</div>
    </div>
  )
}
export default Card

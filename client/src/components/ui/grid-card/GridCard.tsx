import SecondaryLink from '../link/SecondaryLink';
import Card, { CardProps } from './Card';

// type CardInfoProps = {
//   title: string;
//   subtitle?: string
//   linkText?: string;
//   linkTo?: string;
// }

type GridCardProps = {
  data: CardProps[];
  gridCol?: number;
  title: string;
  subtitle?: string;
  linkText: string;
  linkTo: string;
};

const GridCard = ({ title, data, subtitle, linkText, linkTo }: GridCardProps) => {
  // const colClass = `grid-cols-${gridCol}`; //halt
  return (
    <div className={`grid gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-3`}>
      <div className='flex flex-col items-start justify-center gap-y-2'>
        <h2 className='font-bold md:text-5xl'>{title}</h2>
        <p className='lg:max-w-sm'>{subtitle}</p>
        <SecondaryLink text={linkText} to={linkTo} className='mt-4 border-2 px-4 py-3 text-xl' />
      </div>
      {data.map((data, index) => (
        <Card {...data} key={index} />
      ))}
    </div>
  );
};
export default GridCard;

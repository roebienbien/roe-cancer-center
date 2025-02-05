import SecondaryLink from '../link/SecondaryLink';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
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
    <div className={`grid gap-8 p-10 lg:grid-cols-3`}>
      <div className='flex flex-col items-start justify-center gap-y-4'>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p className='lg:max-w-sm'>{subtitle}</p>
        <SecondaryLink text={linkText} to={linkTo} />
      </div>
      {data.map((data, index) => (
        <Card {...data} key={index} />
      ))}
    </div>
  );
};
export default GridCard;

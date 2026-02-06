import { CardProps } from '../../../components/ui/grid-card/Card';
import GridCard from '../../../components/ui/grid-card/GridCard';

const Location: CardProps[] = [
  {
    title: 'Taguig Branch',
    img: '1586773860418-d37222d8fce3',
  },
  {
    title: 'Muntinlupa Branch',
    img: '1596541223130-5d31a73fb6c6',
  },
  {
    title: 'Bicol Branch',
    img: '1586773860383-dab5f3bc1bcc',
  },
  {
    title: 'Ilo-Ilo Branch',
    img: '1587351021355-a479a299d2f9',
  },
  {
    title: 'Manila Branch',
    img: '1626315869436-d6781ba69d6e',
  },
];

const Locations = () => {
  return (
    <div className='flex h-screen place-content-center lg:px-10'>
      <GridCard
        data={Location}
        title={'Locations'}
        subtitle={`Learn more about Roe Cancer Clinic locations or choose a specific location`}
        linkText={'Explore all locations'}
        linkTo={'/explore'}
        gridCol={4}
      />
    </div>
  );
};
export default Locations;

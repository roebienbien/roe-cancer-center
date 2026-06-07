import { Button } from '../ui/button/Button';

type TabItem = {
  value: string;
  label: string;
};

type Props = {
  items: TabItem[];
  activeTab: string;
  onChange: (tab: string) => void;
};

const Tabs = ({ items, activeTab, onChange }: Props) => {
  return (
    <div className=''>
      {items.map((tab) => (
        <Button onClick={() => onChange(tab.value)} variant='tertiary' className='' isActive={activeTab === tab.value}>
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;

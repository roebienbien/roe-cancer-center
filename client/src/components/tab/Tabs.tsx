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
    <div className='w-fit bg-surface'>
      <div className='flex'>
        {items.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            variant='tertiary'
            className='border-1 border px-10'
            isActive={activeTab === tab.value}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Dropdown from '../../ui/Dropdown';
import Input from '../../ui/Input';
import PrimaryButton from '../../ui/PrimaryButton';
import ChemoSchema, { FormFields } from './ChemoAppointmentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputWithLabel from '../../ui/InputWithLabel';

const Sex = [
  { text: 'male', value: 'male' },
  { text: 'female', value: 'female' },
];

const ChemoType = [
  {
    text: 'hormone therapy',
    value: 'hormone',
  },
  {
    text: 'immunotherapy',
    value: 'immuno',
  },
  {
    text: 'targeted therapy',
    value: 'targeted',
  },
];

interface Props {
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const ChemoAppointmentForm = ({ selectedOption, setSelectedOption }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(ChemoSchema),
    defaultValues: {
      sex: '', //blank
      // firstName: 'roe bien',
      // lastName: 'arnaiz',
      // email: 'roebien@email.com',
      // mobileNumber: '12345678910',
    },
  });

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      // const result = await data;
      console.log(JSON.stringify(data));
      reset();
    } catch (error) {
      console.log('Error submitting form', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-3'>
        {/* <span className='col-span-3 font-semibold'>Chemotherapy</span> */}
        <span className='font-semibold lg:col-span-3'>Full Name</span>
        {/* <Input register={register} errors={errors.lastName} id={'lastName'} placeholder='Last name' className={''} />
        <Input register={register} errors={errors.firstName} id={'firstName'} placeholder='First name' className={''} />
        <Input register={register} errors={errors.middleName} id={'middleName'} placeholder='Middle name' className={''} /> */}
        <InputWithLabel register={register} errors={errors.lastName} id={'lastName'} label={'Last name'} placeholder='De la cruz' className={''} />
        <InputWithLabel register={register} errors={errors.firstName} id={'firstName'} label={'First name'} placeholder='Juan' />
        <InputWithLabel register={register} errors={errors.middleName} id={'middleName'} label={'Middle name'} placeholder='Smith' />
        <span className='font-semibold lg:col-span-3'>Contacts</span>
        <div className='flex flex-col gap-y-2 lg:col-span-2'>
          <span className=''>Email</span>
          <Input register={register} errors={errors.email} id={'email'} placeholder='Enter email' className={''} type='email' />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>Mobile number</span>
          <Input register={register} errors={errors.mobileNumber} id={'mobileNumber'} placeholder='Enter mobile number' className={''} />
        </div>

        <span className='lg:col-span-2'>Additional Info</span>
        <div className='flex flex-col gap-y-2'>
          <Dropdown
            id={'sex'}
            register={register}
            errors={errors.sex}
            options={Sex}
            selectedValue={selectedOption}
            onChange={handleOptionChange}
            placeholder='select'
            label={'Sex'}
          />
        </div>
        <PrimaryButton text='Submit' className='lg:col-span-3' />
      </div>
    </form>
  );
};

export default ChemoAppointmentForm;

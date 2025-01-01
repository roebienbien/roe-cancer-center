import { SubmitHandler, useForm } from 'react-hook-form';
import Dropdown from '../../ui/Dropdown';
import Input from '../../ui/Input';
import PrimaryButton from '../../ui/PrimaryButton';
import ChemoSchema, { FormFields } from './ChemoAppointmentSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const Sex = [
  { text: 'male', value: 'male' },
  { text: 'female', value: 'female' },
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
      firstName: 'roe bien',
      lastName: 'arnaiz',
      email: 'roebien@email.com',
      sex: '', //blank
      mobileNumber: '12345678910',
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
      <div className='grid grid-cols-2 gap-x-8 gap-y-4'>
        {/* <div className='col-span-2 flex gap-x-4'> */}
        <span className='col-span-2 font-semibold'>Full Name</span>
        <Input register={register} errors={errors.firstName} id={'firstName'} placeholder='First name' className={''} />
        <Input register={register} errors={errors.lastName} id={'lastName'} placeholder='Last name' className={''} />
        {/* </div> */}
        <span className='col-span-2 font-semibold'>Contacts</span>
        <Input register={register} errors={errors.email} label={'Email'} id={'email'} placeholder='Enter email' className={''} type='email' />
        <Input
          register={register}
          errors={errors.mobileNumber}
          label={'Mobile Number'}
          id={'mobileNumber'}
          placeholder='Enter mobile number'
          className={''}
        />

        <span className='col-span-2'>Additional Info</span>
        <div className='flex flex-col gap-y-2'>
          {/* <span>Sex</span> */}
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
        <PrimaryButton text='Submit' className='col-span-2' />
      </div>
    </form>
  );
};

export default ChemoAppointmentForm;

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, updateForm } from '../../../state/slices/form-slice';
import { RootState } from '../../../state/store';
import DatePicker from '../../ui/DatePicker';
import Dropdown from '../../ui/Dropdown';
import Input from '../../ui/Input';
import PrimaryButton from '../../ui/PrimaryButton';
import RadioButton from '../../ui/RadioButton';
import { FormFields, Steps } from './ChemoAppointmentSchema';

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

const ChemoAppointmentForm = () => {
  const dispatch = useDispatch();
  const { data, step } = useSelector((state: RootState) => state.form);
  const currentStep = Steps[step - 1];
  /*   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }; */

  const DefaultValues = {
    sex: 'MALE', //blank
    firstName: 'juan',
    lastName: 'dela cruz',
    middleName: 'pegasus',
    email: 'roebien@email.com',
    mobileNumber: '12345678910',
    motherFirstName: 'maria',
    motherLastName: 'clara',
    motherMiddleName: 'sevilleja',
    fatherFirstName: 'boyet',
    fatherLastName: 'dela cruz',
    fatherMiddleName: 'robles',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    // resolver: zodResolver(ChemoSchema),
    resolver: zodResolver(currentStep.schema),
    // defaultValues: data,
    defaultValues: DefaultValues,
  });

  const capitalizeData = (stepData: FormFields) => {
    return Object.fromEntries(Object.entries(stepData).map(([key, value]) => [key, typeof value === 'string' ? value.toUpperCase() : value]));
  };

  const onSubmit: SubmitHandler<FormFields> = async (stepData: FormFields) => {
    const capitalizedData = capitalizeData(stepData);
    try {
      // Merge the current step's data with existing data
      const updatedData = { ...data, ...capitalizedData };
      dispatch(updateForm(updatedData));

      if (step < Steps.length) {
        // Navigate to the next step
        dispatch(setStep(step + 1));
      } else {
        // Handle final submission
        console.log('Final Data: ', updatedData);

        // Submit data to an API if needed
        // await submitDataToAPI(updatedData);

        // Reset the form
        reset();
        // Call other reset functions if required
        // resetForm();
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 items-center gap-x-8 gap-y-6 lg:grid-cols-3'>
        <h2 className='col-span-full mb-2 text-lg font-semibold'>{currentStep.title}</h2>
        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div className='col-span-full mb-4 rounded bg-red-100 p-2 text-red-500'>
            <p>Please fill out all required fields.</p>
            <ul className='flex gap-x-2'>
              {Object.entries(errors).map(([field, error]) => (
                <li key={field}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <div className='col-span-full grid grid-cols-3 gap-x-8'>
          <span className='col-span-full font-semibold'>FULL NAME</span>
          <Input register={register} errors={errors} id={'lastName'} placeholder='LAST NAME' />
          <Input register={register} errors={errors} id={'firstName'} placeholder='FIRST NAME' />
          <Input register={register} errors={errors} id={'middleName'} placeholder='MIDDLE NAME' />
        </div>

        <RadioButton register={register} errors={errors} id={'sex'} label='Select Sex' options={['MALE', 'FEMALE']} />
        <Input register={register} errors={errors} id={'height'} label='Height (kg)' placeholder='Enter Height ' type='number' />
        <Input register={register} errors={errors} id={'weight'} label='Weight (cm)' placeholder='Enter Weight' type='number' />

        <Dropdown register={register} errors={errors} id={'chemoType'} label='Select chemo type' options={ChemoType} />
        <Input register={register} errors={errors} id={'weight'} label='Weight (cm)' placeholder='Enter Weight' type='number' />

        <div className='col-span-full grid grid-cols-3 gap-x-8'>
          <span className='col-span-full font-semibold'>MOTHER'S MAIDEN FULL NAME</span>
          <Input register={register} errors={errors} id={'motherLastName'} placeholder='LAST NAME' />
          <Input register={register} errors={errors} id={'motherFirstName'} placeholder='FIRST NAME' />
          <Input register={register} errors={errors} id={'motherMiddleName'} placeholder='MIDDLE NAME' />
        </div>
        <div className='col-span-full grid grid-cols-3 gap-x-8'>
          <span className='col-span-full font-semibold'>FATHER's FULL NAME</span>
          <Input register={register} errors={errors} id={'fatherLastName'} placeholder='LAST NAME' />
          <Input register={register} errors={errors} id={'fatherFirstName'} placeholder='FIRST NAME' />
          <Input register={register} errors={errors} id={'fatherMiddleName'} placeholder='MIDDLE NAME' />
        </div>
        <DatePicker />
        {/* <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} /> */}
        <div className='col-span-full flex justify-between'>
          {step > 1 ? (
            <PrimaryButton onClick={() => dispatch(setStep(step - 1))} text='Previous' />
          ) : (
            <div /> // Empty placeholder to maintain spacing
          )}
          <PrimaryButton
            text={step < Steps.length ? 'Next' : 'Submit'}
            // disabled={isSubmitting}
          />
        </div>
      </div>{' '}
    </form>
  );
};

export default ChemoAppointmentForm;

// <form onSubmit={handleSubmit(onSubmit)}>
//   <div className='grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-3'>
//     {/* <span className='col-span-3 font-semibold'>Chemotherapy</span> */}
//     <span className='font-semibold lg:col-span-3'>Full Name</span>
//     <InputWithLabel register={register} errors={errors.lastName} id={'lastName'} label={'Last name'} placeholder='De la cruz' className={''} />
//     <InputWithLabel register={register} errors={errors.firstName} id={'firstName'} label={'First name'} placeholder='Juan' />
//     <InputWithLabel register={register} errors={errors.middleName} id={'middleName'} label={'Middle name'} placeholder='Smith' />
//     <span className='font-semibold lg:col-span-3'>Contacts</span>
//     <div className='flex flex-col gap-y-2 lg:col-span-2'>
//       <span className=''>Email</span>
//       <Input register={register} errors={errors.email} id={'email'} placeholder='Enter email' className={''} type='email' />
//     </div>
//     <div className='flex flex-col gap-2'>
//       <span className='text-sm'>Mobile number</span>
//       <Input register={register} errors={errors.mobileNumber} id={'mobileNumber'} placeholder='Enter mobile number' className={''} />
//     </div>

//     <span className='lg:col-span-2'>Additional Info</span>
//     <div className='flex flex-col gap-y-2'>
//       <Dropdown
//         id={'sex'}
//         register={register}
//         errors={errors.sex}
//         options={Sex}
//         selectedValue={selectedOption}
//         onChange={handleOptionChange}
//         placeholder='select'
//         label={'Sex'}
//       />
//     </div>
//     <PrimaryButton text='Submit' className='mt-20 lg:col-span-3' />
//   </div>
// </form>

// {currentStep.fields.map((field) => {
//   if (field.type === 'divider') {
//     return (
//       <h3 key={field.id} className='col-span-full'>
//         {field.label}
//       </h3>
//     );
//   }
//   if (field.type === 'radio') {
//     return (
//       <div key={field.id} className='mb-4'>
//         <label className='block'>{field.label}</label>
//         <div className='flex gap-4'>
//           {field.options?.map((option) => (
//             <label key={option}>
//               <input {...register(field.id)} type='radio' value={option} className='mr-2' />
//               {option}
//             </label>
//           ))}
//         </div>
//         {errors[field.id] && <p className='text-sm text-red-500'>{errors[field.id]?.message}</p>}
//       </div>
//     );
//   }
//   return (
//     <Input
//       key={field.id}
//       register={register}
//       errors={errors}
//       id={field.id}
//       placeholder={field.placeholder}
//       type={field.type}
//       className='rounded'
//     />
//   );
// })}

import { createContext, useContext } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields } from '../forms/chemo-form/ChemoAppointmentSchema';

interface FormContextProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

interface Props {
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<any>;
  children: React.ReactNode;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider: React.FC<Props> = ({ register, errors, children }) => {
  return <FormContext.Provider value={{ register, errors }}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export default FormProvider;

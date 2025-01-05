import { formValidation} from "../../validations/form-validation";
import { Controller,useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const initialValues= {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
}

export default function ReactHookForm(){
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(formValidation),
        defaultValues: initialValues,
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        console.log(data);
    }

    console.log(errors);
    
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Controller
          name="name"
          control={control}
          render={
            ({ field }) => (
              <input
                {...field}
                id="name"
                className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )
          }
          />
          {errors.name && (
            <div className="mt-1 text-sm text-red-600">{errors.name.message}</div>
            )}
          </div>
          <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Controller
          name="email"
          control={control}
          render={
            ({field})=>{
                return (
                  <input
                    {...field}
                    id="email"
                    className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )
              }
            }
          />
          {errors.email && (
              <div className="mt-1 text-sm text-red-600">{errors.email.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Controller
            name="password"
            control={control}
            render={
              ({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )
            }
            />
            {errors.password && (
              <div className="mt-1 text-sm text-red-600">{errors.password.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <Controller
            name="confirmPassword"
            control={control}
            render={
              ({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )
            }
            />
           {errors.confirmPassword && (
              <div className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</div>
            )}
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </div>

          </form>
      </div>
    </div>
  );
}
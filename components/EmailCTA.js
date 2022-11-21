/* eslint-disable prettier/prettier */
import { useForm } from 'react-hook-form'
import * as Fathom from 'fathom-client'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'

const EmailCTA = ({
  title = 'Feel free to reach out to me about almost anything id love to hear from you',
  description = 'I learned these in the past  years and collabration and just feedback seen through the lens of how we are all one and all the same is really key to ones artist carrer and that one should not see how is different from others but rather how similar it is',
  cta = 'Hit me up',
  embedded = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email }) => {
   // todo: add your mailchimp endpoint
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <div className="">
      <div className="mx-auto">
        <div
          className={`${
            embedded ? 'px-4 py-2' : 'px-12 py-12'
          } bg-gray-100 dark:bg-gray-800 rounded-xl lg:flex lg:items-center`}
        >
          {isSubmitSuccessful ? (
            <SuccessMessage handleReset={reset} />
          ) : (
            <>
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
                <p className="max-w-3xl mt-4 text-gray-500 text-md dark:text-gray-400">
                  {description}
                </p>
              </div>
              <div className="sm:w-full sm:max-w-md lg:ml-8 lg:flex-1">
                <form className="flex-col sm:flex" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 text-black placeholder-gray-500 border-gray-500 rounded-md dark:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 dark:focus:ring-white"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      },
                      message: 'Please enter a vaild email.',
                    })}
                    disabled={isSubmitting}
                  />
                  <ErrorMessage errors={errors} name="email" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-500 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto sm:flex-shrink-0"
                  >
                    {cta}
                  </button>
                </form>
             
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailCTA

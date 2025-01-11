'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTwitterX } from 'react-icons/bs';
import { PiPhoneCall } from 'react-icons/pi';
import { LuFacebook } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';
import PageTitle from '@/components/shared/page-title';
import InputField from '@/components/ui/button/input/input';
import TextAreaField from '@/components/ui/button/textarea/textarea';
import Button from '@/components/ui/button/btn';
import { fetchAPI } from '@/utils/fetchApi';
import SuccessModal from '@/components/modals/successModal';
import ErrorModal from '@/components/modals/errorModal';
import {useRouter} from "next/navigation";

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  message: yup.string().required('Message is required'),
});

type FormData = yup.InferType<typeof schema>;

const Page: React.FC = () => {
  const router = useRouter
  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetchAPI<{ message: string }>("api/contact", {
        method: "POST",
        body: data,
      });
      if (response.message) {
        setIsModalOpen(true);
      }
    } catch (error) {
      setOpenError(true);
      console.log(`error:${error}`)
    } finally {
      reset();
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-6 lg:px-44 py-12">
      <div className="text-center mb-12">
        <PageTitle title="Contact Us" />
      </div>
      <div className="bg-[#F6F6F6] border border-[#004646] p-6 xl:p-12 mb-12 rounded-xl">
        <h3 className="text-lg font-medium text-center text-primary-text">
          We&apos;re Here to Meet Your Healthcare Staffing Needs
        </h3>
        <p className="text-center mt-4 text-sm text-primary-text">
          Our team is dedicated to understanding your unique needs...
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <InputField
              label="Last Name"
              {...register('lastName')}
              name="lastName"
              error={errors.lastName?.message}
            />
          </div>
          <InputField
            label="Email"
            {...register('email')}
            name="email"
            error={errors.email?.message}
          />
          <InputField
            type="tel"
            label="Phone Number"
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
          <TextAreaField
            label="Message"
            {...register('message')}
            error={errors.message?.message}
          />
          <Button
            disabled={isSubmitting}
            text={isSubmitting ? "Sending..." : "Send Message"}
            bgColor="bg-[#000000]"
            size="w-full py-2 text-lg"
            textColor="text-[#FEFEFE]"
            type="submit"
          />
        </form>
        <div>
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?..."
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>
      <div className="bg-[#FFF9EE] text-primary-text mt-12 p-6 rounded-xl shadow-md shadow-[#00000026]">
        <div className="flex flex-col gap-6 sm:flex-row justify-between text-center sm:text-left">
          <div className="mb-4 sm:mb-0 lg:max-w-[30%]">
            <p className="font-medium">Office Address</p>
            <div className="flex items-start justify-center my-3 md:gap-2">
              <CiLocationOn className="text-[#007474] text-xl mt-1 shrink-0" />
              <p className="text-primary-text">
                Harrier House, Aviation Way, Southend, Essex. SS2 6UN
              </p>
            </div>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium mb-3">Phone Number</p>
            <div className="flex items-center justify-center my-3 gap-2">
              <PiPhoneCall className="text-[#34C759] text-xl shrink-0" />
              <a href="tel:01702842942" className="text-primary-text">
                01702 842 942
              </a>
            </div>
          </div>
          <div className="mb-4 sm:mb-0">
            <p className="font-medium mb-3">Email</p>
            <div className="flex items-center justify-center hover:underline text-center my-3 gap-2">
              <HiOutlineMail className="text-[#007AFF] text-xl shrink-0" />
              <a href="mailto:Recruitment@fussygroup.co.uk" className="text-primary-text">
                Recruitment@fussygroup.co.uk
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-3">Social Media</p>
            <div className="w-full lg:w-auto flex space-x-1 justify-center lg:justify-end mt-4 lg:mt-0">
              <button onClick={() => router.push("https://www.twitter.com")} className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <BsTwitterX className="text-black" />
              </button>
              <button onClick={() => router.push("https://www.facebook.com")} className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <LuFacebook className="text-[#1877F2]" />
              </button>
              <button onClick={() => router.push("/https://www.linkedin.com")} className="w-8 h-8 flex items-center justify-center bg-white hover:shadow-lg rounded-full">
                <SlSocialLinkedin className="text-[#0077B5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
      <ErrorModal isOpen={openError} onClose={() => setOpenError(false)} />
    </div>
  );
};

export default Page;

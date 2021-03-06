import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Agencies() {
  return (
    <Layout>
      <div className="py-16 bg-gray-100 sm:py-20 md:py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            For Agencies
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>

        <p className="max-w-xl px-6 mx-auto mt-16 text-center text-gray-500">
          If you are an ecommerce agency anywhere in the world who has available capacity to help merchants set up a website or optimize their online operations, fulfillment and shipping and would like to help out in this difficult time, complete this form to add your name to the list.
        </p>

        <form
          name="Agency Form"
          method="POST"
          data-netlify="true"
          action="/contact/thanks/"
          className="max-w-4xl px-6 py-8 mx-auto mt-24 bg-white shadow md:py-16 md:px-24 sm:rounded-md sm:overflow-hidden"
        >
          <input type="hidden" name="form-name" value="Agency Form" />

          <div className="mb-8 text-center md:mb-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              Business Information
            </h2>
            <p className="mx-8 mt-4 text-gray-500">
            Once you have been vetted you will then be added to a public directory so that retailers may contact you, and potentially receive requests for assistance through us.
            </p>
          </div>

          <Input id="name" label="Name" required />

          <Input id="email" label="Email" type="email" required />

          <Input id="phone" label="Phone" type="tel" required />

          <Input id="business-name" label="Business Name" />

          <Input
            id="expertise"
            label="Business Expertise"
            hint="Tell us more about how you can help merchants."
          />

          <Input id="platforms" label="Which platforms you work with?" />

          <Input id="location" label="Where are you located?" />

          <Input
            id="help_needed"
            label="Anything else you want to tell us?"
            inputType="textarea"
          />

          <div className="pt-5 mt-6 border-t border-gray-200 sm:mt-5">
            <div className="flex justify-end">
              <Button type="submit">Send</Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

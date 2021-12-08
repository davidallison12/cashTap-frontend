import React from "react";

function BillForm() {
  return (
    <form>
      <div class="mb-6">
        <label
          for="email"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Type of Bill
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Being paid to:
        </label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        /> 
      </div>

      <div class="mb-6">
        <label
          for="password"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Due Date this month:
        </label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="password"
          class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Amount Due:
        </label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>

        <div class="text-sm ml-3">
          <label
            for="remember"
            class="font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default BillForm;
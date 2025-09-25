import React from 'react'
import { EyeSlashIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Overview = () => {
    
  return (
    <section className="w-full h-full bg-gray-100">
      <div className="flex justify-between items-center py-8 px-12 bg-white shadow-xs border-b border-gray-200">
        <div className="flex items-center">
          <h3 className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded text-xl mr-4">
            R
          </h3>
          <span className="text-2xl font-bold">Recurit</span>
        </div>

        <ul className="flex space-x-4 items-center">
          <li className="flex items-center cursor-pointer bg-gray-200 py-1 px-4 hover:bg-gray-300 transition">
            <span>
              <EyeSlashIcon className="w-4 h-4 mr-2" />
            </span>
            <span>Private</span>
          </li>

          <li className="flex py-1 px-4 cursor-pointer bg-[#0078d4] hover:bg-[#0078d4dd] transition duration-300">
            <span>
              <UserGroupIcon className="w-5 h-5 text-white mr-2" />
            </span>
            <span className="text-white">Invite</span>
          </li>

          <li className="cursor-pointer">
            <span>
              <StarIcon className="w-5 h-5" />
            </span>
          </li>
        </ul>
      </div>

      <div className="my-6 mx-8 flex">
        <ul className="bg-white basis-[73%] pt-4 pb-12 px-6 rounded shadow-lg">
          <li>
            <h4 className="font-semibold text-md">About this project</h4>
          </li>
          <li className="mt-8 mb-6">
            <h5 className="font-semibold">Help others to get on board!</h5>
            <p className='flex flex-col text-gray-600 mt-2'>
              <span>
                Describe your project and make it easier for other people to
              </span>
              <span>understand it.</span>
            </p>
          </li>
          <li>
            <button className='bg-gray-100 px-6 py-2 font-medium'>+ Add Project Descriptions</button>
          </li>
        </ul>

        <div className="ml-[1%] bg-white basis-[26%] p-4 rounded shadow-lg">
          project stats
        </div>
      </div>
    </section>
  );
}

export default Overview;

import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="h-44 w-full lg:w-80 p-8 pt-9 m-3
          bg-white bg-no-repeat bg-contain bg-right
          dark:bg-secondary-dark-bg dark:text-gray-200"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="p-4 text-2xl text-white rounded-full opacity-0.9 hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-1 items-center m-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200
              p-4 pt-9 md:w-56 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="p-4 opacity-0.9 text-2xl rounded-full hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`ml-2 text-sm text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <div
          className="m-3 p-4 md:w-780 rounded-2xl
          bg-white dark:bg-secondary-dark-bg dark:text-gray-200"
        >
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p
                className="flex items-center gap-2 text-gray-600
                hober:drop-shadow-xl"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p
                className="flex items-center gap-2 text-green-400
                hober:drop-shadow-xl"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="m-4 pr-10 border-r-1 border-color">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span
                    className="ml-3 p-1.5 hover:drop-shadow-xl
                    cursor-pointer rounded-full text-xs text-white bg-green-400"
                  >
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

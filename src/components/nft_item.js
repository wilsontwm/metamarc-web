import { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ClockIcon } from "@heroicons/react/outline";

import CurrencyFormat from "react-currency-format";

dayjs.extend(relativeTime);

export default function NFTItem(props) {
  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <img className="w-full h-64 md:h-96 col-span-1 md:col-span-2" src={props.item.imageUrl} />
      </div>
      <div className="md:pl-16">
        <h4 className="pt-4 pb-6 font-bold truncate text-5xl">{props.item.name}</h4>
        <div className="mt-8">
          <div className="text-gray-600">Current Bid</div>
          <div className="grid grid-cols-2">
            <div className="text-2xl font-semibold">
              <CurrencyFormat value={props.item.bidPrice / 100} displayType={"text"} thousandSeparator={true} prefix={"$"} />
            </div>
            <div className="text-sm text-right text-gray-500">
              <ClockIcon className="h-4 w-4 inline-block" aria-hidden="true" /> {props.item.expiryAt.fromNow(true)} left
            </div>
          </div>
        </div>
        <hr className="border-2 mt-6 mb-3" />
        <div className="grid grid-cols-2">
          <div className="">
            <div className="text-sm text-gray-600">Artist</div>
            <div className="mt-2 truncate">
              <img className="inline-block h-12 w-12 rounded-full" src={props.item.artistUrl} alt={props.item.artistName} />
              <span className="text-sm ml-4 ">{props.item.artistName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

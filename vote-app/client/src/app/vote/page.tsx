'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const getData = () => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/votes`).then(async res => {
      // console.log(await res.json())
      const response = await res.json();
      setData(response.data)
    })
  }

  const vote = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/votes/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id: id }),
    }).then(async res => {
      console.log(await res.json())
      getData();
    }).catch(console.error)
  }

  useEffect(() => {
    console.log("componenet dsd")
    console.log(process.env)
    getData()
  }, [])

  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {
        data.map((_data, idx) => {
          return (<div className="m-6 p-6 min-h-80 min-w-80 max-w-lg bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4 " key={`bibhash-${idx}`}>
            <div className="shrink-0 h-40 flex items-center justify-center">
              <img className="h-24 w-24" src={_data.image} alt="ChitChat Logo" />
              {/* <i className=" text-xxl"></i> */}
            </div>
            <div>
              <div className="text-xl font-medium text-black">Language : {_data.language as any}</div>
              <div className="my-4 text-l font-medium text-black">Count : {_data.count as any}</div>
              <p className="text-slate-500">{_data.description as any}</p>

              <button type="button" className="my-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => { vote(_data._id) }}
              >Vote</button>

            </div>
          </div>)
        })
      }
    </div>
  );
}

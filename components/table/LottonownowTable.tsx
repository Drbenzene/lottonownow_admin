import Image from "next/image";
import { CgSortAz } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { PiTimerFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import Countdown from "react-countdown";
import { cn } from "@/utils/utils";
import LottoLoader from "../loader/LottoLoader";

interface LottoNowNowTableProps {
  title: string;
  subTitle: string;
  columns: any;
  data: any;
  hideActions: boolean;
  loading: boolean;
}

export default function LottoNowNowTable({
  title,
  subTitle,
  columns,
  data,
  hideActions,
  loading,
}: LottoNowNowTableProps) {
  const { push } = useRouter();
  return (
    <section className="shadow-sm border  border-t-[#BB4D0D] border-t-4 rounded-lg py-5 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="mr-5">
            {/* <Image
              src="/img/game_avatar.svg"
              width={50}
              height={50}
              alt="LottoNowNow logo"
              className="w-12 h-12"
            /> */}
          </div>

          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold leading-6 text-gray-900">
              {title}
            </h1>
            <p className="mt-2 text-sm  text-[#667085]">{subTitle}</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt2-0  flex justify-center items-center space-x-3 cursor-pointer">
            <span className="text-sm font-semibold text-gray-400">Sort by</span>
            <CgSortAz className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    {columns.map((column: any, i: number) => (
                      <th
                        key={i}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {column?.Header}
                      </th>
                    ))}

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {loading && (
                    <div className="mt-20 w-full">
                      <LottoLoader />
                    </div>
                  )}

                  {data &&
                    data?.map((item: any, i: number) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? undefined : "bg-[#F9F6F2]"}
                      >
                        {columns.map((column: any, i: number) => (
                          <Fragment key={i}>
                            {column?.accessor === "drawDate" ? (
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                <Countdown
                                  date={new Date(item[column?.accessor])}
                                  overtime={false}
                                  renderer={renderer}
                                />
                              </td>
                            ) : column?.accessor === "name" ? (
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                <div className="flex justify-start items-center space-x-3">
                                  <Image
                                    src="/img/game_avatar.svg"
                                    alt="Lotto"
                                    width={30}
                                    height={30}
                                  />
                                  <p>{item[column?.accessor]}</p>
                                </div>
                              </td>
                            ) : column?.accessor === "winningNumbers" ? (
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#B67D08] sm:pl-3">
                                {item[column?.accessor]}
                              </td>
                            ) : (
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {item[column?.accessor]}
                              </td>
                            )}
                          </Fragment>
                        ))}

                        {!hideActions && (
                          <td className="relative whitespace-nowrap space-x-5 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <button
                              onClick={() => push(`/draws/${item.id}`)}
                              className="bg-[#C2870F] text-white px-5 rounded-xl py-3"
                            >
                              Play Game{" "}
                            </button>

                            <button>
                              <GrFavorite size={20} />
                            </button>
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ///PAGINATION STARTS HERE  */}
        {data?.length === 0 && (
          <div className="flex justify-center mt-20 items-center h-[300px]">
            <p className="text-[#667085]">No data available</p>
          </div>
        )}
        {data?.length > 0 && (
          <section className="flex justify-between items-center my-10">
            <button className="px-5 py-2 border border-[#D0D5DD] rounded-xl ">
              Previous
            </button>

            <div className="flex justify-start items-center space-x-4">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => {
                return (
                  <span key={num} className="cursor-pointer">
                    {num}
                  </span>
                );
              })}
            </div>

            <button className="px-5 py-2 border border-[#D0D5DD] rounded-xl ">
              Next
            </button>
          </section>
        )}
      </div>
    </section>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return (
      <p className="text-red-500 md:text-xl font-extrabold">DRAW HAS ENDED</p>
    );
  } else {
    return (
      <div
        className={cn(
          "flex justify-start items-center  px-3 rounded-full",
          minutes < 5
            ? "bg-[#FEF3F2] text-[#B42318]"
            : "bg-[#ECFDF3] text-[#027A48]"
        )}
      >
        <PiTimerFill size={16} />
        <span className={` px-5 font-bold py-2`}>
          <div className=" ">
            <span className=" ">{days}d </span>:
            <span className=" ">{hours}h </span>:
            <span className=" ">{minutes}m </span>:
            <span className=" ">{seconds}s </span>
          </div>{" "}
        </span>
      </div>
    );
  }
};

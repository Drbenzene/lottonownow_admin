"use client";

import React, { useState } from "react";
import LottonownoButton from "@/components/buttons/LottonownoButton";
import AddEditGameModal from "@/components/modals/AddEditGameModal";
import LottonownowTable from "@/components/table/LottonownowTable";
import { useRouter } from "next/navigation";
const columns = [
  {
    Header: "Name",
    field: "name",
  },
  {
    Header: "Stake Amount",
    field: "units",
  },
  {
    Header: "Number Of Stakes",
    field: "amount",
  },
  {
    Header: "Winning Amount",
    field: "duration",
  },

  {
    Header: "Maturity Date",
    field: "targetDate",
  },
  {
    Header: "Status",
    field: "planStatus",
  },
];
function Page() {
  const [addNewGame, setAddNewGame] = useState(false);
  const { push } = useRouter();
  return (
    <div>
      <div className="flex justify-end items-end">
        <LottonownoButton title="Add Game" onClick={() => push("/games/add")} />
      </div>
      <AddEditGameModal open={addNewGame} setOpen={setAddNewGame} />

      <section>
        <p className="text-lg font-semibold text-center text-primary-100">
          Game Creation
        </p>
        <p className="text-sm font-normal text-center text-primary-100">
          Choose one of the category below to create a game{" "}
        </p>
      </section>
      <section className="my-10">
        <LottonownowTable
          title={"All Games"}
          subTitle={"These are the games that are on the platform"}
          columns={columns}
          data={[]}
          hideActions={false}
          loading={false}
        />
      </section>
    </div>
  );
}

export default Page;

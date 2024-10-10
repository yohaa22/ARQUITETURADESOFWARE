'use client';


import Model from "@/app/Model.js"
import View from "@/app/View.js";
import Presenter from "./presenter";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const presenter = new Presenter(
    new Model(),
    useSearchParams()
  )

  const data = presenter.execute()

  return (
    <main>
      <View
      name={data.name}
      rgm={data.rgm}
      job={data.jobDescription}
      />
      </main>
  );
}

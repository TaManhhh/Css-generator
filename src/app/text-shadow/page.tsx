"use client";
import React, { useState } from "react";
import TextController from "./TextController";
import { initialTextShadow } from "@/constants/box-shadow-values";

const TextShadow = () => {
  const [shadows, setShadows] = useState<any>([]);
  const [colorItem, setColorItem] = useState("#3d9df6");
  const [colorBg, setColorBg] = useState("#ffffff");
  const [data, setData] = useState(initialTextShadow);
  const handleColorItemChange = (e: any) => {
    setColorItem(e.target.value);
  };

  const handleColorBgChange = (e: any) => {
    setColorBg(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 max-w-[1100px] w-full">
      <div className="lg:grid lg:grid-cols-2 gap-4">
        <div className="bg-white border border-[#c4cdd5] ">
          <TextController
            setShadows={setShadows}
            data={data}
            setData={setData}
          />
        </div>
        <div className=" flex flex-col gap-4">
          <div className="border border-[#c4cdd5]">
            <div className="p-4 flex justify-between bg-white">
              <p> Preview</p>
              <div className=" flex gap-3">
                <input
                  type="color"
                  value={colorBg}
                  onChange={handleColorBgChange}
                />
                <input
                  type="color"
                  value={colorItem}
                  onChange={handleColorItemChange}
                />
              </div>
            </div>
            <div className="p-9 " style={{ background: colorBg }}>
              <div className="text-[80px]" >
                <p style={{ textShadow: shadows , color:colorItem}}>Helo SC</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 p-4 border border-[#c4cdd5]">
            <p className="text-[16px]">
              <b>CSS code</b>
            </p>
            <p className="text-[14px]">box-shadow: {shadows}</p>
          </div>
          <div className="flex flex-col gap-9 p-4 border border-[#c4cdd5]">
            <p className="text-[16px]">
              <b>Template</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextShadow;

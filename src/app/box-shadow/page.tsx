"use client";
import "./style.css";

import React, { useEffect, useState } from "react";
import ListItem from "@/components/ListItem/ListItem";
import BoxController from "./BoxController";
const BoxShadow = () => {
  const [shadows, setShadows] = useState<any>([]);
  const [colorItem, setColorItem] = useState("#3d9df6");
  const [colorBg, setColorBg] = useState("#ffffff");

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
          <BoxController setShadows={setShadows}/>
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
              <div
                className="w-[200px] h-[200px] "
                style={{ boxShadow:shadows, background: colorItem }}
              ></div>
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
            <div className="flex gap-3">
              <div className="w-[50px] h-[50px] bg-[#79dff1]"></div>
              <div className="w-[50px] h-[50px] bg-[#79dff1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;

"use client";
import ListItem from "@/components/ListItem/ListItem";
import { TextShadow } from "@/types/index.type";
import React, { useEffect, useState } from "react";
import "./style.css";
import { hexToRgba } from "../box-shadow/BoxController";
export interface updateTextShadow {
  setShadows: (s: any) => void;
  data: any;
  setData: React.Dispatch<React.SetStateAction<TextShadow[]>>;
}
const TextController = ({ setShadows, data, setData }: any) => {
  const [editData, setEditData] = useState<any>(null);
  const [formData, setFormData] = useState(data[0]);
  useEffect(() => {
    if (editData) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        shiftRight: editData.shiftRight,
        shiftDown: editData.shiftDown,
        spread: editData.spread,
        blur: editData.blur,
        opacity: editData.opacity,
        color: editData.color,
        inset: editData.inset,
        id: editData.id,
      }));
    } else {
      setEditData(data[0]);
    }
  }, [editData]);

  useEffect(() => {
    const boxShadowString = data
      .map((item: any) => {
        const { shiftRight, shiftDown, blur, color, opacity } = item;
        const colorWithOpacity = hexToRgba(color, opacity);
        const insetString = `${shiftRight}px ${shiftDown}px ${blur}px`;
        return ` ${insetString} ${colorWithOpacity}`;
      })
      .join(",");
    setShadows(boxShadowString);
  }, [data, formData]);

  const [count, setCount] = useState(1);
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedFormData);
    if (editData) {
      const updatedData = data.map((item: any) => {
        if (item.id === editData.id) {
          return { ...item, ...updatedFormData };
        }
        return item;
      });
      setData(updatedData);
    }
  };
  const handleAdd = () => {
    const newData: TextShadow = {
      id: count,
      shiftRight: 0,
      shiftDown: 19,
      blur: 7,
      opacity: 20,
      color: "#00000",
    };
    setData((prevData: any) => [...prevData, newData]);
    setCount(count + 1);
  };

  return (
    <div>
      <div className="p-[20px]">
        <div className="text-[16px] mb-[30px]">
          <b>Text shadow CSS Generator</b>
        </div>
        <div className="space-y-4 text-[14px]">
          <div className="flex  flex-col gap-2">
            <label htmlFor="shiftRight" className="w-1/3">
              Shift right
            </label>
            <input
              type="range"
              id="shiftRight"
              name="shiftRight"
              value={formData.shiftRight}
              min={-50}
              max={50}
              step={1}
              className=""
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.shiftRight}</span>
          </div>
          <div className="flex  flex-col gap-2">
            <label htmlFor="shiftDown" className="w-1/3">
              Shift down
            </label>
            <input
              type="range"
              id="shiftDown"
              name="shiftDown"
              value={formData.shiftDown}
              min={-50}
              max={50}
              step={1}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.shiftDown}</span>
          </div>

          <div className="flex  flex-col gap-2">
            <label htmlFor="blur" className="w-1/3">
              Blur
            </label>
            <input
              type="range"
              id="blur"
              name="blur"
              value={formData.blur}
              min={0}
              max={100}
              step={1}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.blur}</span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="opacity" className="w-1/3">
              Opacity
            </label>
            <input
              type="range"
              id="opacity"
              name="opacity"
              value={formData.opacity}
              min={0}
              max={100}
              step={1}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.opacity}</span>
          </div>

          <div className="">
            <input
              type="color"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#c4cdd5]" />
      <div className="px-[20px] pt-[20px]">
        <button
          onClick={handleAdd}
          className="bg-white text-black border border-[#c4cdd5] px-4 py-2 rounded-md"
        >
          Add Layer
        </button>
        <div className="py-4">
          {data.map((e: any , index:number) => (
            <ListItem
              key={e.id}
              shadow={e}
              formData={formData}
              data={data}
              setData={setData}
              setEditData={setEditData}
              type="text"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextController;
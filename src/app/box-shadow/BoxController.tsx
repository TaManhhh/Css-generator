import ListItem from "@/components/ListItem/ListItem";
import { initialBoxShadow } from "@/constants/box-shadow-values";
import { BoxShadow } from "@/types/index.type";
import React, { useEffect, useState } from "react";
 export function hexToRgba(hex:any, alpha :any) {
    const hexColor = hex.replace("#", "");
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
  }
export interface updateShadow {
  setShadows: (s: any) => void;
  //   id:number
}
const BoxController = ({ setShadows }: any) => {
  const [editData, setEditData] = useState<any>(null);

  const [data, setData] = useState(initialBoxShadow);

  const [formData, setFormData] = useState(initialBoxShadow[0]);

 
  
  useEffect(() => {
    if (editData) {
      setFormData((prevFormData) => ({
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
    }
  }, [editData]);

  useEffect(() => {
    const boxShadowString = data
      .map((item) => {
        const { shiftRight, shiftDown, blur, spread, color, opacity, inset } = item;
        const colorWithOpacity = hexToRgba(color,opacity)
        const insetString = inset
          ? `inset ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px `
          : `${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
        return ` ${insetString} ${colorWithOpacity}`;
      })
      .join(",");
  
    setShadows(boxShadowString);
  }, [data,formData]);
  

  const [count, setCount] = useState(1);
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedFormData);
    if (editData) {
      const updatedData = data.map((item) => {
        if (item.id === editData.id) {
          return { ...item, ...updatedFormData };
        }
        return item;
      });

      setData(updatedData);
    }
  };
  const handleAdd = () => {
    const newData: BoxShadow = {
      id: count,
      shiftRight: 0,
      shiftDown: 0,
      spread: 0,
      blur: 0,
      opacity: 0,
      color: "black",
      inset: false,
    };
    console.log("newData", newData);
    setData((prevData) => [...prevData, newData]);

    setCount(count + 1);
  };

  return (
    <div>
      <div className="p-[20px]">
        <div className="text-[16px] mb-[30px]">
          <b>Box-Shadow CSS Generator</b>
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
            <label htmlFor="spread" className="w-1/3">
              Spread
            </label>
            <input
              type="range"
              id="spread"
              name="spread"
              value={formData.spread}
              min={0}
              max={100}
              step={1}
              onChange={handleChange}
            />
            <span className="w-12 ml-2">{formData.spread}</span>
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
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="inset"
              name="inset"
              checked={formData.inset}
              onChange={handleChange}
            />
            <label htmlFor="inset" className="w-1/3">
              Inset
            </label>
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
        <div className="p-4">
          {data.map((e: any) => (
            <ListItem
              key={e.id}
              shadow={e}
              formData={formData}
              data={data}
              setEditData={setEditData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxController;

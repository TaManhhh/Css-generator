import { HolderOutlined, EditFilled, DeleteFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const ListItem = ({ shadow, formData, setEditData }: any) => {
  const handleEditClick = (item: any) => {
    setEditData(item);
  };
  const displayProperties = formData.id === shadow.id ? formData : shadow;
  const onDelete = async (item: any) => {};
  return (
    <div
      key={shadow.id}
      onClick={() => handleEditClick(shadow)}
      className={`flex justify-between p-3 ${
        formData.id === shadow.id
          ? "bg-[#404da0] text-[#fff]"
          : "bg-[#f0f0f0] text-[#000]"
      } mb-3 `}
    >
      <div className="flex gap-4">
        <div>
          <HolderOutlined style={{ fontSize: 25 }} />
        </div>
        <div>
          {`${displayProperties.shiftRight}px ${
            displayProperties.shiftDown
          }px ${
            displayProperties.blur !== undefined
              ? `${displayProperties.blur}px`
              : ""
          } ${displayProperties.spread}px ${displayProperties.opacity}px ${
            displayProperties.color
          }`}
        </div>
      </div>
      <div className="gap-2 flex">
        <button>
          <EditFilled style={{ fontSize: 20 }} />
        </button>
        <button>
          <DeleteFilled
            style={{ fontSize: 20 }}
            onClick={() => onDelete(shadow.id)}
          />
        </button>
      </div>
    </div>
  );
};

export default ListItem;

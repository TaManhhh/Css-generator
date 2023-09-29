import { HolderOutlined, EditFilled, DeleteFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const ListItem = ({
  shadow,
  formData,
  setEditData,
  data,
  setData,
  type,
}: any) => {
  const handleEditClick = (item: any) => {
    setEditData(item);
  };
  const displayProperties = formData?.id === shadow?.id ? formData : shadow;

  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
    setDraggedItemIndex(index);
  };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedItemIndex === null || draggedItemIndex === index) return;
    setDraggedItemIndex(index);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (draggedItemIndex === null) return;
    const targetIndex = Number(e.dataTransfer.getData("text/plain"));

    if (draggedItemIndex !== targetIndex) {
      const updatedData = [...data];
      const [draggedItem] = updatedData.splice(draggedItemIndex, 1);
      updatedData.splice(targetIndex, 0, draggedItem);
      setData(updatedData);
    }

    setDraggedItemIndex(null);
  };

  const onDelete = (id: number) => {
    const updatedData = data.filter((item: any) => item.id !== id);
    setData(updatedData);
  };
  return (
    <div
      draggable
      key={shadow?.id}
      onClick={() => handleEditClick(shadow)}
      onDragStart={(e) => onDragStart(e, shadow?.id)}
      onDragEnter={(e) => onDragEnter(e, shadow?.id)}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex justify-between p-3 cursor-move ${
        formData?.id === shadow?.id
          ? "bg-[#404da0] text-[#fff]"
          : "bg-[#f0f0f0] text-[#000]"
      } mb-3 `}
    >
      <div className="flex gap-4">
        <div>
          <HolderOutlined style={{ fontSize: 25 }} />
        </div>
        <div>
          {type === "box"
            ? displayProperties?.inset
              ? `inset ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.spread}px ${displayProperties?.opacity}px ${displayProperties?.color}`
              : ` ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.spread}px ${displayProperties?.opacity}px ${displayProperties?.color}`
            : `${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.opacity}px ${displayProperties?.color}`}
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

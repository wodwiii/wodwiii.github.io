"use client";
import { cn } from "@/app/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const handleItemClick = (item: any) => {
    setModalContent(
      <div>
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <div className="h-[30vh] w-auto relative">
          <Image
            src={item.header.props.src}
            alt=""
            style={{ objectFit: "contain" }}
            fill={true}
            className="mb-4"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.badges.map((badge: string, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="text-2xl text-[#778899]">
          <div className="mt-4 font-bold">{item.title}</div>
          <div className="my-4 text-lg">{item.description}</div>
        </div>
      </div>
    );
    setModalOpen(true);
  };
  return (
    <>
      <BentoGrid className="max-w-[80vw]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            badges={item.badges}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </BentoGrid>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </>
  );
}
const Modal = ({
  isOpen,
  onClose,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}) => {
  if (!isOpen) return null;
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-[90vw] lg:max-w-[70vw] w-full"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#778899] hover:text-gray"
        >
          &times;
        </button>
        {content}
      </div>
    </div>
  );
};

const items = [
  {
    title: "BillSmart",
    description: "An all-in-one billing system for managing electricity and water utilities, simplifying billing processes and improving accuracy.",
    header: (
      <Image
        src={"/smartbill.png"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["Thunkable", "NodeJS", "MongoDB", "ESP32"],
  },
  {
    title: "PowerGuard",
    description: "An energy-saving system that automatically turns off outlets and lights at specified times to reduce electricity consumption.",
    header: (
      <Image
        src={"/powerguard.jpg"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["Ionic", "NodeJS", "MongoDB", "ESP32"],
  },
  {
    title: "X1 Capture",
    description: "A software for X1 Technologies that monitors and captures activities on virtual machines, enhancing security and insights.",
    header: (
      <Image
        src={"/x1cap.jpg"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["C#", "WindowsForm"],
  },
  {
    title: "Clarity",
    description:
      "An AI-powered IDE extension that helps developers navigate codebases, speed up documentation, and learn coding faster.",
    header: (
      <Image
        src={"/clarity.jpg"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["Langchain", "Cohere", "FAISS", "OpenAI", "NodeJS", "VSCode"],
  },
  {
    title: "Illegal Logging Detection System",
    description:"This system uses TinyML to detect chainsaw sounds on edge devices, sending real-time notifications to combat illegal logging.",
    expanded:"This system uses TinyML to detect chainsaw sounds on edge devices, sending real-time notifications to combat illegal logging.",
    header: (
      <Image
        src={"/trees.jpg"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["C", "TinyML", "DSP", "RP2040", "C#"],
  },
  {
    title: "Trial Balance Generator",
    description: "A web app that automates ledger creation and trial balance generation, improving accuracy and efficiency for accountants.",
    header: (
      <Image
        src={"/tbl.png"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["NextJS", "NodeJS", "PostgreSQL", "Supabase"],
  },
  {
    title: "Smart Vendo Fridge",
    description: "A proof-of-concept system that innovates vending machines with smart technology, optimizing inventory and providing real-time data analytics.",
    header: (
      <Image
        src={"/fridge.jpg"}
        alt={""}
        style={{ objectFit: "cover" }}
        fill={true}
      />
    ),
    badges: ["Ionic", "C#", "NextJS", "NodeJS", "MongoDB", "Arduino"],
  },
];

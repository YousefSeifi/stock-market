"use client";

import { useState } from "react";
import {
  ReturnIcon,
  ShieldIcon,
  AuthenticityIcon,
} from "../../components/buttons/Icons";

const AccordionSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const sections = [
    {
      id: "return",
      title: "Return Policy",
      icon: <ReturnIcon className="w-4 h-4" />,
      content: (
        <>
          <p className="mb-3">
            StockX is a live marketplace, and the return policy will vary with
            each item. This item is return policy is as follows:
          </p>
          <div className="space-y-3">
            <div className="flex space-x-3">
              <ReturnIcon style={{ width: "1.5rem", height: "1.5rem" }} />
              <div>
                <p className="font-medium">
                  Eligible for return within 14 days.
                </p>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <svg
                style={{ width: "1.5rem", height: "1.5rem" }}
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M44.06 41.65H5.83002V20.18H44.06V41.65ZM8.08002 39.4H41.81V22.43H8.08002V39.4Z" />
                <path d="M24.94 37.09C28.3476 37.09 31.11 34.3276 31.11 30.92C31.11 27.5124 28.3476 24.75 24.94 24.75C21.5324 24.75 18.77 27.5124 18.77 30.92C18.77 34.3276 21.5324 37.09 24.94 37.09Z" />
                <path d="M39.91 14.26H9.98999V16.51H39.91V14.26Z" />
                <path d="M36.87 8.34998H13.01V10.6H36.87V8.34998Z" />
                <path d="M43.04 29.35C38.61 29.35 35 25.74 35 21.31H37.48C37.48 24.38 39.97 26.87 43.04 26.87V29.35Z" />
                <path d="M37.48 40.53H35C35 36.1 38.61 32.49 43.04 32.49V34.97C39.98 34.97 37.48 37.46 37.48 40.53Z" />
                <path d="M6.96002 29.35V26.87C10.03 26.87 12.52 24.38 12.52 21.31H15C15 25.74 11.39 29.35 6.96002 29.35Z" />
                <path d="M15 40.53H12.52C12.52 37.46 10.02 34.97 6.96002 34.97V32.49C11.39 32.49 15 36.09 15 40.53Z" />
              </svg>
              <div>
                <p className="font-medium">No Fee Resale</p>
                <p className="text-sm">
                  Don’t love it? Resell your purchase without any fees within 90
                  days of delivery.
                </p>
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "promise",
      title: "Buyer Promise",
      icon: <ShieldIcon className="w-4 h-4" />,
      content: (
        <>
          <p>
            We stand behind every product sold on StockX. If we make a mistake,
            well make it right.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm mt-2 inline-block"
          >
            Learn More
          </a>
        </>
      ),
    },
    {
      id: "process",
      title: "Our Process",
      icon: <AuthenticityIcon className="w-4 h-4" />,
      content: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-sm text-gray-500">Condition:</span>
            <span className="text-sm font-medium">New</span>
          </div>
          <p>
            This item is verified by StockX or Xpress ships directly from a
            StockX Verified Seller.
          </p>
          <p>
            Items verified by StockX are shipped from Sellers to our
            Verification Centers, where our global team of experts uses a
            rigorous, multi-step verification process.
          </p>
          <p>
            Items from StockX Verified Sellers are shipped directly from the
            Seller to you. Sellers in this program must meet StockX’s rigorous
            standards for accuracy, legitimacy and speed.
          </p>
          <p>
            And if a mistake is made, StockX will make it right through the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              StockX Buyer Promise.
            </a>
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm inline-block"
          >
            Learn More
          </a>
        </div>
      ),
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="border-t border-gray-200 mt-4">
      {sections.map((sec) => (
        <div key={sec.id} className="border-b">
          <button
            className="w-full flex justify-between p-4 font-medium"
            onClick={() => toggleAccordion(sec.id)}
          >
            <div className="flex items-center space-x-2">
              {sec.icon}
              <span>{sec.title}</span>
            </div>
            <span>{openAccordion === sec.id ? "-" : "+"}</span>
          </button>
          {openAccordion === sec.id && (
            <div className="p-4 text-sm">{sec.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;

"use client";

import React from 'react';

interface BenefitValue {
  value: boolean;
  note: string;
}

type BenefitCell = boolean | BenefitValue | string;

const BenefitsTable = () => {
  // Mobile-friendly comparison items for small screens
  const comparisonItems = [
    {
      benefit: "Secure Tenure for Life",
      sph: true,
      thaiSpv: true,
      thai30YearLease: { value: false, note: "*1" },
      thaiMultiTermLease: false,
      freehold: true
    },
    {
      benefit: "Rights to Rental Income",
      sph: true,
      thaiSpv: true,
      thai30YearLease: true,
      thaiMultiTermLease: true,
      freehold: true
    },
    {
      benefit: "Rights to Capital Gains",
      sph: true,
      thaiSpv: true,
      thai30YearLease: { value: false, note: "*2" },
      thaiMultiTermLease: { value: false, note: "*4" },
      freehold: true
    },
    {
      benefit: "Finance",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: false
    },
    {
      benefit: "Succession",
      sph: true,
      thaiSpv: true,
      thai30YearLease: { value: false, note: "*3" },
      thaiMultiTermLease: { value: false, note: "*3" },
      freehold: true
    },
    {
      benefit: "Tax Optimisation",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: false
    },
    {
      benefit: "Protection from Thai Insolvency",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: true
    },
    {
      benefit: "Protection from Personal Insolvency",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: false
    },
    {
      benefit: "Contractual Guarantee",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: true
    },
    {
      benefit: "Confidentiality",
      sph: true,
      thaiSpv: false,
      thai30YearLease: false,
      thaiMultiTermLease: false,
      freehold: false
    },
    {
      benefit: "Score out of 10",
      sph: "10/10",
      thaiSpv: "3/10",
      thai30YearLease: "1/10",
      thaiMultiTermLease: "2/10",
      freehold: "6/10"
    }
  ];

  // Function to render table cell content
  const renderCell = (value: BenefitCell) => {
    if (typeof value === 'boolean') {
      return value ? 
        <span className="text-green-600 font-bold">✓</span> : 
        <span className="text-red-600 font-bold">✘</span>;
    } else if (typeof value === 'object') {
      return (
        <span className="text-red-600 font-bold">
          ✘{value.note}
        </span>
      );
    } else {
      return value;
    }
  };

  return (
    <>
      {/* Desktop version (hidden on small screens) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="py-3 px-4 text-left">BENEFITS</th>
              <th className="py-3 px-4 text-center">SPH</th>
              <th className="py-3 px-4 text-center">Thai SPV</th>
              <th className="py-3 px-4 text-center">Thai 30-Year Lease</th>
              <th className="py-3 px-4 text-center">Thai Multi-Term Lease</th>
              <th className="py-3 px-4 text-center">Freehold</th>
            </tr>
          </thead>
          <tbody>
            {comparisonItems.map((item, index) => (
              <tr key={index} className={`border-b border-gray-200 hover:bg-gray-50 ${index === comparisonItems.length - 1 ? 'bg-gray-100 font-medium' : ''}`}>
                <td className="py-3 px-4 font-medium">{item.benefit}</td>
                <td className="py-3 px-4 text-center">{renderCell(item.sph)}</td>
                <td className="py-3 px-4 text-center">{renderCell(item.thaiSpv)}</td>
                <td className="py-3 px-4 text-center">{renderCell(item.thai30YearLease)}</td>
                <td className="py-3 px-4 text-center">{renderCell(item.thaiMultiTermLease)}</td>
                <td className="py-3 px-4 text-center">{renderCell(item.freehold)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile version (shown only on small screens) */}
      <div className="md:hidden">
        {comparisonItems.map((item, index) => (
          <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-900 text-white px-4 py-2 font-semibold">
              {item.benefit}
            </div>
            <div className="p-4 grid grid-cols-2 gap-y-3">
              <div className="font-medium">SPH:</div>
              <div className="text-right">{renderCell(item.sph)}</div>
              
              <div className="font-medium">Thai SPV:</div>
              <div className="text-right">{renderCell(item.thaiSpv)}</div>
              
              <div className="font-medium">Thai 30-Year Lease:</div>
              <div className="text-right">{renderCell(item.thai30YearLease)}</div>
              
              <div className="font-medium">Thai Multi-Term Lease:</div>
              <div className="text-right">{renderCell(item.thaiMultiTermLease)}</div>
              
              <div className="font-medium">Freehold:</div>
              <div className="text-right">{renderCell(item.freehold)}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p><span className="font-bold">*1:</span> Limited tenure/lease period.</p>
        <p><span className="font-bold">*2:</span> Limited potential for capital gain.</p>
        <p><span className="font-bold">*3:</span> Succession rights not guaranteed or complicated.</p>
        <p><span className="font-bold">*4:</span> Capital gains protection may vary or is restricted.</p>
      </div>
    </>
  );
};

export default BenefitsTable; 
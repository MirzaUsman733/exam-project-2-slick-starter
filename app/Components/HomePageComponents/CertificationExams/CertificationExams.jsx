"use client";
import Link from "next/link";
import { useState } from "react";
const examsData = [
  {
    name: "Developer Associate",
    image: "2",
    perma: "aws-certified-developer-associate-certification",
    vendor: "aws",
  },
  {
    name: "Solution Architect Associate",
    perma: "aws-certified-solutions-architect-associate-certification",
    image: "3",
    vendor: "aws",
  },
  {
    name: "Solution Architect Professional",
    perma: "aws-certified-solutions-architect-professional-certification",
    image: "6",
    vendor: "aws",
  },
  {
    name: "SysOps Administrator - Associate",
    perma: "aws-certified-sysops-administrator-associate-certification",
    image: "7",
    vendor: "aws",
  },

  {
    name: "Project Management Professional",
    perma: "pmp-certification",
    image: "9",
    vendor: "pmp",
  },
  {
    name: "ACP",
    perma: "pmi-acp",
    image: "10",
    vendor: "pmp",
  },
  {
    name: "CCNA",
    perma: "ccna",
    image: "11",
    vendor: "cisco",
  },
  {
    name: "CCNP - Enterprise",
    perma: "ccnp-enterprise",
    image: "12",
    vendor: "cisco",
  },
  {
    name: "CCIE - Enterprise Wireless",
    perma: "ccna-enterprise-wireless",
    image: "13",
    vendor: "cisco",
  },
  {
    name: "Azure Solutions Architect Expert",
    perma: "azure-solutions-architect-expert",
    image: "14",
    vendor: "microsoft",
  },
  {
    name: "Azure Fundamentals",
    perma: "azure-fundamentals",
    image: "15",
    vendor: "microsoft",
  },
  {
    name: "Enterprise Administrator - Expert",
    perma: "microsoft-365-certified-enterprise-administrator-expert",
    image: "16",
    vendor: "microsoft",
  },
  {
    name: "Azure Administrator - Associate",
    perma: "azure-administrator-associate",
    image: "17",
    vendor: "microsoft",
  },
  {
    name: "MCSA Windows Server 2016",
    perma: "mcsa-windows-server-2016",
    image: "18",
    vendor: "microsoft",
  },
  {
    name: "MCSE",
    perma: "mcse-microsoft-certified-solutions-expert",
    image: "20",
    vendor: "microsoft",
  },
  {
    name: "MCSA Web Applications",
    perma: "mcsa-web-applications",
    image: "21",
    vendor: "microsoft",
  },
  {
    name: "MCSA SQL 2016 Database Administration",
    perma: "mcsa-sql-2016-database-administration",
    image: "22",
    vendor: "microsoft",
  },
  {
    name: "MCSE Core Infrastructure",
    perma: "mcse-core-infrastructure",
    image: "23",
    vendor: "microsoft",
  },
  {
    name: "MCSE Productivity Solutions",
    perma: "mcse-productivity-solutions-expert",
    image: "24",
    vendor: "microsoft",
  },
  {
    name: "MCSE Data Management and Analytics",
    perma: "mcse-data-management-and-analytics",
    image: "25",
    vendor: "microsoft",
  },
  {
    name: "CompTIA CASP",
    perma: "cmcse-core-infrastructure",
    image: "26",
    vendor: "comptia",
  },
  {
    name: "CompTIA A+",
    perma: "comptia-a-plus-certification",
    image: "27",
    vendor: "comptia",
  },
  {
    name: "CompTIA Linux+",
    perma: "comptia-linux-plus-certification",
    image: "28",
    vendor: "comptia",
  },
  {
    name: "CompTIA Network+",
    perma: "comptia-network",
    image: "29",
    vendor: "comptia",
  },
  {
    name: "CompTIA Security+",
    perma: "comptia-security",
    image: "30",
    vendor: "comptia",
  },

  {
    name: "CCA-V Professional Virtualization",
    perma: "cca-v",
    image: "32",
    vendor: "citrix",
  },

  {
    name: "CCP-V Expert Virtualization",
    perma: "ccp-v-certification",
    image: "34",
    vendor: "citrix",
  },
  {
    name: "CISM",
    perma: "cism-certification",
    image: "35",
    vendor: "isaca",
  },
  {
    name: "CISSP",
    perma: "cissp-certification",
    image: "37",
    vendor: "isc",
  },
  {
    name: "Google Cloud Certified",
    perma: "google-cloud-certified",
    image: "38",
    vendor: "google",
  },
  {
    name: "Checkpoint CCSA R80",
    perma: "ccsa-r80",
    image: "39",
    vendor: "checkpoint",
  },
  {
    name: "CCSE R80",
    perma: "ccse-update",
    image: "40",
    vendor: "checkpoint",
  },
  {
    name: "CEH Certified Ethical Hacker",
    perma: "ceh-certification",
    image: "41",
    vendor: "eccouncil",
  },
  {
    name: "LPIC Level 1",
    perma: "lpic-level-1",
    image: "42",
    vendor: "lpi",
  },
  {
    name: "LPIC Level 2",
    perma: "lpic-level-2-certification",
    image: "43",
    vendor: "lpi",
  },
  {
    name: "LPIC Level 3",
    perma: "lpic-level-3-certification",
    image: "44",
    vendor: "lpi",
  },
  {
    name: "PCNSE",
    perma: "pcnse",
    image: "45",
    vendor: "poloalto-networks",
  },
  {
    name: "JNCIA Junos",
    perma: "jncia-junos-certification",
    image: "46",
    vendor: "juniper",
  },
  {
    name: "TOGAF 9 Certified",
    perma: "togaf-9-certified-certification",
    image: "47",
    vendor: "the-open-group",
  },
  {
    name: "VCAP6-DCV Design",
    perma: "vcap6-dcv-design",
    image: "48",
    vendor: "vmware",
  },
  {
    name: "VCP6.5-DCV",
    perma: "vcp6-5-dcv",
    image: "49",
    vendor: "vmware",
  },
];
const CertificationExams = () => {
  const [exams, setExams] = useState(examsData);
  const [selectedVendor, setSelectedVendor] = useState("");

  // Function to handle sorting exams
  const handleSort = (criteria) => {
    const sortedExams = [...exams].sort((a, b) =>
      a[criteria].localeCompare(b[criteria])
    );
    setExams(sortedExams);
  };

  // Function to handle filtering exams by vendor
  const handleFilterByVendor = (event) => {
    const vendor = event.target.value;
    const filteredExams =
      vendor === "all"
        ? examsData
        : examsData.filter((exam) => exam.vendor === vendor);
    setExams(filteredExams);
    setSelectedVendor(vendor);
  };

  const uniqueVendors = [...new Set(examsData.map((exam) => exam.vendor))];

  return (
    <>
      <div className="container mx-auto p-6 my-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl uppercase font-extrabold font-[poppins]">
            Certification Exams
          </h1>
        </header>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-800"
            onClick={() => handleSort("name")}
          >
            Sort by Name
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-800"
            onClick={() => handleSort("vendor")}
          >
            Sort by Vendor
          </button>
        </div>
        <div className="flex justify-center text-[lato] mb-8">
          <select
            className="p-2 rounded border"
            value={selectedVendor}
            onChange={handleFilterByVendor}
          >
            <option value="all">All Vendors</option>
            {uniqueVendors.map((vendor) => (
              <option className="text-gray-700" key={vendor} value={vendor}>
                {vendor}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {exams?.map((exam) => (
            <Link
              href={`/mock-exam-certification/${exam.vendor}/${exam?.perma}`}
              className="bg-white p-4 rounded-lg shadow-md"
              key={exam?.perma}
            >
              <img
                className="mx-auto h-24 w-auto"
                src={`/${exam?.image}.png`}
                alt={exam?.name}
              />
              <h2 className="text-md md:text-lg font-semibold text-center mt-4">
                {exam?.name}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Vendor: {exam?.vendor}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CertificationExams;

"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const VideoCoursesDetail = ({ section }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="space-y-4 mt-10 md:mt-20">
      {section.map((section) => (
        <div
          key={section.section_id}
          className="bg-white shadow-md rounded-md overflow-hidden px-4"
        >
          <Accordion
            expanded={expanded === `panel${section.section_id}`}
            onChange={handleChange(`panel${section.section_id}`)}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${section.section_id}` ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )
              }
              aria-controls={`panel${section.section_id}bh-content`}
              id={`panel${section.section_id}bh-header`}
              className="bg-blue-500 text-white"
            >
              <div className="flex flex-wrap justify-between items-center w-full">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {section.section_title}
                </Typography>
                <Typography variant="body2" className="me-3">
                  {section.secion_lectures} Lectures • {section.secion_duration}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <LectureList lectures={section.lectures} />
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
export default VideoCoursesDetail;

const LectureList = ({ lectures }) => {
  return (
    <div className="space-y-2">
      {lectures.map((lecture) => (
        <div
          key={lecture?.lecture_id}
          className="p-2 hover:bg-blue-100 rounded-md border-b last:border-b-0"
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
            {lecture.lecture_title}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ color: "text.secondary" }}
          >
            Duration: {lecture.lecture_duration}
          </Typography>
        </div>
      ))}
    </div>
  );
};

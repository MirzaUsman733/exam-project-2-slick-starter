"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ScAccessAccordian = ({ data }) => {
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
    setCurrentVideoIndex(0); // Reset to the first video when a lecture is selected
  };

  const handleTabChange = (event, newValue) => {
    setCurrentVideoIndex(newValue);
  };

  const handleCloseDialog = () => {
    setSelectedLecture(null);
    setCurrentVideoIndex(0);
  };

  return (
    <div className="bg-gray-100 py-8 px-4 space-y-6">
      {data?.sections.map((item, index) => {
        const { section_title, lectures } = item;
        return (
          <div key={index} className="rounded-lg shadow-lg bg-white p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {section_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lectures.map((lecture, index) => {
                const { lecture_seq, lecture_title, lecture_duration } =
                  lecture;
                return (
                  <div
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleLectureClick(lecture)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="mdi:video-outline"
                          width="1.5em"
                          height="1.5em"
                          className="text-blue-500"
                        />
                        <h3 className="text-lg font-medium text-blue-800">
                          {lecture_title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-600">
                        Lecture {lecture_seq}
                      </div>
                      <div>
                        {" "}
                        <span className="text-sm font-medium text-gray-500">
                          {lecture_duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {selectedLecture && (
        <Dialog
          open={!!selectedLecture}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              borderRadius: 16,
              backgroundColor: "#f4f4f5",
              padding: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              maxWidth: "70%",
              margin: "auto",
            },
          }}
          maxWidth="md"
          fullWidth
        >
          <div className="flex justify-between items-center">
            <DialogTitle className="text-gray-800 font-semibold text-xl">
              {selectedLecture?.lecture_title}
            </DialogTitle>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent>
            <Tabs
              value={currentVideoIndex}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              className="-mt-5"
            >
              {selectedLecture?.lecture_videos.map((video, index) => (
                <Tab key={index} label={`Server ${index + 1}`} />
              ))}
            </Tabs>
            <div className="mt-4">
              {selectedLecture?.lecture_videos.map((video, index) => (
                <div
                  key={index}
                  className={index === currentVideoIndex ? "" : "hidden"}
                >
                  <video
                    controls
                    width="100%"
                    height="80%"
                    className="rounded-lg border border-gray-300"
                  >
                    <source src={video.source} type={`video/${video.type}`} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ScAccessAccordian;

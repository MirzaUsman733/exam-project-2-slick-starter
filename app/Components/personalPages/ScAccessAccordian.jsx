"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ScAccessAccordian = ({ data }) => {
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
  };

  const handleVideoNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === selectedLecture?.lecture_videos.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleVideoPrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0
        ? selectedLecture?.lecture_videos.length - 1
        : prevIndex - 1
    );
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
                const { lecture_seq, lecture_title, lecture_duration } = lecture;
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
                      <span className="text-sm font-medium text-gray-500">
                        {lecture_duration}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">Lecture {lecture_seq}</div>
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
          className="rounded-xl"
          maxWidth="md"
          fullWidth
        >
          <DialogTitle className="bg-blue-600 text-white">
            {selectedLecture?.lecture_title} - Video ({currentVideoIndex + 1} /{" "}
            {selectedLecture?.lecture_videos.length})
          </DialogTitle>
          <DialogContent className="bg-gray-900">
            <div className="relative">
              {selectedLecture?.lecture_videos.map((video, index) => (
                <div
                  key={index}
                  className={`${
                    index === currentVideoIndex ? "" : "hidden"
                  } duration-700 ease-in-out`}
                >
                  <video controls width="100%" height="auto" className="rounded-lg">
                    <source src={video.source} type={`video/${video.type}`} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
              <button
                type="button"
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-800 p-2 rounded-full focus:outline-none"
                onClick={handleVideoPrev}
              >
                <Icon icon="mdi:chevron-left" width="1.5em" height="1.5em" />
              </button>
              <button
                type="button"
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-800 p-2 rounded-full focus:outline-none"
                onClick={handleVideoNext}
              >
                <Icon icon="mdi:chevron-right" width="1.5em" height="1.5em" />
              </button>
            </div>
          </DialogContent>
          <DialogActions className="bg-blue-500">
            <Button
              variant="contained"
              onClick={handleCloseDialog}
              className="bg-blue-500 hover:bg-blue-800 text-white"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default ScAccessAccordian;

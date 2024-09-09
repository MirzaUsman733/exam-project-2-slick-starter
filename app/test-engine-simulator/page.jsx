"use client";
import { Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";
import Banner from "../Components/Banner";
import Script from "../Components/scripts/Script";

function SectionComponent() {
  const points = [
    "Realistic exam simulation",
    "Several different question types",
    "Customizable exam taking mode",
    "Whole exam in a single file",
    "Open unlimited exam files",
    "No extra charges to use Test Engine (Totally FREE)",
  ];
  const images = [
    "/slide1_optimized.png",
    "/slide2_optimized.png",
    "/slide3_optimized.png",
    "/slide4_optimized.png",
    "/slide5_optimized.png",
    "/slide1_optimized.png",
  ];

  return (
    <div className="container mx-auto p-6">
      <Script />
      <Banner />
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          className="text-3xl text-center font-semibold text-gray-800"
        >
          Download FREE Dumps-Collection Exam Test Engine Simulator
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        className="bg-gray-100 p-5 rounded-lg shadow-lg"
      >
        <Box flex={1} p={2}>
          <Typography
            variant="h4"
            gutterBottom
            className="text-xl font-semibold text-gray-800"
          >
            Use Dumps-Collection Test Engine to open .Dumps-Collection files
          </Typography>
          <Typography paragraph className="text-base text-gray-600">
            An exam testing engine for certification exam preparation. Take
            exams that are just like the real thing.
          </Typography>
          <List className="list-decimal space-y-2">
            {points.map((point, index) => (
              <ListItem key={index} className="text-gray-700 flex gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.58 17.25l.92-3.89l-3-2.58l3.95-.37L12 6.8l1.55 3.65l3.95.33l-3 2.58l.92 3.89L12 15.19zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"
                  ></path>
                </svg>
                {point}
              </ListItem>
            ))}
          </List>
          <Grid container spacing={1} justifyContent="center" className="mt-4">
            <Grid item>
              <Link
                href="https://releases.examprince.com/ExamPrinceTestEngine.exe"
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md text-white flex gap-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
                  ></path>
                </svg>
                Download For Windows (exe)
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={
                  "https://releases.examprince.com/ExamPrinceTestEngine.zip"
                }
                className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md text-white flex gap-1 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
                  ></path>
                </svg>
                Download For Windows (zip)
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box flex={1} p={2}>
          <Paper elevation={4} className="relative overflow-hidden rounded-lg">
            <Carousel indicators={false} className="h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ))}
            </Carousel>
          </Paper>
          <p className="text-center mt-5">version 2.0.15</p>
          <p className="text-center text-blue-600">
            (required Win 8, Win 8.1 or Win 10)
          </p>
        </Box>
      </Box>
    </div>
  );
}

export default SectionComponent;

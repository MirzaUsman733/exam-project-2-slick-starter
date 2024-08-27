import Avatar from "@mui/material/Avatar";
import he from "he";
import React from "react";
const CommentCard = ({ name, location, date, content }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const decodeHtml = (html) => {
    return he.decode(html);
  };
  const decodedHtml = decodeHtml(content);

  return (
    <div
      className="rounded-2xl"
      style={{
        boxShadow: "1px 3px 5px 5px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="bg-blue-500 text-white py-4 px-3 mb-3 flex justify-between rounded-t-2xl items-center">
        <div className="font-bold flex items-center gap-3 relative">
          <Avatar sx={{ bgcolor: "#1877F2" }}>{getInitial(name)}</Avatar>
          <span className="mx-2 h-full border-l border-white"></span>
          {name}
        </div>
        <div className="font-bold">({location})</div> <div>{formattedDate}</div>
      </div>
      <div
        className="px-3 py-2 text-lg"
        dangerouslySetInnerHTML={{ __html: decodedHtml }}
      />
    </div>
  );
};

export default CommentCard;

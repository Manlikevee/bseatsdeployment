import React, {useEffect, useState} from "react";
import ArticleFrame1 from "../assets/New&InsightsRead/article1img.svg";
import ArticleFrame2 from "../assets/New&InsightsRead/article2img.svg";
import ArticleFrame3 from "../assets/New&InsightsRead/article3img.svg";
import UpArrow from "../assets/New&InsightsRead/arrowUp.svg";
import {useParams} from "react-router-dom";
import axios from "axios";

const DynamicText = () => {
  const { id } = useParams(); // Get the path parameter 'id'
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog post using the ID from the URL
    axios.get(`/api/blogs/${id}`)
        .then(response => {
          setBlog(response);
        })
        .catch(error => {
          console.error('Error fetching blog:', error);
        });
  }, [id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }


  return (
      // <p className="text-[#424243]">
        <React.Fragment>
          <div className="">
            <img src={blog.headerImg} alt="" className="w-full mb-10"/>
            <h4 className="text-[45px] text-[#2D3748] font-bold">
              {blog.title}
            </h4>
            <div className="flex">
              <p className="text-[#718096]">{blog.createDate}</p>
            </div>
            <hr className="my-10"/>
            {blog.content}
          </div>
        </React.Fragment>
      // </p>
  );
};

const NewsandInsightsRead = () => {
  return (
      <div className="px-[20px] lg:px-28 relative">
        <DynamicText/>
        <div className="pt-20 pb-40">
          <h4 className="text-[#BD0B20] text-[32px]">Related Articles</h4>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="w-[372px] flex-grow shadow-custom-shadow">
              <img src={ArticleFrame1} alt="" className="w-full"/>
              <div className="px-5 pt-3 pb-6 flex flex-col justify-center">
                <h4 className="text-[29px] font-semibold text-[#424243] mb-2">
                  long established
                </h4>
                <p className="text-[#424243] text-[14px] mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is thatpage when looking at its
                  layout. The point of using page when looking at its layout. The
                  point of using ....
                </p>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-[#424243CC]">May 20th 2022</p>
                  <button className="text-[#A91F2F]">Read more</button>
                </div>
              </div>
            </div>
            <div className="w-[372px] flex-grow shadow-custom-shadow">
              <img src={ArticleFrame2} alt="" className="w-full" />
              <div className="px-5 pt-3 pb-6 flex flex-col justify-center">
                <h4 className="text-[29px] font-semibold text-[#424243] mb-2">
                  long established
                </h4>
                <p className="text-[#424243] text-[14px] mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is thatpage when looking at its
                  layout. The point of using page when looking at its layout. The
                  point of using ....
                </p>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-[#424243CC]">May 20th 2022</p>
                  <button className="text-[#A91F2F]">Read more</button>
                </div>
              </div>
            </div>
            <div className="w-[372px] flex-grow shadow-custom-shadow">
              <img src={ArticleFrame3} alt="" className="w-full" />
              <div className="px-5 pt-3 pb-6 flex flex-col justify-center">
                <h4 className="text-[29px] font-semibold text-[#424243] mb-2">
                  long established
                </h4>
                <p className="text-[#424243] text-[14px] mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is thatpage when looking at its
                  layout. The point of using page when looking at its layout. The
                  point of using ....
                </p>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-[#424243CC]">May 20th 2022</p>
                  <button className="text-[#A91F2F]">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
            src={UpArrow}
            alt=""
            className="absolute right-10 bottom-10 cursor-pointer"
        />
      </div>
  );
};

export default NewsandInsightsRead;

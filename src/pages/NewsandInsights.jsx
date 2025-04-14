import React, {useEffect, useState} from "react";
import axios from "axios";
import Insightlayout from "../components/Insightlayout";
import { Link } from "react-router-dom";


const NewsandInsights = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch the 7 most recent blogs
        axios.get('http://localhost:8080/api/blogs/recent')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);

    if (blogs.length === 0) {
        return (
            // <div>
            //     <div className="news relative h-[553px] overflow-hidden grid place-items-center">
            //         <div className="w-full h-full bg-[#0000004A] z-0 absolute top-0"></div>
            //         <div className="relative z-10 text-center text-white">
            //             <h3 className="text-[45px] lg:text-[64px] font-semibold">
            //                 Exclusive Insights for our community
            //             </h3>
            //             <p>
            //                 Get periodic updates and announcements on board opportunities,
            //                 governance insights and news.
            //             </p>
            //         </div>
            //     </div>
            //     <div className="py-28 px-[20px] lg:px-24 flex justify-center flex-col items-center">
            //         <div className="px-[20px] text-center pt-20 pb-40 flex flex-col items-center justify-center">
            //             <p className="text-[24px] text-[#424243]">
            //                No blog posts yet!
            //             </p>
            //             <p>
            //                 Stay Connected.{" "}
            //                 <a href={"/"}><span className="text-[#A91F2F]">Back to home page</span></a>
            //             </p>
            //         </div>
            //     </div>
            // </div>
            <>
            <Insightlayout>

<>
  <div className="abouthero">
    <div className="aboutheroimg">
      <div className="blogsec">
        <h1>Exclusive Insights for our community</h1>
        <div className="aboutheroimgbody">
        A few years ago, Amazon came under fire after its Board opposed a
            shareholder proposal to increase its (the Board’s) diversity. The
            proposal would require the Board to consider women and minority
            candidates..
        </div>
      </div>
    </div>
  </div>
  <section className="blogsec">
    &nbsp;
    <div className="established">
      <div
        className="offercard"
        style={{ textAlign: "start !important", alignItems: "initial" }}
      >
        <div className="offercardimg">
          <img alt="" src="https://boardseats.io/documents/20121/0/aPicture1.png/" />
        </div>
        <div className="offertxt">
          <div className="offerheader" style={{ textAlign: "start" }}>
          Setting Up Your First Board
          </div>
          <div className="offercardcontentbody" style={{ textAlign: "start" }}>
          A few years ago, Amazon came under fire after its Board opposed a
            shareholder proposal to increase its (the Board’s) diversity. The
            proposal would require the Board to consider women and minority
            candidates for director positions..
          </div>
          <div className="readmoreabt" style={{ marginTop: 20 }}>
            <span className="datemore">November 2024</span>{" "}
            <a
              className="redread"
              href="https://docsend.com/view/yptmukuq58m4cmfx"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    &nbsp;
    <div className="offergridcard">
    <div
        className="offercard"
        style={{ textAlign: "start !important", alignItems: "initial" }}
      >
        <div className="offercardimg">
          <img
            alt=""
            src="https://boardseats.io/documents/20121/0/aPicture1.png/"
            loading="eager"
          />
        </div>
        <div className="offerheader" style={{ textAlign: "start",  marginRight:'40%'}}>
        Setting Up Your First Board
        </div>
        <div className="offercardcontentbody" style={{ textAlign: "start" }}>
        Constituting a governance board is a critical step in establishing a robust corporate governance structure for any corporate or operational..
        </div>
        <div className="readmoreabt" style={{ marginTop: 20 }}>
          <span className="datemore">November 2024</span>{" "}
          <a className="redread" href="https://docsend.com/view/yptmukuq58m4cmfx">
            Read more
          </a>
        </div>
      </div>
      <div
        className="offercard"
        style={{ textAlign: "start !important", alignItems: "initial" }}
      >
        <div className="offercardimg">
          <img
            alt=""
            src="https://boardseats.io/documents/20121/0/room.jpg/"
            loading="eager"
          />
        </div>
        <div className="offerheader" style={{ textAlign: "start" }}>
        High Impact Strategic Recruitment
        </div>
        <div className="offercardcontentbody" style={{ textAlign: "start" }}>
        A few years ago, Amazon came under fire after its Board opposed a shareholder proposal to increase its (the Board’s) diversity.. 
        </div>
        <div className="readmoreabt" style={{ marginTop: 20 }}>
          <span className="datemore">Oct 20th 2024</span>{" "}
          <a className="redread" href="https://docsend.com/view/jyyf2cy8d27c4tcx">
            Read more
          </a>
        </div>
      </div>
      <div
        className="offercard"
        style={{ textAlign: "start !important", alignItems: "initial" }}
      >
        <div className="offercardimg">
          <img
            alt=""
            src="https://boardseats.io/documents/20121/0/boardseat-linkedin-img%281%29.jpg/"
          />
        </div>
        <div className="offerheader" style={{ textAlign: "start" }}>
          Driving Modern Governance through Technology
        </div>
        <div className="offercardcontentbody" style={{ textAlign: "start" }}>
          Thanks to digitisation and fingertip connectivity, the world has
          become a far more interwoven and interdependent place..
        </div>
        <div className="readmoreabt" style={{ marginTop: 20 }}>
          <span className="datemore">May 20th 2022</span>{" "}
          <a className="redread" href="/modern-governance">
            Read more
          </a>
        </div>
      </div>
    </div>
  </section>
</>

            </Insightlayout>
            
            </>
        );
    }

    // The most recent blog will be the first in the list
    const currentBlog = blogs[0];
    //
    // const getImageSrc = (base64String, type = 'jpeg') => {
    //   // Prefix with data URI for proper display in <img>
    //   return `data:image/${type};base64,${base64String}`;
    // };

    return (
        <div>
            <div className="news relative h-[553px] overflow-hidden grid place-items-center">
                <div className="w-full h-full bg-[#0000004A] z-0 absolute top-0"></div>
                <div className="relative z-10 text-center text-white">
                    <h3 className="text-[45px] lg:text-[64px] font-semibold">
                        Exclusive Insights for our community
                    </h3>
                    <p>
                        Get periodic updates and announcements on board opportunities,
                        governance insights and news.
                    </p>
                </div>
            </div>
            {/* <div className="py-28 px-[20px] lg:px-24 flex justify-center flex-col items-center">
                <div className="established">
                    <div className="offercard" style={{ textAlign: 'start', alignItems: 'initial' }}>
                        <div className="offercardimg">
                            <img alt="" src={currentBlog.thumbnailImg}/>
                        </div>
                        <div className="offertxt">
                            <div className="offerheader" style={{ textAlign: 'start'}}>{currentBlog.title}
                            </div>
                            <div className="offercardcontentbody" style={{ textAlign: 'start'}}>
                                {currentBlog.summary}
                            </div>
                            <div className="readmoreabt" style={{marginTop: '20px'}}>
                                <span className="datemore">{currentBlog.createdDate}</span>
                                <a href={currentBlog.readMoreLink} className="redread">Read more</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-10 flex gap-1">
                    <div className="w-[6px] h-[6px] rounded-full bg-[#A91F2F]"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4242431A]"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-[#4242431A]"></div>
                </div>
            </div>
            <div className="px-[20px] lg:px-24 pb-28">
                <div className="flex flex-wrap justify-center gap-10">
                    {blogs.slice(1).map(blog => (
                    <div className="w-[372px] shadow-custom-shadow">
                        <img src={blog.thumbnailImg} alt="" className="w-full"/>
                        <div className="px-5 pt-3 pb-6 flex flex-col justify-center">
                            <h4 className="text-[29px] font-semibold text-[#424243] mb-2">
                                {blog.title}
                            </h4>
                            <p className="text-[#424243] text-[14px] mb-6">
                                {blog.summary}
                            </p>
                            <div className="flex justify-between items-center text-sm">
                                <p className="text-[#424243CC]">{blog.createdDate}</p>
                                <button className="text-[#A91F2F]">Read more</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div> */}

            
        </div>
    );
};

export default NewsandInsights;

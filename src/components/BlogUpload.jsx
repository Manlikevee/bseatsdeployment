// @ts-ignore
import React, {useState} from 'react';
import axios from 'axios';

const BlogUpload = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnailImg, setThumbnailImg] = useState('');
    const [headerImg, setHeaderImg] = useState('');
    const [summary, setSummary] = useState('');
    const [readMore, setReadMore] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    const handleUpload = (e) => {
        e.preventDefault();

        // Construct the blog object
        const blogData = {
            title,
            content,
            thumbnailImg,
            headerImg,
            summary,
            readMore,
            createdDate
        };

        // Send the blog data to the backend
        axios.post('http://localhost:99/api/blogs/create', blogData)
            .then(response => {
                alert('BlogAdmin uploaded successfully');
                // Clear the form after successful upload
                setTitle('');
                setContent('');
                setThumbnailImg('');
                setHeaderImg('');
                setSummary('');
                setReadMore('');
                setCreatedDate('');
            })
            .catch(error => {
                console.error('Error uploading blog:', error);
                alert('Error uploading the blog');
            });
    };

    // Function to handle image upload as base64
    const handleImageUpload = (setter) => (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setter(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative">
            <div className="contact relative h-[350px] overflow-hidden flex justify-center items-center">
                {/* <img src={ContactHeader} alt="" className="w-full absolute -z-10" /> */}
                <div className="h-full w-full absolute top-0 bg-[#0000004A] z-0"></div>
                <h4 className="text-white text-[64px] z-10">BlogAdmin Admin</h4>
            </div>
            <div className="pt-40 pb-10 px-5 flex justify-center">
                <div
                    className="flex flex-col lg:flex-row shadow-custom-shadow w-full md:w-[70%] lg:w-max relative -top-60">
                    <div className="p-[30px] lg:p-10 bg-white rounded-t-[10px] lg:rounded-t-none lg:rounded-tl-[10px] w-[1000px] ">
                        <div className="flex flex-wrap justify-between items-center mb-5">
                            <h4 className="text-[24px] sm:text-[32px] text-[#424243] font-semibold">
                                Upload New Blog
                            </h4>
                        </div>
                        <form onSubmit={handleUpload}>
                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-3">
                                        Title <span className="text-[#A91F2F]">*</span>
                                    </label>
                                    <input
                                        className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                        type="text"
                                        placeholder="BlogAdmin Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-3">
                                    Created Date <span className="text-[#A91F2F]">*</span>
                                </label>
                                <input
                                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                    type="text"
                                    placeholder="Created Dae"
                                    value={createdDate}
                                    onChange={e => setCreatedDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-3">
                                    Summary <span className="text-[#A91F2F]">*</span>
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[158.86px] w-full resize-none"
                                    placeholder="BlogAdmin Summary"
                                    value={summary}
                                    onChange={e => setSummary(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-3">
                                    Read More Link <span className="text-[#A91F2F]">*</span>
                                </label>
                                <input
                                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                    type="text"
                                    placeholder="Read More"
                                    value={readMore}
                                    onChange={e => setReadMore(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="" className="mb-3">
                                    Content <span className="text-[#A91F2F]">*</span>
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[500px] w-[500px] resize-none"
                                    placeholder="BlogAdmin Content (HTML)"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-3">
                                        Thumbnail Image <span className="text-[#A91F2F]">*</span>
                                    </label>
                                    <input
                                        className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload(setThumbnailImg)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <p>Thumbnail Image Preview:</p>
                                    {thumbnailImg && <img src={thumbnailImg} alt="Thumbnail Preview" width="100px"/>}
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-3">
                                        Header Image <span className="text-[#A91F2F]">*</span>
                                    </label>
                                    <input
                                        className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload(setHeaderImg)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <p>Header Image Preview:</p>
                                    {headerImg && <img src={headerImg} alt="Header Preview" width="200px"/>}
                                </div>
                            </div>
                            <button
                                className="uppercase h-[60px] w-full sm:w-[250px] bg-[#A91F2F] text-white rounded-[5px] mt-10"
                                type="submit">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogUpload;

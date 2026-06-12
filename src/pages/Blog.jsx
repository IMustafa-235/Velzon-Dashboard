import React, {useContext} from 'react'
import { LayoutChangeContext } from "../context/LayoutChange";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import SiteVisitorChart from "./../components/SiteVisitorChart"
import { TbDotsVertical } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { RiGoogleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import UsedDeviceChart from "./../components/UsedDeviceChart"
import { CiYoutube } from "react-icons/ci";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { RiArrowRightLongLine } from "react-icons/ri";
import img_2 from "./../assets/n_m_2.png";
import img_3 from "./../assets/n_m_3.png";
import img_6 from "./../assets/sfaf.png";
import recent_article_img_no_1 from "./../assets/recent_article_img_no_1.jpg"
import recent_article_img_no_2 from "./../assets/recent_article_img_no_2.jpg"
import recent_article_img_no_3 from "./../assets/recent_article_img_no_3.jpg"
import recent_article_img_no_4 from "./../assets/recent_article_img_no_4.jpg"
import recent_article_img_no_5 from "./../assets/recent_article_img_no_5.jpg"
import img_1 from "./../assets/avatar-1.jpg"


const Blog = () => {
    const { layout } = useContext(LayoutChangeContext);
    const blog_sec1_data = [
        {
            id:1,
            icon: <FiUsers size={23}/>,
            num: "17.6k",
            text: "Followers",
        },
        {
            id:2,
            icon: <FiFileText size={23}/>,
            num: "149",
            text: "Total Post",
        },
        {
            id:3,
            icon: <FaRegHeart size={23}/>,
            num: "24.8k",
            text: "Likes",
        },
        {
            id:4,
            icon: <LuChartNoAxesColumnIncreasing size={23}/>,
            num: "54.3k",
            text: "Views",
        },
    ]
    const top_social_media_shares = [
      {
        id:1,
        icon: <IoLogoFacebook size={18} color='#405189'/>,
        text: "Facebook",
        value: "32k",
      },
      {
        id:2,
        icon: <RiGoogleLine  size={18} color='#f06548'/>,
        text: "Google",
        value: "13k",
      },
      {
        id:3,
        icon: <FaWhatsapp  size={18} color='#0ab39c'/>,
        text: "WhatsApp",
        value: "11k",
      },
      {
        id:4,
        icon: <RiLinkedinBoxLine  size={18} />,
        text: "Invision",
        value: "19k",
      },
      {
        id:5,
        icon: <FaInstagram  size={18} color='#f06548'/>,
        text: "Instagram",
        value: "18k",
      },
      {
        id:6,
        icon: <FaTelegramPlane  size={18} color='#299cdb'/>,
        text: "Telegram",
        value: "26k",
      },
      {
        id:7,
        icon: <CiYoutube  size={18} color='#3577f1'/>,
        text: "Youtube",
        value: "9k",
      },
    ]
    const recent_comment = [
      {
        id:1,
        img: img_6,
        name: "Diana Kohler",
        comment: "Really well-written and informative. The emotional connection strategy is something I’ll be testing out more!",
      },
      {
        id:2,
        img: img_2,
        name: "Tonya Noble",
        comment: "Incredibly helpful tips, especially about adding a call to action. I’ve been missing that step and will implement it in my next post!",
      },
      {
        id:3,
        img: img_3,
        name: "Donald Palmer",
        comment: "Fantastic read! The power of visuals and trends really stood out to me. Thanks for sharing these useful insights!",
      },
      {
        id:4,
        img: img_3,
        name: "Donald Palmer",
        comment: "Fantastic read! The power of visuals and trends really stood out to me. Thanks for sharing these useful insights!",
      },
      {
        id:6,
        img: img_3,
        name: "Donald Palmer",
        comment: "Fantastic read! The power of visuals and trends really stood out to me. Thanks for sharing these useful insights!",
      },
      {
        id:7,
        img: img_3,
        name: "Donald Palmer",
        comment: "Fantastic read! The power of visuals and trends really stood out to me. Thanks for sharing these useful insights!",
      },
    ]
    const recent_article_data = [
      {
        id:1,
        no: "01",
        img: recent_article_img_no_1,
        tittle: "The Evolution of Minimalism in Design",
        post_date: "20 Sep, 2024",
        category: "MinimalDesign",
        comment: 23,
        like: 157,
        shared: 11,
        viewers: 2149,
      },
      {
        id:2,
        no: "02",
        img: recent_article_img_no_2,
        tittle: "Mastering User Experience Through Storytelling",
        post_date: "11 Feb, 2024",
        category: "UXDesign",
        comment: 547,
        like: 1458,
        shared: 317,
        viewers: 34978,
      },
      {
        id:3,
        no: "03",
        img: recent_article_img_no_3,
        tittle: "Designing for Purpose: A Mindful Approach",
        post_date: "15 Sep, 2024",
        category: "CreativeProcess",
        comment: 88,
        like: 649,
        shared: 237,
        viewers: 1982,
      },
      {
        id:4,
        no: "04",
        img: recent_article_img_no_4,
        tittle: "How to Overcome Creative Block",
        post_date: "09 July, 2024",
        category: "CreativeBlock",
        comment: 67,
        like: 1114,
        shared: 1547,
        viewers: 15747,
      },
      {
        id:5,
        no: "05",
        img: recent_article_img_no_5,
        tittle: "Building Brand Identity through Design",
        post_date: "19 Nov, 2024",
        category: "BrandDesign",
        comment: 8,
        like: 10,
        shared: 7,
        viewers: 110,
      },
    ]
    const project_last_data = [
      {
        id:1,
        text: "Total Post",
        value: "26",
      },
      {
        id:2,
        text: "Subscribe",
        value: "17k",
      },
      {
        id:3,
        text: "Viewers",
        value: "487k",
      },
    ]
  return (
    <div className='analytics-main-bg'>
      <div className={`${layout === "horizontal" ? "container" : ""}`}>
      <div
          className={`d-flex justify-content-between flex-lg-row gap-2 gap-lg-0 px-4 pages-1-section align-items-center py-2 ${
            layout === "horizontal" ? "" : "shadow-sm"
          }`}
          style={{
            backgroundColor: layout === "horizontal" ? "transparent" : "",
          }}
        >
          <p className="mb-0 fw-semibold analytic-text-1-sec">BLOG</p>
          <div
            className="d-flex algin-items-center gap-2"
            style={{ fontSize: "13.8px" }}
          >
            <p className="mb-0 d-n-t">Dashboard</p>
            <p className="mb-0 a-s-1-l-t">
              <MdOutlineKeyboardArrowRight />
            </p>
            <p className="mb-0 a-s-1-l-t">Blog</p>
          </div>
        </div>
        <div className='d-flex py-4 px-4 gap-4 flex-column flex-lg-row'>
            <div className='d-flex flex-column justify-content-center gap-4 blog-sec1-p1'>
                <div className='d-flex gap-4 flex-column flex-lg-row'>
                    {
                        blog_sec1_data.map((item)=>{
                            return <div key={item.id} className='shadow-sm rounded-1  p-3 d-flex align-items-center gap-3 takreeban-bg mfajfa'>
                            <div className={`rounded-1 d-flex align-items-center justify-content-center ${item.id===1? "nfajfmvo": ""} ${item.id===2? "nifafanf": ""} ${item.id===3?"anoapjfa":""} ${item.id===4?"jfajfafan" : ""}`} style={{padding:"10px 12px"}}>
                                {item.icon}
                            </div>
                            <div className='d-flex flex-column gap-2'>
                                <p className='mb-0 home-sec-2-box-h5'>{item.num}</p>
                                <p className='mb-0' style={{fontSize:"13px", color:"#878a99"}}>{item.text}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
                <div className='d-flex flex-column flex-lg-row gap-4'>
                  <div className='fafjaf0a takreeban-bg py-2 shadow-sm rounded-1'>
                  <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Site Visitors</h6>
              <div style={{ fontSize: "13.2px", color: "#878a99" }}>
                <span className="fw-semibold">SORT BY: </span>
                Current Week <MdKeyboardArrowDown />
              </div>
            </div>
            <div className='px-2'>
              <SiteVisitorChart/>
            </div>
                  </div>
                  <div className='takreeban-bg py-2 shadow-sm rounded-1 mfajajvm'>
                  <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Top Social Media Shares</h6>
              <span
                className="d-flex align-items-center gap-1"
                style={{ fontSize: "13.2px", color: "#878aa6" }}
              >
                <TbDotsVertical size={15} />
              </span>
            </div>
            <div className='d-flex flex-column gap-2 justify-content-center px-3 pt-3 pb-2'>
              {
                top_social_media_shares.map((item)=>{
                  return <div key={item.id} className="d-flex align-items-center justify-content-between">
                  <div className='d-flex align-items-center gap-2'>
                    <div className={`d-flex align-items-center justify-content-center p-2 rounded-1 ${item.text==="Google" || item.text ==="Instagram"? "stuck-status" : ""} ${item.text==="WhatsApp"? "anaongavon" : ""} ${item.text==="Telegram"? "aajfajva": ""} ${item.text==="Youtube"? "aoifjavoa" : ""} ${item.text==="Invision"? "qjFNJVA" : ""} ${item.text === "Facebook"? "faFOA" : ""}`}>
                      {item.icon}
                    </div>
                    <p className='mb-0' style={{fontSize:"14px"}}>{item.text}</p> 
                  </div>
                  <div>
                    <p className='mb-0' style={{fontSize:"13.5px"}}>{item.value}</p>
                  </div>
                </div>
                })
              }
            </div>
                  </div>
                </div>
            </div>
            <div className='takreeban-bg shadow-sm rounded-1 blog_sec1_p2 products_scrollbar'>
                  <div className="d-flex align-items-center justify-content-between py-2 px-3 b-a pb-2">
              <p className="mb-0">Recent Comment</p>
              <button className="export-report-btn rounded-1">
                View All
              </button>
            </div>
            <div className='d-flex flex-column justify-content-center gap-3 py-3 px-3'>
              {
                recent_comment.map((item)=>{
                  return <div key={item.id} className='d-flex align-items-start gap-3'>
                  <div>
                    <img src={item.img} width={48} className='rounded-1' alt="" />
                  </div>
                  <div className='d-flex flex-column justify-content-center'>
                    <p className='mb-0' style={{fontSize:"13px", color:"#495057", fontWeight:"500"}}><span className='home-sec-2-box-h5'>{item.name}</span><span style={{color:"#9099a8"}}> Has</span></p>
                    <span style={{fontSize:"13px", color:"#9099a8", fontWeight:"500"}}>commented</span>
                    <p className='mb-0' style={{color:"#878a99", fontSize:"13px", marginTop:"5px"}}>
                    " {item.comment} "
                    </p>
                  </div>
                </div>
                })
              }
            </div>
           </div>
        </div>
        <div className='d-flex flex-column flex-lg-row gap-4 px-4 pb-4 align-items-start'>
        <div className="takreeban-bg py-2 shadow-sm rounded-1 nfafajoa">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3 py-2">
              <h6 className="mb-0 source-chart-h6">Recent Article</h6>
              <div style={{ fontSize: "13.2px", color: "#878a99" }}>
                <span className="fw-semibold">SORT BY: </span>
                Popular <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="overflow-x-auto products_scrollbar">
              <table className="table deal-status-table project-famjfa align-middle">
                <thead>
                  <tr className='text-nowrap'>
                    <th>No</th>
                    <th>Blog Tittle</th>
                    <th>Post Date</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Like</th>
                    <th>Shared</th>
                    <th>Viewers</th>
                  </tr>
                </thead>

                <tbody>
                  {recent_article_data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td><span style={{fontSize:"13px"}}>{item.no}</span></td>
                        <td className='d-flex align-items-center gap-2 text-nowrap' style={{fontSize:"13px"}}>
                          <img src={item.img} width={60} className='rounded-1' alt="" />
                          <p className='mb-0'>{item.tittle}</p>
                        </td>
                        <td className='text-nowrap' style={{fontSize: "13px"}}>
                          {item.post_date}
                        </td>
                        <td><button className='ra-categay rounded-1 fw-semibold'>{item.category}</button></td>
                        <td className='text-nowrap' style={{fontSize: "13px"}}>
                          {item.comment}
                        </td>
                        <td className='text-nowrap' style={{fontSize: "13px"}}>
                          {item.like}
                        </td>
                        <td className='text-nowrap' style={{fontSize: "13px"}}>
                          {item.shared}
                        </td>
                        <td className='text-nowrap' style={{fontSize: "13px"}}>
                          {item.viewers}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="py-3 px-3 d-flex justify-content-between align-items-center flex-column flex-lg-row gap-2 gap-lg-0">
              <p
                className="mb-0"
                style={{ color: "#8b8c99", fontSize: "13.5px" }}
              >
                Showing <span className="fw-semibold">4</span> of{" "}
                <span className="fw-semibold">125</span> Results
              </p>
              <div className="d-flex align-items-center gap-1">
                <button className="cart-pages-btn px-2 rounded-1">
                  <RiArrowLeftLongLine color="#878a99" size={13} />
                </button>
                <button className="cart-pages-btn px-2 rounded-1">1</button>
                <button
                  className="cart-pages-btn px-2 rounded-1"
                  style={{ backgroundColor: "#405189", color: "white" }}
                >
                  2
                </button>
                <button className="cart-pages-btn px-2 rounded-1">3</button>
                <button className="cart-pages-btn px-2 rounded-1">
                  <RiArrowRightLongLine color="#878a99" size={13} />
                </button>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center gap-4 uaafafoa'>
            <div className='shadow-sm rounded-1 takreeban-bg w-100 py-3 px-3'>
              <div className="d-flex align-items-start gap-3">
                <div style={{padding:"6px"}} className='rounded-circle fa0vsaf'>
                <img className='rounded-circle' width={40} src={img_1} alt="" />
                </div>
                <div className='d-flex w-100 flex-column'>
                  <div className='d-flex w-100 justify-justify-content-between'>
                    <div className='w-100'>
                      <h6 className='home-sec-2-box-h5 mb-0'>Anna Adame</h6>
                      <p className='mb-0 mt-1' style={{fontSize:"13px", color:"#878a99"}}>Founder</p>
                  </div>
                  <button className='project-ls-btn d-flex align-items-center rounded-1 mt-1'>
                    <IoIosSettings/> Setting
                  </button>
                  </div>
                  <div className='d-flex justify-content-between mt-4'>
                    {
                      project_last_data.map((item)=>{
                        return <div key={item.id} className='p-2 rounded-1 fanhfOJA'>
                        <p className='mb-0' style={{fontSize:"13px", color:"#878a99"}}>{item.text}</p>
                        <p className='mb-0'>{item.value}</p>
                      </div>})
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-3 amffpa rounded-1">
            <div className="d-flex align-items-center justify-content-between border-e9ebec px-3 pb-3">
              <h6 className="mb-0 source-chart-h6">Used Device</h6>
              <TbDotsVertical color="#8b8a99" size={17} />
            </div>
            <div className="d-flex justify-content-center">
              <UsedDeviceChart/>
            </div>
          </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

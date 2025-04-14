import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`
 .portlet-title-text {
            display: none !important;
          }
    
          .nav-item:hover .dropdown-menu {
            display: block !important;
          }
    
          .xxccxx {
            display: none !important;
          }
    sss
          @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
    
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif !important;
          }
          html {
            scroll-behavior: smooth;
            font-family: "Montserrat", sans-serif !important;
          }
    
          .getstarted_container {
            display: flex;
            flex-direction: row;
          }
    
          .onboardingflex {
            margin-top: 50px;
            margin-bottom: 20px;
            color: rgba(66, 66, 67, 1);
            font-size: 24px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: center;
          }
          body {
            width: 100% !important;
            font-family: "Montserrat", sans-serif !important;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
    
          .portlet-decorate .portlet-content {
            width: 100% !important;
          }
          .slidecard img {
            height: 29px;
            margin: 4px;
          }
    
          .side2 .slidecard {
            box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 25%);
            margin-right: auto;
            padding: 10px;
            background-color: #fff;
            border-radius: 9px;
          }
    
          .side1 .slidecard:nth-child(2) {
            margin: 0;
            padding-left: 10px;
            width: fit-content;
          }
          .side2 .slidecard:nth-child(2) {
            margin-left: 85px;
            padding-right: 10px;
            width: fit-content;
          }
    
          table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            margin: auto;
            border: none;
          }
          .tbstyle {
            font-family: Roboto;
            font-size: 24px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: center;
            color: #424243;
          }
          .s {
            color: #424243;
            font-family: Inter;
            font-size: 15px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          th p {
            margin-top: 10px;
            margin-bottom: -10px;
          }
          .tbstyle span {
            color: #a92f41;
          }
    
          th,
          td {
            text-align: center !important;
            padding: 23px !important;
          }
    
          td {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          td:nth-child(even) {
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
    
          .loginbutton {
            background-color: #fff; /* Green */
            border: none;
            color: #a92f41 !important;
            padding: 5px 5px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 2px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
            text-decoration: none;
            border-radius: 10px;
            width: 80px;
            text-decoration: none !important;
          }
    
          .signupbutton {
            background-color: #a92f41; /* Green */
            border: none;
            color: white !important;
            text-decoration: none !important;
            padding: 5px 5px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
            text-decoration: none;
            border-radius: 10px;
            width: 80px;
          }
    
          .get_started_button a {
            text-decoration: none !important;
          }
          .mybtn {
            background-color: #a92f41; /* Green */
            border: none;
            color: white;
            padding: 15px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
            text-decoration: none;
            border-radius: 10px;
            width: 125px;
          }
    
          .gstarted_btn:hover {
            text-decoration: none !important;
            color: #fff !important;
          }
    
          .signin_btn {
            color: rgba(169, 31, 47, 1);
            background-color: #e5e5e5;
          }
    
          .signin_btn:hover {
            text-decoration: none !important;
            color: rgba(169, 31, 47, 1) !important;
          }
    
          .section2 {
            margin-top: 40px;
            padding-top: 20px;
          }
          .mycontainer {
            width: 90%;
            margin: auto;
          }
    
          .help_header_text {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: left;
          }
    
          .help_header_text span {
            color: #a92f41;
          }
    
          .section2_flex_container {
            display: flex;
            margin-top: 30px;
            gap: 20px;
            margin-bottom: 40px;
          }
    
          .findboardsection {
            width: 100%;
          }
    
          .recruitboard {
            width: 100%;
          }
          .image_icon {
            margin-bottom: 10px;
          }
          .findboardcontent {
            font-size: 17px;
            font-style: normal;
            font-weight: 500;
            line-height: 34px;
            letter-spacing: 0px;
            text-align: left;
          }
    
          .recruitboardcontent {
            font-size: 17px;
            font-style: normal;
            font-weight: 500;
            line-height: 34px;
            letter-spacing: 0px;
            text-align: left;
          }
    
          .board_opportunity_link {
            display: inline-block;
            margin-top: 10px;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: left;
            color: rgba(169, 31, 47, 1);
            border-bottom: 2px solid rgba(169, 31, 47, 1);
          }
    
          .board_recruitment_link {
            display: inline-block;
            margin-top: 10px;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: left;
            color: rgba(169, 31, 47, 1);
            border-bottom: 2px solid rgba(169, 31, 47, 1);
          }
    
          .about_board {
            width: 100%;
            height: fit-content;
            background: rgba(240, 240, 240, 1);
          }
    
          .about_board_container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px;
          }
    
          .about_board_text {
            width: 100%;
          }
    
          .about_board_img {
            width: 50%;
          }
    
          .about_header {
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: 55px;
            letter-spacing: 0px;
            text-align: left;
            margin-bottom: 20px;
          }
          .about_header span {
            color: #a92f41;
          }
    
          .about_board_content {
            font-size: 23px;
            font-style: normal;
            font-weight: 300;
            line-height: 43px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(66, 66, 67, 1);
          }
    
          .board_solutions {
            background-color: #a92f41;
          }
    
          .flex_slider {
            display: flex;
          }
          .slider_content {
            width: 100%;
          }
          .slider_image {
            width: 100%;
          }
    
          .slider_image img {
            width: 100%;
            height: 100%;
          }
    
          .slider_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
    
          .slider_content_header {
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: left;
            margin-top: 60px;
          }
    
          .slider_content_subheader {
            font-size: 35px;
            font-style: normal;
            font-weight: 700;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(255, 255, 255, 1);
            margin-top: 30px;
          }
    
          .slider_content_writeup {
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(255, 255, 255, 1);
            margin-top: 20px;
          }
    
          .slider_content_block {
            padding: 50px;
          }
    
          .carousel-control-prev {
            padding-right: 159px;
          }
    
          .carousel-control-next {
            padding-left: 159px;
          }
    
          .guide_container {
            margin-top: 30px;
            width: 100%;
            padding: 50px;
          }
    
          .guide_container_header {
            font-family: Roboto;
            font-size: 25px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(66, 66, 67, 1);
            margin-bottom: 20px;
          }
    
          .guide_container_grid {
            width: 90%;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            align-items: center;
            gap: 20px;
          }
    
          .guidebox {
            height: 400px;
          }
    
          .guidetext {
            width: 100%;
            height: 100%;
            color: #fff;
            font-size: 19px;
            font-style: normal;
            font-weight: 500;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: left;
            display: flex;
            align-items: end;
            padding: 20px;
            padding-bottom: 20px;
          }
    
          .bx1 {
            background-image: linear-gradient(
                0.3deg,
                rgba(0, 0, 0, 0.5) 23.93%,
                rgba(0, 0, 0, 0) 52.33%
              ),
              url(img/numbers/unsplash_mO9vKbG5csg.svg);
            height: 330px;
            background-repeat: no-repeat;
            background-size: cover;
          }
    
          .bx2 {
            background-image: linear-gradient(
                0.3deg,
                rgba(0, 0, 0, 0.5) 23.93%,
                rgba(0, 0, 0, 0) 52.33%
              ),
              url(img/numbers/unsplash_c6wbSBaYxkY.svg);
            height: 330px;
            background-repeat: no-repeat;
            background-size: cover;
          }
    
          .bx3 {
            height: 330px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: linear-gradient(
                0.3deg,
                rgba(0, 0, 0, 0.5) 23.93%,
                rgba(0, 0, 0, 0) 52.33%
              ),
              url(img/numbers/unsplash_zIwAchjDirM.svg);
          }
    
          .testimonial {
            background: rgba(240, 240, 240, 1);
          }
    
          .testimonial_flex {
            width: 90%;
            margin: auto;
            padding: 60px;
            display: flex;
            display: flex;
            justify-content: center;
          }
          .testimonial_text {
            display: flex;
            height: auto;
            align-items: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px;
            letter-spacing: 0px;
            text-align: left;
          }
    
          .img_profile {
            margin-left: 20px;
            width: 40%;
            text-align: center;
          }
          .testimonial_text {
            width: 100%;
          }
          .testimonialimg img {
            height: 200px;
            width: 200px;
          }
    
          .testimonial_name {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 35px;
            letter-spacing: 0px;
          }
    
          .testimonial_persontag {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px;
            letter-spacing: 0px;
          }
    
          @media only screen and (max-width: 1000px) {
            .getstarted_container {
              display: flex;
              flex-direction: column;
              height: auto;
            }
            .content_flex {
              width: 100%;
            }
            .getstarted_section {
              height: 80vh;
              background-image: url(img/Rectangle\ 3.svg);
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-size: cover;
            }
            .getstarted_image {
              display: none;
            }
    
            .container_content {
              height: 70vh;
            }
    
            .section2_flex_container {
              flex-direction: column;
            }
    
            .about_board_container {
              flex-direction: column-reverse;
            }
    
            .flex_slider {
              display: flex;
              flex-direction: column;
            }
    
            .slider_image {
              display: none;
            }
    
            .testimonial_flex {
              flex-direction: column;
            }
    
            .img_profile {
              margin-bottom: 20px;
              width: 100%;
              text-align: center;
            }
            .container_content {
              height: 70vh;
              justify-content: center;
              display: flex;
              align-items: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .about_header {
              text-align: center;
            }
            .about_board_img {
              width: 100%;
              align-items: center;
              justify-content: center;
              display: flex;
            }
    
            .about_board_img img {
              width: 90%;
              margin: auto;
            }
            .about_board_text {
              text-align: center;
            }
    
            .findboardsection {
              margin-bottom: 20px;
              text-align: center;
            }
            .get_started_body {
              margin-top: 20px;
              font-size: 19.5px;
              font-style: normal;
              font-weight: 300;
              line-height: 28px;
              letter-spacing: 0px;
              text-align: center;
              color: rgba(255, 255, 255, 1);
            }
    
            .recruitboard {
              text-align: center;
              width: 100%;
              margin-top: 20px;
            }
    
            .guide_container_grid {
              width: 100%;
            }
            .guide_container {
              width: 100%;
              padding: 20px;
            }
            .slider_content_block {
              padding: 21px;
            }
            .about_board_content {
              font-size: 18px;
              text-align: center;
            }
    
            .slider_content_writeup {
              margin-bottom: 12px;
              line-height: 28px;
            }
    
            .about_board_container {
              padding: 10px;
            }
            .getstarted_header h3 {
              font-size: 41px;
              font-style: normal;
              font-weight: 500;
              line-height: 48px;
              letter-spacing: 0em;
              text-align: center;
              color: rgba(255, 255, 255, 1);
            }
    
            .headerimg {
              width: 150px;
            }
            .testimonial_flex {
              width: 99%;
              margin: auto;
              padding: 10px;
              display: flex;
              display: flex;
              justify-content: center;
            }
    
            .testimonial_text {
              font-size: 18px;
            }
            .getstarted_section {
              margin-bottom: 20px;
            }
    
            .section2 {
              margin-bottom: 20px;
            }
    
            .findboardsection {
              margin-bottom: 20px;
            }
    
            .recruitboard {
              margin-bottom: 20px;
            }
    
            .guide_container {
              margin-top: 50px;
            }
    
            .testimonial {
              margin-top: 50px;
            }
          }
    
          .content_hero {
            width: 75%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
    
          .landing_page_text_header {
            font-family: Roboto;
    
            margin-top: auto;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 20px;
            color: #ffffff;
            font-size: 40px;
            font-weight: 600;
            letter-spacing: 0em;
            text-align: center;
          }
    
          .landing_second_act {
            font-family: Inter;
            padding-left: 60px;
            padding-right: 60px;
            color: white;
            font-size: 20px;
            font-weight: 500;
            line-height: 36px;
            letter-spacing: 0em;
            text-align: center;
          }
    
          .twocolumncard {
            display: flex;
            gap: 20px;
            padding: 60px;
            width: 85%;
          }
    
          .mycard {
            display: flex;
            flex-direction: column;
            width: 550px;
            background-color: white;
            border-radius: 10px;
            height: auto;
            padding: 20px;
          }
    
          .card_header {
            color: rgba(169, 31, 47, 1);
            font-size: 22px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          .card_body {
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          .card_btn {
            font-size: 14px;
            color: white;
            margin-top: auto;
            margin-left: auto;
            height: fit-content;
            width: 90px;
            float: right;
            border-radius: 20px;
            padding: 4px;
            background-color: #a92f41;
          }
    
          .btntop {
            display: flex;
            padding-top: 10px;
            margin-top: auto;
          }
    
          .dropdown-item {
            padding: 15px !important;
          }
    
          .recruitmentprocess {
            width: 70%;
            margin: auto;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 30px;
          }
    
          .recruitmentprocessheader {
            padding-left: 90px;
            padding-right: 90px;
            padding-bottom: 30px;
            padding-top: 30px;
            font-size: 30px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: center;
          }
          .recruitmentprocesstext {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(66, 66, 67, 1);
          }
    
          .sixcolumnflex {
            font-family: Inter;
            width: 90%;
            padding: 55px;
            margin: auto;
          }
    
          .flexcards {
            margin-top: 40px;
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 50px;
          }
    
          .cardcont {
            font-family: Inter;
            padding: 7px;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .step_title {
            margin-top: 20px;
            font-size: 18px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(66, 66, 67, 1);
          }
          .step_content {
            font-family: Inter;
            margin-top: 20px;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            text-align: center;
            color: rgba(66, 66, 67, 1);
          }
          .cardimg {
            display: flex;
            align-items: center;
            justify-content: center;
          }
    
          /* .cardcont:hover {
    
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
                transition-duration: 0.5s;
                color: #a92f41;
                box-shadow: 4px 10px 12px 0px rgba(0, 0, 0, 0.25);
                border-radius: 9px;
              } */
    
          .cardline {
            height: 250px;
            width: 70%;
            margin-top: auto;
            margin-bottom: auto;
          }
    
          .gstarted {
            display: flex;
            width: 90%;
            margin: auto;
            padding: 40px;
            gap: 40px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
    
          .gstartedimg {
            width: 70%;
          }
          .gstartedimg img {
            margin-left: auto;
          }
    
          .gstartedtext {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
          }
          .newcardflex {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .cardstarted {
            display: flex;
            gap: 20px;
          }
          .cardstartedtext {
            width: 100%;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(66, 66, 67, 1);
          }
    
          .startimg img {
            width: 50px;
            height: 100%;
          }
    
          .gstartedheader {
            padding-right: 40px;
            padding-bottom: 40px;
            font-size: 29px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0px;
            text-align: left;
            color: rgba(66, 66, 67, 1);
          }
    
          .gstartedbody {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(66, 66, 67, 1);
          }
          .getstarted_button {
            margin-top: 30px;
          }
          .btntop .getstarted_button {
            margin-top: 8px;
            float: right;
            width: 100%;
          }
    
          a {
            text-decoration: none;
          }
          .gbutton {
            background: rgba(189, 11, 32, 1);
            /* Green */
            color: white;
            padding: 13px 28px;
            border-radius: 9px;
            border: 2px solid rgba(189, 11, 32, 1);
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
          }
    
          .herobtn {
            background: rgba(169, 31, 47, 1) !important;
            color: white !important;
            border: 12px;
            display: block;
            padding: 5px 8px;
            font-size: 15px;
            border-radius: 35px;
          }
          .g_btn:hover {
            background: white;
            color: #a92f41;
          }
    
          .offer_title {
            font-size: 30px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: center;
          }
    
          .offerbody {
            margin-top: 10px;
            width: 50%;
            margin: auto;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(66, 66, 67, 1);
          }
    
          .offergridcard {
            width: 100%;
            display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: 1fr;
      gap: 30px;
          }
    
          .offercard {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto !important;
            align-items: center;
          }
          .offer_section {
            margin-top: 40px;
          }
    
          .offerheader {
            margin-top: 20px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(66, 66, 67, 1);
          }
    
          .mob {
            display: none;
          }
    
          .offercardcontentbody {
            margin-top: 10px;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: rgba(66, 66, 67, 1);
            margin-bottom: 10px;
          }
    
          .offerbtn {
            background: white;
            color: rgba(169, 31, 47, 0.8);
            padding: 9px 36px;
            border-radius: 2px;
            border: 1px solid rgba(169, 31, 47, 0.8);
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
          }
    
          .offerbtn:hover {
            background: #a92f41;
            color: white;
          }
    
          .contact_section {
            background-color: rgb(236 236 236);
          }
          .contact_form_flex {
            display: flex;
            width: 90%;
            margin: auto;
            resize: none;
            padding: 30px;
          }
          .textform {
            width: 100%;
            padding: 50px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
          }
          .inputform {
            width: 100%;
            display: flex;
            flex-direction: column;
    
            padding: 50px;
            justify-content: center;
          }
    
          input[type="text"],
          select,
          [type="email"],
          textarea {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 12px;
            resize: none;
          }
    
          input[type="submit"] {
            margin-top: 12px;
            background-color: rgba(53, 53, 80, 1);
            width: 100%;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
    
          .formarea {
            margin: auto;
            width: 80%;
            border-radius: 5px;
            padding: 20px;
          }
    
          .textformhead {
            font-size: 24px;
            font-weight: 800;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(189, 11, 32, 1);
          }
    
          .textformbody {
            font-size: 38px;
            font-weight: 700;
            line-height: 58px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(51, 51, 51, 1);
          }
    
          @media only screen and (max-width: 1000px) {
            .flexcards {
              flex-direction: column;
            }
            .cardline {
              display: none;
            }
    
            .gstarted {
              flex-direction: column;
            }
    
            .reverse {
              flex-direction: column-reverse;
            }
    
            .gstartedimg img {
              width: 100%;
            }
    
            .gstartedimg {
              width: 100%;
            }
            .contact_form_flex {
              display: flex;
              flex-direction: column;
            }
    
            .textform {
              align-items: center;
              text-align: center;
            }
            .inputform {
              width: 100%;
              display: flex;
              flex-direction: column;
              padding: 10px;
              justify-content: center;
            }
            .landing_second_act {
              font-family: Inter;
              padding-left: 3px;
              padding-right: 3px;
              color: white;
              font-size: 15px;
              font-weight: 500;
              line-height: 36px;
              letter-spacing: 0em;
              text-align: center;
            }
            .landing_page_text_header {
              font-family: Roboto;
              margin-top: auto;
              padding-left: 3px;
              padding-right: 3px;
              padding-bottom: 22px;
              color: #ffffff;
              font-size: 37px;
              font-weight: 600;
              letter-spacing: 0em;
              text-align: center;
            }
          }
    
          @media only screen and (max-width: 600px) {
            .navbar-collapse ul {
              gap: 10px !important;
            }
            .navbar-collapse ul li:last-child {
              margin-top: 10px;
            }
            .recruitmentprocess {
              width: 100%;
              padding: 10px;
            }
            .sixcolumnflex {
              width: 100%;
              padding: 10px;
            }
            .gstarted {
              width: 100%;
              padding: 10px;
            }
            .formarea {
              width: 100%;
              padding: 10px;
            }
            .contact_form_flex {
              width: 100%;
              padding: 10px;
            }
            .textformbody {
              text-align: center;
              font-size: 29px;
              font-weight: 700;
              line-height: 58px;
              letter-spacing: 0em;
              color: rgba(51, 51, 51, 1);
            }
    
            .textform {
              width: 100%;
              padding: 19px;
              display: flex;
              flex-direction: column;
              gap: 20px;
              justify-content: center;
            }
    
            .gstartedheader {
              text-align: center;
              /* padding-right: 40px; */
              padding-bottom: 40px;
              font-size: 29px;
              font-weight: 700;
              line-height: 38px;
              letter-spacing: 0px;
              /* text-align: left; */
              color: rgba(66, 66, 67, 1);
            }
            .offerbody {
              width: 100%;
            }
    
            .getstarted_button {
              text-align: center;
            }
    
            .recruitmentprocessheader {
              padding: 10px;
              /* padding-right: 90px; */
              /* padding-bottom: 30px; */
              /* padding-top: 30px; */
              font-size: 25px;
              font-weight: 700;
              line-height: 38px;
              letter-spacing: 0em;
              text-align: center;
            }
          }
          @media only screen and (max-width: 1008px) {
            .navbar-collapse ul {
              gap: 10px !important;
            }
            .hide {
              display: none !important;
            }
            .navbar-collapse ul li:last-child {
              margin-top: 10px;
            }
            .twocolumncard {
              display: flex;
              gap: 20px;
              padding: 35px;
              width: 100%;
            }
            .landing_second_act {
              line-height: normal;
            }
          }
    
          @media only screen and (max-width: 750px) {
            .twocolumncard {
              display: flex;
              flex-direction: column;
              gap: 20px;
              padding: 35px;
              width: 100%;
            }
            .landing_page_text_header {
              margin-top: 109px;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 11px;
              color: #ffffff;
              font-size: 28px;
              font-weight: 600;
              line-height: normal;
              letter-spacing: 0em;
              text-align: center;
            }
            .content_hero {
              width: 85%;
              margin: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
            }
    
            .mycard {
              width: -webkit-fill-available;
            }
          }
          @media only screen and (max-width: 750px) {
            .content_hero {
              width: 95%;
            }
            .landing_page_text_header {
              padding: 10px;
              font-size: 24px;
            }
            .landing_second_act {
              padding: 10px;
              font-size: 15px;
            }
            .twocolumncard {
              display: flex;
              flex-direction: column;
              gap: 20px;
              padding: 15px;
              width: 100%;
            }
          }
    
          @media only screen and (max-width: 920px) {
            .content_flex {
              flex-direction: column;
              gap: 20px;
              margin-bottom: 30px;
            }
            .offer_section {
              margin-top: 40px;
            }
    
            .onboardingflex {
              display: none;
            }
            .mob {
              display: block;
              margin-top: 50px;
              margin-bottom: 10px;
              color: rgba(66, 66, 67, 1);
              font-size: 24px;
              font-weight: 700;
              line-height: 29px;
              letter-spacing: 0em;
              text-align: center;
            }
    
            .slidecard {
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .recruitmentprocessheader {
              /* padding-left: 90px; */
              /* padding-right: 90px; */
              padding-bottom: 30px;
              /* padding-top: 30px; */
              font-size: 27px;
              font-weight: 700;
              line-height: 38px;
              letter-spacing: 0em;
              text-align: center;
            }
            .recruitmentprocess {
              width: 90%;
              margin: auto;
              /* padding-left: 60px; */
              /* padding-right: 60px; */
              padding-top: 30px;
            }
    
            .table_section {
              width: 90%;
              margin: auto;
              padding-top: 50px;
              padding-bottom: 50px;
            }
    
            .onboardingcontainer {
              background-image: none;
            }
    
            .onboarding {
              width: 90%;
              height: fit-content;
              margin: auto;
            }
    
            .getstarted_button {
              width: 100%;
            }
          }
    
          @media only screen and (max-width: 1222px) {
            .content_hero {
              width: 90%;
            }
            .landing_page_text_header {
              margin-top: 20px;
            }
          }
    
          @media only screen and (max-width: 600px) {
            .table_section {
              display: none;
            }
            .hide {
              display: block !important;
            }
          }
    
          .hov:hover {
            background: #a92f41 !important;
            color: white !important;
          }
          .herobtn {
            border: 1px solid #a92f41;
          }
    
          .herobtn:hover {
            background: #ede0e2 !important;
            color: #a92f41 !important;
            border: 1px solid #a92f41;
          }
    
          .aboutheroimg {
            background: rgba(0, 0, 0, 0.5)
              url("https://boardseats.io/documents/20121/0/Rectangle1212.png/");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-blend-mode: darken;
            height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
    
          .abouttext {
            color: #ffffff;
            font-family: Roboto;
            font-size: 64px;
            font-weight: 500;
            line-height: 77px;
            letter-spacing: 0em;
            text-align: center;
          }
    
          .ptype {
            text-align: center;
          }
    
          .aboutother {
            width: 70%;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            color: white;
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
          }
    
          .aboutflex {
            padding-top: 80px;
            width: 85%;
            margin: auto;
            display: flex;
            gap: 20px;
            height: auto;
          }
    
          .abtboxone {
            width: 100%;
    
            height: 600px;
          }
    
          .about_box_align {
            padding: 50px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: space-between;
          }
    
          .abtbox2 {
            height: 600px;
            width: 100%;
          }
    
          .abtbox2 img {
            width: 100%;
            height: 50%;
          }
    
          .abtboxtitle {
            font-family: Roboto;
            font-size: 32px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          .abtboxcontent {
            margin-top: 30px;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #424243;
          }
    
          .readmoreabt {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
          }
    
          .datemore {
            font-family: Inter;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            color: #424243;
          }
    
          .redread {
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: left;
            color: #a91f2f;
          }
    
          .flexcontentsection {
            width: 87%;
            margin: auto;
          }
    
          .blogcard {
            width: 100%;
            height: auto;
            box-shadow: 0px 4.963350772857666px 4.963350772857666px 0px #c0bdbd40;
          }
    
          .flexcontentsection {
            display: grid;
            padding: 4rem 2rem;
            /* Grid styles */
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            grid-auto-rows: 1fr;
            gap: 25px;
          }
    
          .blogcontent {
            width: 100%;
            padding: 13px;
            margin: auto;
          }
    
          .btitle {
            font-family: Inter;
            font-size: 30px;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
            color: #424243;
          }
    
          .bbody {
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          .paded {
            margin-bottom: 50px;
          }
    
          .blogsec {
            padding: 80px;
            padding-top: 5px;
          }
    
          .blogcontenttext {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: justified;
            color: #161616;
          }
    
          .blogpostdetails {
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
          }
    
          .linebtm {
            width: 100%;
            border-bottom: 1px solid #efefef;
            margin-bottom: 20px;
          }
    
          .writer {
            font-family: Inter;
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;
            color: #2d3748;
          }
    
          .datetime {
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;
            color: #718096;
          }
    
          .blogpostheader {
            margin-top: 50px;
            margin-bottom: 10px;
            color: #2d3748;
            font-family: Roboto;
            font-size: 35px;
            font-weight: 700;
            line-height: 53px;
            letter-spacing: 0em;
            text-align: left;
          }
    
          .relatedarticle {
            font-family: Roboto;
            font-size: 26px;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;
            color: #bd0b20;
            margin-top: 50px;
            margin-bottom: 19px;
          }
    
          .aboutheroimg h1 {
            color: #ffffff;
    
            font-size: 50px;
            font-weight: 900;
            line-height: 56.8px;
            text-align: center;
          }
    
          .aboutheroimgbody {
            padding-block: 10px;
            margin: auto;
            max-width: 70%;
            padding-inline: 40px;
    
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            color: white;
          }
    
          .established {
            display: flex;
            width: 100%;
          }
    .offercardimg{
        width: 100%;
    }
    
    .established {
        margin-block: 20px;
        height: 300px;
        overflow: hidden;
        padding: 10px;
        border: 1px solid #f3f3f3;
        border-radius: 4px;
    }
    .offercardimg img{
        width: 100%;
    
    }
    
    .established .offercardimg{
        width: 70%;
    }
          .established .offercard {
            flex-direction: row-reverse;
            width: 100%;
            gap: 20px;
          }
    .offertxt{
        width: 100%;
        padding: 19px;
        display: flex;
    
        flex-direction: column;
        gap: 10px;
    }
          @media only screen and (max-width: 1222px) {
            .paded {
              padding: 30px;
            }
            .blogsec {
              padding: 5px;
            }
          }
    
          @media screen and (max-width:1000px) {
            .established{
                flex-direction: column;
                height: auto;
            }
            .offertxt {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .aboutheroimg h1 {
        color: #ffffff;
        font-size: 40px;
        font-weight: 900;
        line-height: normal;
        text-align: center;
    }
    .aboutheroimgbody {
        padding-block: 10px;
        margin: auto;
        max-width: 100%;
        padding-inline: 40px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        color: white;
    }
            .established .offercard{
                flex-direction: column-reverse;
            }
            .established .offercardimg{
                width: 100%;
            }
          }
    
          @media screen and (max-width:500px) {
            .aboutheroimg h1 {
        color: #ffffff;
        font-size: 25px;
        font-weight: 900;
        line-height: normal;
        text-align: center;
    }
    
    .aboutheroimg {
        height: fit-content;
        min-height: 40vh;
    }
    
    .aboutheroimgbody {
            padding-block: 10px;
            margin: auto;
            max-width: 100%;
            padding-inline: 6px;
    
            font-size: 16px;
            font-weight: 400;
    
            text-align: center;
            color: white;
        }
          }
`;

const Insightlayout = ({children}) => {
  return (
<PageContainer>{children}</PageContainer>
  )
}

export default Insightlayout
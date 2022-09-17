import React from "react";
import "./style.css";

import home from "./home.png";

import Button from "@mui/material/Button";

interface UploadCVProps {
  cvUploaded(e: any): void;
}

function UploadCV(props: UploadCVProps) {
  const { cvUploaded } = props;

  return (
    <div className="h-full v-full">
      <div className="h-full items-center v-full flex flex-col justify-between">
        <video width="80%" preload="auto" autoPlay muted loop>
          <source src={"/intro_video.mp4"} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

          <div className="flex flex-col space-y-5 p-5">

           
            <p className=" text-2xl font-bold text-center">
              <span className=" text-2xl font-bold text-center text-white">
                Discover{" "}
              </span>
              <span style={{
                WebkitTextFillColor:'transparent',
                WebkitBackgroundClip:'text',
                backgroundClip:'text',

                // back
                //   webKitBac: text;
                //   -webkit-text-fill-color: transparent;
                background:'-webkit-linear-gradient(245.29deg,#6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%)'}} className="text-2xl font-bold text-center ">
                Connectivity{" "}
              </span>
              <span className="text-2xl font-bold text-center text-white">
                in Altruit
              </span>
            </p>

            <p className="text-[13px] text-center text-[#eee9e9]">
              We believe the world that we together understad, act and learn.
            </p>

            <Button sx={{
                border: '1px solid #FFFFFF',
                boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '40px'
            ,backgroundColor:'#FFFFFF',
            color:'#413e84',
            ':hover':{
                backgroundColor:'#FFFFFF',

            }
            }} className="bg-[#FFFFFF] opacity-80 text-xl w-2/3  text-[#413e84] self-center pb-4"
            
            component="label"
            
            >
              Upload your CV
              <input
            type="file"
            accept="pdf,application/pdf"
            hidden
            onChange={cvUploaded}
          />
            </Button>
            </div>
      </div>
    </div>
  );
  return (
    <>
      <div
        id="main"
        style={{
          height: "calc(100% - 56px)",
          position: "relative",
        }}
      >
        <img src={home} alt="our logo" />
        <div
          style={{
            position: "absolute",
            bottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: "xx-large",
              textAlign: "center",
            }}
          >
            Lorem Ipsum
          </h1>
          <p
            style={{
              color: "#999999",
              fontSize: "italics",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            rutrum odio eget enim pretium tincidunt.
          </p>
        </div>
      </div>
      <div
        id="footer"
        style={{
          height: "56px",
        }}
      >
        <Button variant="contained" component="label" fullWidth>
          Upload Your CV To Begin
          <input
            type="file"
            accept="pdf,application/pdf"
            hidden
            onChange={cvUploaded}
          />
        </Button>
      </div>
    </>
  );
}

export default UploadCV;

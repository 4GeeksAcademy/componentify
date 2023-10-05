import React, { useState } from "react";
import ComponentifyLogoOrange from "../../img/componentify-logo-orange.png";
import "../../styles/home.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useNavigate } from "react-router-dom";

const IntroView = () => {
  const [copiedInstallHome, setCopiedInstallHome] = useState(false);
  const [copiedInstallHomeTwo, setCopiedInstallHomeTwo] = useState(false);
  const [copiedCdnHome, setCopiedCdnHome] = useState(false); 

  const handleCopyInstallHome = () => {
    setCopiedInstallHome(true);
    setTimeout(() => {
      setCopiedInstallHome(false);
    }, 2500);
  };


  const handleCopyInstallHomeTwo = () => {
    setCopiedInstallHomeTwo(true);
    setTimeout(() => {
      setCopiedInstallHomeTwo(false);
    }, 2500);
  };

  const handleCopyCdnHome = () => {
    setCopiedCdnHome(true);
    setTimeout(() => {
        setCopiedCdnHome(false);
    }, 2500);
};



  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-center vh-20">
        <div className="jumbotron-content text-center" style={{ marginTop: '70px' }}>

          <img
            src={ComponentifyLogoOrange}
            alt="Logo"
            width="265"
            height="239"
            className="mt-4 rotate-animation logo-intro"

          />


          <div className="container" style={{ width: '100%', marginTop: '20px' }}>

            <h1 style={{ fontSize: "5rem" }}>
              <strong>Powerful components for your website with Componentify</strong>
            </h1>

            <p style={{ fontSize: "1.3rem", marginTop: "20px" }}>
            "Experience a transformation in your website's performance and aesthetics by integrating Componentify's array of robust and influential components, enabling you to create a truly remarkable online presence."
            </p>

            <div className="d-flex justify-content-center mt-3">

              <div className={`c-alert c-alert-silver col-5 mb-3 me-2 ${copiedInstallHome ? "copied" : ""}`} role="alert" style={{ height: "3.5rem", width: "20rem" }}>
                <span style={{ marginRight: "1rem" }}>
                  $ npm i componentify-23
                </span>
                <CopyToClipboard text="npm i componentify-23" onCopy={handleCopyInstallHome}>
                  <i className={`mr-2 ${copiedInstallHome ? "fa-solid fa-check fa-xl text-componentify" : "fa-regular fa-clipboard"} fa-xl text-fog`}></i>
                </CopyToClipboard>
              </div>


              <a
                href="#learn"
                type="button"
                className="btn custom-btn mx-1 text-white"
                style={{
                  height: '55px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '20px',
                  color: '#FD5812',
                  justifyContent: 'center',
                  color: '#FD5812',
                  width: '200px'
                }}
              >

                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-book-half"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.350-2.107-.692-3.287-.810-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.810 4.287.940c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.020 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.020A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                    />
                  </svg>{' '}

                  <Link to="/docs/getting-started/introduction" className='text-white'>Read the docs</Link>

                </strong>

              </a>
            </div>
          </div>
        </div>
      </div>




      <div className="container" id="learn" style={{ marginTop: '150px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
        </svg>


        <h1 className="my-4" style={{ fontSize: '3rem' }}>
          <strong>Begin however you prefer</strong>
        </h1>



        <p className="my-4" style={{ fontSize: '1.3rem' }}>
          Dive straight into your project with Componentify! You can swiftly integrate it using the CDN for a speedy setup, or opt for a more controlled approach by installing it through your preferred package manager. For those who crave full customization, feel free to download the source code and embark on a deep dive into Componentify's capabilities. The choice is yours—seize it!
        </p>



        <p className="d-flex justify-content-md-start justify-content-md-center lead fw-normal">
          <Link to="/docs/getting-started/introduction" className="icon-link icon-link-hover fw-semibold ps-md-4">
            Read installation docs <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
            </svg>
          </Link>
        </p>


        <div className="row">
          <div className="col-lg-6 py-lg-4 pe-lg-5" style={{ textAlign: "left", borderRight: "1px solid #ccc", marginBottom: '7rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
            <h3 className="fw-semibold">Install via package manager</h3>
            <p className="pe-lg-5">
            With npm installation, you can easily manage versions and dependencies, ensuring seamless integration into your project.
            </p>


            <div className={`c-alert c-alert-silver col-5 mb-3 ${copiedInstallHomeTwo ? "copied" : ""}`} role="alert" style={{ height: "3.5rem", width: "35rem", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
              <span style={{ marginRight: "1rem" }}>
                $ npm i componentify-23
              </span>
              <CopyToClipboard text="npm i componentify-23" onCopy={handleCopyInstallHomeTwo}>
                <i className={`mr-2 ${copiedInstallHomeTwo ? "fa-solid fa-check fa-xl text-componentify" : "fa-regular fa-clipboard"} fa-xl text-fog`}></i>
              </CopyToClipboard>
            </div>



            <p>
              <Link to="/docs/getting-started/introduction"> Read our installation docs </Link> for more info and additional package managers.
            </p>
          </div>
          <div className="col-lg-6 py-lg-4 pe-lg-5" style={{ textAlign: "left", paddingLeft: "50px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
            </svg>
            <h3 className="fw-semibold">Incorporate via CDN</h3>
            <p className="pe-lg-5">
            For reference, here is our primary Content Delivery Network (CDN) link. This ensures that you always have access to the latest version.
            </p>


            <div className={`c-alert c-alert-silver col-5 mb-3 ${copiedCdnHome ? "copied" : ""}`} role="alert" style={{ height: "3.5rem", width: "35rem", display: "flex", alignItems: "center" }}>
    <pre style={{ marginRight: "1rem" }} className="mb-0">
        <code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Componentify-23/Componentify/componentify-23.css">`}</code>
    </pre>
    <div className="ml-auto">
        <CopyToClipboard text='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Componentify-23/Componentify/componentify-23.css">' onCopy={handleCopyCdnHome}>
            <i className={`mr-2 ${copiedCdnHome ? "fa-solid fa-check fa-xl text-componentify" : "fa-regular fa-clipboard"} fa-xl text-fog`}></i>
        </CopyToClipboard>
    </div>
</div>
            

          </div>
        </div>


      </div>
    </div>


  );
};

export default IntroView;
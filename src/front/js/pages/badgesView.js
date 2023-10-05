import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import "../../styles/global.css";
import "./global.js";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SideBar } from '../component/sideBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const BadgesView = () => {
  const { store, actions } = useContext(Context);

  const [copiedIndexes, setCopiedIndexes] = useState([]);



  const handleCopy = (i) => {
    setCopiedIndexes([...copiedIndexes, i]);

    setTimeout(() => {
      setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
      console.log('Texto revertido después de 3 segundos');
    }, 3000); // 3 seconds delay

  };

  const badgeList = [
    '<p>Example Text <span class="c-badge text-risk bg-risk">New</span></p>',
    '<p>Example Text <span class="c-badge text-caution bg-caution">New</span></p>',
    '<p>Example Text <span class="c-badge text-silver bg-silver">New</span></p>',
    '<p>Example Text <span class="c-badge text-gold bg-gold">New</span></p>',
    '<p>Example Text <span class="c-badge text-lime bg-lime">New</span></p>',
    '<p>Example Text <span class="c-badge text-azure bg-azure">New</span></p>',
    '<p>Example Text <span class="c-badge text-mocca bg-mocca">New</span></p>',
    '<p>Example Text <span class="c-badge text-aqua bg-aqua">New</span></p>',
    '<p>Example Text <span class="c-badge text-slate bg-slate">New</span></p>'
  ]

  const badgeButtonList = [
    '<button class="c-btn c-btn-dark">Notificactions <span class="c-badge text-risk bg-risk">1</span></button>',
    '<button class="c-btn c-btn-dark">Notificactions <span class="c-badge text-caution bg-caution">2</span></button>',
    '<button class="c-btn c-btn-dark">Notificactions <span class="c-badge text-lavender bg-lavender">3</span></button>',
    '<button class="c-btn c-btn-dark">Notificactions <span class="c-badge text-fog bg-fog">4</span></button>',
    '<button class="c-btn c-btn-azure">Notificactions <span class="c-badge text-gloomy bg-gloomy">5</span></button>',
    '<button class="c-btn c-btn-azure">Notificactions <span class="c-badge text-silver bg-silver">6</span></button>',
    '<button class="c-btn c-btn-azure">Notificactions <span class="c-badge text-slate bg-slate">7</span></button>',
    '<button class="c-btn c-btn-azure">Notificactions <span class="c-badge text-white bg-dark">8</span></button>'
  ]

  return (
    <div className="container">
    <div className="row">
    <SideBar />
        <div className="col-10">
            <div className="container">
                <div className="row">
                    <h1 className="mt-3"> <strong>Badges</strong></h1>
                    <p className="fs-5 mt-2 mb-3"> 
                    The <span style={{ "color": "#FD5812" }}>c-badge</span> component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.
                   </p>
                </div>
                <div className="container border rounded my-3 py-3">
                   <h3 className="mt-3 mb-3">Classic badges</h3>
               {/* Acá empieza el bello MAP */}
               {badgeList.map((badge, i) => (
                  <div key={i} className="row">
                   <div className="col-lg-3 col-md-3 col-sm-3 col-12 align-self-center">
                       <div class=" p-3 bg-fog text-dark align-self-center">
                          {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                          <div style={{paddingTop:"5px"}}dangerouslySetInnerHTML={{ __html: badge }} />
                       </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                        <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                            {badge}
                        </SyntaxHighlighter>
                    </div>
                    {/* copy to clipboard */}
                    <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                      <CopyToClipboard text={badge} onCopy={() => handleCopy(i)}>
                        {copiedIndexes.includes(i) ? <i class="fa-solid fa-check fa-xl text-componentify"></i>: <i class="fa-regular fa-clipboard fa-xl text-fog"></i>}
                      </CopyToClipboard>
                    </div>

                </div>
               ))} 

               {/* Acá termina el bello MAP y cerramos la row */}
            </div>

                   <div className="container border rounded my-5 py-3">
                       <h3 className="mt-3 mb-3">Button badges</h3>
                       <p className="mt-3 mb-3 c-alert c-alert-silver">Badges can be used as part of links or buttons to provide a counter. You can combine any of our colored buttons with our variety of badges! Here are some examples:</p>
                       {/* Acá empieza el bello MAP */}
                       {badgeButtonList.map((buttonBadges, i) => (
                        <div key={i} className="row">
                           <div className="col-lg-3 col-md-3 col-sm-3 col-12 align-self-center">
                               {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                               <div className="align-self-center justify-content-center" dangerouslySetInnerHTML={{ __html: buttonBadges }} />
                           </div>
                           <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                               <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                   {buttonBadges}
                               </SyntaxHighlighter>
                           </div>
                           {/* copy to clipboard */}
                           <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                              <CopyToClipboard text={buttonBadges} onCopy={() => handleCopy(i)}>
                                {copiedIndexes.includes(i) ? <i class="fa-solid fa-check fa-xl text-componentify"></i>: <i class="fa-regular fa-clipboard fa-xl text-fog"></i>}
                              </CopyToClipboard>
                            </div>
                   </div>
                    ))} 


                    {/* Acá termina el bello MAP y cerramos la row */}


                </div>
            </div>
        </div>
    </div>
</div>


   )
}

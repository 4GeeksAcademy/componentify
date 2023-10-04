import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Sky from "../../img/sky.jpeg";



const CardView = () => {
    
    return (
        //ESTRUCTURA
<div className="container">
    <div className="row">
    <SideBar />
        <div className="col-10">
            <div className="container">
                <div className="row">
                    <h1 className="mt-3"><strong>Cards</strong></h1>
                    <p className="fs-5 mt-2 mb-3">The <span className="text-componentify">c-card</span> component is a versatile and enhanced version
                        that provides a simple interface for headings, text, images, icons, and more.
                    </p>
                </div>
                <div className="container border rounded my-5 py-3">
                    <h3 className="mt-3 mb-3">Classic card with image</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-4 col-sm-4 col-12">
                            <div class="c-card">
                                <img src={Sky} alt="Image" class="c-card-image"/>
                                <div class="c-card-content">
                                    <h2 class="c-card-title">Card Title</h2>
                                    <p class="c-card-description text-slate">Card content. You can add text, links, or any other content here.</p>
                                    <button class="c-btn c-btn-aqua">Go!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
    <div class="c-card">
        <img src="..." alt="Image" class="c-card-image"/>
        <div class="c-card-content">
            <h2 class="c-card-title">Card Title</h2>
            <p class="c-card-description text-slate">Card content. You can add text, links, or any other content here.</p>
            <button class="c-btn c-btn-aqua">Go!</button>
        </div>
    </div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className="container border rounded my-5 py-3">
                    <h3 className="mt-3 mb-3">Simplicity</h3>
                    <div className="row">
                        <div className="col-3">
                            <div class="c-card c-card-brd-purple">
                                <div class="c-card-header-purple">
                                    <h2 class="c-card-brd-title text-purple">Card title</h2>
                                </div>
                                    <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
                                        The size of the card depends on what you add here.
                                        You can get creative
                                    </p>
                            </div>
                        </div>
                        <div className="col-3">
                                <div class="c-card c-card-brd-lavender">
                                    <div class="c-card-header-lavender">
                                        <h2 class="c-card-brd-title text-lavender">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-lavender c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>   
                        <div className="col-3">
                                <div class="c-card c-card-brd-azure">
                                    <div class="c-card-header-azure">
                                        <h2 class="c-card-brd-title text-azure">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-azure c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>
                        <div className="col-3">
                                <div class="c-card c-card-brd-mocca">
                                    <div class="c-card-header-mocca">
                                        <h2 class="c-card-brd-title text-mocca">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-mocca c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
<div class="c-card c-card-brd-purple">
    <div class="c-card-header">
        <h2 class="c-card-brd-title text-purple">Card title</h2>
    </div>
    <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
        The size of the card depends on what you add here.
        You can get creative
    </p>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className="container border rounded mb-2">
                    <h3 className="mt-3 mb-3">Subscription</h3>
                    <div className="row mx-auto">
                                


                        <div className="col-2">
                            <div className="card shadow" style={{ backgroundColor: '#F5F5F5 ', height: "300px", width: "200px" }}>
                                <div className="card-header">
                                    <h5>Support Our Work!</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                    Make a one-time payment or a recurring contribution.</p>
                                    <hr />
                                    <h6 className="card-subtitle mb-2 text-muted">$999.00</h6>
                                    <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                                    >Contribute</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div> 
                        <div className="col-2">
                            <div className="card shadow" style={{ backgroundColor: '#F0EAD6', height: "300px", width: "200px" }}>
                                <div className="card-header">
                                    <h5>Support Our Work!</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                    Make a one-time payment or a recurring contribution.</p>
                                    <hr />
                                    <h6 className="card-subtitle mb-2 text-muted">$499.00</h6>
                                    <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                                    >Contribute</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div> 
                        
                        <div className="col-2">
                            <div className="card shadow" style={{ backgroundColor: '#FFDAB9', height: "300px", width: "200px" }}>
                                <div className="card-header">
                                    <h5>Support Our Work!</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                    Make a one-time payment or a recurring contribution.</p>
                                    <hr />
                                    <h6 className="card-subtitle mb-2 text-muted">$199.00</h6>
                                    <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                                    >Contribute</button>
                                </div>
                            </div>
                        </div>
 



                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
    <div class="c-card">
        <div class="c-card-content">
            <h2 class="c-card-title">Support Our Work!</h2>
            <p class="c-card-description">Card content. You can add text, links, or any other content here.</p>
            <button class="c-btn c-btn-aqua">Contribute</button>
        </div>
    </div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default CardView;

// ESTRUCTURA
// <div className="container">
//     <div className="row">
//     <SideBar />
//         <div className="col-10">
//             <div className="container">
//                 <div className="row">
//                     <h1 className="mt-3">Título del componente</h1>
//                     <p className="fs-5 mt-2 mb-3">Párrafo explicando el componente.</p>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                         Acá va el componente
//                     </div>
//                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                             {`Acá va el código`}
//                         </SyntaxHighlighter>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
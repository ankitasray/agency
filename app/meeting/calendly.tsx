"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    // return ( 
    // <div className="w-full ">
    //   <InlineWidget
    //   styles={{ height: "1000px" }}
    //   url="https://calendly.com/birdsoftware/meeting" />
    // </div> );
    return ( 
      <div className="w-full ">
        <InlineWidget
        styles={{ height: "1000px" }}
        url="https://calendly.com/softoratech/30min" />
        
      </div> );
}
 
export default Calendly;
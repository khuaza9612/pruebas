import React from "react"

export default function grilla({img,id,img2,img3}) {
    return (
        <div className="instagram">
        <p className="name">Instagram</p>
        <p>#Espufi</p>
        <div className="imagen">
        <img src={img} className=" img" alt="rain"  />
        <img src={img2} className=" img" alt="rain"  />
        <img src={img3} className=" img" alt="rain"  />
        <img src={img2} className=" img" alt="rain"  />
        <img src={img} className=" img" alt="rain"  />
        <img src={img3} className=" img" alt="rain"  />
        
        
</div>
        </div>
    )
}
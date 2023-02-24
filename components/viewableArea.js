import React from "react"

export default function ViewableArea({ children }) {
    console.log(this)
    return (
        <div className="h-[1080px] w-[1920px] border-2 border-white overflow-hidden">
            {children}
        </div>
    )
}
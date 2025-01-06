import React from 'react'

const PageTitle: React.FC<{ title: string }> = ({title}) => {
    return <p className="border-r-2 border-l-2 border-[#B3831C] font-semibold text-2xl text-primary-text w-fit mx-auto px-2 ">{title}</p>;
}
export default PageTitle


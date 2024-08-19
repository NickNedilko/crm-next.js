'use client'

import Header from "@/app/components/header";
import { notFound } from "next/navigation";
import { useEffect } from "react";


interface CompanyPageProps {
    params: {
        id: string
    }
}



const CompanyPage = ({params}: CompanyPageProps) =>{

    useEffect(() => {
    const id = Number.parseInt(params.id)
    if(Number.isNaN(id))
     notFound()
    }, [params.id])

    return(
        <>
        <Header>Company page {params.id}</Header>
        </>
    )
}

export default CompanyPage;
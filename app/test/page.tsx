<<<<<<< HEAD
import LandingPage from '@/components/landing/LandingPage'
export default LandingPage
=======

"use client"

import BookAppointmentPage from "@/components/user/book_appointment/BookAppointmentPage"
import { useEffect, useState } from "react"



export default function Test({params}: {params: {hospitalid: string}}) {
    const [hospitalId, setHospitalId] = useState("")

    useEffect(() => {
        async function getParams() {
            try {
                const hospital_id = (await params).hospitalid
                setHospitalId(hospital_id)
                
            } catch(err) {
                console.log(err)
            }
        }
        getParams()
    })




    return <BookAppointmentPage Hospital_Id={"das"}></BookAppointmentPage>
}
>>>>>>> 0597cb36808017ef36f46c1c63cc48d7279c0944

import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import { useRouter } from "next/router";

export default function CourseDetails() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
        <React.Fragment>
        <HeaderFour />
        <CourseDetailsMain id={id} />
        <Footer />
        </React.Fragment>
    );
}

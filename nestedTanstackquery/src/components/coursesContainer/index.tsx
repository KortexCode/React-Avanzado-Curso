import React, { useState, lazy, useTransition, useMemo, Suspense } from 'react';
import { useCourses } from "../../hooks/useCourses";
//Cargar un componente sólo si se solicita
const CourseList = lazy(() => import("../courseList")); //Code Splitting
import './App.css';

const CoursesContainer: React.FC = ()=> {
    //tanstackquery permite traer esta información
    const { data: courses, isLoading, error } = useCourses();
    //Se extraen los datos de la API e información adicinal para establecer una lógica.
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;//Manejo de errores
    if (!courses) return <div>No courses found</div>;

    return (
        <CourseList courses={courses}/>
    )
}

export {CoursesContainer}


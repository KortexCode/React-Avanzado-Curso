import React, { useState, lazy, useTransition, useMemo, Suspense } from 'react';
import { useCourses } from "../../hooks/useCourses";
//Cargar un componente sólo si se solicita
const CourseList = lazy(() => import("../courseList")); //Code Splitting
import './app.css';

const CoursesContainer: React.FC = ()=> {
    //tanstackquery permite traer esta información
    const { data: courses, isLoading, error } = useCourses();
    //Estado para paginación
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 2;
    //Paginación con concurrent mode
    const [isPending, startTransition] = useTransition();
    //Obtener array de cursos según paginación
    const currentCourses = useMemo(()=> {
        if (!courses) return [];//Si el fetch no trae nada retornar array vacio
        //Retornar una sección de 2 cursos por cada página
        const indexLastCourse = currentPage * coursesPerPage;
        const indexFirtsCourse = indexLastCourse - coursesPerPage;
        return courses.slice(indexFirtsCourse, indexLastCourse); 
    }, [courses, currentPage]);

    //Se extraen los datos de la API e información adicinal para establecer una lógica.
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;//Manejo de errores
    if (!courses) return <div>No courses found</div>;

    //Cambio de página
    const handleNextpage = (index: number) => {
        startTransition(()=> setCurrentPage(index+1))
    }

    return (
        <section>
        <Suspense fallback={<div>Loading courses...</div>}>
            <CourseList courses={currentCourses} />
        </Suspense>
            <div>
                {Array.from({length: Math.ceil(courses.length / coursesPerPage)}, (_, index)=> 
                <button key={index} onClick={() => handleNextpage(index)}>{index + 1}</button>)}
            </div>
            {isPending && <div>Loading new Page....</div>}
        </section>
    )
}

export {CoursesContainer}


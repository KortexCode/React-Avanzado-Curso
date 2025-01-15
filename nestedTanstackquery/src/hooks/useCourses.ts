import { useQuery, QueryFunction } from '@tanstack/react-query';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}
//Función que hará el fetch a la Api
const fetchCourses: QueryFunction<Course[]> = async ()=> {
    const responde = await fetch('/nestedTanstackquery/src/public/api/courses.json');
    if(!responde.ok) {
        throw new Error("Network response was not ok");
    }
    return responde.json();
}
//Hook usando useQuery para retornar los datos de la API pero permitiendo funcionalidades de tanstackquery
const useCourses = () => {
  return useQuery<Course[], Error>({ queryKey: ['courses'], queryFn: fetchCourses})
}

export {useCourses};
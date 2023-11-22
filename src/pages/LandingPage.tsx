import { useEffect, useState } from "react";
import CarouselHome from "../components/CarouselHome/CarouselHome"
import CategoriasSelector from "../components/CategoriasSelector/CategoriasSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import { TaskService } from "../services/TaskService";
import { Task } from "../types/Task";



const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); //Estado para almacenar tareas filtradas
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoria seleccionada


  useEffect(() => {
    const fetchTask = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };
    fetchTask();
  }, []);

  //Efecto para filtrar las tareas cuando se selecciona la categoria 
  useEffect(() => {
    if(selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); //si no hay categoria seleccionada, se mostrara todas las tareas
    }
  }, [selectedCategory,tasks]);


  return (
    <>
    <CarouselHome/>
    <CategoriasSelector onSelectedCategory={setSelectedCategory}/>
    <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks: tasks}/>
    </>
  )
}

export default LandingPage
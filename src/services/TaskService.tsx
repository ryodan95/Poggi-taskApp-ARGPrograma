import { Task } from "../types/Task";

const BASE_URL = "http://localhost:3000/tasks";

export const TaskService = {

    //Obetener todas las tareas

    getAllTasks:async (): Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}`)
        const data = await response.json();
        return data;
    },

//Obetener una tarea

    getOneTask: async (id: number): Promise<Task> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

//obtener tareas en una categorias

    getTasksInCategory: async (category: string) : Promise<Task[]> => {
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    },

//borrar tarea

    deleteTask: async (id: number) : Promise<void> => {
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
    },

//usar PATCH para actualizar solo un campo , actualizar tarea

    updateStateTask: async (id:number, newState: string): Promise<Task> => {
        return fetch(`${BASE_URL}/${id}`,
        {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estado: newState
            })
        })
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch (error => error);
    },

//crear una tarea
    createTask: async (task : Task) : Promise<Task> => {
        const response = await fetch(`${BASE_URL}`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(task)
        });

        const data = await response.json();
        return data;
    },

};
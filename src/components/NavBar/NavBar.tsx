import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom";
import { TaskService } from "../../services/TaskService";
import { toast } from "react-toastify";
import { Task } from "../../types/Task";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";


const NavBar = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    //Agregar una nueva tarea

    const createTask = async (newTask:Task) => {
      try {
        const result = await TaskService.createTask(newTask);
        console.log('Nueva Tarea Agregada:' , result.id);
        navigate('/detalle/${result.id}'); //Ir al detalle de la tarea creada
        //Muestra una notificacion de exito ultilizando react toastify
        toast.success('Tarea creada correctamente', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, //cerrar automaticamente despues de 2 segundos
        });
      } catch (error) {
        //muestra una notificacion de error si la creacion de la tarea falla
        toast.error ('error al crear una tarea ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.error('Error al crear la tarea:', error);
      }
    };

  return (
    <>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Desarrollo en Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Por Hacer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                En Producción
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Por Testear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Completada
              </NavDropdown.Item>
            </NavDropdown>

        {/*--------------AGREGAR UNA NUEVA TAREA---------*/}
            <Nav.Link onClick={handleShowModal}>Agregar Tarea</Nav.Link>
          </Nav>

            <Nav className="d-none d-md-flex ms-auto">
                <Nav.Link href="#carrito">
                    <Basket />
                </Nav.Link>

                <Nav.Link href="#usuario">
                    <Person />
                </Nav.Link>
            </Nav>

            <div className="d-md-none">
                <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#ticket">Ticket</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#perfil">Perfil</a>
                    </li>
                </ul>
            </div>

        </Navbar.Collapse>
      </Container>

    </Navbar>

    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />


    </>
  )
}

export default NavBar
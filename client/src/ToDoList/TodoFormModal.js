import React from "react"
import Modal from 'react-bootstrap/Modal' 
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoFormForm from "./TodoFormForm"
import IconButton from '@material-ui/core/IconButton';


function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Task
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <TodoFormForm onSubmit={props.onSubmit} onClick={props.onHide} />
        </Modal.Body>
      </Modal>
    );
  }

  function ToDoFormModal (props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <IconButton  onClick={() => setModalShow(true)}>
          Add Task!  
        </IconButton>
  
        <MyVerticallyCenteredModal 
          onSubmit= {props.onSubmit}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }


export default ToDoFormModal;
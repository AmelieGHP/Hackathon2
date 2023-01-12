import React from 'react';

const ListUser = () => {
    return (
        <div className='listuser'>

          <h3>Our team</h3>
            <div className="listEmp">
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/employees/black-mount-employee-image-1.jpg`}
          alt="utilisateur1"
        />
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/employees/black-mount-employee-image-2.jpg`}
          alt="utilisateur2"
        />
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/employees/black-mount-employee-image-3.jpg`}
          alt="utilisateur3"
        />
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/employees/black-mount-employee-image-4.jpg`}
          alt="utilisateur4"
        />
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/employees/black-mount-employee-image-5.jpg`}
          alt="utilisateur5"
        />
      </div>
            
        </div>
    );
};

export default ListUser;
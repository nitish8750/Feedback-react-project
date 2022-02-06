import React from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
    const params = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("hello");
        navigate("/about");
    }
    return (
      <div>
        Posts {params.id}
            <p>Posts {params.name}</p>
            <button type="button" onClick={handleClick}>Click Me</button>
            <Routes>
                <Route path="/show" element={ <h1>Hello World</h1>} />
            </Routes>
      </div>
    );
}

export default Post;

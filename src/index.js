import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Checklist(props) {
    return (
        <p className="checklist">
            {props.location}
        </p>
    );
}

function Answers() {
    return (
        <button className="wrong-answer">
            sadasd
        </button>
    );
}

function Controls(props) {

    return (
        <button className="next-question" onClick={() => props.setIsLoading(true)}>
            Next Question
        </button>
    )
}

function Game() {
    const [checklist, setChecklist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) return (
        <div>
            loading...
        </div>
    );

    return (
        <div>
            <Checklist location = {checklist.location} />
            <Answers />
            <Controls setIsLoading = {setIsLoading}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

const getNewChecklist = async () => {
    let data = await fetch("http://localhost:3000/getRandomChecklist/CA-ON");
    return await data.json();
}
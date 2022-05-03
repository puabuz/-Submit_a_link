// http://localhost:3000/note/bzbddfu0jr1hytmy12org8a6
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function Note() {

    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Введите текст!');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url
    }

    function searchNote() {
        window.location.href = env.url;
    }

    return (
        <div className="container">
            <div className='block_style'>
                <div className={lineClass}>
                    <h4 className='label_note'>Note:</h4>
                    <div>{noteText}</div>
                    <div>
                        <button onClick={searchNote} className='btn btn-success'>Смотреть еще один NOTE</button>
                    </div>
                </div>
                <div className={errorClass}>
                    <p>Что-то пошло не так. Такой хэш не найден</p>
                </div>

                <div className={formClass}>

                    <form action="" onSubmit={getNote} >
                        <label htmlFor="url" className='label_note'>Введите hash заметки:</label>
                        <input type="text" name='url' id='url' className='form-control area_style' />
                        <button type='submit' className='btn btn-success btn_pos'>Искать Note</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Note;
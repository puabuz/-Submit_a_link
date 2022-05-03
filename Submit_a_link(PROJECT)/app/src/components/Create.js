import React from 'react';
import { useState } from 'react';
import env from '../env.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');

        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url);

                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Введите текст!');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div className="container">
            <div className='block_style'>
                <form onSubmit={loadDataFromForm} className={formClass}>
                    <label htmlFor="" className='label_note'>Введите заметку:</label>
                    <textarea name="note" id="note" className='area_style'></textarea>
                    <button type="submit" className='btn btn-success btn_pos'>Создать</button>
                </form>


                <div className={lineClass}>
                    <div className='btn_margin'>{url}</div>
                    <div className='btn_margin'>
                        <button className='btn btn-success btn_pos' onClick={function () { window.location.reload() }}>Создать новую заметку</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Create;
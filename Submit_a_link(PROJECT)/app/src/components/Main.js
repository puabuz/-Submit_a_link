import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {



    return (
        <div className="container btn_margin">
            <div>
                <a href="/create" className='btn btn-success btn_margin'>Создать новый NOTE</a>
            </div>
            <div>
                <a href="/note" className='btn btn-success btn_margin'>Просмотреть NOTE</a>
            </div>
        </div>
    );
}


export default Main;
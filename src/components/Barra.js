import styles from './Barra.module.css'


function barra(){
    return(
        <>
            <div className='barra-de-navegacao'>

                <a>Login</a>
                <ul>
                    <li>Planos</li>
                    <li>Suporte</li>
                </ul>

            </div>
        </>
    )
}

export default barra


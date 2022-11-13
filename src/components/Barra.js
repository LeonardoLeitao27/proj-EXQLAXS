import styles from './Barra.module.css'
import logomarca from '../img/logo.png'


function barra(){
    return(
        <>
            <div className='barra-de-navegacao'>
                
                <img src={logomarca}/>

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


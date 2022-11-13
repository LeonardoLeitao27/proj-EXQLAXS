import styles from './Barra.module.css'
import logomarca from '../img/logo.png'


function barra(){
    return(
        <>
            <div className={styles.navegacao}>
                
                <img className='logo' src={logomarca}/>

                <ul>
                    <li>Login</li>
                    <li>Se registrar</li>
                </ul>

            </div>
        </>
    )
}

export default barra


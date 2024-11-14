import { currentYear } from '../../data/utils'
import s from '../Copyright/Copyright.module.css'

function Copyright() {
    return (
        <div className={s.copyright}>
            <p>&#169; Учебный проект. Все права защищены. {currentYear()}</p>
        </div>
    )
}

export default Copyright

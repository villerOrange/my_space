import quali from "../../data/quali"
import CardTitleInfo from "../CardTitleInfo/CardTitleInfo"
import s from './QualiContainer.module.css'

function QualiContainer() {
    return (
        <div className={s.container}>
            {quali.map(el =>
            (<CardTitleInfo
                title={el.title}
                text={el.description}
            />)
            )}
        </div>
    )
}

export default QualiContainer

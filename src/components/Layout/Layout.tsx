import React, {FC, ReactNode} from 'react';
import classes from './layout.module.scss'

const Layout: FC<ReactNode> = (props) => {
    return (
        <article className={classes.article}>
            <header className={classes.header}>
                <h3>Специализированные дисциплины</h3>
            </header>
            <main className={classes.main}>{props.children}</main>
            <footer>
                <div className="container">
                    <div className={classes.row}>
                        <div className={classes.block}>
                            <div className={classes.blockTitle}>
                                Практические модули
                            </div>
                            <div className={classes.blockText}>
                                <p>Работа над собственными проектами:</p>
                                <p> практика групповых взаимодействий,</p>
                                <p>кейс-методы, эссе</p>
                            </div>
                        </div>
                        <div className={classes.block + ' ' + classes.blockPadding}>
                            <div className={classes.blockTitle}>
                                Итоговая аттестация
                            </div>
                            <ul className={classes.list}>
                                <li className={classes.blockItem}>
                                    Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
                                </li>
                                <li className={classes.blockItem}>Защита итоговой аттестационной работы</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default Layout;
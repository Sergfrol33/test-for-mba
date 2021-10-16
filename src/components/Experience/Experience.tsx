import React, {FC, useEffect, useState, MouseEvent} from 'react';
import {Data} from "../../hooks/types";
import classes from './experience.module.scss'
import useMediaQuery from "../../hooks/useMediaQuery";
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import cn from "classnames";

interface Props {
    data: Data
}

const Experience: FC<Props> = (props) => {
    const {data} = props
    const [subject, setSubject] = useState<string[]>([])
    const [tab, setTab] = useState<string>('')
    const tablet = useMediaQuery('(min-width: 768px)')
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        setTab(e.currentTarget.title)
        if (tab === e.currentTarget.title) setTab('')


    }

    useEffect(() => {
        if (data) {
            setSubject([...data.specializedSubjects])
            setSubject(prevState => prevState.slice(0, 5))
        }
    }, [setSubject, data])

    return (
        <section className={classes.wrapper}>
            <div className={classes.title}>{data.title}</div>
            <div className={classes.row}>
                <div className={cn(classes.block, {
                    [classes.active]: tab === 'first' && !tablet
                })}>
                    <div className={classes.blockRow}>
                        <div onClick={handleClick} title={'first'} className={classes.moduleTitle}>
                            {!tablet && <img className={classes.icon} src={tab === 'first' ? minus : plus} alt=""/>}
                            1 модуль
                        </div>
                        {
                            tablet ?
                                <ul className={classes.list}>
                                    {subject.map((item: string) => (
                                        <li key={item} className={classes.item}>
                                            {item}
                                        </li>
                                    ))
                                    }
                                </ul>
                                : tab === 'first' && <ul className={classes.list}>
                                {subject.map((item: string) => (
                                    <li key={item} className={classes.item}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        }
                    </div>
                </div>
                <div className={cn(classes.block, {
                    [classes.active]: tab === 'second' && !tablet
                })}>
                    <div className={classes.blockRow}>
                        <div onClick={handleClick} title={'second'} className={classes.moduleTitle}>
                            {!tablet && <img className={classes.icon} src={tab === 'second' ? minus : plus} alt=""/>}
                            2 модуль
                        </div>
                        {
                            tablet ?
                                <ul className={classes.list}>
                                    {subject.map((item: string) => (
                                        <li key={item} className={classes.item}>
                                            {item}
                                        </li>
                                    ))
                                    }
                                </ul>
                                : tab === 'second' && <ul className={classes.list}>
                                {subject.map((item: string) => (
                                    <li key={item} className={classes.item}>
                                        {item}
                                    </li>
                                ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Experience;
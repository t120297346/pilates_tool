import type {TabsProps} from 'antd';
import {Tabs} from 'antd';
import {useEffect, useState} from "react";
import {ClassUnit, interpret} from "../utils/interpreter.ts";
import {Day} from "./Day.tsx";
import {reverseCurrentTime} from "../utils/time.ts";


const dayList = ['週一', '週二', '週三', '週四', '週五'];

export const Schedule = ({data}: {
    data: ClassUnit[];
}) => {
    const [activeKey, setActiveKey] = useState('1');
    const curTime = reverseCurrentTime();
    const curDay = new Date().getDay();
    const items: TabsProps['items'] = [
        ...(new Array(5).fill(0).map((_, index) => {
            return {
                key: String(index + 1),
                label: dayList[index],
                children: <Day items={interpret(data, index + 1).map((v) => {
                    if (curDay !== index + 1) {
                        return v;
                    }
                    if (v.time === curTime) {
                        v.isCurrent = true;
                    }
                    return v;
                })}/>,
            };
        })),
    ];
    useEffect(() => {
        // 確認今天星期幾
        const today = new Date().getDay();
        // 週一到週五的 index 分別是 1 到 5
        if (today === 0 || today === 6) {
            setActiveKey('1');
        }
        setActiveKey(String(today));
    }, []);
    return <Tabs type={"card"} centered={true} activeKey={activeKey} items={items} onChange={(e) => {
        setActiveKey(e);
    }}/>;
};
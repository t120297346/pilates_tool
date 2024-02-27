import {MaxTime} from "./config.ts";

export interface TimeUnit {
    day: number;
    time: number;
}

export interface ClassUnit {
    name: string;
    place: string;
    time: TimeUnit[];
}

export interface ClassItem {
    time: number;
    name: string;
    place: string;
    isClass: boolean;
    isCurrent: boolean;
}

export const interpret = (input: ClassUnit[], day: number) => {
    const realClass = input.reduce((acc: ClassItem[], cur: ClassUnit) => {
        const timeList = cur.time.filter((time: TimeUnit) => time.day === day);
        const items: ClassItem[] = timeList.map((time: TimeUnit) => {
            return {
                time: time.time,
                name: cur.name,
                place: cur.place,
                isClass: true,
                isCurrent: false,
            };
        });
        return [...acc, ...items];
    }, []).sort((a: ClassItem, b: ClassItem) => a.time - b.time);
    const result = new Array(MaxTime).fill(
        {
            time: 0,
            name: '-',
            place: '-',
            isClass: false,
            isCurrent: false,
        }
    );
    realClass.forEach((item: ClassItem) => {
        result[item.time] = item;
    });
    return result.map((item: ClassItem, index) => {
        return {
            time: index,
            name: item.name,
            place: item.place,
            isClass: item.isClass,
            isCurrent: item.isCurrent,
        };
    }) as ClassItem[];
}

import {Timeline, Tooltip} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import {ClassItem} from "../utils/interpreter";
import {timeNumber2String} from "../utils/config.ts";

export function Day({
                        items,
                    }: {
    items: ClassItem[];
}) {
    return (
        <Timeline
            mode="left"
            items={items.map(({name, time, isClass, place, isCurrent}: ClassItem) => {
                return {
                    label: timeNumber2String[time],
                    children: (
                        <Tooltip title={place}>
                            {name}
                        </Tooltip>
                    ),
                    color: isClass ? 'blue' : 'gray',
                    dot: isCurrent ? <ClockCircleOutlined style={{fontSize: '16px'}}/> : null,
                };
            })}
        />
    );
}
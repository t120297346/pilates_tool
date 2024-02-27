import {timeNumber2String} from "./config.ts";

export function reverseCurrentTime(): number {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    // 构建当前时间的字符串表示，例如：'08:45'
    const currentTimeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // 遍历时间范围对象，找到与当前时间匹配的时间段
    for (const key in timeNumber2String) {
        const range = timeNumber2String[key];
        const startEndTimes = range.split(' ~ ');
        const startTime = startEndTimes[0];
        const endTime = startEndTimes[1];

        if (currentTimeString >= startTime && currentTimeString <= endTime) {
            return parseInt(key);
        }
    }
    return -1;
}
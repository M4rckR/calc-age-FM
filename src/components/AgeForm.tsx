import { useState,ChangeEvent} from "react"
import { AgeCalc } from "./AgeCalc"
import {dateType,resultType} from "../types"

export const AgeForm = () => {
    const [mDate, setmDate] = useState<dateType>({
        month: '',
        day: '',
        year: '',
    })

    const [result, setResult] = useState<resultType>({
        years: '0',
        months: '0',
        days: '0'
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setmDate({
            ...mDate,
            [e.target.name]: e.target.value
        })
    }

    const handleCalc = () => {
        const {day, month, year} = mDate
        const today = new Date()
        const birthDate = new Date(`${month}/${day}/${year}`)
        const diff = today.getTime() - birthDate.getTime()
        const ageDate = new Date(diff)
        const years = Math.abs(ageDate.getUTCFullYear() - 1970)
        const months = ageDate.getUTCMonth()
        const days = ageDate.getUTCDate() - 1

        setResult({
            years: years.toString(),
            months: months.toString(),
            days: days.toString()
        })
    }


  return (
    <form className="space-y-8 lg:min-w-[500px]">
        <div className="flex gap-6">
            <div className="flex flex-col max-w-16 lg:max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">DAY</label>
                <input
                    className="border outline-none border-m-off black text-xl md:text-2xl rounded p-2 md:p-3 placeholder:font-bold font-bold text-m-off-black placeholder:text-lg placeholder:md:text-xl" 
                    name="day"
                    type="text" 
                    value={mDate.day}
                    onChange={handleChange}
                    placeholder="DD"
                    maxLength={2}
                />
            </div>
            <div className="flex flex-col max-w-16 lg:max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">MONTH</label>
                <input
                    className="border outline-none border-m-off black text-xl md:text-2xl rounded p-2 md:p-3 placeholder:font-bold font-bold text-m-off-black placeholder:text-lg placeholder:md:text-xl" 
                    name="month"
                    type="text" 
                    value={mDate.month}
                    onChange={handleChange}
                    maxLength={2}
                    placeholder="MM"
                />
            </div>
            <div className="flex flex-col max-w-16 lg:max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">YEAR</label>
                <input
                    className="border outline-none border-m-off black text-xl md:text-2xl rounded p-2 md:p-3 placeholder:font-bold font-bold text-m-off-black placeholder:text-lg placeholder:md:text-xl" 
                    name="year"
                    type="text" 
                    value={mDate.year}
                    onChange={handleChange}
                    placeholder="YYYY"
                    maxLength={4}
                />
            </div>

        </div>

        <div className="relative">
            <div className="border-b border-m-smokey-grey"></div>
            <div 
                className="bg-m-purple inline-block p-2 md:p-4 rounded-full absolute -right-8 -bottom-9 cursor-pointer transition-all duration-200 active:bg-m-off-black"
                onClick={() => handleCalc()}
                >
                <img src="/images/icon-arrow.svg" alt="icon arrow" />
            </div>
        </div>

        <AgeCalc 
            result={result}
        />
    </form>
  )
}

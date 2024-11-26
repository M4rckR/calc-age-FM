import { useState,ChangeEvent} from "react"

export const AgeForm = () => {
    const [mDate, setmDate] = useState({
        month: '',
        day: '',
        year: ''
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setmDate({
            ...mDate,
            [e.target.name]: e.target.value
        })
    }

  return (
    <form className="space-y-8">
        <div className="flex gap-6">
            <div className="flex flex-col max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">DAY</label>
                <input
                    className="border outline-none border-m-off black text-2xl rounded p-3 placeholder:font-bold font-bold text-m-off-black" 
                    name="day"
                    type="text" 
                    value={mDate.day}
                    onChange={handleChange}
                    placeholder="DD"
                />
            </div>
            <div className="flex flex-col max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">MONTH</label>
                <input
                    className="border outline-none border-m-off black text-2xl rounded p-3 placeholder:font-bold font-bold text-m-off-black" 
                    name="month"
                    type="text" 
                    value={mDate.month}
                    onChange={handleChange}
                    placeholder="MM"
                />
            </div>
            <div className="flex flex-col max-w-28 space-y-1">
                <label className="font-semibold text-m-smokey-grey tracking-wide text-sm" htmlFor="">YEAR</label>
                <input
                    className="border outline-none border-m-off black text-2xl rounded p-3 placeholder:font-bold font-bold text-m-off-black" 
                    name="year"
                    type="text" 
                    value={mDate.year}
                    onChange={handleChange}
                    placeholder="YYYY"
                />
            </div>

        </div>

        <div className="relative">
            <div className="border-b border-m-smokey-grey"></div>

        </div>
    </form>
  )
}

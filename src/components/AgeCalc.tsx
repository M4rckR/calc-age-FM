type AgeCalcProps = {
    result: {years:string, months:string, days:string}
}

export const AgeCalc = ({result}:AgeCalcProps) => {

  const {days,months,years} = result
  
  return (
    <div>
        <p className="text-[38px] md:text-[64px] font-black italic leading-none "><span className="text-m-purple">{years? years:'0'}</span> years</p>
        <p className="text-[38px] md:text-[64px] font-black italic leading-none "><span className="text-m-purple">{months? months : '0'}</span> months</p>
        <p className="text-[38px] md:text-[64px] font-black italic leading-none "><span className="text-m-purple">{days? days: '0'}</span> days</p>
    </div>
  )
}

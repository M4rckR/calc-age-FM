import { AgeForm } from "./components/AgeForm"

export const App = () => {

  return (
    <section className="container mx-auto flex justify-center items-center min-h-screen"> 
      <div className="bg-white rounded-2xl rounded-br-[100px] pt-8 pb-12 pl-8 pr-16 max-w-[80%]">
        <AgeForm/>
        
      </div>
    </section>
  )
}

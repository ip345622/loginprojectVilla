import React, {useState,useEffect} from "react";
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Home(){

    const [data, setData] = useState();
    const [screen, setScreen] = useState();

    const fetchData = async () => {
        const response = await axios.get('http://192.168.3.31:4000/api/animalsLatest/AquiTuLlave');
        setData([response.data]);
        setScreen([response.data.screen])
        console.log([response.data.screen])
    }

    useEffect(() => {
        fetchData();

    }, []); 

  ChartJS.register(ArcElement, Tooltip, Legend);

    const animales = {"id":1,"vaca":1,"pollo":3,"obeja":5};

    var options = {
        responsive: true,
        maintainAspectRatio: true,
      };

    var data1 = {
        labels: [
          `Vaca`,
          `pollo`,
          `obejas`,
        ],
        datasets: [
          {
            label: "",
            data: [
              animales?.vaca,
              animales?.pollo,
              animales?.obeja,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

    return(

      <div className="w-screen h-screen bg-[url('./assets/fondo.jpg')] bg-no-repeat bg-cover justify-center">
                        <div className='bg-zinc-800 w-full h-[12vh] self-start flex flex-wrap justify-between  items-center px-[2vw] font-semibold text-white border-b-2 text-lg'>
                    <div className='flex flex-wrap'>
                        <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" className='w-[2vw] mx-[.5vw]'></img>
                        <span className=''>MineDuino</span>
                    </div>
                    <ul className='font-normal flex gap-[2vw]'>
                        <li>
                            <a href="">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Acerca de nosotros
                            </a>
                        </li>
                    </ul>
                </div>
              <div className="flex flex-wrap justify-center  items-center " >
            <div className="flex flex-wrap" >
                <div className="  rounded-lg bg-[#ffffff70] shadow-md w-[30vw] h-[70vh]">
                <h1 className="font-semibold mt-[5%] text-2xl w-full text-center">TOTAL DE ANIMALES</h1>
                <div className="flex mx-auto  mt-[5%] w-[15vw] h-[10vh]">
                        <img className="w-[5vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8l4r4nF8DCbvvkkX3l_7gzHF_ryqb4LjBgrdCTC_WA&s"/>
                        <h2 className="px-[2%] font-semibold">Total de gallinas:{ data ? ( data.map((item, index) => ( <span className="" key={index}> {item.pollo} </span>))) : ( <p>Cargando</p> )}</h2>


                </div>
                <div className="flex mx-auto  mt-[5%] w-[15vw] h-[10vh]">
                        <img className="w-[5vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncyB4E-uP2UAr1vvmDvhCzKhUfNyserilWA&s"/>
                        <h2 className="px-[2%] font-semibold">Total de cerdos: { data ? ( data.map((item, index) => ( <span className="" key={index}> {item.cerdo} </span>))) : ( <p>Cargando</p> )}</h2>
                
                </div>
                <div className="flex mx-auto  mt-[5%] w-[15vw] h-[10vh]">
                        <img className="w-[5vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCzJc6UrsbEro3_Gnf-jizNa-tpldDDSW_B5egeFbJg&s"/>
                        <h2 className="px-[2%] font-semibold">Total de ovejas: { data ? ( data.map((item, index) => ( <span className="" key={index}> {item.oveja} </span>))) : ( <p>Cargando</p> )}</h2>
                
                </div>
                <div className="flex  mx-auto  mt-[5%] w-[15vw] h-[10vh]">
                        <img className="w-[5vw]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfocnM75x4dFKTg4n4ahZvnNaIhHcp3ZARgA&s"/>
                        <h2 className="px-[2%] font-semibold">Total de vacas: { data ? ( data.map((item, index) => ( <span className="" key={index}> {item.vaca} </span>))) : ( <p>Cargando</p> )}</h2>
                
                </div>
                </div>
                </div>

           <div className="flex flex-col  mx-[5%] mt-[5%] mb-[5%]">
           <div className="bg-[#ffffff70] shadow-md px-[5%] h-[34vh] rounded-lg w-[40vw]">
                <h2 className="text-2xl font-semibold">LCD</h2>
                 
                <div className=" mx-[10%] py-[2%] flex items-center justify-center bg-green-600 w-[30vw] h-[20vh] bg:${item ? 'white' :">
                    <div className="bg-black w-[26vw] h-[15vh] flex flex-wrap items-center justify-center">
                        <div className="bg-blue-700 w-[25vw] h-[10vh] px-[.5vh] mx-auto my-[2vh] flex flex-wrap items-center justify-center">
                        {
                            data && data[0].screen.slice(1).map((pixel, index) => (
                                <div key={index} className={`h-[40%] w-[4.5%] m-[.8%] ${pixel === 1 ? 'bg-white' : 'bg-blue-800'}`}></div>
                            ))
                        }

                        </div>


                    
                    </div>
                  
                </div>
                </div>
                <div className="bg-[#ffffff70] shadow-md mt-[2%] h-[34vh] w-[40vw] rounded-lg ">
                <h2 className="font-semibold text-2xl"></h2>
                <div className="flex justify-center">
                    {/* <canvas id="myChart"></canvas> */}
                  <Pie data={data1} options={options} style={{height: "300px"}}  />
                </div>
                </div>
                
           </div>
                
                
    
        </div>
        </div>
        
    )
}

export default Home;
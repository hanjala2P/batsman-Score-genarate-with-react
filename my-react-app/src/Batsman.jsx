import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns]= useState(0);
    const [sixes,setSixes]=useState(0);
    const [fours,setFour]=useState(0);


    const handleSingle=()=>{
        const updateRuns=runs+1;
        setRuns(updateRuns);
    }
    const handleDouble=()=>{
        const updateRuns =runs+2;
        setRuns(updateRuns)
    }
    const handleFour=()=>{
        const updateRuns=runs+4;
        const updateFours = fours+1;
        setFour(updateFours);
        setRuns(updateRuns);
    }
    const handleSix=()=>{
        const updateRuns= runs+6;
        const updatedSixes =sixes +1;
        setSixes(updatedSixes);
        setRuns(updateRuns);
    }

    const runStyle={
        border:"2px solid green",
        padding:"20px",
    }
    return (
        <div style={runStyle}>
            <h3> Player : Bangla Batsman</h3>
            <h4>Six : {sixes}</h4>
            <h4>Four : {fours}</h4>
            {
                runs>50 && <p>Congratulation for half centuries</p>
            }
            <h2>Score : {runs}</h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

        </div>
    ) 
}
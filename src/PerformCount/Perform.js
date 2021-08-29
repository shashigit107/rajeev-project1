import React, { useState } from "react"
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import "./Perform.css";
function Perform() {
    const [count, setCount] = useState(0);
    const subtract=()=>{
    if(count>0){
        setCount(count-1);
    }
          
    }
    const addition=()=>{
        setCount(count+1)

    }

    return (
        <div className="quality">
              <p>Quality</p> 
            <div className="add__sub">
                <RemoveIcon className="sub" onClick={subtract} />
                    <p className="count">{count}</p>
                <AddIcon className="add" onClick={addition} />

            </div>
        </div>
    )
}
export default Perform;
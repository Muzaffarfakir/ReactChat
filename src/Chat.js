import React, { useEffect, useInsertionEffect, useRef, useState } from "react";
import io from "socket.io-client";
///intialization


/////Function 
function Chat() {
    ////socket.io client libraray 
    let socket = io('https://reactchatback.onrender.com',
     {
        transport: ["polling"]
    });
    //////UseRef HOOKs
    let inref = useRef();
    ///////UseState
    let [message, SetMessage] = useState([]);
    let [messageInp, SetMessageInp] = useState("");
    let [name, setName] = useState('');
    let [na, setna] = useState(false)
    let [users, setusers] = useState([]);
    //////oncahnge function 
    function k(e) {
        SetMessageInp(`  ${e.target.value}`);

    };

    ////useEffect Fuction 
    useEffect(() => {

        if (!na) {
            let n = prompt("name");
            setName(n);
            setna(true);


        }

        socket.on("chat", (mesage, name) => {
            SetMessage(p => [...message, mesage]);
            console.log([mesage], name);
            setusers(prevUsers => {
                if (!prevUsers.includes(name)) {
                    return [...prevUsers, name];
                }
                return prevUsers;
            });            //setusers(name)

        });


    }, [socket]);
    /////send Logic
    function send(e) {
        if (inref.current.value == "") {
            alert("Write Sometings !");

        } else {
            socket.emit("chat", `${name} : ` + messageInp, name);
            inref.current.value = "";
        }
    }



    ///////////////html (jfx)
    return (
        <>
            <div className="d-flex">
                <div className="card text-center" style={{ width: "25vw", height: "70vh", marginLeft: "5px" }}>
                    <h6>Users Online </h6>
                    <hr />
                    {
                        users.map((e) => {
                            return <div style={{ backgroundColor: "#e3f2fd", borderRadius: "10px", margin: "10px", marginTop: "25px" }}>
                                <h6>{e}</h6>


                            </div>

                        })
                        // users.filter((index,item)=>{
                        //    return users.indexOf(item===index);

                        // }).map((el)=>{
                        //     return <h6>{el}</h6>
                        // })


                    }
                    {/* <div>{users}</div> */}



                </div>


                <div className="card " style={{
                    width: "65vw",
                    display: 'flex',
                    height: "70vh",
                    textAlign: "center",
                    margin: "auto",
                    overflowY: "scroll"
                }}>
                    {message.map((el, index) => {
                        return <div key={index}

                            style={{ display: "flex", justifyContent: index % 2 == 0, "flex-end": "flex-start", borderRadius: "10px", margin: "14px", padding: "10px" }}>
                            <div style={{
                                flexDirection: "column",
                                backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#f5f5f5",
                                borderRadius: "10px",
                                padding: "10px",
                                maxWidth: "70%",
                            }}>
                                <p>{` ${el}`}</p>

                            </div>

                        </div>
                    })}








                </div>

            </div>

            <div className="input-group mb-3 my-3 ">
                <input ref={inref} onChange={k} type="text" class="form-control  " placeholder="Enter A Message " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button onKeyDown={(e) => { send(e) }} onClick={(e) => { send(e) }} className="input-group-text  btn btn-primary" id="basic-addon2">Send</button>


            </div>

        </>
    )
}
export default Chat;

import axios from "axios";
import React, {useEffect, useState} from 'react'
import ViewLogs from "./ViewLogs";




export function DreamForm ({APILOGIN, VIEWLOG,bye}){

    //dreamdetails that will have information of the
    //users dream
    bye();
    const [Dreamdetails,setDreamdetails] = useState({dreamdate:"",summary:"", type:"",mood:"",duration:"",substance:"",username:APILOGIN.username, characters:""});



    


const submitHandler = e => {
e.preventDefault();


//post to insert dreams table
axios.post("/insertDream.php", Dreamdetails)
.then(res=> {console.log(res.data)




    axios({
        method:"get",
        url:"/ViewOneDream.php",
        params:{
            username:Dreamdetails.username,
            character:Dreamdetails.characters,
            substance:Dreamdetails.substance,
            duration:Dreamdetails.duration,
            mood:Dreamdetails.mood,
            type:Dreamdetails.type,
            summary:Dreamdetails.summary,
            dreamdate:Dreamdetails.dreamdate,
            
        }}).then(data => {

        console.log(typeof(data.data),  "checking type of xD testing one two");
        console.log(data.data, "JUST ONE GOD DAMN ROW");


      //  const data2= JSON.parse('['+data.data +']');
            const data2={characters:Dreamdetails.characters,dreamid:data.data.dreamid, username:data.data.username};
           

        axios.post("/insertCharacter.php",data2)
        .then(res=> {console.log(res.data)

            axios({
                method:"get",
                url:"/Viewcharacterdream.php",
                params:{
                    username:Dreamdetails.username,
                    
                }}).then(data => {
        
                console.log(typeof(data.data),+ "checking type of xD");
                console.log(data.data);

        if(typeof(data.data) == 'object')
        {
          
          VIEWLOG([data.data])
       
         
       
          
          
        }
        
        else if(typeof(data.data) == 'string')
        {
       VIEWLOG(JSON.parse('['+data.data+']')); 
       
      
        }

            }); // END OF AXIOS GETTTTT


        })
        .catch(error => {
          console.log(error.response)
        });
        


    }); // END OF AXIOS GETTTTT inside










    ///////////////////
   




   





}) // END OF AXIOS POST .THEN
.catch(error => {
    console.log(error.response)


}); // END OF FIRST AXIOS POST







alert("Dream Recorded Successfully")
setDreamdetails({...Dreamdetails,dreamdate:'',summary:'',type:'',mood:'',duration:'',substance:'',characters:''});
}
// end of submit function



const [inputFields, setInputFields] = useState([
    {character: ''}
])


const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.character] = event.target.value;
    setInputFields(data);
}

const addFields = (e) => {
    e.preventDefault()
    let newfield = { character: '' }
    setInputFields([...inputFields, newfield])
}

const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
}




    return (
    <form onSubmit={submitHandler}>
    <div className ='DreamForm'>
        <h1>New Dream Form</h1>

    <div className = 'form-category'>
        <label for="dream-date">Date:</label>
    </div>
    <div className ='form-group'>
        <input placeholder="Date"type="text" required onFocus={(e) => e.target.type = 'date'} id="dream-date" onChange ={e => setDreamdetails({...Dreamdetails,dreamdate:e.target.value})} value={Dreamdetails.dreamdate}/>
    </div>

    <div className = 'form-category'>
    <label for="dream-type">Type of Dream: </label>
    </div>
    <div className ='form-group'>
        <select id="dream-type" name="dream-type" required onChange ={e => setDreamdetails({...Dreamdetails,type:e.target.value})} value={Dreamdetails.type}>
            <option value="" hidden>Select Dream Type</option>
            <option value="normal dream">Normal Dream</option>
            <option value="day dream">Day Dream</option>
            <option value="lucid dream">Lucid Dream</option>
            <option value="false awakening dream">False Awakening Dream</option>
            <option value="nightmare">Nightmare</option>
        </select>
    </div>

    <div className = 'form-category'>
    <label for="dream-duration">Duration: </label>
    </div>
    <div className ='form-group'>
        <select id="dream-duration" name="dream-duration" onChange ={e => setDreamdetails({...Dreamdetails,duration:e.target.value})} value={Dreamdetails.duration}>
            <option value="" hidden>Select Hours Slept</option>
            <option value=".5">0.5</option>
            <option value="1">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2">2.0</option>
            <option value="2.5">2.5</option>
            <option value="3">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5">5.0</option>
            <option value="5.5">5.5</option>
            <option value="6">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8">8.0</option>
            <option value="8.5">8.5</option>
            <option value="9">9.0</option>
            <option value="9.5">9.5</option>
            <option value="10">10.0</option>
            <option value="10.5">10.5</option>
            <option value="11">11.0</option>
            <option value="11.5">11.5</option>
            <option value="12">12.0</option>
            <option value="12.5">12.5</option>
            <option value="13">13.0</option>
            <option value="13.5">13.5</option>
            <option value="14">14.0</option>
            <option value="14.5">14.5</option>
            <option value="15">15.0</option>
            <option value="15.5">15.5</option>
            <option value="16">16.0</option>
            <option value="16.5">16.5</option>
            <option value="17">17.0</option>
            <option value="17.5">17.5</option>
            <option value="18">18.0</option>
            <option value="18.5">18.5</option>
            <option value="19">19.0</option>
            <option value="19.5">19.5</option>
            <option value="20">20.0</option>
            <option value="20.5">20.5</option>
            <option value="21">21.0</option>
            <option value="21.5">21.5</option>
            <option value="22">22.0</option>
            <option value="22.5">22.5</option>
            <option value="23">23.0</option>
            <option value="23.5">23.5</option>
            <option value="24">24.0</option>
        </select>
    </div>

    <div className = 'form-category'>
    <label for="dream-substance">Substance: </label>
    </div>
    <div className ='form-group'>
        <select id="dream-substance" name="dream-substance" onChange ={e => setDreamdetails({...Dreamdetails,substance:e.target.value})} value={Dreamdetails.substance}>
            <option value="" hidden>Select Substance Type</option>
            <option value="none">None</option>
            <option value="stimulant">Stimulant</option>
            <option value="opioid">Opioid</option>
            <option value="depressant">Depressant</option>
            <option value="hallucinogen">Hallucinogen</option>
            <option value="dissociative">Dissociative</option>
            <option value="inhalant">Inhalant</option>
            <option value="cannabis">Cannabis</option>
            <option value="other">Other</option>
        </select>
    </div>
    
    
    <div className = 'form-category'>
        <label for='dream-mood'>Mood: </label>
    </div>
    <div className ='form-group'>
        <input id='dream-mood' type='text' placeholder ='Mood' maxLength={30} onChange ={e => setDreamdetails({...Dreamdetails,mood:e.target.value})} value={Dreamdetails.mood}/>
    </div>
    
    <div className = 'form-category'>
        <label for='dream-character'>Character(s): </label>
    </div>

    {inputFields.map((input, index) => {
    return (
      
      <div key={index} className ='form-group'>
        <input
          id='dream-character'
          name='character'
          type='text'
          placeholder='Character'
          maxLength={30}
          onChange={e => {handleFormChange(index, e); setDreamdetails({...Dreamdetails,characters:e.target.value})}} value={Dreamdetails.characters}
        />
        {
          index ? 
            <button type="button"  className="rmv-btn" onClick={() => removeFields(index)}>Remove</button> 
          : null
        }
      </div>

    )
  })}
    <div><button className='add-btn' onClick={addFields}>Add Character</button></div>
    {/*<div className ='form-group'>
        <input id='dream-character' type='text' placeholder ='Character' maxLength={30} onChange ={e => setDreamdetails({...Dreamdetails,characters:e.target.value})} value={Dreamdetails.characters}/>
    </div>*/}
    <div className = 'form-category'>
        <label for='dream-summary'>Dream Summary: </label>
    </div>
    <div className ='form-group'>
        <textarea id='dream-summary' className ='dreamSummary' type='textarea' placeholder ='Dream Summary' required maxLength={2000} onChange ={e => setDreamdetails({...Dreamdetails,summary:e.target.value})} value={Dreamdetails.summary}/>
    </div>


    <input className = "btn" type="submit" value ="Submit Dream" />
    </div>



    </form>
    )

}
export default DreamForm

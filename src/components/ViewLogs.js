
import React, {useEffect, useState} from 'react'


import axios from 'axios';

export function ViewLogs({USERLOGIN,VIEWLOG,loaddream,bye}) {

  bye();
    const [Dreamdetails,setDreamdetails] = useState({dreamdate:"",summary:"", type:"",mood:"",duration:"",substance:"",username:USERLOGIN.username, characters:""});
    
     // searches substance
  const [searchSubstance, setSearchSubstance] = useState('')

  //date, type, mood ,duration
  // searches  date
  const [searchDate,setSearchDate] =useState('')

  //searches type
  const [searchType,setSearchType]=useState('')

  //searches mood
  const [searchMood, setSearchMood] = useState('')

  //searches duration
  const [searchDuration, setSearchDurationn] = useState('')




    //because view dream details WAS BEING SENT AS A STRING, IT HAD TO BE CONVERTED TO A OBJECT. 
    // var data2= JSON.parse(loaddream );
 
    

    var [data2,setdata2] =useState(loaddream)
  // var [data2,setdata2] =useState(JSON.parse('['+loaddream +']'))
//  var[data2,setdata2] = useState('')
  console.log(typeof(data2))


  

   const handledelete = (item) => {
    console.log(item.dreamid +"test");
    //   console.log(e.target.id)
    // console.log(data2[e.target.id].dreamid)
     const payload = item.dreamid;
     axios.delete('https://localhost/reactProject/DeleteDream.php',{data:{data:payload},})
     .then(()=>{

/// WITH THIS AXIOS GET TRYING TO UPDATE THE VALUE OF DATA2
      axios({
        method:"get",
        url:"https://localhost/reactProject/Viewcharacterdream.php",
        params:{
            username:item.username,
            
        }}).then(data => {

          if(typeof(data.data) == 'object')
      {
       
        VIEWLOG([data.data]);
        setdata2([data.data]);
        
        
      }
      
      else if(typeof(data.data) == 'string')
      {
        VIEWLOG(JSON.parse('['+data.data+']'));
        setdata2(JSON.parse('['+ data.data + ']'));
      //setloaddream(JSON.parse('['+data.data +']'))
      }
          
        


    }); // END OF AXIOS GETTTTT



     }); // END OF AXIOS DELETE


  }


    return (
       
    <div>
      {console.log(data2)}
      {console.log("length of data2: "+ data2.length )}
        <h1>View Logs</h1>

        <div className='search-style'>
        <select className='dream-search' id="dream-type" name="dream-type" onChange={event =>{setSearchType(event.target.value)}}>
            <option value="">Search by Dream Type</option>
            <option value="normal dream">Normal Dream</option>
            <option value="day dream">Day Dream</option>
            <option value="lucid dream">Lucid Dream</option>
            <option value="false awakening dream">False Awakening Dream</option>
            <option value="nightmare">Nightmare</option>
        </select>
        

        <select className='dream-search' onChange={event =>{setSearchSubstance(event.target.value)}}>
            <option value="">Search by Substance Type</option>
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
        






        <input className='dream-search' placeholder="Search by Date"type="text" required onFocus={(e) => e.target.type = 'date'} id="dream-date" onChange={event =>{setSearchDate(event.target.value)}}/>

        <input className='dream-search' type= "text" placeholder="Search by Mood" onChange={event =>{setSearchMood(event.target.value)}}/>
        
        
        <select className='dream-search' id="dream-duration" name="dream-duration" onChange={event =>{setSearchDurationn(event.target.value)}}>
            <option value="">Search by Hours Slept</option>
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


      
       {/* //conditional loop wheree if data2 is empty result is empty dont render table xd */}

       {(data2.length ==0)?
      (
       
        <h2>No dream found</h2>


       )
       
      :(
            
<table>
<thead>
<tr>
{/* <th> Dream id </th> */}
<th> Dream Date </th>
<th> Summary </th>
<th> Type </th>
<th> Mood </th>
<th> Duration </th>
<th> Substance </th>
<th>Character</th>
<th>Update</th>
<th>Delete</th>
{/* <th> Username </th> */}
</tr>
</thead>


 <tbody>
{data2.filter((item)=>{
if(searchType ==""  && searchSubstance =="" && searchDate =="" && searchDuration =="" && searchMood =="" )
{
  return item
} 
else if(item.type.toLowerCase().includes(searchType.toLowerCase()) && item.substance.toLowerCase().includes(searchSubstance.toLowerCase()) &&
item.dreamdate.toLowerCase().includes(searchDate.toLowerCase()) && item.duration.toLowerCase().includes(searchDuration.toLowerCase()) && 
item.mood.toLowerCase().includes(searchMood.toLowerCase()))
{
  
return item
}
// else if(item.type.toLowerCase().includes(searchType.toLowerCase()))
// return item


                      }).map((item,i)=>(
  <tr key={i}>
  

<td>{item.dreamdate}</td>
<td align='left'>{item.summary}</td>
<td>{item.type}</td>
<td>{item.mood}</td>
<td>{item.duration}</td>
<td>{item.substance}</td>
<td>{item.charname}</td>
<td><button className='add-btn'>Update Dream</button></td>
<td><button id={i} onClick={() => handledelete(item)} className='add-btn'>Delete Dream</button></td>
{/* <td>{item.username}</td> */}
  </tr>


))}
):

</tbody>
</table>



  
    )} 
    {/* //end of loop */}
    </div>
    )//end of return
}

export default ViewLogs


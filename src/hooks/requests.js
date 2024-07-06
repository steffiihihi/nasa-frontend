const API_URL='https://nasa-backend-w9h4.onrender.com'

// Load planets and return as JSON. 
async function httpGetPlanets() {
  const respons=await fetch(`${API_URL}/planets`)
  // const respons=await fetch(`${API_URL}`)
  return await respons.json()
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response=await fetch(`${API_URL}/launches`)
  const fetchedLaunches=await response.json()
  console.log(fetchedLaunches)
  return fetchedLaunches.sort((a,b)=>{
    return a.flightNumber-b.flightNumber 
  })
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch){
  try{
    return await fetch(`${API_URL}/launches`,{
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(launch)
    })
  }catch(err){
    return {
      ok: false,
    }
  }
  
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API_URL}/launches/${id}`,{
      method: "delete",
    })
  }
  catch(err){
    console.log(err)
    return {
      response: false
    }
  }
  
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
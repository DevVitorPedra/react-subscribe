export async function subscribe(name,email){
    

  
    const init = {method:"POST"}
         try {
            const url = `https://topbarbersubscribers.herokuapp.com/subs?name=${name}&email=${email}`
            const fetchSub= await fetch(url,init)
            const response = await fetchSub.json()
            console.log(response)
            return response

         } catch (error) {
             console.log(error)
                return error
         }
}
export async function subscribe(name, email, city, phone){
    

  
    const init = {method:"POST"}
         try {
            const url = `https://topbarbersubscribers.herokuapp.com/subs?name=${name}&email=${email}&city=${city}&phone=${phone}`
            const fetchSub= await fetch(url,init)
            const response = await fetchSub.json()
            console.log(response)
            return response

         } catch (error) {
             console.log(error)
                return error
         }
}
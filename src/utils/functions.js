export async function subscribe(name, email, city){
   
    const init = {method:"POST"}
         try {
            const url = "http://localhost:5000/subs?name=" + name + "&email=" + email + "&city=" + city
            const fetchSub= await fetch(url,init)
            const response = await fetchSub.json()
            console.log(response)
            return response.message

         } catch (error) {
             console.log(error)
                return error.message
         }
}
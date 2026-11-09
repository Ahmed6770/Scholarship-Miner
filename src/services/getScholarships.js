const API_URL = "https://api.npoint.io/021984025d6c4d3927f2";

export async function getScholarships(){
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();   
        return data;
}
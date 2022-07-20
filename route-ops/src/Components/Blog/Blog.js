import React, { useEffect, useState } from 'react'
import axios from "axios"


const Blog = () => {

    const {id} = useParams()
    const {state} = useLocation()
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({
        title : "",
        image: "",
        description: ""
    });
    //const [blogData,setBlogData] = useState(state)

    useEffect(()=>{
        if(id){
            const fetchBlogDetails = async() =>{
                try {
                    setLoading(true);
                    const res = await axios.get(`${Base_URL}/${id}`)
                    setBlogData(response.data.blog)
                } catch (error) {
                    console.log(error);
                }finally{
                    setLoading(false)
                }
            };
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Blog

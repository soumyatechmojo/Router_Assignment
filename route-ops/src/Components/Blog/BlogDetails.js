import React, { useEffect, useState } from 'react'

const BlogDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState(null);


    useEffect(()=>{
        const fetchBlogDetails = async () =>{
            try {
                const response = await axios.get(`${Base_URL}/${id}`);
                setBlogData(response.data.blog)
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        };
    fetchBlogDetails()},[id])
  return (
    <div>
      
    </div>
  )
}

export default BlogDetails

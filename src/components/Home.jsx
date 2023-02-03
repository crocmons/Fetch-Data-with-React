import { Divider} from '@mui/material';
import {useEffect,useState} from 'react';
import {Typography} from '@mui/material';
import Pagination from './Pagination';
const Home = () => {
   
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(5);
    // const [currentPage,setCurrentPage] =useState(1)
    const [rows, setRows] = useState([]);
    const [detail, setDetail] = useState({
        id:'',
        name:'',
        city:'',
        email:'',
        website:''
     })
 
   const getData = async() =>
   {
       await fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json())
       .then(res=>setRows(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
    const showDetail = (id) =>
    {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setDetail(res))
      
    }
 

    return (
    <div class="container mt-2 ">
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12 ">
              <h5 class="mt-3 mb-3 ">
               Check More Records of Employees
              </h5>
                <div class=" mt-5 ">
                <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px",  }}
          >
            Leadzen
          </Typography>
          <Divider />
                <table class="table table-striped table-lg m-1" >
                        <thead class="thead-light p-5 m-4">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Contact Email</th>
                                <th>Company Name</th>
                                <th>Website</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody >
                        
                          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row)=>
                           <tr key={row.id}>
                              <td>{row.id}</td>
                              <td>{row.name}</td>
                              <td>{row.email}</td>
                              <td>{row.company.name}</td>
                              <td>{row.website}</td>
                              <td>{row.address.city}</td>
                              <td>{row.phone}</td>
                              <td><button style={{textAlign:"center",backgroundColor:"red", color:"white", padding:"5px", margin:"5px",borderRadius:"10px",fontSize:"15px", fontWeight:"bold",cursor:"pointer"}} onClick={(e)=>showDetail(row.id)} data-toggle="collapse" data-target="#myModal">View Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>

                   
             <Pagination
                totalPosts={rows.length}
                rowsPerPage={rowsPerPage}
                setPage={setPage}
                page={page}
                
            />
            
                </div>
            </div>
            
        </div>
 
 
{/* 
 CardInfo Box  */}
           <div  class="collapse" id="myModal">
          <div class="card-content bg-white p-3 rounded">
            <div class="card-header">
                <h5 class="collapse-title text-dark" id="exampleModalLabel">User Details</h5>
                
            </div>
            <div class="card card-body bg-white text-xl-start fs-2" style={{fontSize:"18px",padding:"10px", margin:"10px"}}>
                <p  style={{fontWeight:"bold"}}>Employee ID : {detail.id}</p>
                <p >Name : {detail.name}</p>
                <p >Company : {detail.company?.name}</p>
                <p >City : {detail.address?.city}</p>
                <p >Email : {detail.email}</p>
                <p >Website : {detail.website}</p>
            </div>
              
            
            </div>
              
        </div>
      </div>
      
      
     
 
    
    )
}
 
 
export default Home
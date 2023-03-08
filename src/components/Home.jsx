import { Divider} from '@mui/material';
import {useEffect,useState} from 'react';
import {Typography} from '@mui/material';
import moment from "moment";

const Home = () => {
   
    const [rows, setRows] = useState([]);
 
   const getData = async() =>
   {
       await fetch('https://demo.4pointx.com/_notebooks/notebooks/_all', {
        headers: {Authorization: 'Basic YWRtaW46OGtRM1VuVlVtU2dUWTBSWQ=='}
      })
       .then(resposne=> resposne.json())
       .then(res=>setRows(res))
   }
 console.log(rows)

   useEffect(() => {
      getData();
   },[])
   

 

    return (
    <div className="container mt-2 py-3 ">
        <div className="row mt-2 ">
            <div className="col-md-4 col-md-6 col-sm-12">
            </div>  
            <div className="col-md-11 col-md-6 col-sm-12 ">
             
                <div className=" mt-5 ">
                <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px",  }}
          >
            Data Fetching From JSON Server
          </Typography>
          <Divider />
                <table className="table table-striped table-responsive-md mx-2 p-4 table-hover table-sm" >
                        <thead className="thead-light p-5 m-4">
                            <tr>
                                <th>notebook_name</th>
                                <th>updated_at</th>
                                <th>updated_by</th>
                                <th>created_at</th>
                                <th>last_run</th>
                                <th>created_by</th>
                                <th>no_of_runs</th>
                                <th>notebook_id</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody >
                        
                          {rows.map((row)=>
                           <tr key={row.notebook_id}>
                              <td>{row.notebook_name}</td>
                              <td>{moment(row.updated_at).format('MMM D YYYY, h:mm a')}</td>
                              <td>{row.updated_by}</td>
                              <td>{moment(row.created_at).format('MMM D YYYY, h:mm a')}</td>
                              <td>{row.last_run ? moment(row.last_run).format('MMM D YYYY, h:mm a') :  " - "}</td>
                              <td>{row.created_by}</td>
                              <td>{row.no_of_runs}</td>
                              <td>{row.notebook_id}</td>
                                <td>{row.status}</td>
                              
                           </tr>
                           )}
                        </tbody>
                    </table>

                   
            
                </div>
            </div>
            
        </div>
 
 

      </div>
      
      
     
 
    
    )
}
 
 
export default Home
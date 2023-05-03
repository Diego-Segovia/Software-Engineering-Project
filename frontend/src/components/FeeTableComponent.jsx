
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const FeeTableComponent = ({data, column}) => {

    


    return(
       
       

        <Row>
<Col>
        <div className="card w-100 bg-dark m-auto  mt-5 mb-2 .overflow-auto overflow-y: scroll p-1  " style={{ maxHeight:"300px" , overflowY:"scroll" }}>
        <table className="table table-dark table-striped table-hover .overflow-auto overflow-y: scroll" style={{ maxHeight:"300px",  overflowY:"scroll" }}>
  <thead>
    <h3 className="">Late Fees</h3>
    <tr className="">
        {column.map((item, index) => <TableHeadItem item={item}/>)}
     
    </tr>
  </thead>
  <tbody>
   
   {data.map((item, index) => <TableRow item={item} column={column}/>)}
   
    
  
    
  </tbody>
</table>
        </div>
        </Col>
</Row>

    );
};

const TableHeadItem = ({item}) => <th className="bg-info">{item.heading}</th>
const TableRow = ({item, column}) => (
    <tr>
        {column.map((columnItem, index) => {
            
            if(columnItem.button){
                return (
                    <td>
                        <Link
              to={`/payment/${item.fineID}/${item.fineamt}`}
              onClick={columnItem.button.onClick}
            >
              <Button>{columnItem.button.label}</Button>
            </Link>
                    </td>
                  );
            }
            return <td>{item[`${columnItem.value}`]}</td>

        })}
    </tr>
)


export default FeeTableComponent
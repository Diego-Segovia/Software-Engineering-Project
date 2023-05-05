import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import EditBookModal from "./EditBookModal";
import { deleteLoan, approveLoan } from "../utils/utils";

function TableComponent({ data, isRequest, isBook, refreshLoans }) {
  const [editShow, editSetShow] = useState(false);
  const editHandleClose = () => editSetShow(false);
  const editHandleShow = () => editSetShow(true);

  const [loanID, setLoanID] = useState();

  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  let hasCover = false;

  const deletionHandler = async (loanID) => {
    await deleteLoan(loanID);
    refreshLoans();
  };

  const approvalHandler = async (loanID) => {
    await approveLoan(loanID);
    refreshLoans();
  };

  return (
    <>
      <EditBookModal show={editShow} onClose={editHandleClose} />
      {data && data.length > 0 ? (
        <div className="TableComponent mx-4 mt-3 mb-4 card">
          <table class="table table-striped">
            <thead>
              <tr>
                {getHeadings().map((heading) => {
                  return <th key={heading}>{heading}</th>;
                })}
                {isRequest && <th>Transaction</th>}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                hasCover = false;
                return (
                  <tr key={index}>
                    {getHeadings().map((key, index) => {
                      {
                        // Handle book cover image for book data
                      }
                      if (row.Cover && !hasCover) {
                        hasCover = true;
                        return (
                          <td key={row[key]}>
                            <div
                              className="card"
                              style={{ width: "5rem", height: "8rem" }}
                            >
                              <img
                                className="card-img-top rounded h-100"
                                src={row.Cover}
                                alt="Card image cap"
                              ></img>
                            </div>
                          </td>
                        );
                      }
                      return <td key={row[key]}>{row[key]}</td>;
                    })}
                    {
                      // Handle book loan request
                    }
                    {isRequest && (
                      <td>
                        <button
                          type="button"
                          class="btn btn-success btn-sm me-3"
                          onClick={() => approvalHandler(row["Loan ID"])}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          onClick={() => deletionHandler(row["Loan ID"])}
                        >
                          Deny
                        </button>
                      </td>
                    )}
                    {isBook && (
                      <td>
                        <Button className="me-2" onClick={editHandleShow}>
                          Edit
                        </Button>
                        <Button className="me-2 btn-danger">Delete</Button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mx-4 mt-3 mb-4 card">
          <p className="text-center">No data available.</p>
        </div>
      )}
    </>
  );
}
export default TableComponent;

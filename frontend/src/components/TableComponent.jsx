import React from "react";

function TableComponent({ data, isRequest }) {
  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  return (
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
            return (
              <tr key={index}>
                {getHeadings().map((key, index) => {
                  return <td key={row[key]}>{row[key]}</td>;
                })}
                {isRequest && (
                  <td>
                    <button type="button" class="btn btn-success btn-sm me-3">
                      Approve
                    </button>
                    <button type="button" class="btn btn-danger btn-sm">
                      Deny
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;

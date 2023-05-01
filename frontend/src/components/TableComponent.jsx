import React from "react";

function TableComponent({ data }) {
  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  return (
    <div className="TableComponent">
      <table class="table table-striped">
        <thead>
          <tr>
            {getHeadings().map((heading) => {
              return <th key={heading}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {getHeadings().map((key, index) => {
                  return <td key={row[key]}>{row[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;

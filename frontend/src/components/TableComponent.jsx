import React from "react";

function TableComponent({data}) {
	
	const addStrings = (arr) => {
		let sum = "";
		for(const prop in arr){
			sum = sum + " " + prop;
		}
		return sum;
	}
	
	const getHeadings = () => {
    	return Object.keys(data[0]);
	}

	return (
		<div className="TableComponent table-responsive vh-100 min-vh-100">
			<table className="table table-striped table-hover">
					<thead>
						<tr>
						{
							getHeadings().map(heading => {
								return <th key={heading}>{heading}</th>
							})
						}
						</tr>
					
					</thead>
					<tbody>
						{data.map((row, index) => {
							return <tr key={index}>
								
								{getHeadings().map((key, index) => {
									return <td key={row[key]}>{typeof row[key] === typeof [] ? 
									JSON.stringify(Object.values(row[key])).replace(/[\[\]']|:|\"|}|{|firstname|lastname/g,'').replace(/,/g,' ')
									: JSON.stringify(row[key]).slice(0,6) === "\"https" ? 
									<img className="w-50"src={row[key]}/>
									: row[key] }</td>
							})}
						
							</tr>;
						})}
					</tbody>
				</table>
		</div>
	);
}
export default TableComponent;

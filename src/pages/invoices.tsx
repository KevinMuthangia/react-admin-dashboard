import { AgGridReact }  from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Header from "../components/header";
import { mockDataInvoices } from "../lib/mockData/invoces";

const Invoices = () => {
	document.title = "KevMuthangia | Invoices";

	const columnDefs = [
		{ field: 'id' as keyof typeof mockDataInvoices[0], headerName: 'ID', sortable: false, filter: false, flex: 1, headerClass: "text-white"  },
		{ field: 'name' as keyof typeof mockDataInvoices[0], headerName: 'Name', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'email' as keyof typeof mockDataInvoices[0], headerName: 'Email', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'cost' as keyof typeof mockDataInvoices[0], headerName: 'Cost', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'phone' as keyof typeof mockDataInvoices[0], headerName: 'Phone', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'date' as keyof typeof mockDataInvoices[0], headerName: 'Date', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
	  ];
	
	return (
		<div>
			<Header title="invoices" subtitle="List of Invoices Balances" />
			<div className="pt-6 pb-12">
				<div id="invoices-grid" className="ag-theme-alpine">
					<AgGridReact
						rowData={mockDataInvoices}
						columnDefs={columnDefs}
						pagination={true} 
						paginationPageSize={15}
						paginationPageSizeSelector={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Invoices;
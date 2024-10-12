import { AgGridReact }  from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Header from "../components/header"
import { mockDataContacts } from "../lib/mockData/contact";

const Contact = () => {
	document.title = "KevMuthangia | Contact Management";

	const columnDefs = [
		{ field: 'id' as keyof typeof mockDataContacts[0], headerName: 'ID', sortable: false, filter: false, headerClass: "text-white", flex: 1 },
		{ field: 'name' as keyof typeof mockDataContacts[0], headerName: 'Name', sortable: false, filter: false, headerClass: "text-white", flex: 1 },
		{ field: 'age' as keyof typeof mockDataContacts[0], headerName: 'Age', sortable: false, filter: false, headerClass: "text-white", flex: 1},
		{ field: 'email' as keyof typeof mockDataContacts[0], headerName: 'Email', sortable: false, filter: false, headerClass: "text-white", flex: 3 },
		{ field: 'phone' as keyof typeof mockDataContacts[0], headerName: 'Phone', sortable: false, filter: false, headerClass: "text-white", flex: 1 },
		{ field: 'city' as keyof typeof mockDataContacts[0], headerName: 'City', sortable: false, filter: false, headerClass: "text-white", flex: 1 },
		{ field: 'zipCode' as keyof typeof mockDataContacts[0], headerName: 'ZipCode', sortable: false, filter: false, headerClass: "text-white", flex: 1 },
		{ field: 'registrarId' as keyof typeof mockDataContacts[0], headerName: 'Registrar ID', sortable: false, filter: false, headerClass: "text-white", flex: 1 }
	]


	return (
		<div>
			<Header title="contact" subtitle="List of Contacts for Future Reference" />
			<div className="pt-6 pb-12">
				<div id="contact-grid" className="ag-theme-alpine">
					<AgGridReact 
						// dataSource={mockDataContacts}
						rowData={mockDataContacts}
						columnDefs={columnDefs}
						pagination={true} 
						paginationPageSize={15}
						paginationPageSizeSelector={false}
						onGridReady={(params) => params.api.sizeColumnsToFit()}
					/>
				</div>
			</div>
		</div>
	)
}

export default Contact
import { useEffect } from "react";
import { AgGridReact }  from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Header from "../components/header";
import { mockDataTeam } from "../lib/mockData/team";

interface TeamColumnDef {
	field: keyof typeof mockDataTeam[0];
	headerName: string;
	sortable: boolean;
	filter: boolean;
	flex: number;
	headerClass: string;
}


const Team = () => {
	document.title = "KevMuthangia | Manage Team";

	useEffect(() => {
		const accessCells = document.querySelectorAll("#team-grid.ag-theme-alpine .ag-row .ag-cell:last-child")

		accessCells.forEach(cell => {
			const accessLevel = cell.textContent?.toLowerCase()
			if(accessLevel === "admin") {
				cell.classList.add("admin")
				return
			} 
			if(accessLevel === "manager") {
				cell.classList.add("manager")
				return
			}
			if(accessLevel === "user") {
				cell.classList.add("user")
				return
			}
		})

	}, [])

	const columnDefs: TeamColumnDef[] = [
		{ field: 'id', headerName: 'ID', sortable: false, filter: false, flex: 1, headerClass: "text-white"  },
		{ field: 'name', headerName: 'Name', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'email', headerName: 'Email', sortable: false, filter: false, flex: 3, headerClass: "text-white"},
		{ field: 'age' , headerName: 'Age', sortable: false, filter: false, flex: 1, headerClass: "text-white"},
		{ field: 'phone', headerName: 'Phone', sortable: false, filter: false, flex: 2, headerClass: "text-white"},
		{ field: 'access', headerName: 'Access', sortable: false, filter: false, flex: 2, headerClass: "text-white"},
	];

	return (
		<div>
			<Header title="Team" subtitle="managing the team members" />
			<div className="pt-6 pb-12">
				<div id="team-grid" className="ag-theme-alpine">
					<AgGridReact
						rowData={mockDataTeam}
						columnDefs={columnDefs}
						pagination={true} 
						paginationPageSize={15}
						paginationPageSizeSelector={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default Team
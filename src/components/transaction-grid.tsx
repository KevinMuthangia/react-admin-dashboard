import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { mockTransactions } from "../lib/mockData/transaction";

const Transaction = () => {
	return (
		<div >
			<div className="bg-purple dark:bg-purpleDark p-4 rounded mb-2">
				<h5 className='font-medium'>Recent transactions</h5>
			</div>

			<div className="overflow-auto max-h-[330px] flex flex-col space-y-2">
					{
						mockTransactions.map((tx, index	) => (
							<div key={index} className="flex justify-between items-center space-x-2 bg-tertiary dark:bg-tertiaryDark p-4 rounded">
								<div>
									<h5 className="text-secondary font-bold">{tx.txId}</h5>
									<h6>{tx.user}</h6>
								</div>
								<div className="text-[#555] dark:text-[#bbb] text-sm">{tx.date}</div>
								<div title={`$ ${tx.cost}`} className="w-fit bg-secondary py-2 px-4 rounded text-sm font-bold">
									$ {tx.cost}
								</div>
							</div>
						))
						
					}
			</div>
		</div>
	);
}

export default Transaction
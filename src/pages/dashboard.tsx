import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdOutlineDownload } from "react-icons/md";
import { FaCashRegister } from 'react-icons/fa6';
import { FaTrafficLight, FaUserPlus } from 'react-icons/fa';
import Header from '../components/header';
import StatBox from '../components/stats-box';
import ProgressCircle from '../components/progress-circle';
import IconButton from '../components/icon-button';
import Transaction from '../components/transaction-grid';
import Loader from '../components/loader';

const BarComponent = lazy(() => import("../components/charts/bar"));
const LineChartComponent = lazy(() => import("../components/charts/line"));
const PieComponent = lazy(() => import("../components/charts/pie"));	


const Dashboard = () => {
	document.title = "KevMuthangia | Admin";

	return (
		<div className='pb-12'>
			<div className='flex justify-between items-center'>
				<Header title='Dashboard' subtitle='Welcome to the dashboard' />
				<button className='flex items-center py-2 px-3 bg-purple dark:bg-purpleDark uppercase text-sm font-medium rounded space-x-3'>
					<MdOutlineDownload className='text-lg' />
					Download Reports
				</button>
			</div>

			{/* ROW 1 */}
			<div className="grid grid-cols-4 gap-5 pt-6">
				<div className="p-6 bg-tertiary dark:bg-tertiaryDark flex items-center justify-center rounded">
					<StatBox
					title="12,361"
					subtitle="Emails Sent"
					progress={0.75}
					increase="+14%"
					icon={
						<MdEmail className="text-secondary text-xl" />
					}
					/>
				</div>
				<div className="p-6 bg-tertiary dark:bg-tertiaryDark flex items-center justify-center rounded">
					<StatBox
					title="431,225"
					subtitle="Sales Obtained"
					progress={0.50}
					increase="+21%"
					icon={
						<FaCashRegister className="text-secondary text-xl" />
					}
					/>
				</div>
				<div className="px-6 py-8 bg-tertiary dark:bg-tertiaryDark flex items-center justify-center rounded">
					<StatBox
					title="32,441"
					subtitle="New Clients"
					progress={0.30}
					increase="+5%"
					icon={
						<FaUserPlus className="text-secondary text-xl" />
					}
					/>
				</div>
				<div className="p-6 bg-tertiary dark:bg-tertiaryDark flex items-center justify-center rounded">
					<StatBox
					title="1,325,134"
					subtitle="Traffic Received"
					progress={0.80}
					increase="+43%"
					icon={
						<FaTrafficLight className="text-secondary text-xl" />
					}
					/>
				</div>
			</div>

			{/* ROW 2 */}
			<div className='grid grid-cols-3 gap-5 my-8'>
				<Transaction />
				<div className="col-span-2 bg-tertiary dark:bg-tertiaryDark rounded py-6 ">
					<Link to="line">
						<div className='flex justify-between mb-2 px-4'>
							<div>
								<h5 className='font-medium'>Revenue Generated</h5>
								<h3 className='font-semibold text-secondary'>$34,564.67</h3>
							</div>
							<IconButton icon={<MdOutlineDownload className='text-xl text-secondary' />} />
						</div>
						<Suspense fallback={<Loader />}>
							<LineChartComponent height={260} legendPosition='bottom' smooth='smooth' />
						</Suspense>
					</Link>
				</div>
			</div>

			{/* ROW 3 */}
			<div className='grid grid-cols-3 gap-5'>
				<Link to="bar">
					<div className='flex flex-col h-full bg-tertiary dark:bg-tertiaryDark rounded py-4'>
						<h5 className='font-medium mb-4 px-4'>Sales Quantity</h5>
						<Suspense fallback={<Loader />}>
							<BarComponent height={250} legendPosition='bottom' />			
						</Suspense>
					</div>
				</Link>

				<div className="bg-tertiary dark:bg-tertiaryDark rounded p-4"> 
					<h5 className="font-semibold">Campaign</h5>
					<div className="flex flex-col items-center mt-6">
						<ProgressCircle size={125} />
						<h5 className="text-secondary mt-4">
							$48,352 revenue generated
						</h5>
						<p>Includes extra misc expenditures and costs</p>
					</div>
				</div>

				<Link to="pie">
					<div className='flex flex-col bg-tertiary dark:bg-tertiaryDark rounded py-4 h-full'>
						<h5 className='font-medium mb-4 px-4'>Sales Distribution</h5>
						<Suspense fallback={<Loader />}>
							<PieComponent height={250} legendPosition='bottom' />			
						</Suspense>
					</div>
				</Link>
				
			</div>


		</div>
	);
};

export default Dashboard;
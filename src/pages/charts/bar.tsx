import Header from '../../components/header';
import BarComponent from '../../components/charts/bar';


const Bar = () => {
    document.title = "KevMuthangia | Bar Graph";

    return (
        <div>
            <Header title="Bar" subtitle="Simple Bar Chart" />
            <div className="pt-6 pb-12">
				<h4 className='mb-6 text-center font-medium'>Fast Food Sales by Country</h4>
                <BarComponent height={400} showTitle={true} />
            </div>
        </div>
    );
};

export default Bar;

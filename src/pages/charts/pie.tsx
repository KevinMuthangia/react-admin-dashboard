import Header from "../../components/header";
import PieComponent from "../../components/charts/pie";

const Pie = () => {
    document.title = "KevMuthangia | Pie Chart";

    return (
        <div>
            <Header title="Pie" subtitle="Simple Pie Chart" />
            <div className="pt-6 pb-12">
                <h4 className='mb-6 text-center font-medium'>Programming Language Popularity</h4>
                <PieComponent height={400} />
            </div>
        </div>
    );
};

export default Pie;
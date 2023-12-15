import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="container-category">{['DARK CHOCOLATE', 'MILK CHOCOLATE', 'CHOCOLATE SETS', 'OTHERS', 'ALL'].map((category, index) => <Filter key = {index} category = {category}/>)}</div>
    )
}
export default AllCategories;
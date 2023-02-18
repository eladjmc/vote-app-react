import StatisticsChart from "../components/StatisticsChart.component";
import UsersTable from "../components/UsersTable.component";


const Admin = (props) => {
  return <section className="admin-page">
    <h1>Admin Panel</h1>
    <UsersTable {...props}/>
    <StatisticsChart partiesData={props.candidatesList} />
  </section>
};

export default Admin;

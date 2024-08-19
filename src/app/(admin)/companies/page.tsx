import { AddCompanyButton } from "../../components/add-company-button";
import CompanyRow from "../../components/company-rows";
import CompanyTable from "../../components/company-table";
import Header from "../../components/header";
import SearchInput from "../../components/search-input";
import { Status } from "../../components/status-label";
import Toolbar from "../../components/toolbar";



const CompaniesPage = () =>{


    return(
        <>
        <Header>Companies page</Header>
        <Toolbar action={<AddCompanyButton/>}>
            <SearchInput/>
        </Toolbar>
        <CompanyTable>
            <CompanyRow id={1} category={"Products"} status={Status.Pending} promotion={true} company={"Costco"} country={"USA"} joinedDate={"02.12.1998"}/>
        </CompanyTable>
        </>
    )
}

export default CompaniesPage;
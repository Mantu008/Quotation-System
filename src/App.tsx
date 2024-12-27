import "./index.css";
import Navbar from "./cpmponent/Navbar";
import Card from "./cpmponent/Card";
import { Route, Routes } from "react-router-dom";
import Data from "./cpmponent/Data";
import PaymentReceved from "./cpmponent/Transactions/PaymentReceved";
import Sales from "./cpmponent/Transactions/Sales";
import ProformaInvoice from "./cpmponent/Transactions/ProformaInvoice";
import Quotation from "./cpmponent/Transactions/Quotation/Quotation";
import GenerateModelNo from "./cpmponent/Transactions/GenerateModelNo";
import Target from "./cpmponent/Manage/Target";
import Product from "./cpmponent/Manage/Product/Product";
import ModelNumber from "./cpmponent/Manage/ModelNumber/ModelNumber";
import Bank from "./cpmponent/Manage/Bank";
import PaymentMethod from "./cpmponent/Manage/PaymentMethod";
import Category from "./cpmponent/Manage/Category";
import State from "./cpmponent/Manage/State";
import Competitor from "./cpmponent/Manage/Competitor";
import ContectNature from "./cpmponent/Manage/ContectNature";
import Industry from "./cpmponent/Manage/Industry";
import InquirySource from "./cpmponent/Manage/InquirySource";
import Machine from "./cpmponent/Manage/Machine";
import Tax from "./cpmponent/Manage/Tax";
import BusnessInfoOther from "./cpmponent/Manage/BusnessInfoOther";
import DefaultOtherCharge from "./cpmponent/Manage/DefaultOtherCharge";
import Currency from "./cpmponent/Manage/Currency";
import Customer from "./cpmponent/Manage/Customer";
import Contact from "./cpmponent/Manage/Contact";

import PaymentReceivedList from "./cpmponent/Transactions/list/paymentreceivedList";
import SalesList from "./cpmponent/Transactions/list/SalesList";
import SalesOrderList from "./cpmponent/Transactions/list/SalesOrderList";
import ProformaInvoiceList from "./cpmponent/Transactions/list/ProformaInvoiceList";
import QuotationList from "./cpmponent/Transactions/list/QuotationList";

import TargetList from "./cpmponent/Manage/list/TargetList";
import ProductList from "./cpmponent/Manage/list/ProductList";
import ModelNumberList from "./cpmponent/Manage/list/ModelNumberList";
import CustomerList from "./cpmponent/Manage/list/CustomerList";
import ContactList from "./cpmponent/Manage/list/ContactList";
import BankList from "./cpmponent/Manage/list/BankList";
import PaymentMethodList from "./cpmponent/Manage/list/PaymentMethodList";
import CategoryList from "./cpmponent/Manage/list/CategoryList";
import StateList from "./cpmponent/Manage/list/StateList";
import CompetitorList from "./cpmponent/Manage/list/CompetitorList";
import ContactNatureList from "./cpmponent/Manage/list/ContactNatureList";
import IndustryList from "./cpmponent/Manage/list/IndustryList";
import InquirySourceList from "./cpmponent/Manage/list/InquirySourceList";
import MachineList from "./cpmponent/Manage/list/MachineList";
import TaxList from "./cpmponent/Manage/list/TaxList";
import BusinessInfoOthList from "./cpmponent/Manage/list/BusinessInfoOthList";
import DefaultOtherChargeList from "./cpmponent/Manage/list/DefaultOtherChargeList";
import CurrencyList from "./cpmponent/Manage/list/CurrencyList";
import PaymentReceivedList2 from "./cpmponent/Report/List/PaymentReceivedList";
import TargetList2 from "./cpmponent/Report/List/TargetList";

import SalesList2 from "./cpmponent/Report/List/SalesList";
import SalesOrderList2 from "./cpmponent/Report/List/SalesOrderList";
import ProformaInvoiceList2 from "./cpmponent/Report/List/ProformaInvoiceList";
import QuotationList2 from "./cpmponent/Report/List/QuotationList";

import ThanksLetterList from "./cpmponent/Report/List/ThanksLetterList";
import BackupList from "./cpmponent/Configuration/List/BackupList";
import BusinessInfoList from "./cpmponent/Configuration/List/BusinessInfoList";
import GoodsIssuedList from "./cpmponent/Stock/List/GoodsIssuedList";
import GoodsReceivedList from "./cpmponent/Stock/List/GoodsReceivedList";
import SupplierList from "./cpmponent/Stock/List/SupplierList";
import ContactList2 from "./cpmponent/Stock/List/ContactList";
import ProductList2 from "./cpmponent/Stock/List/ProductList";
import UnitList from "./cpmponent/Stock/List/UnitList";
import LocationList from "./cpmponent/Stock/List/LocationList";
import CategoryList2 from "./cpmponent/Stock/List/CategoryList";
import ItemGroupList from "./cpmponent/Stock/List/ItemGroupList";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* //routes for adding data */}
                <Route path="/" element={<Card />} />{" "}
                {/* //routes for Transactions */}
                <Route
                    path="transaction/paymentreceived"
                    element={<PaymentReceved />}
                />
                <Route path="transaction/sales" element={<Sales />} />
                <Route
                    path="transaction/salesorder"
                    element={<SalesOrderList />}
                />
                <Route
                    path="transaction/proformainvoice"
                    element={<ProformaInvoice />}
                />
                <Route path="transaction/quotation" element={<Quotation />} />
                <Route
                    path="transaction/generatemodelno"
                    element={<GenerateModelNo />}
                />
                {/* //routes for Manage */}
                <Route path="manage/target" element={<Target />} />
                <Route path="manage/product" element={<Product />} />
                <Route path="manage/modelnumber" element={<ModelNumber />} />
                <Route path="manage/customer" element={<Customer />} />
                <Route path="manage/contact" element={<Contact />} />
                <Route path="manage/bank" element={<Bank />} />
                <Route
                    path="manage/paymentmethod"
                    element={<PaymentMethod />}
                />
                <Route path="manage/category" element={<Category />} />
                <Route path="manage/state" element={<State />} />
                <Route path="manage/competitor" element={<Competitor />} />
                <Route
                    path="manage/contactnature"
                    element={<ContectNature />}
                />
                <Route path="manage/industry" element={<Industry />} />
                <Route
                    path="manage/inquirysource"
                    element={<InquirySource />}
                />
                <Route path="manage/machine" element={<Machine />} />
                <Route path="manage/tax" element={<Tax />} />
                <Route
                    path="manage/businessinfooth"
                    element={<BusnessInfoOther />}
                />
                <Route
                    path="manage/defaultothercharge"
                    element={<DefaultOtherCharge />}
                />
                <Route path="manage/currency" element={<Currency />} />
                {/* //routes for Report */}
                <Route path="report/paymentreceived" element={<Data />} />
                <Route path="report/target" element={<Data />} />
                <Route path="report/sales" element={<Data />} />
                <Route path="report/salesorder" element={<Data />} />
                <Route path="report/proformainvoice" element={<Data />} />
                <Route path="report/quotation" element={<Data />} />
                <Route path="report/thanksletter" element={<Data />} />
                {/* //routes for Configuration */}
                <Route path="configuration/backup" element={<Data />} />
                <Route path="configuration/businessinfo" element={<Data />} />
                {/* //routes for Stock */}
                <Route path="stock/goodsissued" element={<Data />} />
                <Route path="stock/goodsreceived" element={<Data />} />
                <Route path="stock/supplier" element={<Data />} />
                <Route path="stock/contact" element={<Data />} />
                <Route path="stock/product" element={<Data />} />
                <Route path="stock/unit" element={<Data />} />
                <Route path="stock/location" element={<Data />} />
                <Route path="stock/category" element={<Data />} />
                <Route path="stock/itemgroup" element={<Data />} />
                {/* //routes for lists */}
                <Route
                    path="transaction/paymentreceived/list"
                    element={<PaymentReceivedList />}
                />
                <Route path="transaction/sales/list" element={<SalesList />} />
                <Route
                    path="transaction/salesorder/list"
                    element={<SalesOrderList />}
                />
                <Route
                    path="transaction/proformainvoice/list"
                    element={<ProformaInvoiceList />}
                />
                <Route
                    path="transaction/quotation/list"
                    element={<QuotationList />}
                />
                <Route
                    path="transaction/generatemodelno/list"
                    element={<GenerateModelNo />}
                />
                <Route path="manage/target/list" element={<TargetList />} />
                <Route path="manage/product/list" element={<ProductList />} />
                <Route
                    path="manage/modelnumber/list"
                    element={<ModelNumberList />}
                />
                <Route path="manage/customer/list" element={<CustomerList />} />
                <Route path="manage/contact/list" element={<ContactList />} />
                <Route path="manage/bank/list" element={<BankList />} />
                <Route
                    path="manage/paymentmethod/list"
                    element={<PaymentMethodList />}
                />
                <Route path="manage/category/list" element={<CategoryList />} />
                <Route path="manage/state/list" element={<StateList />} />
                <Route
                    path="manage/competitor/list"
                    element={<CompetitorList />}
                />
                <Route
                    path="manage/contactnature/list"
                    element={<ContactNatureList />}
                />
                <Route path="manage/industry/list" element={<IndustryList />} />
                <Route
                    path="manage/inquirysource/list"
                    element={<InquirySourceList />}
                />
                <Route path="manage/machine/list" element={<MachineList />} />
                <Route path="manage/tax/list" element={<TaxList />} />
                <Route
                    path="manage/businessinfooth/list"
                    element={<BusinessInfoOthList />}
                />
                <Route
                    path="manage/defaultothercharge/list"
                    element={<DefaultOtherChargeList />}
                />
                <Route path="manage/currency/list" element={<CurrencyList />} />
                <Route
                    path="report/paymentreceived/list"
                    element={<PaymentReceivedList2 />}
                />
                <Route path="report/target/list" element={<TargetList2 />} />
                <Route path="report/sales/list" element={<SalesList2 />} />
                <Route
                    path="/report/salesorder/list"
                    element={<SalesOrderList2 />}
                />
                <Route
                    path="report/proformainvoice/list"
                    element={<ProformaInvoiceList2 />}
                />
                <Route
                    path="report/quotation/list"
                    element={<QuotationList2 />}
                />
                <Route
                    path="report/thanksletter/list"
                    element={<ThanksLetterList />}
                />
                <Route
                    path="configuration/backup/list"
                    element={<BackupList />}
                />
                <Route
                    path="configuration/businessinfo/list"
                    element={<BusinessInfoList />}
                />
                <Route
                    path="stock/goodsissued/list"
                    element={<GoodsIssuedList />}
                />
                <Route
                    path="stock/goodsreceived/list"
                    element={<GoodsReceivedList />}
                />
                <Route path="stock/supplier/list" element={<SupplierList />} />
                <Route path="stock/contact/list" element={<ContactList2 />} />
                <Route path="stock/product/list" element={<ProductList2 />} />
                <Route path="stock/unit/list" element={<UnitList />} />
                <Route path="stock/location/list" element={<LocationList />} />
                <Route path="stock/category/list" element={<CategoryList2 />} />
                <Route
                    path="stock/itemgroup/list"
                    element={<ItemGroupList />}
                />
                {/* update data routes */}
                <Route path="/manage/tax/:id" element={<Tax />} />
                <Route path="/manage/currency/:id" element={<Currency />} />
                <Route
                    path="/manage/defaultothercharge/:id"
                    element={<DefaultOtherCharge />}
                />
                <Route
                    path="/manage/businessinfooth/:id"
                    element={<BusnessInfoOther />}
                />
                <Route path="/manage/machine/:id" element={<Machine />} />
                <Route
                    path="/manage/inquirysource/:id"
                    element={<InquirySource />}
                />
                <Route path="/manage/industry/:id" element={<Industry />} />
                <Route
                    path="/manage/contactnature/:id"
                    element={<ContectNature />}
                />
                <Route path="/manage/competitor/:id" element={<Competitor />} />
                <Route path="/manage/state/:id" element={<State />} />
                <Route path="/manage/category/:id" element={<Category />} />
                <Route
                    path="/manage/paymentmethod/:id"
                    element={<PaymentMethod />}
                />
                <Route path="/manage/bank/:id" element={<Bank />} />
                <Route path="/manage/contact/:id" element={<Contact />} />
                <Route path="/manage/customer/:id" element={<Customer />} />
                <Route
                    path="/manage/modelnumber/:id"
                    element={<ModelNumber />}
                />
                <Route path="/manage/product/:id" element={<Product />} />
                <Route path="/manage/target/:id" element={<Target />} />
            </Routes>
        </>
    );
}

export default App;

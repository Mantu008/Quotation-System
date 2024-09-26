import "./index.css";
import Navbar from "./cpmponent/Navbar";
import Card from "./cpmponent/Card";
import { Route, Routes } from "react-router-dom";
import Data from "./cpmponent/Data";
import PaymentReceved from "./cpmponent/Transactions/PaymentReceved";
import Sales from "./cpmponent/Transactions/Sales";
import ProformaInvoice from "./cpmponent/Transactions/PaymentReceved/ProformaInvoice";
import Quotation from "./cpmponent/Transactions/Quotation/Quotation";
import GenerateModelNo from "./cpmponent/Transactions/GenerateModelNo";
import Target from "./cpmponent/Manage/Target";
import Product from "./cpmponent/Manage/Product/Product";
import ModelNumber from "./cpmponent/Manage/ModelNumber/ModelNumber";
import Bank from "./cpmponent/Manage/Bank";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Card />} />{" "}
                <Route path="paymentreceived" element={<PaymentReceved />} />
                <Route path="sales" element={<Sales />} />
                <Route path="salesorder" element={<Data />} />
                <Route path="proformainvoice" element={<ProformaInvoice />} />
                <Route path="quotation" element={<Quotation />} />
                <Route path="generatemodelno." element={<GenerateModelNo />} />
                <Route path="target" element={<Target />} />
                <Route path="product" element={<Product />} />
                <Route path="modelnumber" element={<ModelNumber />} />
                <Route path="customer" element={<Data />} />
                <Route path="contact" element={<Data />} />
                <Route path="bank" element={<Bank />} />
                <Route path="paymentmethod" element={<Data />} />
                <Route path="category" element={<Data />} />
                <Route path="state" element={<Data />} />
                <Route path="competitor" element={<Data />} />
                <Route path="contactnature" element={<Data />} />
                <Route path="industry" element={<Data />} />
                <Route path="industry" element={<Data />} />
                <Route path="inquirysource" element={<Data />} />
                <Route path="machine" element={<Data />} />
                <Route path="tax" element={<Data />} />
                <Route path="businessinfooth." element={<Data />} />
                <Route path="defaultothercharge" element={<Data />} />
                <Route path="currency" element={<Data />} />
                <Route path="paymentreceived" element={<Data />} />
                <Route path="target" element={<Data />} />
                <Route path="sales" element={<Data />} />
                <Route path="salesorder" element={<Data />} />
                <Route path="proformainvoice" element={<Data />} />
                <Route path="quotation" element={<Data />} />
                <Route path="thanksletter" element={<Data />} />
                <Route path="backup" element={<Data />} />
                <Route path="businessinfo" element={<Data />} />
                <Route path="goodsissued" element={<Data />} />
                <Route path="goodsreceived" element={<Data />} />
                <Route path="supplier" element={<Data />} />
                <Route path="contact" element={<Data />} />
                <Route path="product" element={<Data />} />
                <Route path="unit" element={<Data />} />
                <Route path="location" element={<Data />} />
                <Route path="category" element={<Data />} />
                <Route path="itemgroup" element={<Data />} />
            </Routes>
        </>
    );
}

export default App;

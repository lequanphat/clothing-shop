import CustomerServiceItem from "./CustomerServiceItem";

function CustomerService() {
    return (
        <div className="grid grid-cols-3 border-[1px] border-[#ebebeb] mt-[80px]"> 
            <CustomerServiceItem title="FREE SHIPPING" desc="For all order over 99$" icon="customerservice1.webp"/>
             <CustomerServiceItem title="DELIVERY ON TIME" desc="If good have prolems" icon="customerservice2.png"/>
             <CustomerServiceItem title="SECURE PAYMENT" desc="100% secure payment" icon="customerservice3.png"/>
        </div>
    );
}

export default CustomerService;

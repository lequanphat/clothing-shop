import CustomerServiceItem from "./CustomerServiceItem";

function CustomerService() {
    return (
        <div className="grid grid-cols-3 border-[1px] border-[#ebebeb] mt-[80px]"> 
            <CustomerServiceItem title="miễn phí vận chuyển" desc="Tất cả đơn hàng trên 300.000đ" icon="customerservice1.webp"/>
             <CustomerServiceItem title="giao hàng đúng hẹn" desc="Nếu không gặp sự cố ngoài ý muốn" icon="customerservice2.png"/>
             <CustomerServiceItem title="thanh toán an toàn" desc="Thanh toán an toàn 100%" icon="customerservice3.png"/>
        </div>
    );
}

export default CustomerService;

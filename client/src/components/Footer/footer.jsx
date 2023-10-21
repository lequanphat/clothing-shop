import FooterColumn from "./FooterColumn/FooterColumn";
import { faSquareEnvelope, faSquarePhone, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="border-t-[4px] border-t-primary bg-[white] mt-[80px]">
            <div className="w-[85%] mx-auto">
                <div className="grid grid-cols-5">
                   <FooterColumn title="CHĂM SÓC KHÁCH HÀNG" content={[{title:'Facebook'}, {title:'Facebook'}, {title:'Hướng Dẫn Mua Hàng'}, {title:'Hướng Dẫn Bán Hàng'},{title:'Shoppe Xu'}]}/>
                   <FooterColumn title="VỀ SHOPPE" content={[{title:'Facebook'}, {title:'Facebook'}, {title:'Hướng Dẫn Mua Hàng'}, {title:'Hướng Dẫn Bán Hàng'},{title:'Shoppe Xu'}]}/>
                   <FooterColumn title="THANH TOÁN" content={[{title:'MBBank'}, {title:'Techcom Bank'}, {title:'Ví MoMo'}, {title:'BIDV'}]}/>
                   <FooterColumn title="THEO DÕI CHÚNG TÔI TRÊN" content={[{title:'Facebook', icon: faSquarePhone}, {title:'Instagram', icon: faSquareCheck},{title:'LinkedIn', icon: faSquareEnvelope}]}/>
                   <FooterColumn title="ĐỐI TÁC BỀN VỮNG" content={[{title:'LeQuanPhat'}, {title:'NguyenVanA'}, {title:'NguyenVanB'}]}/>
                </div>
                <div className="border-t-[2px] border-t-[#ccc] p-[40px] mt-[20px]">
                    <h1 className=" text-[1.6rem] opacity-[0.4] text-center">2023 Quan Phát. Tất cả bản quyền được bảo lưu.</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

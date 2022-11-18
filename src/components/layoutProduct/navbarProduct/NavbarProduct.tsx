import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function NavbarProduct() {
  return (
    <>
      <div className="pb-[12px]">
        <div className="border-b-[1px] border-b-[#000]">
          <Accordion className="box-shadow-none ">
            <AccordionSummary className="shirt-01">
              <div className="uppercase cursor-pointer font-bold text-[18px]">Áo</div>
            </AccordionSummary>
            <AccordionDetails className="shirt-00">
              <ul className="text-[16px] font-medium">
                <li className="style-hover-menu">Áo</li>
                <li className="style-hover-menu">Áo Phông</li>
                <li className="style-hover-menu">Áo Sweater</li>
                <li className="style-hover-menu">Áo Hoodie</li>
                <li className="style-hover-menu">Áo Khoác</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="pb-[12px]">
        <div className="border-b-[1px] border-b-[#000]">
          <Accordion className="box-shadow-none ">
            <AccordionSummary className="shirt-01">
              <div className="uppercase cursor-pointer font-bold text-[18px]">Quần</div>
            </AccordionSummary>
            <AccordionDetails className="shirt-00">
              <ul className="text-[16px] font-medium">
                <li className="style-hover-menu">Quần</li>
                <li className="style-hover-menu">Quần Bò</li>
                <li className="style-hover-menu">Quần Pants</li>
                <li className="style-hover-menu">Quần Short</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="pb-[12px]">
        <div className="border-b-[1px] border-b-[#000]">
          <Accordion className="box-shadow-none ">
            <AccordionSummary className="shirt-01">
              <div className="uppercase cursor-pointer font-bold text-[18px]">Màu Sắc</div>
            </AccordionSummary>
            <AccordionDetails className="shirt-00">
              <ul className="flex flex-wrap gap-[10px]">
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#3468fa" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#000" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#a52d2a" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#808080" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#133280" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#f8c0cb" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#f34423" }} />
                </li>
                <li className="cursor-pointer">
                  <FiberManualRecordIcon sx={{ color: "#fbef3c" }} />
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="pb-[12px]">
        <div className="border-b-[1px] border-b-[#000]">
          <Accordion className="box-shadow-none ">
            <AccordionSummary className="shirt-01">
              <div className="uppercase cursor-pointer font-bold text-[18px]">Kích Cỡ</div>
            </AccordionSummary>
            <AccordionDetails className="shirt-00">
              <ul className="flex flex-wrap justify-between text-[16px] font-medium">
                <li className="w-[50px] style-hover-menu h-[30px] cursor-pointer inline-flex items-center rounded-[2px] py-[4px] justify-center border-[1px] border-[#777373] outline-[1px] outline-[#dc4146]">
                  <span>S</span>
                </li>
                <li className="w-[50px] style-hover-menu h-[30px] cursor-pointer inline-flex items-center rounded-[2px] py-[4px] justify-center border-[1px] border-[#777373] outline-[1px] outline-[#dc4146]">
                  <span>M</span>
                </li>
                <li className="w-[50px] style-hover-menu h-[30px] cursor-pointer inline-flex items-center rounded-[2px] py-[4px] justify-center border-[1px] border-[#777373] outline-[1px] outline-[#dc4146]">
                  <span>L</span>
                </li>
                <li className="w-[50px] style-hover-menu h-[30px] cursor-pointer inline-flex items-center rounded-[2px] py-[4px] justify-center border-[1px] border-[#777373] outline-[1px] outline-[#dc4146]">
                  <span>XL</span>
                </li>
                <li className="w-[50px] style-hover-menu h-[30px] cursor-pointer inline-flex items-center rounded-[2px] py-[4px] justify-center border-[1px] border-[#777373] outline-[1px] outline-[#dc4146]">
                  <span>XXL</span>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

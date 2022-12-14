import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { currentUser } from "../../store/auth/authSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [value, setValue] = useState("fast");
  const { t } = useTranslation(["common", "user", "order", "product"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [value2, setValue2] = useState("cod");

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value);
  };

  const dataUser = useAppSelector(currentUser);
  const cartUser = dataUser?.cart;
  console.log(`cartUser: `, cartUser);

  const price = cartUser?.reduce(
    (acc: any, curValue: any) => acc + curValue.price * curValue.quantity,
    0
  );


  return (
    <>
      <div className="py-[100px]">
        {cartUser ? (
          <div className="container mx-auto px-[12px]">
            <div className="block xl:flex gap-[50px]">
              {/* FORM THÔNG TIN VẬN CHUYỂN */}
              <form className="xl:basis-[50%]">
                <div className="uppercase pb-[16px] mb-[18px] border-b-[1px] border-b-solid border-b-[#e1e1e1] text-[24px] font-semibold">
                  {t("common:billDetail")}
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:name")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:phoneNumber")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("user:address")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      disabled
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("order:shipping")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="fast" control={<Radio />} label="Nhanh" />
                        <FormControlLabel value="low" control={<Radio />} label="Thường" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("order:payment")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value2}
                        onChange={handleChange2}
                      >
                        <FormControlLabel value="cod" control={<Radio />} label="COD" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <div className="pb-[12px]">
                    <span>{t("order:note")}</span>
                    <span className="text-[#e53637]">*</span>
                  </div>
                  <div className="">
                    <input
                      className="w-full px-[20px] py-[12px] border-[1px] border-solid border-[#e1e1e1] outline-0 text-[14px] bg-white"
                      type="text"
                    />
                  </div>
                </div>
              </form>

              {/* TÍNH GIÁ SẢN PHẨM KHI NGƯỜI DÙNG ĐÃ THÊM SẢN PHẨM TỪ PHIỂN ĐĂNG NHẬP TRƯỚC ĐÓ */}
              <div className="xl:basis-[50%] pt-[30px] xl:pt-0 px-[12px]">
                <div className="uppercase pb-[16px] border-b-[1px] border-b-solid border-b-[#d7d7d7] text-[24px] font-semibold mb-[20px]">
                  {t("order:yourOrder")}
                </div>
                <div className="flex justify-between items-center mb-[18px] font-bold text-[#212529]">
                  <span>{t("product:product")}</span>
                  <span>{t("order:total")}</span>
                </div>
                {/* SẢN PHẨM */}
                {cartUser &&
                  cartUser.map((data: any, index: any) => (
                    <div className="" key={index}>
                      <div className="mb-[20px] pb-[20px] border-b-[1px] border-b-solid border-[#d7d7d7]">
                        <div className="flex justify-between mb-[15px]">
                          <div className="flex flex-wrap">
                            {data.productName} x {data.quantity}. {t("common:variant")}: {data.size}
                            , {data.color}
                          </div>
                          <div>${data.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                {/* GIÁ */}
                <div className="pb-[28px] border-b-[1px] border-b-solid border-b-[#d7d7d7] mb-[20px]">
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:subtotal")}</div>
                    <div className="text-[#e53637] font-bold">${price}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:feeShipping")}</div>
                    <div className="text-[#e53637] font-bold">$5</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[#212529] font-bold">{t("order:total")}</div>
                    <div className="text-[#e53637] font-bold">${price + 5}</div>
                  </div>
                </div>
                <div className="">
                  <button className="py-[12px] bg-black w-[100%]">
                    <span className="text-white font-semibold">{t("order:placeOrder")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container px-[12px] mx-auto">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-[30px]">{t("common:cartNoItem")}</div>
              <Link to="/store/shirt" className="">
                <button className="px-[35px] py-[14px] border-solid border-[1px] border-[#ccc]">
                  <span className="uppercase">{t("common:buyNow")}</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

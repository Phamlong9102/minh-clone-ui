import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import { currentUser } from "../../store/auth/authSlice";
import { useAppSelector } from "../../store/hooks/hooks";
import { useEffect, useState } from "react";
import { dataCart } from "../../store/cart/cartSlice";
import _ from "lodash";

export default function ShoppingCart() {
  const { t } = useTranslation(["order", "common"]);
  const user = useAppSelector(currentUser);
  const currentCartData = useAppSelector(dataCart);
  const cartUser = user?.cart;
  const [finalCart, setFinalCart] = useState<any>([]);

  const newCart = [...currentCartData, cartUser];
  const flatArray = newCart?.flat(Infinity);
  console.log("flatArray: ", flatArray);

  // NHÓM CÁC SẢN PHẨM CÙNG ID, COLOR, SIZE VÀO CÙNG 1 ARRAY KHI USER THÊM SẢN PHẨM VÀO GIỎ HÀNG
  useEffect(() => {
    const groupProductById = _.groupBy(flatArray, (i) => `"${i.id}+${i.color}+${i.size}"`);
    const arrayProduct = Object.values(groupProductById);
    setFinalCart(arrayProduct);
  }, []);

  console.log("finalCart: ", finalCart);

  return (
    <>
      {cartUser?.length > 0 ? (
        <div className="py-[100px] container px-[12px] mx-auto">
          <div className="container px-[12px] mx-auto overflow-x-auto w-full mb-[50px]">
            <table className="min-w-[850px] table w-full">
              <thead className="border-b-[1px] border-b-[#ccc] border-solid table-header-group">
                <tr className="table-row outline-0 align-middle">
                  <th className="table-cell py-[30px] text-left uppercase">{t("order:product")}</th>
                  <th className="table-cell py-[30px] text-left	uppercase">{t("order:quantity")}</th>
                  <th className="table-cell py-[30px] text-right uppercase">{t("order:total")}</th>
                  <th className="table-cell py-[30px] text-right uppercase"></th>
                </tr>
              </thead>
              <tbody className="table-row-group	border-b-[1px] border-b-[#ccc] border-solid">
                {finalCart && finalCart.length > 0 &&
                  finalCart.map((data: any, index: any) => { 
                    let quantity = 0;
                    for (const i of data) {
                      quantity = quantity  + i.quantity;
                    }
                    return (
                    <tr className="table-row outline-0 align-middle" key={index}>
                      <td className="table-cell py-[30px] text-left">
                        <div className="flex gap-[10px]">
                          <div className="flex w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-h-[100px] items-center justify-center ">
                            <img src={data[0].imageUrl} alt="" />
                          </div>
                          <div className="">
                            <p className="text-[15px] font-semibold pb-[10px]">
                              {data[0].productName}
                            </p>
                            <p className="text-[16px] pb-[16px]">
                              {t("common:variant")}: {data[0].size}, {data[0].color}
                            </p>
                            <p className="text-[18px] font-semibold">${data[0].price}</p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell py-[30px] text-right">
                        <div className="w-[80px] flex items-center">
                          <span className="cursor-pointer text-[20px]">
                            <NavigateBeforeIcon sx={{ fontSize: "30px" }} />
                          </span>
                          <div
                            // type="number"
                            className="flex items-center justify-center w-[50px] border-0 text-center text-[16px] pt-[2px]"
                            // value={1}
                          >
                            {quantity}
                          </div>
                          <span className="cursor-pointer text-[20px]">
                            <NavigateNextIcon sx={{ fontSize: "30px" }} />
                          </span>
                        </div>
                      </td>
                      <td className="table-cell py-[30px] text-right font-semibold text-[18px] w-[140px]">
                        ${data[0].price * quantity}
                      </td>
                      <td className="w-[170px] table-cell py-[30px] text-right">
                        <div className="flex justify-center items-center text-center ">
                          <CloseIcon className="cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  )})}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[10px]">
            <Link
              to="/store/shirt"
              className="flex justify-center items-center text-center max-w-[250px] px-[35px] py-[14px] text-[14px] uppercase border-[1px] border-solid border-[#ccc] font-bold tracking-[2px]"
            >
              {t("order:continueShoping")}
            </Link>
            <Link
              to="/checkout"
              className="flex justify-center items-center text-center max-w-[200px] px-[35px] py-[14px] text-[14px] uppercase border-[1px] border-solid border-[#ccc] font-bold tracking-[2px]"
            >
              {t("order:checkout")}
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-[100px] container px-[12px] mx-auto">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-[30px] mb-[48px]">{t("common:noItemCart")}</div>
            <div className="">
              <Link
                to="/store/shirt"
                className="border-[1px] border-solid border-[#ccc] px-[35px] py-[14px]"
              >
                <span className="font-semibold uppercase">{t("common:shopNow")}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

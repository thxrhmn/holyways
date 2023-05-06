import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../config/Api";
import noImage from "../assets/images/no-image.webp";

function DetailDonate() {
  const { id } = useParams()

  let {data: detailFund } = useQuery("detailFundCache", async () => {
    const response = await API.get(`/donation/${id}`)
    return response.data.data
  })

  return (
    <div className="" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="w-[800px] mx-auto pt-10 flex mb-5 justify-between">
        <div className="w-[40%] overflow-hidden object-cover mr-10 rounded-md">
          {detailFund?.thumbnail == "" ? (
            <img
              className="object-cover"
              src={noImage}
              alt=""
            />
          ): (
            <img
              className="object-cover"
              src={detailFund?.thumbnail}
              alt=""
            />
          )}
          
        </div>
        <div className="w-[50%]">
          <h1 className="text-black font-bold text-2xl mb-4">
            {detailFund?.title}
          </h1>
          <div className="flex justify-between mb-2">
            <p className="text-red-700 font-semibold">Rp 25.000.000</p>
            <p className="text-gray-500">gathered from</p>
            <p className="font-semibold" style={{color: "#616161"}}>Rp {detailFund?.goal.toLocaleString('id-ID').replace(/,/g, '.')}</p>
          </div>
          <progress className="progress progress-error w-full" value="40" max="100"></progress>
          <div className="flex justify-between mb-5">
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-black">200</p>
              <p className="" style={{color: "#616161"}}>Donation</p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-black">150</p>
              <p className="" style={{color: "#616161"}}>More Day</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <p className="mb-4 line-clamp-3" style={{color: "#616161"}}>
            {detailFund?.description}
          </p>
          <p className="bg-red-700 text-white font-semibold p-2 rounded-md text-center">Donate</p>
        </div>
      </div>
      <div className="w-[800px] mx-auto pb-20">
        <h1 className="text-black font-bold text-2xl mb-3">List Donation (200)</h1>
        <div>
          <div className="bg-white p-2 mb-3 rounded-md">
            <h1 className="text-black font-semibold">Andi</h1>
            <h1 className="text-black font-semibold">Saturday, 12 April 2021</h1>
            <h1 className="text-red-800 font-semibold">Total : Rp 45.000</h1>
          </div>
          <div className="bg-white p-2 mb-3 rounded-md">
            <h1 className="text-black font-semibold">Andi</h1>
            <h1 className="text-black font-semibold">Saturday, 12 April 2021</h1>
            <h1 className="text-red-800 font-semibold">Total : Rp 45.000</h1>
          </div>
          <div className="bg-white p-2 mb-3 rounded-md">
            <h1 className="text-black font-semibold">Andi</h1>
            <h1 className="text-black font-semibold">Saturday, 12 April 2021</h1>
            <h1 className="text-red-800 font-semibold">Total : Rp 45.000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDonate;
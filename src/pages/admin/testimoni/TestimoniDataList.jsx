import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useAxios } from "@/store/useAxios.js";
import { useEffect, useRef, useState } from "react";

export const TestimoniDataList = () => {
  const [testimonies, setTestimonies] = useState([]);
  const fetchTestimony = useRef(null);
  useEffect(() => {
    if (fetchTestimony.current) return;
    fetchTestimony.current = true;

    (async () => {
      try {
        const response = await useAxios.get("/testimoy");
        const { results } = response.data;
        setTestimonies(results);
      } catch (error) {
        console.log("failed for fetch testimonies");
      }
    })();
  }, []);
  return (
    <>
      <UiTitleAndSearch
        title="Testimonies"
        searchId="q_testimoni"
        placeholder="Cari testimoni"
      />

      <UiList
        datas={testimonies}
        renderItems={(testimoni) => (
          <div className="w-full">
            <p className="text-sm font-semibold ">{testimoni.name}</p>
            <p className="text-xs italic">"{testimoni.desc}"</p>
            <p className="text-xs italic text-right mt-4">- Work as ...</p>
          </div>
        )}>
        <UiListAvatar />
        {/* ===== RENDER_ITEMS ===== */}
      </UiList>
    </>
  );
};

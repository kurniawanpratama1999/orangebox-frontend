import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useRefreshAxios } from "@/store/useRefreshAxios.js";
import { useEffect, useRef, useState } from "react";

export const SosmedDataList = () => {
  const [sosmeds, setSosmeds] = useState([]);
  const fetchSosmed = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await useRefreshAxios.get("/sosmed");

        const { results } = response.data;

        setSosmeds(results);
      } catch (error) {
        console.log("failed for fetching sosmeds");
      }
    })();
  }, []);

  return (
    <>
      <UiTitleAndSearch
        title="Sosmeds"
        searchId="q_sosmed"
        placeholder="Cari sosmed"
      />

      <UiList
        datas={sosmeds}
        renderAvatar={(sosmed) => <UiListAvatar image={sosmed.photo} />}
        renderItems={(sosmed) => (
          <div className="w-full">
            <p className="text-sm font-semibold ">{sosmed.name}</p>
            <p className="text-sm font-semibold ">{sosmed.link}</p>
            <p className="text-xs italic">{sosmed.description}</p>
          </div>
        )}>
        <UiListAvatar />
        {/* ===== RENDER_ITEMS ===== */}
      </UiList>
    </>
  );
};

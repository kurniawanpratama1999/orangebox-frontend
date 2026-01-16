import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";

export const TestimoniDataList = () => {
  const testimonies = useDummiesDataStore.testimonies;
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
          <div className="text-orange-800 w-full">
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

import { BsPencil } from "@react-icons/all-files/bs/BsPencil";
import { UiTitleAndSearch } from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";

export const ProfileDataList = () => {
  const profileUMKM = useDummiesDataStore.umkm;
  return (
    <div>
      <UiTitleAndSearch
        searchId="q_column"
        title="Profile UMKM"
        placeholder="Search profile"
      />

      <section>
        <button className="flex gap-x-2 items-center text-xs px-4 py-1 rounded bg-indigo-400 text-white ml-auto">
          <BsPencil />
          <span>Update</span>
        </button>
      </section>

      <section
        style={{ columnGap: "1.5rem", rowGap: "1.5rem" }}
        className="pt-3 pl-2 columns-sm break-inside-avoid space-y-6">
        {profileUMKM.map((profile, index) => (
          <article
            key={index}
            className="space-y-1 w-full max-w-lg border-l-3 border-orange-400 pl-3">
            <h2 className="font-semibold text-lg text-orange-700">
              {profile.title}
            </h2>
            <p className="text-sm">{profile.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

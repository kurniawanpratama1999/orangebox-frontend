import { BsPencil } from "@react-icons/all-files/bs/BsPencil";
import { UiTitleAndSearch } from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";

export const ProfileFormControl = () => {
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
        style={{ columnGap: "1.5rem" }}
        className="pt-3 pl-2 [column-width:420px] gap-6 break-inside-avoid">
        {profileUMKM.map((profile, index) => (
          <div
            key={index}
            className="w-full max-w-lg mx-auto mb-6 inline-block">
            <label
              htmlFor={profile.title}
              className="w-full font-semibold text-lg text-orange-700 mb-1">
              {profile.title}
            </label>
            {["Description"].includes(profile.title) ? (
              <>
                <textarea
                  name={profile.title}
                  id={profile.title}
                  defaultValue={profile.description}
                  className="w-full text-sm border-0 border-b border-orange-800 pb-1 outline-0"></textarea>
              </>
            ) : (
              <input
                name={profile.title}
                defaultValue={profile.description}
                id={profile.title}
                className="w-full text-sm border-0 border-b border-orange-800 pb-1 outline-0"
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

import {
  UiList,
  UiListAvatar,
  UiTitleAndSearch,
} from "@/components/UiListTable";
import { useDummiesDataStore } from "@/store/dummy";

export const UserDataList = () => {
  const users = useDummiesDataStore.users;
  return (
    <>
      <UiTitleAndSearch
        title="User Aktif"
        searchId="q_user"
        placeholder="Cari user"
      />

      <UiList
        datas={users}
        renderItems={(user) => (
          <div className="w-full">
            <p className="text-sm font-semibold ">{user.name}</p>
            <p className="text-xs italic">{user.username}</p>
          </div>
        )}>
        <UiListAvatar />
        {/* ===== RENDER_ITEMS ===== */}
      </UiList>
    </>
  );
};

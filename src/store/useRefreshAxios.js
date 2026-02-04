import { accessToken } from "./accessToken.js";
import { useAxios } from "./useAxios.js";

export const useRefreshAxios = useAxios;

useRefreshAxios.interceptors.request.use(
  (req) => {
    if (accessToken.current) {
      req.headers.Authorization = `Bearer ${accessToken.current}`;
    }

    return req;
  },
  (err) => Promise.reject(err),
);

let isRefreshing = false;

let failedQue = [];

//
const processQue = (err, token = null) => {
  failedQue.forEach((promp) => {
    if (err) {
      promp.reject(err);
    } else {
      promp.resolve(token);
    }

    failedQue = [];
  });
};

useRefreshAxios.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalReq = err.config;

    if (err.response?.status !== 401) {
      return Promise.reject(err);
    }

    if (originalReq.url.includes("/auth/refresh")) {
      return Promise.reject(err);
    }

    if (originalReq._retry) {
      return Promise.reject(err);
    }

    originalReq._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQue.push({
          resolve: (token) => {
            originalReq.headers.Authorization = `Bearer ${token}`;
            resolve(useRefreshAxios(originalReq));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      const response = await useAxios.post("/auth/refresh");
      const newAccessToken = response.data.results;

      accessToken.current = newAccessToken;
      processQue(null, newAccessToken);

      originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
      return useRefreshAxios(originalReq);
    } catch (e) {
      processQue(e, null);

      accessToken.current = null;
      window.location.href = "/auth";

      return Promise.reject(e);
    } finally {
      isRefreshing = false;
    }
  },
);

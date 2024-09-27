export const typedFetchJSON = async <T>(url: string, options?: RequestInit, params?: any) => {
  try {
    const q = new URLSearchParams();
    if (params) {
      Object.entries(params || {}).forEach(([key, value]) => {
        if (value) {
          q.append(key, value as string);
        }
      });
    }
    const res = await fetch(url + q, options);
    return res?.json() as T;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

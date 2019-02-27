import { post, get } from "./api";

export default {
  article: {
    list: async ({ page, pageSize }) => {
      return await get({
        api: "getArticles",
        model: {
          page,
          pageSize
        }
      });
    }
  }
};

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
    },
    getBySlug: async ({ slug }) => {
      return await get({
        api: "GetArticlesBySlug",
        model: {
          slug
        }
      });
    }
  },
  category: {
    get: async () => {
      return await get({
        api: "GetCategories"
      });
    }
  },
  comment: {
    add: async ({ commenterName, commenterEmail, text, slug } = {}) => {
      return await post({
        api: "AddArticleComment",
        model: {
          commenterName,
          commenterEmail,
          text,
          slug
        }
      });
    },
    list: async ({ slug, page, pageSize } = {}) => {
      return await get({
        api: "GetArticleCommentsBySlug",
        model: {
          slug,
          page,
          pageSize
        }
      });
    }
  }
};

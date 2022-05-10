const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (nodeId) => {
  try {
    const response = await fetch(`${API_END_POINT}/${nodeId || ""}`, {
      method: "GET",
    });
    console.log(response);
    if (response.ok) return response.json();
    else throw new Error("error");
  } catch (e) {
    throw new Error("error");
  }
};

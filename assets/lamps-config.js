/**
 * forward_source 第一段用 gameId 或 workSessionId，不是会话 id。
 * workSessionId 是字符串，不要按数字校验。
 */
window.LAMPS_CONFIG = window.LAMPS_CONFIG || {
  gameId: "",
  workSessionId: "4faccac2-40c2-4bf7-86f7-0901f23d594c",
};
if (window.LAMPS_CONFIG.workSessionId == null) {
  window.LAMPS_CONFIG.workSessionId = "";
}
window.__LAMPS_GAME_ID__ = window.__LAMPS_GAME_ID__ || "";

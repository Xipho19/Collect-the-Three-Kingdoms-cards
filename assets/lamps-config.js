/**
 * forward_source 第一段用 gameId 或 workSessionId，不是会话 id。
 * workSessionId 是字符串，不要按数字校验。
 */
window.LAMPS_CONFIG = window.LAMPS_CONFIG || {
  gameId: "",
  workSessionId: "4ebdb084-cd75-4de5-94c1-f9bb06bf074b",
};
if (window.LAMPS_CONFIG.workSessionId == null) {
  window.LAMPS_CONFIG.workSessionId = "";
}
window.__LAMPS_GAME_ID__ = window.__LAMPS_GAME_ID__ || "";

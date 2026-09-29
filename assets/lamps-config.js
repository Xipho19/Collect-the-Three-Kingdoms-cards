/**
 * forward_source 第一段用 gameId 或 workSessionId，不是会话 id。
 * workSessionId 是字符串，不要按数字校验。
 */
window.LAMPS_CONFIG = window.LAMPS_CONFIG || {
  gameId: "",
  workSessionId: "e92edee6-96ab-4ac0-af08-a131cbc119ab",
};
if (window.LAMPS_CONFIG.workSessionId == null) {
  window.LAMPS_CONFIG.workSessionId = "";
}
window.__LAMPS_GAME_ID__ = window.__LAMPS_GAME_ID__ || "";

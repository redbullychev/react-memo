const baseHost = "https://wedev-api.sky.pro/api/leaderboard";

export async function getLeaders() {
  const response = await fetch(baseHost);
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

export async function postLeader({ name, time }) {
  const response = await fetch(baseHost, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
    }),
  });
  if (response.status === 400) {
    throw new Error("Полученные данные не в формате JSON");
  }
  const data = await response.json();
  return data;
}

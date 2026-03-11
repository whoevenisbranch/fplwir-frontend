import { ManagerDetail } from "@/types/api";

export function calculateDefaultScore(managerDetails: ManagerDetail[]): number {
  const sum = managerDetails.reduce((sum, num) => sum + num.eventPoints, 0);
  return Math.floor(sum / managerDetails.length);
}

export function findTopManager(managerDetails: ManagerDetail[]): ManagerDetail {
  return managerDetails.reduce((maxObj, current) => {
    if (typeof current.eventPoints !== "number") {
      return maxObj;
    }
    return current.eventPoints > maxObj.eventPoints ? current : maxObj;
  });
}

export function generateTopManagerDescription(manager: ManagerDetail): string {
  let chipText = "";
  switch (manager.chipPlayed) {
    case "bb":
      chipText = "bench-boost";
      break;
    case "wc":
      chipText = "wildcard";
      break;
    case "tc":
      chipText = "triple captain";
      break;
    case "fh":
      chipText = "free-hit";
      break;
    default:
      "no chips";
      break;
  }

  let message: string = `${manager.teamName} used ${chipText} to score ${manager.eventPoints} points.`;
  return message;
}

type EmojiName = keyof typeof emojiMap;
const emojiMap = {
  unknown: "❓",
  negative: "☠️",
  dropped: "👻",
  onepointer: "😓",
  blank: "😐",
  ok: "👍",
  return: "😎",
  goodReturn: "🔥",
  highscorer: "👑",
};

export function getEmojiTypeFromPoints(points: number): string {
  let emojiName: EmojiName;
  if (points < 0) {
    emojiName = "negative";
  } else if (points == 0) {
    emojiName = "dropped";
  } else if (points == 1) {
    emojiName = "onepointer";
  } else if (points > 1 && points < 4) {
    emojiName = "blank";
  } else if (points >= 4 && points < 7) {
    emojiName = "ok";
  } else if (points >= 7 && points < 11) {
    emojiName = "return";
  } else if (points >= 11 && points < 16) {
    emojiName = "goodReturn";
  } else if (points >= 16) {
    emojiName = "highscorer";
  } else {
    emojiName = "unknown";
  }

  return emojiMap[emojiName];
}

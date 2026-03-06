interface IPlayerCardProps {
  /** The player position */
  position: string;
  /** The player name to display */
  name: string;
  /** The points to display */
  points: number;
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
} as const;

export default function PlayerCard({
  position,
  name,
  points,
}: IPlayerCardProps) {
  var emojiName: EmojiName;
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

  return (
    <div className="player__card">
      <p className="player__position">{position}</p>
      <p className="player__emoji">{emojiMap[emojiName]}</p>
      <p className="player__name">{name}</p>
      <p className="player__points">{points}</p>
    </div>
  );
}

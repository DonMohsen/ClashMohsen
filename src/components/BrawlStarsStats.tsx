// components/BrawlStarsStats.tsx
import { BrawlStarsPlayerType } from "@/types/data.types"

type Props = {
  data: BrawlStarsPlayerType
}

export default function BrawlStarsStats({ data }: Props) {
  return (
    <div className="space-y-2">
      <p><strong>Level:</strong> {data.expLevel}</p>
      <p><strong>Trophies:</strong> {data.trophies}</p>
      <p><strong>Highest Trophies:</strong> {data.highestTrophies}</p>
      <p><strong>3v3 Victories:</strong> {data["3vs3Victories"]}</p>
      <p><strong>Solo Victories:</strong> {data.soloVictories}</p>
      <p><strong>Duo Victories:</strong> {data.duoVictories}</p>
    </div>
  )
}

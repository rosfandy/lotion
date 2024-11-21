import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

interface AvatarProps {
  name?: string;
  transparent?: boolean;
}

export default function Avatar({
  name = "Anonymous",
  transparent = false,
}: AvatarProps) {
  const avatar = createAvatar(initials, {
    seed: name,
    size: 30,
    radius: 50,
    backgroundType: ["solid"],
    ...(transparent ? { backgroundColor: ["transparent"] } : {}),
    ...(transparent ? { textColor: ["#c0ca33"] } : {}),
  }).toString();

  return <div dangerouslySetInnerHTML={{ __html: avatar }} />;
}

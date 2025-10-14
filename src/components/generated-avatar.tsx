import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant?: "bottts-neutral" | "initials";
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant = "bottts-neutral",
}: GeneratedAvatarProps) => {
  let avatar;
  if (variant === "bottts-neutral") {
    avatar = createAvatar(botttsNeutral, {
      seed: seed,
    });
  } else {
    avatar = createAvatar(initials, {
      seed: seed,
      fontWeight: 500,
      fontSize: 42,
    });
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

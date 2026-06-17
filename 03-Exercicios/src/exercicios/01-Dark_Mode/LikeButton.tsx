import React from "react";

import Button from "./Button";

interface Props{
    onLike: React.MouseEventHandler<HTMLButtonElement>
}

export default function LikeButton({onLike}: Props) {
  return <Button onClick={onLike} >Like BTN</Button>;
}

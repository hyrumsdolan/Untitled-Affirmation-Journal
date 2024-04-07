import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_BIG_DREAM, ADD_LITTLE_DREAMS, ADD_ULTIMATE_GOAL } from "../utils/mutations";

const Button = ({
  type = "button",
  user,
  onClick,
  className = "",
  disabled = false,
  style = {},
  children,
  inputForDBSave = "",
  saveToUser = "",
  navigateTo = "",
  isEnabled = true,
  onMutationCompleted,
  ...rest
}) => {
  const navigate = useNavigate();
  const [addBigDream] = useMutation(ADD_BIG_DREAM);
  const [addLittleDreams] = useMutation(ADD_LITTLE_DREAMS);
  const [addUltimateGoal] = useMutation(ADD_ULTIMATE_GOAL);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    console.log(inputForDBSave)
    if (!isEnabled) {
      return;
    }
    if (saveToUser) {
      if (saveToUser === "bigdream") {
      console.log(user);
      await addBigDream({ variables: { bigDream: inputForDBSave } });
      } else if (saveToUser === "littledreams") {
      await addLittleDreams({ variables: { littleDreams: inputForDBSave } });
      } else if (saveToUser === "ultimategoal") {
      await addUltimateGoal({ variables: { ultimateGoal: inputForDBSave } });
      }
      if (onMutationCompleted) {
        onMutationCompleted();
      }
    } else {
      console.log('Incorrect save route for button');
    }

    

    if (onClick) {
      onClick();
    }

    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  const buttonStyle = {
    borderRadius: "30px",
    padding: "12px 24px",
    border: "none",
    cursor: isEnabled ? "pointer" : "not-allowed",
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    fontSize: "16px",
    ...(isHovered
      ? {
          backgroundColor: "#6F8AA3",
          color: "#ECFFCC",
          transform: "scale(1.05)",
        }
      : {
          backgroundColor: "#8B9CB6",
          color: "#FFFFFF",
        }),
    ...style,
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`button ${className}`}
      disabled={disabled || !isEnabled}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
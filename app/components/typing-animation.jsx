"use client";
import React, { useState, useEffect } from "react";

export default function TypingAnimation({ texts, speed = 70, eraseSpeed = 40, delay = 1200 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];

    if (!isErasing && displayed.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, speed);
    } else if (isErasing && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, eraseSpeed);
    } else if (!isErasing && displayed.length === currentText.length) {
      timeout = setTimeout(() => setIsErasing(true), delay);
    } else if (isErasing && displayed.length === 0) {
      setIsErasing(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isErasing, textIndex, texts, speed, eraseSpeed, delay]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
} 